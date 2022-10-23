import { NextFunction, Request, Response } from "express";
import { prisma } from "../db";

export const getImage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const imageId = req.query.imageId as string;

    const image = await prisma.image.findUnique({
      where: {
        uuid: imageId,
      },
      include: {
        collections: {
          select: {
            collection: true,
          },
        },
      },
    });

    const updatedCollections = image?.collections.map((obj) => {
      return { ...obj.collection };
    });

    // @ts-ignore
    image.collections = updatedCollections;

    res.send(image);
  } catch (error) {
    next(error);
  }
};

export const editImage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.session.userId;
    const { uuid, name, collections } = req.body;

    await prisma.image.updateMany({
      data: {
        name,
      },
      where: {
        uuid,
        userId,
      },
    });

    const collectionsWithImageId = collections.map((c) => ({
      collectionId: c.uuid,
      imageId: uuid,
    }));

    await prisma.imagesCollections.createMany({
      data: collectionsWithImageId,
      skipDuplicates: true,
    });

    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};
