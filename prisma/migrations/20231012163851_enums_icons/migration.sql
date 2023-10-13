-- CreateEnum
CREATE TYPE "EndorsementIcon" AS ENUM ('Hearth', 'Trash', 'Inspire');

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "year" INTEGER NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Endorsement" (
    "id" TEXT NOT NULL,
    "ammount" INTEGER NOT NULL,
    "icon" "EndorsementIcon" NOT NULL,

    CONSTRAINT "Endorsement_pkey" PRIMARY KEY ("id")
);
