// /app/api/documents/route.ts

import { NextResponse } from 'next/server';
import { createDocument, getAllDocuments, getDocumentById, updateDocument, getDocumentByPrefix } from '@/lib/model/documentModel';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { MovementType, DocumentStatus } from '@prisma/client';

export async function GET(request: Request) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const prefix = searchParams.get('prefix');

    if (id) {
        const document = await getDocumentById(id);
        return NextResponse.json(document);
    } else if (prefix) {
        const document = await getDocumentByPrefix(prefix);
        return NextResponse.json(document);
    } else {
        const documents = await getAllDocuments();
        return NextResponse.json(documents);
    }
}

export async function POST(request: Request) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    try {
        const body = await request.json();
        const { name, prefix, consecutive, warehouseId, type, status } = body;

        if (!name || !prefix || !warehouseId) {
            return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 });
        }
        if (!Object.values(MovementType).includes(type)) {
            return NextResponse.json({ error: 'Tipo de movimiento inválido' }, { status: 400 });
        }
        if (!Object.values(DocumentStatus).includes(status)) {
            return NextResponse.json({ error: 'Estado de documento inválido' }, { status: 400 });
        }
        if (typeof consecutive !== 'number' || consecutive < 0) {
            return NextResponse.json({ error: 'Consecutivo inválido' }, { status: 400 });
        }

        const document = await createDocument(name, prefix, consecutive, warehouseId, type, status);
        return NextResponse.json(document);
    } catch (error) {
        console.error('Error al crear el documento:', error);
        return NextResponse.json({ error: 'Error al crear el documento' }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    try {
        const body = await request.json();
        const { id, ...data } = body;

        if (!id) {
            return NextResponse.json({ error: 'ID de documento no proporcionado' }, { status: 400 });
        }

        const document = await updateDocument(id, data);
        return NextResponse.json(document);
    } catch (error) {
        console.error('Error al actualizar el documento:', error);
        return NextResponse.json({ error: 'Error al actualizar el documento' }, { status: 500 });
    }
}