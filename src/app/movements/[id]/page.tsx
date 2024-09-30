// /app/movements/[id]/page.tsx

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
import { MovementType, MovementStatus } from '@prisma/client'

type Movement = {
    id?: string
    warehouseId: string
    type: MovementType
    status: MovementStatus
    totalCost: number
    details: {
        productId: string
        quantity: number
        cost: number
        price: number
    }[]
}

type Warehouse = {
    id: string
    name: string
}

type Product = {
    id: string
    name: string
}

export default function MovementForm({ params }: { params: { id: string } }) {
    const [movement, setMovement] = useState<Movement>({
        warehouseId: '',
        type: MovementType.IN,
        status: MovementStatus.DRAFT,
        totalCost: 0,
        details: []
    })
    const [warehouses, setWarehouses] = useState<Warehouse[]>([])
    const [products, setProducts] = useState<Product[]>([])
    const router = useRouter()
    const { toast } = useToast()

    useEffect(() => {
        if (params.id !== 'new') {
            fetchMovement(params.id)
        }
        fetchWarehouses()
        fetchProducts()
    }, [params.id])

    const fetchMovement = async (id: string) => {
        try {
            const response = await fetch(`/api/movements?id=${id}`)
            if (!response.ok) throw new Error('No se pudo cargar el movimiento')
            const data = await response.json()
            setMovement(data)
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

    const fetchProducts = async () => {
        try {
            const response = await fetch('/api/products')
            if (!response.ok) throw new Error('No se pudieron cargar los productos')
            const data = await response.json()
            setProducts(data)
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
            if (!movement.warehouseId) {
                throw new Error('Debe seleccionar una bodega')
            }
            if (movement.details.length === 0) {
                throw new Error('Debe agregar al menos un detalle al movimiento')
            }

            movement.details.forEach((detail, index) => {
                if (!detail.productId) {
                    throw new Error(`Debe seleccionar un producto para el detalle ${index + 1}`)
                }
                if (detail.quantity <= 0) {
                    throw new Error(`La cantidad debe ser mayor que 0 para el detalle ${index + 1}`)
                }
                if (detail.cost < 0) {
                    throw new Error(`El costo no puede ser negativo para el detalle ${index + 1}`)
                }
                if (detail.price < 0) {
                    throw new Error(`El precio no puede ser negativo para el detalle ${index + 1}`)
                }
            })

            const totalCost = movement.details.reduce((sum, detail) => sum + (detail.quantity * detail.cost), 0)

            const movementData = {
                ...movement,
                totalCost,
            }

            const url = params.id === 'new' ? '/api/movements' : `/api/movements?id=${params.id}`
            const method = params.id === 'new' ? 'POST' : 'PUT'

            const response = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(movementData),
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.error || 'No se pudo guardar el movimiento')
            }

            toast({
                title: "Éxito",
                description: "Movimiento guardado correctamente",
            })
            router.push('/movements')
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

    const handleDetailChange = (index: number, field: string, value: string | number) => {
        const newDetails = [...movement.details]
        newDetails[index] = { ...newDetails[index], [field]: value }
        setMovement({ ...movement, details: newDetails })
    }

    const addDetail = () => {
        setMovement({
            ...movement,
            details: [...movement.details, { productId: '', quantity: 0, cost: 0, price: 0 }]
        })
    }

    const removeDetail = (index: number) => {
        const newDetails = movement.details.filter((_, i) => i !== index)
        setMovement({ ...movement, details: newDetails })
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">{params.id === 'new' ? 'Nuevo Movimiento' : 'Editar Movimiento'}</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <Select onValueChange={(value) => setMovement({ ...movement, warehouseId: value })}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Seleccionar Bodega" />
                    </SelectTrigger>
                    <SelectContent>
                        {warehouses.map((warehouse) => (
                            <SelectItem key={warehouse.id} value={warehouse.id}>{warehouse.name}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                <Select onValueChange={(value) => setMovement({ ...movement, type: value as MovementType })}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Tipo de Movimiento" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value={MovementType.IN}>Entrada</SelectItem>
                        <SelectItem value={MovementType.OUT}>Salida</SelectItem>
                    </SelectContent>
                </Select>

                <Select onValueChange={(value) => setMovement({ ...movement, status: value as MovementStatus })}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Estado" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value={MovementStatus.DRAFT}>Borrador</SelectItem>
                        <SelectItem value={MovementStatus.PENDING}>Pendiente</SelectItem>
                        <SelectItem value={MovementStatus.APPROVED}>Aprobado</SelectItem>
                        <SelectItem value={MovementStatus.REJECTED}>Rechazado</SelectItem>
                    </SelectContent>
                </Select>

                <h2 className="text-xl font-semibold mt-4 mb-2">Detalles del Movimiento</h2>
                {movement.details.map((detail, index) => (
                    <div key={index} className="space-y-2 p-4 border rounded">
                        <Select onValueChange={(value) => handleDetailChange(index, 'productId', value)}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Seleccionar Producto" />
                            </SelectTrigger>
                            <SelectContent>
                                {products.map((product) => (
                                    <SelectItem key={product.id} value={product.id}>{product.name}</SelectItem>
                                    ))}
                            </SelectContent>
                        </Select>
                        <Input
                            type="number"
                            value={detail.quantity}
                            onChange={(e) => handleDetailChange(index, 'quantity', parseInt(e.target.value))}
                            placeholder="Cantidad"
                        />
                        <Input
                            type="number"
                            value={detail.cost}
                            onChange={(e) => handleDetailChange(index, 'cost', parseFloat(e.target.value))}
                            placeholder="Costo"
                        />
                        <Input
                            type="number"
                            value={detail.price}
                            onChange={(e) => handleDetailChange(index, 'price', parseFloat(e.target.value))}
                            placeholder="Precio"
                        />
                        <Button type="button" onClick={() => removeDetail(index)} variant="destructive">
                            Eliminar Detalle
                        </Button>
                    </div>
                ))}
                <Button type="button" onClick={addDetail}>Agregar Detalle</Button>
                <Button type="submit" className="mt-4">Guardar Movimiento</Button>
            </form>
        </div>
    )
}