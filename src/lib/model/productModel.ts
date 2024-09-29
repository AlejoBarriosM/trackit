import { Product, ProductStatus } from '@prisma/client';
import prisma from '@/lib/prisma';

export async function getProductByRef(ref: string): Promise<Product | null> {
    return prisma.product.findUnique({ where: { ref } });
}

export async function createProduct(
    name: string,
    description: string | null,
    ref: string,
    stock: number,
    price: number,
    cost: number,
    status: ProductStatus = 'ACTIVE'
): Promise<Product> {
    return prisma.product.create({
        data: {
            name,
            description,
            ref,
            stock,
            price,
            cost,
            status,
        },
    });
}

export async function updateProduct(
    id: string,
    data: Partial<Omit<Product, 'id' | 'createdAt' | 'updatedAt'>>
): Promise<Product> {
    return prisma.product.update({
        where: { id },
        data,
    });
}

export async function deleteProduct(id: string): Promise<Product> {
    return prisma.product.delete({ where: { id } });
}

export async function getAllProducts(): Promise<Product[]> {
    return prisma.product.findMany();
}

export async function getProductById(id: string): Promise<Product | null> {
    return prisma.product.findUnique({ where: { id } });
}