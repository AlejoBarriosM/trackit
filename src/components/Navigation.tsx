'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { Button } from "@/components/ui/button"
import { useRouter, usePathname } from 'next/navigation'
import { useTheme } from "next-themes"
import { Moon, Sun, User } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

export function Navigation() {
    const { data: session } = useSession()
    const router = useRouter()
    const pathname = usePathname()
    const { theme, setTheme } = useTheme()

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

    function NavigationWrapper() {
        const pathname = usePathname()
        if (pathname === '/login') return null
        return <NavLink href="/login">Iniciar sesión</NavLink>
    }

    return (
        <nav className="bg-gray-800 dark:bg-gray-900 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold flex items-center">
                    <Image src="/inventory.png" alt="TrackIt Logo" width={32} height={32} className="mr-2" />
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
                                        <DropdownMenuItem>
                                            <Link href="/documents">Documentos</Link>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            )}
                        </>
                    ) : (
                        <NavigationWrapper />
                    )}
                    <Button variant="ghost" size="icon" onClick={toggleTheme}>
                        {theme === 'dark' ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
                    </Button>
                    {session && (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Avatar>
                                    <AvatarImage src={session.user.image || ''} alt={session.user.name || ''} />
                                    <AvatarFallback>{session.user.name?.[0] || <User />}</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                    <Link href="/profile">Perfil</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem onSelect={handleSignOut}>
                                    Cerrar sesión
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    )}
                </div>
            </div>
        </nav>
    )
}