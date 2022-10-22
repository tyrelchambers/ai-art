import { redisClient, sessionStore } from "./libs/redis";
import session from "express-session";

const express = require("express");
const router = require("./routes/routes");
const cors = require("cors");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 4000;

const whitelist = ["http://localhost:5173"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);
app.use(express.json());

//Configure session middleware
app.use(
  session({
    store: sessionStore,
    secret: "secret$%^134",
    resave: true,
    saveUninitialized: false,
    cookie: {
      secure: false, // if true only transmit cookie over https
      httpOnly: false, // if true prevent client side JS from reading the cookie
      maxAge: 1000 * 60 * 60 * 24 * 30.5, // session max age in miliseconds
    },
  })
);

app.use("/api/v1", router);

const main = async () => {
  await redisClient.connect();

  app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });

  redisClient.on("error", (err) => {
    console.log("Error " + err);
  });
};

main();
