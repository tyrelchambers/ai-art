import bcrypt from "bcryptjs";
import { redisClient } from "../libs/redis";
import { prisma } from "../db";
import { exclude } from "../types/prisma";

export const register = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      throw new Error("User exists");
    }
    const newUser = await prisma.user.create({
      data: {
        email,
        password: bcrypt.hashSync(password, 10),
      },
    });

    const user = exclude(newUser, "password");

    await redisClient.sAdd("sessions", user.uuid);
    res.send(user);
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) throw new Error("No user found with that email");

    const hashPassword = await bcrypt.compareSync(password, user.password);

    if (!hashPassword) throw new Error("Password is incorrect");

    req.session.regenerate(function (err) {
      if (err) next(err);
      // store user information in session, typically a user id

      req.session.userId = user.uuid;
      // save the session before redirection to ensure page
      // load does not happen before session is saved
      req.session.save(function (err) {
        if (err) return next(err);

        const userWithoutPassword = exclude(user, "password");

        res.send({ user: userWithoutPassword });
      });
    });
  } catch (error) {
    next(error);
  }
};

export const logout = async (req, res, next) => {
  req.session.userId = null;

  req.session.save(function (err) {
    if (err) next(err);
  });
  res.sendStatus(200);
};
