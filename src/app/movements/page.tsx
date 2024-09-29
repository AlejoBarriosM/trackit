import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function Movimientos() {
    const movimientos = [
        { id: 1, tipo: 'Entrada', cantidad: 50, producto: 'Producto 1', fecha: '2023-06-01' },
        { id: 2, tipo: 'Salida', cantidad: 25, producto: 'Producto 2', fecha: '2023-06-02' },
        { id: 3, tipo: 'Entrada', cantidad: 100, producto: 'Producto 3', fecha: '2023-06-03' },
    ]

    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-bold">Movimientos</h1>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Tipo</TableHead>
                        <TableHead>Cantidad</TableHead>
                        <TableHead>Producto</TableHead>
                        <TableHead>Fecha</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {movimientos.map((movimiento) => (
                        <TableRow key={movimiento.id}>
                            <TableCell>{movimiento.id}</TableCell>
                            <TableCell>{movimiento.tipo}</TableCell>
                            <TableCell>{movimiento.cantidad}</TableCell>
                            <TableCell>{movimiento.producto}</TableCell>
                            <TableCell>{movimiento.fecha}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}