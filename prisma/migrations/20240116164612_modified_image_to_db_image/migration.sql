/*
  Warnings:

  - You are about to drop the `Image` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_mainImageId_mainImageUrl_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_thumbImageId_thumbImageUrl_fkey";

-- DropTable
DROP TABLE "Image";

-- CreateTable
CREATE TABLE "DbImage" (
    "id" SERIAL NOT NULL,
    "name_fr" TEXT NOT NULL,
    "name_en" TEXT NOT NULL,
    "alt_fr" TEXT NOT NULL,
    "alt_en" TEXT NOT NULL,
    "url" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "DbImage_id_key" ON "DbImage"("id");

-- CreateIndex
CREATE UNIQUE INDEX "DbImage_id_url_key" ON "DbImage"("id", "url");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_thumbImageId_thumbImageUrl_fkey" FOREIGN KEY ("thumbImageId", "thumbImageUrl") REFERENCES "DbImage"("id", "url") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_mainImageId_mainImageUrl_fkey" FOREIGN KEY ("mainImageId", "mainImageUrl") REFERENCES "DbImage"("id", "url") ON DELETE RESTRICT ON UPDATE CASCADE;
