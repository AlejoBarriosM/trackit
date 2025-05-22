// /lib/model/consecutiveModel.ts

import { Consecutive } from '@prisma/client';
import prisma from '@/lib/prisma';

export async function createConsecutive(
    idDocument: string,
    documentId: string,
    movementId: string
): Promise<Consecutive> {
    return prisma.consecutive.create({
        data: {
            idDocument,
            documentId,
            movementId
        },
        include: {
            document: true,
            movement: true
        }
    });
}

export async function updateConsecutive(
    id: string,
    data: Partial<Omit<Consecutive, 'id' | 'createdAt' | 'updatedAt'>>
): Promise<Consecutive> {
    return prisma.consecutive.update({
        where: { id },
        data,
        include: {
            document: true,
            movement: true
        }
    });
}

export async function getAllConsecutives(): Promise<Consecutive[]> {
    return prisma.consecutive.findMany({
        include: {
            document: true,
            movement: true
        }
    });
}

export async function getConsecutiveById(id: string): Promise<Consecutive | null> {
    return prisma.consecutive.findUnique({
        where: { id },
        include: {
            document: true,
            movement: true
        }
    });
}

export async function getConsecutiveByIdDocument(idDocument: string): Promise<Consecutive | null> {
    return prisma.consecutive.findUnique({
        where: { idDocument },
        include: {
            document: true,
            movement: true
        }
    });
}