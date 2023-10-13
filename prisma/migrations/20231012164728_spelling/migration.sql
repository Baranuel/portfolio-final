/*
  Warnings:

  - You are about to drop the column `ammount` on the `Endorsement` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Endorsement" DROP COLUMN "ammount",
ADD COLUMN     "amount" INTEGER NOT NULL DEFAULT 0;
