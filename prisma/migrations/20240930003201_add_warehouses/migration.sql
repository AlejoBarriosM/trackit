/*
  Warnings:

  - The `status` column on the `Warehouse` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "WarehouseStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'ARCHIVED');

-- AlterTable
ALTER TABLE "Warehouse" DROP COLUMN "status",
ADD COLUMN     "status" "WarehouseStatus" NOT NULL DEFAULT 'ACTIVE';

-- DropEnum
DROP TYPE "StatusWarehouse";
