// /lib/model/documentModel.ts

import { Document, MovementType, DocumentStatus } from '@prisma/client';
import prisma from '@/lib/prisma';

export async function createDocument(
    name: string,
    prefix: string,
    consecutive: number,
    warehouseId: string,
    type: MovementType,
    status: DocumentStatus
): Promise<Document> {
    return prisma.document.create({
        data: {
            name,
            prefix,
            consecutive,
            warehouseId,
            type,
            status
        },
        include: {
            warehouse: true,
            Consecutive: true
        }
    });
}

export async function updateDocument(
    id: string,
    data: Partial<Omit<Document, 'id' | 'createdAt' | 'updatedAt'>>
): Promise<Document> {
    return prisma.document.update({
        where: { id },
        data,
        include: {
            warehouse: true,
            Consecutive: true
        }
    });
}

export async function getAllDocuments(): Promise<Document[]> {
    return prisma.document.findMany({
        include: {
            warehouse: true,
            Consecutive: true
        }
    });
}

export async function getDocumentById(id: string): Promise<Document | null> {
    return prisma.document.findUnique({
        where: { id },
        include: {
            warehouse: true,
            Consecutive: true
        }
    });
}

export async function getDocumentByPrefix(prefix: string): Promise<Document | null> {
    return prisma.document.findFirst({
        where: { prefix },
        include: {
            warehouse: true,
            Consecutive: true
        }
    });
}