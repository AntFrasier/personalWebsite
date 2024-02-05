/*
  Warnings:

  - Added the required column `codeUrl` to the `Portfolio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `demoUrl` to the `Portfolio` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Portfolio" ADD COLUMN     "codeUrl" TEXT NOT NULL,
ADD COLUMN     "demoUrl" TEXT NOT NULL;
