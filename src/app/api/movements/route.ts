// /app/api/movements/route.ts

import { NextResponse } from 'next/server';
import { createMovement, getAllMovements, getMovementById, updateMovement } from '@/lib/model/MovementModel';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]/route';
import { MovementType, MovementStatus } from '@prisma/client';

export async function GET(request: Request) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (id) {
        const movement = await getMovementById(id);
        return NextResponse.json(movement);
    } else {
        const movements = await getAllMovements();
        return NextResponse.json(movements);
    }
}

export async function POST(request: Request) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    try {
        const body = await request.json();
        const { warehouseId, type, status, totalCost, details } = body;

        if (!warehouseId) {
            return NextResponse.json({ error: 'Se requiere el ID de la bodega' }, { status: 400 });
        }
        if (!type || !Object.values(MovementType).includes(type)) {
            return NextResponse.json({ error: 'Tipo de movimiento inválido' }, { status: 400 });
        }
        if (!status || !Object.values(MovementStatus).includes(status)) {
            return NextResponse.json({ error: 'Estado de movimiento inválido' }, { status: 400 });
        }
        if (!Array.isArray(details) || details.length === 0) {
            return NextResponse.json({ error: 'Se requiere al menos un detalle de movimiento' }, { status: 400 });
        }
        if (typeof totalCost !== 'number' || totalCost < 0) {
            return NextResponse.json({ error: 'Costo total inválido' }, { status: 400 });
        }

        for (const detail of details) {
            if (!detail.productId || typeof detail.quantity !== 'number' || detail.quantity <= 0 ||
                typeof detail.cost !== 'number' || detail.cost < 0 ||
                typeof detail.price !== 'number' || detail.price < 0) {
                return NextResponse.json({ error: 'Detalle de movimiento inválido' }, { status: 400 });
            }
        }

        const movement = await createMovement(warehouseId, session.user.id, type, status, totalCost, details);
        return NextResponse.json(movement);
    } catch (error) {
        console.error('Error al crear el movimiento:', error);
        return NextResponse.json({ error: 'Error al crear el movimiento' }, { status: 500 });
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
            return NextResponse.json({ error: 'ID de movimiento no proporcionado' }, { status: 400 });
        }

        const movement = await updateMovement(id, data);
        return NextResponse.json(movement);
    } catch (error) {
        console.error('Error al actualizar el movimiento:', error);
        return NextResponse.json({ error: 'Error al actualizar el movimiento' }, { status: 500 });
    }
}