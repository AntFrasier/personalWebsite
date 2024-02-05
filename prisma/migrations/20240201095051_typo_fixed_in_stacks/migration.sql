/*
  Warnings:

  - You are about to drop the column `stackId` on the `Stack` table. All the data in the column will be lost.
  - Added the required column `imageId` to the `Stack` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Stack" DROP CONSTRAINT "Stack_stackId_fkey";

-- AlterTable
ALTER TABLE "Stack" DROP COLUMN "stackId",
ADD COLUMN     "imageId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Stack" ADD CONSTRAINT "Stack_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "DbImage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
