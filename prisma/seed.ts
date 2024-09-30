import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
    const adminEmail = 'admin@trackit.com'
    const adminPassword = process.env.PASS_ADMIN?.toString() || 'defaultPassword'

    const existingAdmin = await prisma.user.findUnique({
        where: { email: adminEmail },
    })

    if (!existingAdmin) {
        const hashedPassword = await bcrypt.hash(adminPassword, 10)

        await prisma.user.create({
            data: {
                email: adminEmail,
                password: hashedPassword,
                name: 'Admin User',
                role: 'ADMIN',
                status: 'ACTIVE',
            },
        })

        console.log('Admin user created successfully')
    } else {
        console.log('Admin user already exists')
    }
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })