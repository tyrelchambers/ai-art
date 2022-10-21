import { NextFunction, Request, Response } from "express";
import { prisma } from "../db";
import { getImageFromAWS } from "../libs/aws";

export const getImage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { filename } = req.query;

  const userId = req.session.userId;

  const file = await getImageFromAWS({ filename }, userId);

  res.send({ file });
};

export const editImage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.session.userId;
    const { imageId, newData } = req.body;

    await prisma.image.updateMany({
      data: newData,
      where: {
        uuid: imageId,
        userId,
      },
    });
  } catch (error) {
    next(error);
  }
};
