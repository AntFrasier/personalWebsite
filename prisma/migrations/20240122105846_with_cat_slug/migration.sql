/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Categorie` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Categorie" ALTER COLUMN "slug" SET DEFAULT 'to be replaced';

-- CreateIndex
CREATE UNIQUE INDEX "Categorie_slug_key" ON "Categorie"("slug");
