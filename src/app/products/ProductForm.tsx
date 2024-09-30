import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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

type ProductFormProps = {
    product: Product | null
    onSubmit: (productData: Omit<Product, 'id'>) => void
    onClose: (hasUnsavedChanges: boolean) => void
}

export default function ProductForm({ product, onSubmit, onClose }: ProductFormProps) {
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
        const productData: Omit<Product, 'id'> = {
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