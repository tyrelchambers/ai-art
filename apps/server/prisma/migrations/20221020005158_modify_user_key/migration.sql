-- CreateTable
CREATE TABLE "Collection" (
    "uuid" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "userId" UUID NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "Collection_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "Image" (
    "uuid" UUID NOT NULL,
    "url" VARCHAR(255) NOT NULL,
    "filename" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "userId" UUID NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "SequelizeMeta" (
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "User" (
    "uuid" UUID NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "ImagesCollections" (
    "imageId" UUID NOT NULL,
    "collectionId" UUID NOT NULL,

    CONSTRAINT "ImagesCollections_pkey" PRIMARY KEY ("imageId","collectionId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Collection" ADD CONSTRAINT "Collection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImagesCollections" ADD CONSTRAINT "ImagesCollections_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImagesCollections" ADD CONSTRAINT "ImagesCollections_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
