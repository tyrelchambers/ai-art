import { NextFunction, Request, Response } from "express";
import { Session } from "express-session";
import { prisma } from "../db";

interface SessionWithUser extends Session {
  userId: string;
}

export const isAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req.session as SessionWithUser;

  if (userId === null || userId === undefined) {
    console.log(
      `[MIDDLEWARE] [IS AUTHENTICATED] [userId: ${userId}] No user Id found in session`
    );

    return res.status(403).send({
      error: "No session found",
    });
  }

  const currentUser = await prisma.user.findUnique({
    where: {
      uuid: userId,
    },
  });

  res.locals.currentUser = currentUser;

  next();
};
