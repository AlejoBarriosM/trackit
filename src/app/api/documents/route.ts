// /app/api/documents/route.ts

import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
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
        const document = await prisma.document.findUnique({
            where: { id },
            include: { warehouse: true, Consecutive: true }
        });
        return NextResponse.json(document);
    } else {
        const documents = await prisma.document.findMany({
            include: { warehouse: true, Consecutive: true }
        });
        return NextResponse.json(documents);
    }
}

export async function POST(request: Request) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }

    const body = await request.json();
    const { name, prefix, consecutive, warehouseId, type, status } = body;

    try {
        const document = await prisma.document.create({
            data: {
                name,
                prefix,
                consecutive,
                type,
                status,
                warehouse: {
                    connect: { id: warehouseId }
                }
            },
            include: { warehouse: true, Consecutive: true }
        });
        return NextResponse.json(document);
    } catch (error: any) {
        return NextResponse.json({ error: `Error al crear el documento: ${error.message}` }, { status: 500 });
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
        return NextResponse.json({ error: 'Se requiere ID del documento' }, { status: 400 });
    }

    const body = await request.json();
    const { name, prefix, consecutive, warehouseId, type, status } = body;

    try {
        const document = await prisma.document.update({
            where: { id },
            data: {
                name,
                prefix,
                consecutive,
                type,
                status,
                warehouse: {
                    connect: { id: warehouseId }
                }
            },
            include: { warehouse: true, Consecutive: true }
        });
        return NextResponse.json(document);
    } catch (error: any) {
        return NextResponse.json({ error: `Error al actualizar el documento: ${error.message}` }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
        return NextResponse.json({ error: 'Se requiere ID del documento' }, { status: 400 });
    }

    try {
        const document = await prisma.document.delete({
            where: { id }
        });
        return NextResponse.json(document);
    } catch (error: any) {
        return NextResponse.json({ error: `Error al eliminar el documento: ${error.message}` }, { status: 500 });
    }
}