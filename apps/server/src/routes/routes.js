const express = require("express");
const { register, login } = require("../controllers/auth.controller");
const { isAuthenticated } = require("../middleware/isAuthenticated");
const { getUser, userGallery } = require("../controllers/user.controller");
const { uploadImages } = require("../controllers/upload.controller");
const { publishImages } = require("../controllers/publish-images.controller");
const {
  userCollections,
  createCollection,
} = require("../controllers/collections.controller");
const { getImage, editImage } = require("../controllers/image.controller");

const router = express.Router();

router
  .post("/upload", isAuthenticated, uploadImages)
  .post("/upload/publish", isAuthenticated, publishImages);

router.get("/image", getImage).post("/image", editImage);

router.post("/auth/register", register).post("/auth/login", login);

router
  .get("/user/me", isAuthenticated, getUser)
  .get("/user/gallery", isAuthenticated, userGallery)
  .get("/user/collections", isAuthenticated, userCollections)
  .post("/user/collections", isAuthenticated, createCollection);

module.exports = router;
