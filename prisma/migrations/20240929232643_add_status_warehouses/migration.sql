-- CreateEnum
CREATE TYPE "StatusWarehouse" AS ENUM ('ACTIVE', 'INACTIVE', 'ARCHIVED');

-- AlterTable
ALTER TABLE "Warehouse" ADD COLUMN     "status" "StatusWarehouse" NOT NULL DEFAULT 'ACTIVE';
