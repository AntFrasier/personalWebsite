/*
  Warnings:

  - You are about to drop the `ImagesOnPosts` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[id,url]` on the table `Image` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `mainImageId` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thumbImageId` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ImagesOnPosts" DROP CONSTRAINT "ImagesOnPosts_imageId_fkey";

-- DropForeignKey
ALTER TABLE "ImagesOnPosts" DROP CONSTRAINT "ImagesOnPosts_postId_fkey";

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "mainImageId" INTEGER NOT NULL,
ADD COLUMN     "thumbImageId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "ImagesOnPosts";

-- CreateIndex
CREATE UNIQUE INDEX "Image_id_url_key" ON "Image"("id", "url");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_thumbImageId_thumbImageUrl_fkey" FOREIGN KEY ("thumbImageId", "thumbImageUrl") REFERENCES "Image"("id", "url") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_mainImageId_mainImageUrl_fkey" FOREIGN KEY ("mainImageId", "mainImageUrl") REFERENCES "Image"("id", "url") ON DELETE RESTRICT ON UPDATE CASCADE;
