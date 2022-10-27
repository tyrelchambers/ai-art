import { NextFunction, Request, Response } from "express";
import { prisma } from "../db";

export const userCollections = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.session.userId;

    const user = await prisma.user.findUnique({
      where: {
        uuid: userId,
      },
    });

    if (!user) throw new Error("No user available");

    const collections = await prisma.collection.findMany({
      where: {
        userId: user.uuid,
      },
      include: {
        images: {
          select: {
            image: true,
          },
        },
      },
    });

    const formattedCollections = collections.map((c) => ({
      ...c,
      images: c.images.map((i) => i.image),
    }));

    res.send(formattedCollections);
  } catch (error) {
    next(error);
  }
};

export const createCollection = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.session.userId;

    // public is renamed because the server yells about a reserved word
    const { name, description, public: publicValue } = req.body;

    const user = await prisma.user.findUnique({
      where: {
        uuid: userId,
      },
    });

    if (!user) throw new Error("No user when creating collection");

    await prisma.collection.create({
      data: {
        name,
        description,
        public: publicValue,
        userId: user?.uuid,
      },
    });

    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};
