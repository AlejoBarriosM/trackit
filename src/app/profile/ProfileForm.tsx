// /src/app/profile/ProfileForm.tsx

'use client'

import React from 'react'
import { useState } from 'react'
import { User } from '@prisma/client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/hooks/use-toast"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

const profileSchema = z.object({
    name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
    email: z.string().email('Correo electrónico inválido'),
    password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres').optional().or(z.literal('')),
})

type ProfileFormValues = z.infer<typeof profileSchema>

export default function ProfileForm({ user }: { user: User }) {
    const [isLoading, setIsLoading] = useState(false)
    const { toast } = useToast()

    const form = useForm<ProfileFormValues>({
        resolver: zodResolver(profileSchema),
        defaultValues: {
            name: user.name || '',
            email: user.email,
            password: '',
        },
    })

    async function onSubmit(data: ProfileFormValues) {
        setIsLoading(true)
        try {
            const response = await fetch(`/api/users?id=${user.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.error || 'Error al actualizar el perfil')
            }

            toast({
                title: "Perfil actualizado",
                description: "Tu información de perfil ha sido actualizada exitosamente.",
            })
        } catch (error: any) {
            toast({
                title: "Error",
                description: error.message || "Hubo un problema al actualizar tu perfil. Por favor, intenta de nuevo.",
                variant: "destructive",
            })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nombre</FormLabel>
                            <FormControl>
                                <Input placeholder="Tu nombre" {...field} />
                            </FormControl>
                            <FormDescription>
                                Este es tu nombre público. Puede ser tu nombre real o un seudónimo.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Correo electrónico</FormLabel>
                            <FormControl>
                                <Input placeholder="tu@ejemplo.com" {...field} />
                            </FormControl>
                            <FormDescription>
                                Este es tu correo electrónico asociado a la cuenta.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nueva contraseña</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="Nueva contraseña" {...field} />
                            </FormControl>
                            <FormDescription>
                                Deja este campo en blanco si no deseas cambiar tu contraseña.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" disabled={isLoading}>
                    {isLoading ? 'Actualizando...' : 'Actualizar perfil'}
                </Button>
            </form>
        </Form>
    )
}