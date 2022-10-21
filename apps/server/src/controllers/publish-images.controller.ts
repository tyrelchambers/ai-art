import { NextFunction, Request, Response } from "express";
import { prisma } from "../db";

export const publishImages = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const files = req.body;
    const currentUser = res.locals.currentUser;
    console.log(res.locals.currentUser);

    const filesWithUserId = files.map((f) => ({
      ...f,
      userId: currentUser.uuid,
    }));

    await prisma.image.createMany({
      data: filesWithUserId,
    });

    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};
