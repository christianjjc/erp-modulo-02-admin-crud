/*
  Warnings:

  - You are about to drop the column `industryTipeId` on the `Company` table. All the data in the column will be lost.
  - Added the required column `industryTypeId` to the `Company` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Company" DROP CONSTRAINT "Company_industryTipeId_fkey";

-- AlterTable
ALTER TABLE "Company" DROP COLUMN "industryTipeId",
ADD COLUMN     "industryTypeId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_industryTypeId_fkey" FOREIGN KEY ("industryTypeId") REFERENCES "IndustryType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
