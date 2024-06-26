/*
  Warnings:

  - You are about to drop the column `name` on the `Post` table. All the data in the column will be lost.
  - Added the required column `metaDescription_en` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `metaDescription_fr` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_en` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_fr` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "name",
ADD COLUMN     "metaDescription_en" TEXT NOT NULL,
ADD COLUMN     "metaDescription_fr" TEXT NOT NULL,
ADD COLUMN     "name_en" TEXT NOT NULL,
ADD COLUMN     "name_fr" TEXT NOT NULL;
