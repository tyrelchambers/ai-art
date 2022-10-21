import { streamToString } from "./streamToString";

const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
const express = require("express");
const multer = require("multer");
const multerS3 = require("multer-s3");

require("dotenv").config();

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    secretAccessKey: process.env.AWS_SECRET_KEY,
    accessKeyId: process.env.AWS_ACCESS_KEY,
  },
});

export const aws_upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_S3_BUCKET,
    metadata: function (req, file, cb) {
      // uuidv4 should be the uuid of the user?
      cb(null, {
        fieldName: file.fieldname,
        userId: req.session.userId,
      });
    },
    key: function (req, file, cb) {
      cb(null, `${req.session.userId}/${file.originalname}`);
    },
  }),
});

export const getImageFromAWS = async (img, userId) => {
  
  try {
    const data = await s3.send(
    new GetObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET,
      Key: img.key,
    })
  );

  const bodyContents = await streamToString(data.Body);
  return bodyContents;
  } catch (error) {
    console.log(error);
    return;
  }
};
