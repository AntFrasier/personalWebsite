/*
  Warnings:

  - You are about to drop the column `intro_en` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `intro_fr` on the `Post` table. All the data in the column will be lost.
  - Added the required column `content_en` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content_fr` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mainImageUrl` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thumbImageUrl` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "intro_en",
DROP COLUMN "intro_fr",
ADD COLUMN     "content_en" TEXT NOT NULL,
ADD COLUMN     "content_fr" TEXT NOT NULL,
ADD COLUMN     "draft" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "mainImageUrl" TEXT NOT NULL,
ADD COLUMN     "thumbImageUrl" TEXT NOT NULL;
