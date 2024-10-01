// src/app/movements/[id]/page.tsx

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
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useToast } from "@/hooks/use-toast"
import { MovementStatus, MovementType } from '@prisma/client'

type Movement = {
    id?: string
    userId: string
    status: MovementStatus
    totalCost: number
    warehouseId: string
    documentId: string
    type: MovementType
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

type Document = {
    id: string
    name: string
    prefix: string
    type: MovementType
}

type Product = {
    id: string
    name: string
    stock: number
    price: number
}

export default function MovementForm({ params }: { params: { id: string } }) {
    const [movement, setMovement] = useState<Movement>({
        userId: '',
        status: MovementStatus.DRAFT,
        totalCost: 0,
        warehouseId: '',
        documentId: '',
        type: MovementType.IN,
        details: [{ productId: '', quantity: 0, cost: 0, price: 0 }]
    })
    const [warehouses, setWarehouses] = useState<Warehouse[]>([])
    const [documents, setDocuments] = useState<Document[]>([])
    const [products, setProducts] = useState<Product[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const router = useRouter()
    const { toast } = useToast()

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                await Promise.all([
                    fetchWarehouses(),
                    fetchProducts(),
                    params.id !== 'new' ? fetchMovement(params.id) : Promise.resolve()
                ])
            } catch (error) {
                console.error('Error fetching data:', error)
                toast({
                    title: "Error",
                    description: "Hubo un problema al cargar los datos. Por favor, intente de nuevo.",
                    variant: "destructive",
                })
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [params.id])

    const fetchMovement = async (id: string) => {
        try {
            const response = await fetch(`/api/movements?id=${id}`)
            if (!response.ok) throw new Error('No se pudo cargar el movimiento')
            const data = await response.json()
            setMovement(data)
            if (data.warehouseId) {
                await fetchDocuments(data.warehouseId)
            }
        } catch (error) {
            console.error('Error fetching movement:', error)
            toast({
                title: "Error",
                description: "No se pudo cargar el movimiento. Por favor, intente de nuevo.",
                variant: "destructive",
            })
        }
    }

    const fetchWarehouses = async () => {
        try {
            const response = await fetch('/api/warehouses')
            if (!response.ok) throw new Error('No se pudieron cargar las bodegas')
            const data = await response.json()
            setWarehouses(data)
        } catch (error) {
            console.error('Error fetching warehouses:', error)
            toast({
                title: "Error",
                description: "No se pudieron cargar las bodegas. Por favor, intente de nuevo.",
                variant: "destructive",
            })
        }
    }

    const fetchDocuments = async (warehouseId: string) => {
        try {
            const response = await fetch(`/api/documents?warehouseId=${warehouseId}`)
            if (!response.ok) throw new Error('No se pudieron cargar los documentos')
            const data = await response.json()
            setDocuments(data)
        } catch (error) {
            console.error('Error fetching documents:', error)
            toast({
                title: "Error",
                description: "No se pudieron cargar los documentos. Por favor, intente de nuevo.",
                variant: "destructive",
            })
        }
    }

    const fetchProducts = async () => {
        try {
            const response = await fetch('/api/products')
            if (!response.ok) throw new Error('No se pudieron cargar los productos')
            const data = await response.json()
            setProducts(data)
        } catch (error) {
            console.error('Error fetching products:', error)
            toast({
                title: "Error",
                description: "No se pudieron cargar los productos. Por favor, intente de nuevo.",
                variant: "destructive",
            })
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            if (!movement.warehouseId || !movement.documentId) {
                throw new Error('Debe seleccionar una bodega y un documento')
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
                if (movement.type === MovementType.IN && detail.cost < 0) {
                    throw new Error(`El costo no puede ser negativo para el detalle ${index + 1}`)
                }
            })

            const totalCost = movement.details.reduce((sum, detail) => sum + (detail.quantity * (movement.type === MovementType.IN ? detail.cost : detail.price)), 0)

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

    const handleWarehouseChange = (warehouseId: string) => {
        setMovement({ ...movement, warehouseId, documentId: '' })
        fetchDocuments(warehouseId)
    }

    const handleDocumentChange = (documentId: string) => {
        const selectedDocument = documents.find(doc => doc.id === documentId)
        if (selectedDocument) {
            setMovement({ ...movement, documentId, type: selectedDocument.type })
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

    if (isLoading) {
        return <div className="flex justify-center items-center h-screen">Cargando...</div>
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">{params.id === 'new' ? 'Nuevo Movimiento' : 'Editar Movimiento'}</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <Select onValueChange={handleWarehouseChange} value={movement.warehouseId}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Seleccionar Bodega" />
                    </SelectTrigger>
                    <SelectContent>
                        {warehouses.map((warehouse) => (
                            <SelectItem key={warehouse.id} value={warehouse.id}>{warehouse.name}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                <Select onValueChange={handleDocumentChange} value={movement.documentId} disabled={!movement.warehouseId}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Seleccionar Documento" />
                    </SelectTrigger>
                    <SelectContent>
                        {documents.map((document) => (
                            <SelectItem key={document.id} value={document.id}>{`${document.prefix} - ${document.name}`}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                <Select onValueChange={(value) => setMovement({ ...movement, status: value as MovementStatus })} value={movement.status}>
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
                <Button type="button" onClick={addDetail} className="mb-4">Agregar Detalle</Button>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Producto</TableHead>
                            <TableHead>Cantidad</TableHead>
                            {movement.type === MovementType.IN && <TableHead>Costo</TableHead>}
                            <TableHead>Precio</TableHead>
                            <TableHead>Acciones</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {movement.details.map((detail, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    <Select onValueChange={(value) => handleDetailChange(index, 'productId', value)} value={detail.productId}>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Seleccionar Producto" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {products.map((product) => (
                                                <SelectItem key={product.id} value={product.id}>{product.name}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </TableCell>
                                <TableCell>
                                    <Input
                                        type="number"
                                        value={detail.quantity}
                                        onChange={(e) => handleDetailChange(index, 'quantity', parseInt(e.target.value))}
                                        placeholder="Cantidad"
                                    />
                                </TableCell>
                                {movement.type === MovementType.IN && (
                                    <TableCell>
                                        <Input
                                            type="number"
                                            value={detail.cost}
                                            onChange={(e) => handleDetailChange(index, 'cost', parseFloat(e.target.value))}
                                            placeholder="Costo"
                                        />
                                    </TableCell>
                                )}
                                <TableCell>
                                    <Input
                                        type="number"
                                        value={detail.price}
                                        onChange={(e) => handleDetailChange(index, 'price', parseFloat(e.target.value))}
                                        placeholder="Precio"
                                        disabled={movement.type === MovementType.OUT}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Button type="button" onClick={() => removeDetail(index)} variant="destructive">
                                        Eliminar
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Button type="submit" className="mt-4">Guardar Movimiento</Button>
            </form>
        </div>
    )
}