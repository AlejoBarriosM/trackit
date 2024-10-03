// /src/app/profile/page.tsx

import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { getUserById } from '@/lib/model/userModel'
import React from 'react'
import ProfileForm from './ProfileForm'

export default async function ProfilePage() {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect('/login')
    }

    const user = await getUserById(session.user.id)

    if (!user) {
        return <div>Error: Usuario no encontrado</div>
    }

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-bold mb-6">Perfil de Usuario</h1>
            <ProfileForm user={user} />
        </div>
    )
}