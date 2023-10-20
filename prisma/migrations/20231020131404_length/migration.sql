/*
  Warnings:

  - You are about to alter the column `description` on the `Objective` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(120)`.

*/
-- AlterTable
ALTER TABLE "Objective" ALTER COLUMN "description" SET DATA TYPE VARCHAR(120);
