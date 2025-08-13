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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.image = exports.createUnboxWorks = void 0;
const multer_1 = require("./../../middleware/multer");
const unboxWorksModel_1 = __importDefault(require("../../model/unboxWorksModel"));
const createUnboxWorks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let image = "";
    // Check if image is sent as set image as null
    if (req.hasOwnProperty("file") === true) {
        image = req.file.filename;
    }
    else {
        image = null;
    }
    // insert data to faq and send status with object
    const unboxWorks = {
        title: req.body.title,
        text: req.body.text,
        image: image,
        visibility: req.body.visibility,
    };
    const UnboxWorks = yield unboxWorksModel_1.default.create(unboxWorks);
    // If insert success send data object with status
    if (!UnboxWorks) {
        res.status(400).send({
            statusCode: 400,
            status: false,
            message: "Failed To Insert Data!",
        });
    }
    else {
        res.status(201).send({
            statusCode: 201,
            status: true,
            message: "Data Created SuccessFully!",
            data: UnboxWorks,
        });
    }
});
exports.createUnboxWorks = createUnboxWorks;
// use multer middleware to insert image to single column
exports.image = multer_1.upload1.single("image");
