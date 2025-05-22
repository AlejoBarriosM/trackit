import { NextResponse } from 'next/server';
import { createUser, getAllUsers, getUserById, updateUser, deleteUser } from '@/lib/model/userModel';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';

export async function GET(request: Request) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (id) {
        if (session.user.id !== id && session.user.role !== 'ADMIN') {
            return NextResponse.json({ error: 'No autorizado para ver este perfil' }, { status: 403 });
        }
        try {
            const user = await getUserById(id);
            if (!user) {
                return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
            }
            return NextResponse.json(user);
        } catch (error) {
            console.error('Error al obtener usuario:', error);
            return NextResponse.json({ error: 'Error al obtener usuario' }, { status: 500 });
        }
    } else if (session.user.role === 'ADMIN') {
        try {
            const users = await getAllUsers();
            return NextResponse.json(users);
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
            return NextResponse.json({ error: 'Error al obtener usuarios' }, { status: 500 });
        }
    } else {
        return NextResponse.json({ error: 'No autorizado para ver todos los usuarios' }, { status: 403 });
    }
}

export async function POST(request: Request) {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'ADMIN') {
        return NextResponse.json({ error: 'No autorizado para crear usuarios' }, { status: 403 });
    }

    const body = await request.json();
    const { email, password, name, role, status } = body;

    try {
        const user = await createUser(email, password, name, role, status);
        return NextResponse.json(user);
    } catch (error: any) {
        console.error('Error al crear usuario:', error);
        return NextResponse.json({ error: `Error al crear usuario: ${error.message}` }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
        return NextResponse.json({ error: 'Se requiere ID de usuario' }, { status: 400 });
    }

    if (session.user.id !== id && session.user.role !== 'ADMIN') {
        return NextResponse.json({ error: 'No autorizado para editar este perfil' }, { status: 403 });
    }

    const body = await request.json();
    const { password, ...data } = body;

    try {
        let updateData = { ...data };
        if (password) {
            updateData.password = password;
        }

        const user = await updateUser(id, updateData);
        return NextResponse.json(user);
    } catch (error: any) {
        console.error('Error al actualizar usuario:', error);
        return NextResponse.json({ error: `Error al actualizar usuario: ${error.message}` }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'ADMIN') {
        return NextResponse.json({ error: 'No autorizado para eliminar usuarios' }, { status: 403 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
        return NextResponse.json({ error: 'Se requiere ID de usuario' }, { status: 400 });
    }

    try {
        const user = await deleteUser(id);
        return NextResponse.json(user);
    } catch (error: any) {
        console.error('Error al eliminar usuario:', error);
        return NextResponse.json({ error: `Error al eliminar usuario: ${error.message}` }, { status: 500 });
    }
}