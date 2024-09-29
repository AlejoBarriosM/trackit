'use client'

import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { PlusCircle, Pencil, Trash2 } from 'lucide-react'
import { useToast } from "@/hooks/use-toast"


type User = {
    id: string
    name: string
    email: string
    role: 'ADMIN' | 'USER'
    status: 'ACTIVE' | 'INACTIVE'
}

type UserFormData = Omit<User, 'id'> & {
    password?: string
}

export default function UsersPage() {
    const [users, setUsers] = useState<User[]>([])
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [currentUser, setCurrentUser] = useState<User | null>(null)
    const { toast } = useToast()

    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
        try {
            const response = await fetch('/api/users')
            if (!response.ok) throw new Error('Failed to fetch users')
            const data = await response.json()
            setUsers(data)
        } catch (error) {
            toast({
                title: "Error",
                description: "No se pudieron cargar los usuarios",
                variant: "destructive",
            })
        }
    }

    const handleAddUser = async (userData: UserFormData) => {
        try {
            const response = await fetch('/api/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData),
            })
            if (!response.ok) throw new Error('Failed to add user')
            await fetchUsers()
            setIsDialogOpen(false)
            toast({
                title: "Éxito",
                description: "Usuario agregado correctamente",
            })
        } catch (error) {
            toast({
                title: "Error",
                description: "No se pudo agregar el usuario",
                variant: "destructive",
            })
        }
    }

    const handleEditUser = async (userData: UserFormData) => {
        if (!currentUser) return

        try {
            const response = await fetch(`/api/users`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: currentUser.id, ...userData }),
            })
            if (!response.ok) throw new Error('Failed to update user')
            await fetchUsers()
            setIsDialogOpen(false)
            setCurrentUser(null)
            toast({
                title: "Éxito",
                description: "Usuario actualizado correctamente",
            })
        } catch (error) {
            toast({
                title: "Error",
                description: "No se pudo actualizar el usuario",
                variant: "destructive",
            })
        }
    }

    const handleDeleteUser = async (id: string) => {
        if (confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
            try {
                const response = await fetch(`/api/users?id=${id}`, {
                    method: 'DELETE',
                })
                if (!response.ok) throw new Error('Failed to delete user')
                await fetchUsers()
                toast({
                    title: "Éxito",
                    description: "Usuario eliminado correctamente",
                })
            } catch (error) {
                toast({
                    title: "Error",
                    description: "No se pudo eliminar el usuario",
                    variant: "destructive",
                })
            }
        }
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Gestión de Usuarios</h1>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                        <Button onClick={() => setCurrentUser(null)}>
                            <PlusCircle className="mr-2 h-4 w-4" /> Agregar Usuario
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>{currentUser ? 'Editar Usuario' : 'Agregar Usuario'}</DialogTitle>
                        </DialogHeader>
                        <UserForm user={currentUser} onSubmit={currentUser ? handleEditUser : handleAddUser} />
                    </DialogContent>
                </Dialog>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Nombre</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Rol</TableHead>
                        <TableHead>Estado</TableHead>
                        <TableHead>Acciones</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.role}</TableCell>
                            <TableCell>{user.status}</TableCell>
                            <TableCell>
                                <Button variant="ghost" size="sm" onClick={() => {
                                    setCurrentUser(user)
                                    setIsDialogOpen(true)
                                }}>
                                    <Pencil className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="sm" onClick={() => handleDeleteUser(user.id)}>
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

type UserFormProps = {
    user: User | null
    onSubmit: (userData: UserFormData) => void
}

function UserForm({ user, onSubmit }: UserFormProps) {
    const [name, setName] = useState(user?.name || '')
    const [email, setEmail] = useState(user?.email || '')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState<'ADMIN' | 'USER'>(user?.role || 'USER')
    const [status, setStatus] = useState<'ACTIVE' | 'INACTIVE'>(user?.status || 'ACTIVE')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const userData: UserFormData = { name, email, role, status }
        if (password) {
            userData.password = password
        }
        onSubmit(userData)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <Label htmlFor="name">Nombre</Label>
                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
                <Label htmlFor="password">{user ? 'Nueva Contraseña (dejar en blanco para no cambiar)' : 'Contraseña'}</Label>
                <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} {...(user ? {} : { required: true })} />
            </div>
            <div>
                <Label htmlFor="role">Rol</Label>
                <select
                    id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value as 'ADMIN' | 'USER')}
                    className="w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                    <option value="USER">Usuario</option>
                    <option value="ADMIN">Administrador</option>
                </select>
            </div>
            <div>
                <Label htmlFor="status">Estado</Label>
                <select
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value as 'ACTIVE' | 'INACTIVE')}
                    className="w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                    <option value="ACTIVE">Activo</option>
                    <option value="INACTIVE">Inactivo</option>
                </select>
            </div>
            <Button type="submit">{user ? 'Actualizar' : 'Crear'} Usuario</Button>
        </form>
    )
}