import { NextResponse } from 'next/server';
import { createWarehouse, getAllWarehouses, getWarehouseById, updateWarehouse, getWarehouseByName } from '@/lib/model/warehouseModel';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]/route';

export async function GET(request: Request) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const name = searchParams.get('name');

    if (id) {
        const warehouse = await getWarehouseById(id);
        return NextResponse.json(warehouse);
    } else if (name) {
        const warehouse = await getWarehouseByName(name);
        return NextResponse.json({ exists: !!warehouse });
    } else {
        const warehouses = await getAllWarehouses();
        return NextResponse.json(warehouses);
    }
}

export async function POST(request: Request) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { name, location, status } = body;

    try {
        const warehouse = await createWarehouse(name, location, status);
        return NextResponse.json(warehouse);
    } catch (error) {
        return NextResponse.json({ error: 'Error creating warehouse' }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { id, ...data } = body;

    try {
        const warehouse = await updateWarehouse(id, data);
        return NextResponse.json(warehouse);
    } catch (error) {
        return NextResponse.json({ error: 'Error updating warehouse' }, { status: 500 });
    }
}