// /app/products/page.tsx

'use client'

import React, { useState, useEffect, useMemo } from 'react'
import dynamic from 'next/dynamic'
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
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog"
import { PlusCircle, Pencil, Archive, ChevronUp, ChevronDown, Search } from 'lucide-react'
import { useToast } from "@/components/hooks/use-toast"

// Importación dinámica del componente ProductForm
const ProductForm = dynamic(() => import('./ProductForm'), { ssr: false })

type Product = {
    id: string
    name: string
    description: string | null
    ref: string
    stock: number
    price: number
    cost: number
    status: 'ACTIVE' | 'INACTIVE' | 'ARCHIVED'
}

type SortConfig = {
    key: keyof Product
    direction: 'asc' | 'desc'
}

export default function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([])
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [currentProduct, setCurrentProduct] = useState<Product | null>(null)
    const [showExitConfirmation, setShowExitConfirmation] = useState(false)
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)
    const [productToDelete, setProductToDelete] = useState<Product | null>(null)
    const [isClient, setIsClient] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [sortConfig, setSortConfig] = useState<SortConfig>({ key: 'name', direction: 'asc' })
    const { toast } = useToast()

    useEffect(() => {
        setIsClient(true)
        fetchProducts()
    }, [])

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

    const handleAddProduct = async (productData: Omit<Product, 'id'>) => {
        try {
            const response = await fetch('/api/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(productData),
            })
            if (!response.ok) throw new Error('No se pudo agregar el producto')
            await fetchProducts()
            setIsDialogOpen(false)
            toast({
                title: "Éxito",
                description: "Producto agregado correctamente",
            })
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

    const handleEditProduct = async (productData: Omit<Product, 'id'>) => {
        if (!currentProduct) return

        try {
            const response = await fetch(`/api/products`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: currentProduct.id, ...productData }),
            })
            if (!response.ok) throw new Error('No se pudo actualizar el producto')
            await fetchProducts()
            setIsDialogOpen(false)
            setCurrentProduct(null)
            toast({
                title: "Éxito",
                description: "Producto actualizado correctamente",
            })
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

    const handleDeleteProduct = async (product: Product) => {
        if (product.stock !== 0) {
            toast({
                title: "Error",
                description: "No se puede eliminar un producto con stock disponible",
                variant: "destructive",
            })
            return
        }

        setProductToDelete(product)
        setShowDeleteConfirmation(true)
    }

    const confirmDeleteProduct = async () => {
        if (!productToDelete) return

        try {
            const response = await fetch(`/api/products`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: productToDelete.id, status: 'ARCHIVED' }),
            })
            if (!response.ok) throw new Error('No se pudo archivar el producto')
            await fetchProducts()
            setShowDeleteConfirmation(false)
            setProductToDelete(null)
            toast({
                title: "Éxito",
                description: "Producto archivado correctamente",
            })
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

    const handleCloseDialog = (hasUnsavedChanges: boolean) => {
        if (hasUnsavedChanges) {
            setShowExitConfirmation(true)
        } else {
            setIsDialogOpen(false)
            setCurrentProduct(null)
        }
    }

    const handleConfirmExit = () => {
        setShowExitConfirmation(false)
        setIsDialogOpen(false)
        setCurrentProduct(null)
    }

    const handleSort = (key: keyof Product) => {
        setSortConfig(prevConfig => ({
            key,
            direction: prevConfig.key === key && prevConfig.direction === 'asc' ? 'desc' : 'asc'
        }))
    }

    const filteredAndSortedProducts = useMemo(() => {
        return products
            .filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.ref.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.status.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .sort((a, b) => {
                const aValue = a[sortConfig.key] as string | number;
                const bValue = b[sortConfig.key] as string | number;
                if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
                if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
                return 0;
            })
    }, [products, searchTerm, sortConfig])

    if (!isClient) {
        return <div>Cargando...</div>
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Gestión de Productos</h1>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                        <Button onClick={() => setCurrentProduct(null)}>
                            <PlusCircle className="mr-2 h-4 w-4" /> Agregar Producto
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>{currentProduct ? 'Editar Producto' : 'Agregar Producto'}</DialogTitle>
                        </DialogHeader>
                        <ProductForm
                            product={currentProduct}
                            onSubmit={currentProduct ? handleEditProduct : handleAddProduct}
                            onClose={handleCloseDialog}
                        />
                    </DialogContent>
                </Dialog>
            </div>
            <div className="mb-4">
                <div className="relative">
                    <Input
                        type="text"
                        placeholder="Buscar productos..."
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
                        <TableHead onClick={() => handleSort('name')} className="cursor-pointer">
                            Nombre {sortConfig.key === 'name' && (sortConfig.direction === 'asc' ? <ChevronUp className="inline" /> : <ChevronDown className="inline" />)}
                        </TableHead>
                        <TableHead onClick={() => handleSort('ref')} className="cursor-pointer">
                            Referencia {sortConfig.key === 'ref' && (sortConfig.direction === 'asc' ? <ChevronUp className="inline" /> : <ChevronDown className="inline" />)}
                        </TableHead>
                        <TableHead onClick={() => handleSort('stock')} className="cursor-pointer">
                            Stock {sortConfig.key === 'stock' && (sortConfig.direction === 'asc' ? <ChevronUp className="inline" /> : <ChevronDown className="inline" />)}
                        </TableHead>
                        <TableHead onClick={() => handleSort('price')} className="cursor-pointer">
                            Precio {sortConfig.key === 'price' && (sortConfig.direction === 'asc' ? <ChevronUp className="inline" /> : <ChevronDown className="inline" />)}
                        </TableHead>
                        <TableHead onClick={() => handleSort('cost')} className="cursor-pointer">
                            Costo {sortConfig.key === 'cost' && (sortConfig.direction === 'asc' ? <ChevronUp className="inline" /> : <ChevronDown className="inline" />)}
                        </TableHead>
                        <TableHead onClick={() => handleSort('status')} className="cursor-pointer">
                            Estado {sortConfig.key === 'status' && (sortConfig.direction === 'asc' ? <ChevronUp className="inline" /> : <ChevronDown className="inline" />)}
                        </TableHead>
                        <TableHead>Acciones</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredAndSortedProducts.map((product) => (
                        <TableRow key={product.id}>
                            <TableCell>{product.name}</TableCell>
                            <TableCell>{product.ref}</TableCell>
                            <TableCell>{product.stock}</TableCell>
                            <TableCell>${product.price.toFixed(2)}</TableCell>
                            <TableCell>${product.cost.toFixed(2)}</TableCell>
                            <TableCell>{product.status}</TableCell>
                            <TableCell>
                                <Button variant="ghost" size="sm" onClick={() => {
                                    setCurrentProduct(product)
                                    setIsDialogOpen(true)
                                }}>
                                    <Pencil className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="sm" onClick={() => handleDeleteProduct(product)}>
                                    <Archive className="h-4 w-4" />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Dialog open={showExitConfirmation} onOpenChange={setShowExitConfirmation}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>¿Estás seguro de que quieres salir?</DialogTitle>
                    </DialogHeader>
                    <p>Los cambios no guardados se perderán.</p>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setShowExitConfirmation(false)}>Cancelar</Button>
                        <Button onClick={handleConfirmExit}>Salir</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            <Dialog open={showDeleteConfirmation} onOpenChange={setShowDeleteConfirmation}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>¿Estás seguro de que quieres archivar este producto?</DialogTitle>
                    </DialogHeader>
                    <p>Esta acción cambiará el estado del producto a &#39;Archivado&#39;.</p>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setShowDeleteConfirmation(false)}>Cancelar</Button>
                        <Button onClick={confirmDeleteProduct}>Archivar</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}