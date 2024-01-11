-- DropForeignKey
ALTER TABLE "Objective" DROP CONSTRAINT "Objective_projectId_fkey";

-- AddForeignKey
ALTER TABLE "Objective" ADD CONSTRAINT "Objective_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
