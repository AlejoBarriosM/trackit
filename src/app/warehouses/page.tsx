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
import { useToast } from "@/hooks/use-toast"

// Importación dinámica del componente WarehouseForm
const WarehouseForm = dynamic(() => import('./WarehouseForm'), { ssr: false })

type Warehouse = {
    id: string
    name: string
    location: string
    status: 'ACTIVE' | 'INACTIVE' | 'ARCHIVED'
}

type SortConfig = {
    key: keyof Warehouse
    direction: 'asc' | 'desc'
}

export default function WarehousesPage() {
    const [warehouses, setWarehouses] = useState<Warehouse[]>([])
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [currentWarehouse, setCurrentWarehouse] = useState<Warehouse | null>(null)
    const [showExitConfirmation, setShowExitConfirmation] = useState(false)
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)
    const [warehouseToDelete, setWarehouseToDelete] = useState<Warehouse | null>(null)
    const [isClient, setIsClient] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [sortConfig, setSortConfig] = useState<SortConfig>({ key: 'name', direction: 'asc' })
    const { toast } = useToast()

    useEffect(() => {
        setIsClient(true)
        fetchWarehouses()
    }, [])

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

    const handleAddWarehouse = async (warehouseData: Omit<Warehouse, 'id'>) => {
        try {
            const response = await fetch('/api/warehouses', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(warehouseData),
            })
            if (!response.ok) throw new Error('No se pudo agregar la bodega')
            await fetchWarehouses()
            setIsDialogOpen(false)
            toast({
                title: "Éxito",
                description: "Bodega agregada correctamente",
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

    const handleEditWarehouse = async (warehouseData: Omit<Warehouse, 'id'>) => {
        if (!currentWarehouse) return

        try {
            const response = await fetch(`/api/warehouses`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: currentWarehouse.id, ...warehouseData }),
            })
            if (!response.ok) throw new Error('No se pudo actualizar la bodega')
            await fetchWarehouses()
            setIsDialogOpen(false)
            setCurrentWarehouse(null)
            toast({
                title: "Éxito",
                description: "Bodega actualizada correctamente",
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

    const handleDeleteWarehouse = async (warehouse: Warehouse) => {
        setWarehouseToDelete(warehouse)
        setShowDeleteConfirmation(true)
    }

    const confirmDeleteWarehouse = async () => {
        if (!warehouseToDelete) return

        try {
            const response = await fetch(`/api/warehouses`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: warehouseToDelete.id, status: 'ARCHIVED' }),
            })
            if (!response.ok) throw new Error('No se pudo archivar la bodega')
            await fetchWarehouses()
            setShowDeleteConfirmation(false)
            setWarehouseToDelete(null)
            toast({
                title: "Éxito",
                description: "Bodega archivada correctamente",
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
            setCurrentWarehouse(null)
        }
    }

    const handleConfirmExit = () => {
        setShowExitConfirmation(false)
        setIsDialogOpen(false)
        setCurrentWarehouse(null)
    }

    const handleSort = (key: keyof Warehouse) => {
        setSortConfig(prevConfig => ({
            key,
            direction: prevConfig.key === key && prevConfig.direction === 'asc' ? 'desc' : 'asc'
        }))
    }

    const filteredAndSortedWarehouses = useMemo(() => {
        return warehouses
            .filter(warehouse =>
                warehouse.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                warehouse.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                warehouse.status.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .sort((a, b) => {
                const aValue = a[sortConfig.key];
                const bValue = b[sortConfig.key];
                if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
                if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
                return 0;
            })
    }, [warehouses, searchTerm, sortConfig])

    if (!isClient) {
        return <div>Cargando...</div>
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Gestión de Bodegas</h1>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                        <Button onClick={() => setCurrentWarehouse(null)}>
                            <PlusCircle className="mr-2 h-4 w-4" /> Agregar Bodega
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>{currentWarehouse ? 'Editar Bodega' : 'Agregar Bodega'}</DialogTitle>
                        </DialogHeader>
                        <WarehouseForm
                            warehouse={currentWarehouse}
                            onSubmit={currentWarehouse ? handleEditWarehouse : handleAddWarehouse}
                            onClose={handleCloseDialog}
                        />
                    </DialogContent>
                </Dialog>
            </div>
            <div className="mb-4">
                <div className="relative">
                    <Input
                        type="text"
                        placeholder="Buscar bodegas..."
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
                        <TableHead onClick={() => handleSort('location')} className="cursor-pointer">
                            Ubicación {sortConfig.key === 'location' && (sortConfig.direction === 'asc' ? <ChevronUp className="inline" /> : <ChevronDown className="inline" />)}
                        </TableHead>
                        <TableHead onClick={() => handleSort('status')} className="cursor-pointer">
                            Estado {sortConfig.key === 'status' && (sortConfig.direction === 'asc' ? <ChevronUp className="inline" /> : <ChevronDown className="inline" />)}
                        </TableHead>
                        <TableHead>Acciones</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredAndSortedWarehouses.map((warehouse) => (
                        <TableRow key={warehouse.id}>
                            <TableCell>{warehouse.name}</TableCell>
                            <TableCell>{warehouse.location}</TableCell>
                            <TableCell>{warehouse.status}</TableCell>
                            <TableCell>
                                <Button variant="ghost" size="sm" onClick={() => {
                                    setCurrentWarehouse(warehouse)
                                    setIsDialogOpen(true)
                                }}>
                                    <Pencil className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="sm" onClick={() => handleDeleteWarehouse(warehouse)}>
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
                        <DialogTitle>¿Estás seguro de que quieres archivar esta bodega?</DialogTitle>
                    </DialogHeader>
                    <p>Esta acción cambiará el estado de la bodega a &#39;Archivado&#39;.</p>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setShowDeleteConfirmation(false)}>Cancelar</Button>
                        <Button onClick={confirmDeleteWarehouse}>Archivar</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}