"use strict";
const express = require("express");
const uploadImages = require("../controllers/upload");
const imageController = require("../controllers/imageController");
const { aws_upload } = require("../libs/aws");
const router = express.Router();
router
    .post("/upload", aws_upload.array("files", 10), uploadImages)
    .get("/image", imageController);
module.exports = router;
