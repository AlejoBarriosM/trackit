import { Warehouse, WarehouseStatus } from '@prisma/client';
import prisma from '@/lib/prisma';

export async function getWarehouseByName(name: string): Promise<Warehouse | null> {
    return prisma.warehouse.findFirst({ where: { name } });
}

export async function createWarehouse(
    name: string,
    location: string,
    status: WarehouseStatus = 'ACTIVE'
): Promise<Warehouse> {
    return prisma.warehouse.create({
        data: {
            name,
            location,
            status,
        },
    });
}

export async function updateWarehouse(
    id: string,
    data: Partial<Omit<Warehouse, 'id' | 'createdAt' | 'updatedAt'>>
): Promise<Warehouse> {
    return prisma.warehouse.update({
        where: { id },
        data,
    });
}

export async function deleteWarehouse(id: string): Promise<Warehouse> {
    return prisma.warehouse.delete({ where: { id } });
}

export async function getAllWarehouses(): Promise<Warehouse[]> {
    return prisma.warehouse.findMany();
}

export async function getWarehouseById(id: string): Promise<Warehouse | null> {
    return prisma.warehouse.findUnique({ where: { id } });
}