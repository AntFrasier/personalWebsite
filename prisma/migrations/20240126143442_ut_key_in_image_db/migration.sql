/*
  Warnings:

  - Added the required column `ut_key` to the `DbImage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DbImage" ADD COLUMN     "ut_key" TEXT NOT NULL;
