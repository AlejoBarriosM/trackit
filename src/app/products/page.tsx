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
    DialogFooter,
} from "@/components/ui/dialog"
import { PlusCircle, Pencil, Archive } from 'lucide-react'
import { useToast } from "@/hooks/use-toast"

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

type ProductFormData = Omit<Product, 'id' | 'createdAt' | 'updatedAt'>

export default function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([])
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [currentProduct, setCurrentProduct] = useState<Product | null>(null)
    const [showExitConfirmation, setShowExitConfirmation] = useState(false)
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)
    const [productToDelete, setProductToDelete] = useState<Product | null>(null)
    const { toast } = useToast()

    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = async () => {
        try {
            const response = await fetch('/api/products')
            if (!response.ok) throw new Error('Failed to fetch products')
            const data = await response.json()
            setProducts(data)
        } catch (error) {
            toast({
                title: "Error",
                description: "No se pudieron cargar los productos",
                variant: "destructive",
            })
        }
    }

    const handleAddProduct = async (productData: ProductFormData) => {
        try {
            const response = await fetch('/api/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(productData),
            })
            if (!response.ok) throw new Error('Failed to add product')
            await fetchProducts()
            setIsDialogOpen(false)
            toast({
                title: "Éxito",
                description: "Producto agregado correctamente",
            })
        } catch (error) {
            toast({
                title: "Error",
                description: "No se pudo agregar el producto",
                variant: "destructive",
            })
        }
    }

    const handleEditProduct = async (productData: ProductFormData) => {
        if (!currentProduct) return

        try {
            const response = await fetch(`/api/products`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: currentProduct.id, ...productData }),
            })
            if (!response.ok) throw new Error('Failed to update product')
            await fetchProducts()
            setIsDialogOpen(false)
            setCurrentProduct(null)
            toast({
                title: "Éxito",
                description: "Producto actualizado correctamente",
            })
        } catch (error) {
            toast({
                title: "Error",
                description: "No se pudo actualizar el producto",
                variant: "destructive",
            })
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
            if (!response.ok) throw new Error('Failed to archive product')
            await fetchProducts()
            setShowDeleteConfirmation(false)
            setProductToDelete(null)
            toast({
                title: "Éxito",
                description: "Producto archivado correctamente",
            })
        } catch (error) {
            toast({
                title: "Error",
                description: "No se pudo archivar el producto",
                variant: "destructive",
            })
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
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Nombre</TableHead>
                        <TableHead>Referencia</TableHead>
                        <TableHead>Stock</TableHead>
                        <TableHead>Precio</TableHead>
                        <TableHead>Costo</TableHead>
                        <TableHead>Estado</TableHead>
                        <TableHead>Acciones</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {products.map((product) => (
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
                    <p>Esta acción cambiará el estado del producto a 'Archivado'.</p>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setShowDeleteConfirmation(false)}>Cancelar</Button>
                        <Button onClick={confirmDeleteProduct}>Archivar</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

type ProductFormProps = {
    product: Product | null
    onSubmit: (productData: ProductFormData) => void
    onClose: (hasUnsavedChanges: boolean) => void
}

function ProductForm({ product, onSubmit, onClose }: ProductFormProps) {
    const [name, setName] = useState(product?.name || '')
    const [description, setDescription] = useState(product?.description || '')
    const [ref, setRef] = useState(product?.ref || '')
    const [status, setStatus] = useState<'ACTIVE' | 'INACTIVE' | 'ARCHIVED'>(product?.status || 'ACTIVE')
    const [refError, setRefError] = useState('')
    const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false)
    const { toast } = useToast()

    const checkRefUniqueness = async (ref: string) => {
        try {
            const response = await fetch(`/api/products?ref=${ref}`)
            if (!response.ok) throw new Error('Failed to check reference')
            const data = await response.json()
            if (data.exists && !product) {
                setRefError('Esta referencia ya está en uso')
            } else {
                setRefError('')
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "No se pudo verificar la referencia",
                variant: "destructive",
            })
        }
    }

    useEffect(() => {
        if (ref && !product) {
            checkRefUniqueness(ref)
        }
    }, [ref, product])

    useEffect(() => {
        const formData = { name, description, ref, status }
        const originalData = product ? {
            name: product.name,
            description: product.description || '',
            ref: product.ref,
            status: product.status
        } : {
            name: '', description: '', ref: '', status: 'ACTIVE' as const
        }
        setHasUnsavedChanges(JSON.stringify(formData) !== JSON.stringify(originalData))
    }, [name, description, ref, status, product])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (refError) return
        const productData: ProductFormData = {
            name,
            description,
            ref,
            stock: product ? product.stock : 0,
            price: product ? product.price : 0,
            cost: product ? product.cost : 0,
            status
        }
        onSubmit(productData)
        setHasUnsavedChanges(false)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <Label htmlFor="name">Nombre</Label>
                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <Label htmlFor="description">Descripción</Label>
                <Input id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div>
                <Label htmlFor="ref">Referencia</Label>
                <Input
                    id="ref"
                    value={ref}
                    onChange={(e) => setRef(e.target.value)}
                    required
                    disabled={!!product}
                />
                {refError && <p className="text-red-500 text-sm mt-1">{refError}</p>}
            </div>
            <div>
                <Label htmlFor="status">Estado</Label>
                <select
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value as 'ACTIVE' | 'INACTIVE' | 'ARCHIVED')}
                    className="w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                    <option value="ACTIVE">Activo</option>
                    <option value="INACTIVE">Inactivo</option>
                    <option value="ARCHIVED">Archivado</option>
                </select>
            </div>
            <div className="flex justify-between">
                <Button type="button" variant="outline" onClick={() => onClose(hasUnsavedChanges)}>Cancelar</Button>
                <Button type="submit" disabled={!!refError}>{product ? 'Actualizar' : 'Crear'} Producto</Button>
            </div>
        </form>
    )
}