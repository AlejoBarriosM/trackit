// /app/api/users/route.ts

import { NextResponse } from 'next/server';
import { createUser, getAllUsers, getUserById, updateUser, deleteUser } from '@/lib/model/userModel';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]/route';

export async function GET(request: Request) {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'ADMIN') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (id) {
        const user = await getUserById(id);
        return NextResponse.json(user);
    } else {
        const users = await getAllUsers();
        return NextResponse.json(users);
    }
}

export async function POST(request: Request) {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'ADMIN') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { email, password, name, role, status } = body;

    try {
        const user = await createUser(email, password, name, role, status);
        return NextResponse.json(user);
    } catch (error) {
        return NextResponse.json({ error: 'Error creating user' }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'ADMIN') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { id, ...data } = body;

    try {
        const user = await updateUser(id, data);
        return NextResponse.json(user);
    } catch (error) {
        return NextResponse.json({ error: 'Error updating user' }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'ADMIN') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
        return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    try {
        const user = await deleteUser(id);
        return NextResponse.json(user);
    } catch (error) {
        return NextResponse.json({ error: 'Error deleting user' }, { status: 500 });
    }
}