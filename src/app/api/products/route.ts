import { NextResponse } from 'next/server';
import { createProduct, getAllProducts, getProductById, updateProduct, getProductByRef } from '@/lib/model/productModel';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]/route';

export async function GET(request: Request) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const ref = searchParams.get('ref');

    if (id) {
        const product = await getProductById(id);
        return NextResponse.json(product);
    } else if (ref) {
        const product = await getProductByRef(ref);
        return NextResponse.json({ exists: !!product });
    } else {
        const products = await getAllProducts();
        return NextResponse.json(products);
    }
}

export async function POST(request: Request) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { name, description, ref, stock, price, cost, status } = body;

    try {
        const product = await createProduct(name, description, ref, stock, price, cost, status);
        return NextResponse.json(product);
    } catch (error) {
        return NextResponse.json({ error: 'Error creating product' }, { status: 500 });
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
        const product = await updateProduct(id, data);
        return NextResponse.json(product);
    } catch (error) {
        return NextResponse.json({ error: 'Error updating product' }, { status: 500 });
    }
}