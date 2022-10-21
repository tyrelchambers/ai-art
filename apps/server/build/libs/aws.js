"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImageFromAWS = exports.aws_upload = void 0;
const streamToString_1 = require("./streamToString");
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
exports.aws_upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.AWS_S3_BUCKET,
        metadata: function (req, file, cb) {
            // uuidv4 should be the uuid of the user?
            cb(null, {
                fieldName: file.fieldname,
                userId: "9d3273b3-0470-4ce0-acfc-c66bd4010d8d",
            });
        },
        key: function (req, file, cb) {
            cb(null, `9d3273b3-0470-4ce0-acfc-c66bd4010d8d/${file.originalname}`);
        },
    }),
});
const getImageFromAWS = (img, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield s3.send(new GetObjectCommand({
        Bucket: process.env.AWS_S3_BUCKET,
        Key: `${userId}/${img.filename}`,
    }));
    const bodyContents = yield (0, streamToString_1.streamToString)(data.Body);
    return bodyContents;
});
exports.getImageFromAWS = getImageFromAWS;
