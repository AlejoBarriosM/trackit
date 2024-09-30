// /lib/model/movementModel.ts

import { Movement, MovementType, MovementStatus } from '@prisma/client';
import prisma from '@/lib/prisma';

export async function createMovement(
    warehouseId: string,
    userId: string,
    type: MovementType,
    status: MovementStatus,
    totalCost: number,
    details: { productId: string; quantity: number; cost: number; price: number }[]
): Promise<Movement> {
    return prisma.movement.create({
        data: {
            warehouseId,
            userId,
            type,
            status,
            totalCost,
            MovementDetail: {
                create: details.map(detail => ({
                    productId: detail.productId,
                    quantity: detail.quantity,
                    cost: detail.cost,
                    price: detail.price
                }))
            }
        },
        include: {
            MovementDetail: true,
            warehouse: true,
            user: true,
        }
    });
}

export async function updateMovement(
    id: string,
    data: Partial<Omit<Movement, 'id' | 'createdAt' | 'updatedAt'>>
): Promise<Movement> {
    return prisma.movement.update({
        where: { id },
        data,
        include: {
            MovementDetail: true,
            warehouse: true,
            user: true,
        }
    });
}

export async function getAllMovements(): Promise<Movement[]> {
    return prisma.movement.findMany({
        include: {
            warehouse: true,
            user: true,
            MovementDetail: {
                include: {
                    product: true
                }
            }
        }
    });
}

export async function getMovementById(id: string): Promise<Movement | null> {
    return prisma.movement.findUnique({
        where: { id },
        include: {
            warehouse: true,
            user: true,
            MovementDetail: {
                include: {
                    product: true
                }
            }
        }
    });
}