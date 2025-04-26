-- CreateEnum
CREATE TYPE "CartStatus" AS ENUM ('PENDING', 'DELIVERED', 'CANCELED');

-- AlterTable
ALTER TABLE "ShoppingCart" ADD COLUMN     "status" "CartStatus" NOT NULL DEFAULT 'PENDING';
