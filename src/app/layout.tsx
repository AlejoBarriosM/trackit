import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {getServerSession} from "next-auth/next"
import {authOptions} from "@/lib/auth"
import SessionProvider from "@/components/SessionProvider"
import {Navigation} from '@/components/Navigation'
import {ThemeProvider} from "@/components/theme-provider"
import {Toaster} from "@/components/ui/toaster"
import React from "react";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'TrackIt - Sistema de Gestión de Inventario',
    description: 'Gestión eficiente de inventario en múltiples almacenes',
}

export default async function RootLayout({ children }: {
    children: React.ReactNode
}) {
    const session = await getServerSession(authOptions)

    return (
        <html lang="es" suppressHydrationWarning>
        <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <SessionProvider session={session}>
                <Navigation/>
                <main className="container mx-auto mt-8 px-4">
                    {children}
                    <Toaster/>
                </main>
            </SessionProvider>
        </ThemeProvider>
        </body>
        </html>
    )
}