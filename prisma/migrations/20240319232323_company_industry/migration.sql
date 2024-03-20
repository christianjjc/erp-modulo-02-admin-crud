-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "ruc" TEXT NOT NULL,
    "industryTipeId" INTEGER NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IndustryType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "IndustryType_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Company_ruc_idx" ON "Company"("ruc");

-- CreateIndex
CREATE INDEX "User_role_idx" ON "User"("role");

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_industryTipeId_fkey" FOREIGN KEY ("industryTipeId") REFERENCES "IndustryType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
