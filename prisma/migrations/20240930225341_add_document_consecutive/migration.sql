/*
  Warnings:

  - You are about to drop the column `type` on the `Movement` table. All the data in the column will be lost.
  - You are about to drop the column `warehouseId` on the `Movement` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "DocumentStatus" AS ENUM ('ACTIVE', 'INACTIVE');

-- DropForeignKey
ALTER TABLE "Movement" DROP CONSTRAINT "Movement_warehouseId_fkey";

-- AlterTable
ALTER TABLE "Movement" DROP COLUMN "type",
DROP COLUMN "warehouseId";

-- CreateTable
CREATE TABLE "Document" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "prefix" TEXT NOT NULL,
    "consecutive" INTEGER NOT NULL,
    "warehouseId" TEXT NOT NULL,
    "type" "MovementType" NOT NULL,
    "status" "DocumentStatus" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Consecutive" (
    "id" TEXT NOT NULL,
    "idDocument" TEXT NOT NULL,
    "documentId" TEXT NOT NULL,
    "movementId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Consecutive_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Consecutive_idDocument_key" ON "Consecutive"("idDocument");

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_warehouseId_fkey" FOREIGN KEY ("warehouseId") REFERENCES "Warehouse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consecutive" ADD CONSTRAINT "Consecutive_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Document"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consecutive" ADD CONSTRAINT "Consecutive_movementId_fkey" FOREIGN KEY ("movementId") REFERENCES "Movement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
