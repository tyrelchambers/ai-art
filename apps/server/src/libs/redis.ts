import { RedisClientType } from "redis";
import session from 'express-session'
import { RedisStore } from "connect-redis";

const redis = require("redis");
const redisStore: RedisStore = require('connect-redis')(session);

export const redisClient: RedisClientType = redis.createClient({
  socket: {
    host: "redis",
    port: "7000",
  },
  password: "password123",
  legacyMode: true
});

export const sessionStore = new redisStore({client: redisClient})
