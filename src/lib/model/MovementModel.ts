// /lib/model/movementModel.ts

import { Movement, MovementStatus } from '@prisma/client';
import prisma from '@/lib/prisma';

export async function createMovement(
    userId: string,
    status: MovementStatus,
    totalCost: number,
    details: { productId: string; quantity: number; cost: number; price: number }[]
): Promise<Movement> {
    return prisma.movement.create({
        data: {
            userId,
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
            user: true,
        }
    });
}

export async function getAllMovements(): Promise<Movement[]> {
    return prisma.movement.findMany({
        include: {
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
            user: true,
            MovementDetail: {
                include: {
                    product: true
                }
            }
        }
    });
}