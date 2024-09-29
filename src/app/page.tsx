import React from 'react';
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart2, BoxIcon, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
            <main className="container mx-auto px-6 py-12 md:px-8 lg:px-12">
                <section className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
                        Bienvenido a TrackIt
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-8">
                        Tu solución eficiente para la gestión de inventario
                    </p>
                    <Link href="/login">
                        <Button className="text-lg px-6 py-3">
                            Comenzar ahora <ArrowRight className="ml-2" />
                        </Button>
                    </Link>
                </section>

                <section className="grid md:grid-cols-3 gap-8 mb-16">
                    {[
                        {
                            icon: <BoxIcon className="w-12 h-12 text-blue-500" />,
                            title: "Control de Inventario",
                            description: "Gestiona tu stock con precisión y en tiempo real."
                        },
                        {
                            icon: <TrendingUp className="w-12 h-12 text-green-500" />,
                            title: "Análisis de Datos",
                            description: "Obtén insights valiosos para tomar mejores decisiones."
                        },
                        {
                            icon: <BarChart2 className="w-12 h-12 text-purple-500" />,
                            title: "Reportes Detallados",
                            description: "Genera informes completos con un solo clic."
                        }
                    ].map((feature, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex justify-center mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </section>
            </main>
        </div>
    )
}