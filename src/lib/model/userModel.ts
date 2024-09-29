// /lib/model/userModel.ts

import { User, UserRole, UserStatus } from '@prisma/client';
import prisma from '@/lib/prisma';
import bcrypt from 'bcrypt';

export async function getUserByEmail(email: string): Promise<User | null> {
    return prisma.user.findUnique({ where: { email } });
}

export async function createUser(
    email: string,
    password: string,
    name?: string,
    role: UserRole = 'USER',
    status: UserStatus = 'ACTIVE'
): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    return prisma.user.create({
        data: {
            email,
            password: hashedPassword,
            name,
            role,
            status,
        },
    });
}

export async function updateUser(
    id: string,
    data: Partial<Omit<User, 'id' | 'createdAt' | 'updatedAt'>>
): Promise<User> {
    if (data.password) {
        data.password = await bcrypt.hash(data.password, 10);
    }
    return prisma.user.update({
        where: { id },
        data,
    });
}

export async function deleteUser(id: string): Promise<User> {
    return prisma.user.delete({ where: { id } });
}

export async function getAllUsers(): Promise<User[]> {
    return prisma.user.findMany();
}

export async function getUserById(id: string): Promise<User | null> {
    return prisma.user.findUnique({ where: { id } });
}

export async function verifyPassword(user: User, password: string): Promise<boolean> {
    return bcrypt.compare(password, user.password);
}