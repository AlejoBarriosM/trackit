// /app/documents/[id]/page.tsx

'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { DocumentStatus, MovementType } from '@prisma/client'

type Document = {
    id?: string
    name: string
    prefix: string
    consecutive: number
    warehouseId: string
    type: MovementType
    status: DocumentStatus
}

type Warehouse = {
    id: string
    name: string
}

export default function DocumentForm({ params }: { params: { id: string } }) {
    const [document, setDocument] = useState<Document>({
        name: '',
        prefix: '',
        consecutive: 1,
        warehouseId: '',
        type: MovementType.IN,
        status: DocumentStatus.ACTIVE
    })
    const [warehouses, setWarehouses] = useState<Warehouse[]>([])
    const router = useRouter()
    const { toast } = useToast()

    useEffect(() => {
        if (params.id !== 'new') {
            fetchDocument(params.id)
        }
        fetchWarehouses()
    }, [params.id])

    const fetchDocument = async (id: string) => {
        try {
            const response = await fetch(`/api/documents?id=${id}`)
            if (!response.ok) throw new Error('No se pudo cargar el documento')
            const data = await response.json()
            setDocument(data)
        } catch (error) {
            if (error instanceof Error) {
                toast({
                    title: "Error",
                    description: error.message,
                    variant: "destructive",
                })
            }
        }
    }

    const fetchWarehouses = async () => {
        try {
            const response = await fetch('/api/warehouses')
            if (!response.ok) throw new Error('No se pudieron cargar las bodegas')
            const data = await response.json()
            setWarehouses(data)
        } catch (error) {
            if (error instanceof Error) {
                toast({
                    title: "Error",
                    description: error.message,
                    variant: "destructive",
                })
            }
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            if (!document.name || !document.prefix || !document.warehouseId) {
                throw new Error('Todos los campos son obligatorios')
            }

            const url = params.id === 'new' ? '/api/documents' : `/api/documents?id=${params.id}`
            const method = params.id === 'new' ? 'POST' : 'PUT'

            const response = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(document),
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.error || 'No se pudo guardar el documento')
            }

            toast({
                title: "Éxito",
                description: "Documento guardado correctamente",
            })
            router.push('/documents')
        } catch (error) {
            if (error instanceof Error) {
                toast({
                    title: "Error",
                    description: error.message,
                    variant: "destructive",
                })
            }
        }
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">{params.id === 'new' ? 'Nuevo Documento' : 'Editar Documento'}</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                    type="text"
                    placeholder="Nombre del documento"
                    value={document.name}
                    onChange={(e) => setDocument({ ...document, name: e.target.value })}
                />
                <Input
                    type="text"
                    placeholder="Prefijo"
                    value={document.prefix}
                    onChange={(e) => setDocument({ ...document, prefix: e.target.value })}
                />
                <Input
                    type="number"
                    placeholder="Consecutivo"
                    value={document.consecutive}
                    onChange={(e) => setDocument({ ...document, consecutive: parseInt(e.target.value) })}
                />
                <Select onValueChange={(value) => setDocument({ ...document, warehouseId: value })}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Seleccionar Bodega" />
                    </SelectTrigger>
                    <SelectContent>
                        {warehouses.map((warehouse) => (
                            <SelectItem key={warehouse.id} value={warehouse.id}>{warehouse.name}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <Select onValueChange={(value) => setDocument({ ...document, type: value as MovementType })}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Tipo de Movimiento" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value={MovementType.IN}>Entrada</SelectItem>
                        <SelectItem value={MovementType.OUT}>Salida</SelectItem>
                    </SelectContent>
                </Select>
                <Select onValueChange={(value) => setDocument({ ...document, status: value as DocumentStatus })}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Estado" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value={DocumentStatus.ACTIVE}>Activo</SelectItem>
                        <SelectItem value={DocumentStatus.INACTIVE}>Inactivo</SelectItem>
                    </SelectContent>
                </Select>
                <Button type="submit">Guardar Documento</Button>
            </form>
        </div>
    )
}