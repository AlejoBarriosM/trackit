import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/hooks/use-toast"

type Warehouse = {
    id: string
    name: string
    location: string
    status: 'ACTIVE' | 'INACTIVE' | 'ARCHIVED'
}

type WarehouseFormProps = {
    warehouse: Warehouse | null
    onSubmit: (warehouseData: Omit<Warehouse, 'id'>) => void
    onClose: (hasUnsavedChanges: boolean) => void
}

export default function WarehouseForm({ warehouse, onSubmit, onClose }: WarehouseFormProps) {
    const [name, setName] = useState(warehouse?.name || '')
    const [location, setLocation] = useState(warehouse?.location || '')
    const [status, setStatus] = useState<'ACTIVE' | 'INACTIVE' | 'ARCHIVED'>(warehouse?.status || 'ACTIVE')
    const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false)
    const { toast } = useToast()

    useEffect(() => {
        const formData = { name, location, status }
        const originalData = warehouse ? {
            name: warehouse.name,
            location: warehouse.location,
            status: warehouse.status
        } : {
            name: '', location: '', status: 'ACTIVE' as const
        }
        setHasUnsavedChanges(JSON.stringify(formData) !== JSON.stringify(originalData))
    }, [name, location, status, warehouse])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const warehouseData: Omit<Warehouse, 'id'> = {
            name,
            location,
            status
        }
        onSubmit(warehouseData)
        setHasUnsavedChanges(false)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <Label htmlFor="name">Nombre</Label>
                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <Label htmlFor="location">Ubicación</Label>
                <Input id="location" value={location} onChange={(e) => setLocation(e.target.value)} required />
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
                <Button type="submit">{warehouse ? 'Actualizar' : 'Crear'} Bodega</Button>
            </div>
        </form>
    )
}