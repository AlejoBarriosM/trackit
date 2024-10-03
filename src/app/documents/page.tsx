// /src/app/documents/page.tsx
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
import { DocumentStatus, MovementType } from '@prisma/client'

type Document = {
    id: string
    name: string
    prefix: string
    consecutive: number
    warehouseId: string
    type: MovementType
    status: DocumentStatus
    createdAt: string
    updatedAt: string
}

export default function DocumentsPage() {
    const [documents, setDocuments] = useState<Document[]>([])
    const [searchTerm, setSearchTerm] = useState('')
    const { toast } = useToast()

    useEffect(() => {
        fetchDocuments()
    }, [])

    const fetchDocuments = async () => {
        try {
            const response = await fetch('/api/documents')
            if (!response.ok) throw new Error('No se pudieron cargar los documentos')
            const data = await response.json()
            setDocuments(data)
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

    const filteredDocuments = documents.filter(document =>
        document.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        document.prefix.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Documentos</h1>
                <Link href="/documents/new">
                    <Button>
                        <PlusCircle className="mr-2 h-4 w-4" /> Nuevo Documento
                    </Button>
                </Link>
            </div>
            <div className="mb-4">
                <Input
                    type="text"
                    placeholder="Buscar por nombre o prefijo"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="max-w-sm"
                />
            </div>
            {documents.length === 0 ? (
                <div className="text-center py-10 bg-gray-100 rounded-lg">
                    <p className="text-xl font-semibold text-gray-600">No hay documentos registrados</p>
                    <p className="text-gray-500 mt-2">Crea un nuevo documento para comenzar</p>
                </div>
            ) : (
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Nombre</TableHead>
                            <TableHead>Prefijo</TableHead>
                            <TableHead>Consecutivo</TableHead>
                            <TableHead>Tipo</TableHead>
                            <TableHead>Estado</TableHead>
                            <TableHead>Acciones</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredDocuments.map((document) => (
                            <TableRow key={document.id}>
                                <TableCell>{document.name}</TableCell>
                                <TableCell>{document.prefix}</TableCell>
                                <TableCell>{document.consecutive}</TableCell>
                                <TableCell>{document.type}</TableCell>
                                <TableCell>{document.status}</TableCell>
                                <TableCell>
                                    <Link href={`/documents/${document.id}`}>
                                        <Button variant="outline">Editar</Button>
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