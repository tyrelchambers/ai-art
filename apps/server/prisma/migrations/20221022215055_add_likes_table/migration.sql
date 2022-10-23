/*
  Warnings:

  - You are about to drop the `SequelizeMeta` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Image" ADD COLUMN     "downloads" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "prompt" TEXT;

-- DropTable
DROP TABLE "SequelizeMeta";

-- CreateTable
CREATE TABLE "Likes" (
    "imageId" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "Likes_pkey" PRIMARY KEY ("imageId","userId")
);

-- AddForeignKey
ALTER TABLE "Likes" ADD CONSTRAINT "Likes_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Likes" ADD CONSTRAINT "Likes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
