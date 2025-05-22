// /app/api/consecutives/route.ts

import { NextResponse } from 'next/server';
import { createConsecutive, getAllConsecutives, getConsecutiveById, updateConsecutive, getConsecutiveByIdDocument } from '@/lib/model/consecutiveModel';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';

export async function GET(request: Request) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const idDocument = searchParams.get('idDocument');

    if (id) {
        const consecutive = await getConsecutiveById(id);
        return NextResponse.json(consecutive);
    } else if (idDocument) {
        const consecutive = await getConsecutiveByIdDocument(idDocument);
        return NextResponse.json(consecutive);
    } else {
        const consecutives = await getAllConsecutives();
        return NextResponse.json(consecutives);
    }
}

export async function POST(request: Request) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    try {
        const body = await request.json();
        const { idDocument, documentId, movementId } = body;

        if (!idDocument || !documentId || !movementId) {
            return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 });
        }

        const consecutive = await createConsecutive(idDocument, documentId, movementId);
        return NextResponse.json(consecutive);
    } catch (error) {
        console.error('Error al crear el consecutivo:', error);
        return NextResponse.json({ error: 'Error al crear el consecutivo' }, { status: 500 });
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
            return NextResponse.json({ error: 'ID de consecutivo no proporcionado' }, { status: 400 });
        }

        const consecutive = await updateConsecutive(id, data);
        return NextResponse.json(consecutive);
    } catch (error) {
        console.error('Error al actualizar el consecutivo:', error);
        return NextResponse.json({ error: 'Error al actualizar el consecutivo' }, { status: 500 });
    }
}