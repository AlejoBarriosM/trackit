// /app/movements/page.tsx

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
import { useToast } from "@/hooks/use-toast"

type Movement = {
    id: string
    warehouseId: string
    userId: string
    type: 'IN' | 'OUT'
    status: 'DRAFT' | 'PENDING' | 'APPROVED' | 'REJECTED'
    totalCost: number
    createdAt: string
    updatedAt: string
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
        movement.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movement.status.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Gestión de Movimientos de Inventario</h1>
                <Link href="/movements/new">
                    <Button>
                        <PlusCircle className="mr-2 h-4 w-4" /> Nuevo Movimiento
                    </Button>
                </Link>
            </div>
            <div className="mb-4">
                <div className="relative">
                    <Input
                        type="text"
                        placeholder="Buscar movimientos..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Tipo</TableHead>
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
                            <TableCell>{movement.type === 'IN' ? 'Entrada' : 'Salida'}</TableCell>
                            <TableCell>{movement.status}</TableCell>
                            <TableCell>${movement.totalCost.toFixed(2)}</TableCell>
                            <TableCell>{new Date(movement.createdAt).toLocaleString()}</TableCell>
                            <TableCell>
                                <Link href={`/movements/${movement.id}`}>
                                    <Button variant="outline" size="sm">Ver Detalles</Button>
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}