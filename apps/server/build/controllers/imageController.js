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
const aws_1 = require("../libs/aws");
const imageController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { filename } = req.query;
    console.log(filename);
    // const originalUrl = new URLSearchParams(req.originalUrl);
    const userId = "9d3273b3-0470-4ce0-acfc-c66bd4010d8d";
    const file = yield (0, aws_1.getImageFromAWS)({ filename }, userId);
    res.send({ file });
});
module.exports = imageController;
