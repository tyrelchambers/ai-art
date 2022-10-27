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
    const bucketRegex = new RegExp(`${process.env.AWS_S3_BUCKET}.`);

    // this is here because without the replace, the bucket name is duplicated in the file location
    // eg: bucket-name.bucket-name.url
    const filesWithUserId = files.map((f) => ({
      ...f,
      url: f.url.replace(bucketRegex, ""),
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
