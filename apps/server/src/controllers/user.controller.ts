import { NextFunction, Request, Response } from "express";
import { prisma } from "../db";
import { exclude } from "../types/prisma";

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.session.userId;

  try {
    const user = await prisma.user.findUnique({
      where: {
        uuid: userId,
      },
    });
    const userWithoutPassword = exclude(user);

    res.send({ user: userWithoutPassword });
  } catch (error) {
    next(error);
  }
};
export const userGallery = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.session.userId;

  try {
    const user = await prisma.user.findUnique({
      where: {
        uuid: userId,
      },
    });
    const gallery = await prisma.image.findMany({
      where: {
        userId: user?.uuid,
      },
    });

    res.send(gallery);
  } catch (error) {
    next(error);
  }
};
