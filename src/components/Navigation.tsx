'use client'

import React from 'react'
import dynamic from 'next/dynamic';
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { Button } from "@/components/ui/button"
import { useRouter, usePathname } from 'next/navigation'
import { useTheme } from "next-themes"

import { Moon, Sun, Settings } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Navigation() {
    const { data: session } = useSession()
    const router = useRouter()
    const pathname = usePathname()
    const { theme, setTheme } = useTheme()
    const DynamicMoonIcon = dynamic(() => import('lucide-react').then((mod) => mod.Moon), {
        ssr: false,
    });

    const handleSignOut = async () => {
        await signOut({ redirect: false })
        router.push('/')
    }

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
        const isActive = pathname === href
        return (
            <Link
                href={href}
                className={`hover:text-gray-300 ${isActive ? 'font-bold' : ''}`}
                aria-current={isActive ? 'page' : undefined}
            >
                {children}
            </Link>
        )
    }

    return (
        <nav className="bg-gray-800 dark:bg-gray-900 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">
                    TrackIt
                </Link>
                <div className="flex items-center space-x-4">
                    {session ? (
                        <>
                            <NavLink href="/dashboard">Dashboard</NavLink>
                            <NavLink href="/products">Productos</NavLink>
                            <NavLink href="/movements">Movimientos</NavLink>
                            {session.user.role === 'ADMIN' && (
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="sm">
                                            <Settings className="mr-2 h-4 w-4" />
                                            Configuraciones
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem>
                                            <Link href="/users">Usuarios</Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Link href="/warehouses">Bodegas</Link>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            )}
                            <Button onClick={handleSignOut} variant="outline" size="sm">
                                Cerrar sesión
                            </Button>
                        </>
                    ) : (
                        <NavLink href="/login">Iniciar sesión</NavLink>
                    )}
                    <Button variant="ghost" size="icon">
                        <DynamicMoonIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    </Button>
                </div>
            </div>
        </nav>
    )
}