"use strict";
const uploadImages = (req, res, next) => {
    const urls = req.files.map((img) => ({
        url: img.location,
        id: img.key.split("/")[0],
        filename: img.originalname,
    }));
    console.log(req);
    res.send(urls);
};
module.exports = uploadImages;
