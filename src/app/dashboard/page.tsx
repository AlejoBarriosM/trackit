import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Dashboard() {
    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Total de Productos</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-4xl font-bold">120</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Movimientos Recientes</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-4xl font-bold">25</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Valor del Inventario</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-4xl font-bold">$50,000</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}