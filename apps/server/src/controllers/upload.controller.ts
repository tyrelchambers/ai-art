import { NextFunction, Request, Response } from "express";
import { Session } from "express-session";
import { getImageFromAWS } from "../libs/aws";
import { redisClient } from "../libs/redis";
import { Image } from "../types";

export const uploadImages = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { redis_key, files_length } = req.body;
    const userId = req.session.userId;
    const file = req.files[0];

    const imageBuffer = (await getImageFromAWS(file, userId)) as string;
    const imageObj: Image = {
      image: imageBuffer,
      url: file.location,
      userId,
      filename: file.originalname,
      name: "",
      // collections: [],
    };

    await redisClient.sAdd(redis_key, JSON.stringify(imageObj));

    const imgSetSize = await redisClient.v4.sCard(redis_key);

    if (imgSetSize == files_length) {
      const set = await redisClient.v4.sMembers(redis_key);
      res.send({ files: set });
    } else {
      res.sendStatus(202);
    }
  } catch (error) {
    next(error);
  }
};
