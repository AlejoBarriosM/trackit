// src/app/movements/page.tsx
'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { PlusCircle, Search } from 'lucide-react'
import { useToast } from "@/components/hooks/use-toast"

type Movement = {
    id: string
    userId: string
    status: 'DRAFT' | 'PENDING' | 'APPROVED' | 'REJECTED'
    totalCost: number
    createdAt: string
    updatedAt: string
    document?: {
        name: string
        prefix: string
        consecutive: number
    }
}

export default function MovementsPage() {
    const [movements, setMovements] = useState<Movement[]>([])
    const [searchTerm, setSearchTerm] = useState('')
    const { toast } = useToast()

    useEffect(() => {
        fetchMovements()
    }, [])

    const fetchMovements = async () => {
        try {
            const response = await fetch('/api/movements')
            if (!response.ok) throw new Error('No se pudieron cargar los movimientos')
            const data = await response.json()
            setMovements(data)
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

    const filteredMovements = movements.filter(movement =>
        movement.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movement.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (movement.document?.name.toLowerCase().includes(searchTerm.toLowerCase()) ?? false)
    )

    const getDocumentInfo = (movement: Movement) => {
        if (movement.document) {
            return `${movement.document.prefix}-${movement.document.consecutive}`
        }
        return 'N/A'
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Movimientos</h1>
                <Link href="/movements/new">
                    <Button>
                        <PlusCircle className="mr-2 h-4 w-4" /> Nuevo Movimiento
                    </Button>
                </Link>
            </div>
            <div className="mb-4">
                <Input
                    type="text"
                    placeholder="Buscar por ID, estado o documento"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="max-w-sm"
                />
            </div>
            {movements.length === 0 ? (
                <div className="text-center py-10 bg-gray-100 rounded-lg">
                    <p className="text-xl font-semibold text-gray-600">No hay movimientos registrados</p>
                    <p className="text-gray-500 mt-2">Crea un nuevo movimiento para comenzar</p>
                </div>
            ) : (
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Documento</TableHead>
                            <TableHead>Estado</TableHead>
                            <TableHead>Costo Total</TableHead>
                            <TableHead>Fecha de Creación</TableHead>
                            <TableHead>Acciones</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredMovements.map((movement) => (
                            <TableRow key={movement.id}>
                                <TableCell>{movement.id}</TableCell>
                                <TableCell>{getDocumentInfo(movement)}</TableCell>
                                <TableCell>{movement.status}</TableCell>
                                <TableCell>${movement.totalCost.toFixed(2)}</TableCell>
                                <TableCell>{new Date(movement.createdAt).toLocaleString()}</TableCell>
                                <TableCell>
                                    <Link href={`/movements/${movement.id}`}>
                                        <Button variant="outline">Ver Detalles</Button>
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}
        </div>
    )
}