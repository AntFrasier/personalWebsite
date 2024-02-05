-- AlterTable
ALTER TABLE "DbImage" ADD CONSTRAINT "DbImage_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "Portfolio" (
    "id" SERIAL NOT NULL,
    "name_fr" TEXT NOT NULL,
    "name_en" TEXT NOT NULL,
    "draft" BOOLEAN NOT NULL DEFAULT true,
    "categorieId" INTEGER NOT NULL,
    "title_fr" TEXT NOT NULL,
    "title_en" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "metaDescription_fr" TEXT NOT NULL,
    "description_fr" TEXT NOT NULL,
    "metaDescription_en" TEXT NOT NULL,
    "description_en" TEXT NOT NULL,
    "h1_fr" TEXT NOT NULL,
    "h1_en" TEXT NOT NULL,
    "content_fr" TEXT NOT NULL,
    "content_en" TEXT NOT NULL,
    "thumbImageId" INTEGER NOT NULL,
    "mainImageId" INTEGER NOT NULL,

    CONSTRAINT "Portfolio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stack" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Stack_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DbImageToStack" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_PortfolioToStack" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Portfolio_id_key" ON "Portfolio"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Portfolio_slug_key" ON "Portfolio"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Stack_id_key" ON "Stack"("id");

-- CreateIndex
CREATE UNIQUE INDEX "_DbImageToStack_AB_unique" ON "_DbImageToStack"("A", "B");

-- CreateIndex
CREATE INDEX "_DbImageToStack_B_index" ON "_DbImageToStack"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PortfolioToStack_AB_unique" ON "_PortfolioToStack"("A", "B");

-- CreateIndex
CREATE INDEX "_PortfolioToStack_B_index" ON "_PortfolioToStack"("B");

-- AddForeignKey
ALTER TABLE "Portfolio" ADD CONSTRAINT "Portfolio_categorieId_fkey" FOREIGN KEY ("categorieId") REFERENCES "Categorie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Portfolio" ADD CONSTRAINT "Portfolio_thumbImageId_fkey" FOREIGN KEY ("thumbImageId") REFERENCES "DbImage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Portfolio" ADD CONSTRAINT "Portfolio_mainImageId_fkey" FOREIGN KEY ("mainImageId") REFERENCES "DbImage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DbImageToStack" ADD CONSTRAINT "_DbImageToStack_A_fkey" FOREIGN KEY ("A") REFERENCES "DbImage"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DbImageToStack" ADD CONSTRAINT "_DbImageToStack_B_fkey" FOREIGN KEY ("B") REFERENCES "Stack"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PortfolioToStack" ADD CONSTRAINT "_PortfolioToStack_A_fkey" FOREIGN KEY ("A") REFERENCES "Portfolio"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PortfolioToStack" ADD CONSTRAINT "_PortfolioToStack_B_fkey" FOREIGN KEY ("B") REFERENCES "Stack"("id") ON DELETE CASCADE ON UPDATE CASCADE;
