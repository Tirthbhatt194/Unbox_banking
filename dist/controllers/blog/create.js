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
exports.blog_image = exports.createBlog = void 0;
const multer_1 = require("./../../middleware/multer");
const blogModel_1 = __importDefault(require("../../model/blogModel"));
const createBlog = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let blog_image = "";
    // Check if image is sent as set image as null
    if (req.hasOwnProperty("file") === true) {
        blog_image = req.file.filename;
    }
    else {
        blog_image = null;
    }
    // insert data to faq and send status with object
    const blog = {
        link: req.body.link,
        blog_title: req.body.blog_title,
        blog_description: req.body.blog_description,
        blog_image: blog_image,
        insuranceCategoryId: req.body.insuranceCategoryId,
        insuranceSubCategoryId: req.body.insuranceSubCategoryId,
        visibility: req.body.visibility,
    };
    const Blog = yield blogModel_1.default.create(blog);
    // If insert success send data object with status
    if (!Blog) {
        res.status(400).send({
            statusCode: 400,
            status: false,
            message: "Failed to insert data!",
        });
    }
    else {
        res.status(201).send({
            statusCode: 201,
            status: true,
            message: "Blog Created SuccessFully!",
            data: Blog,
        });
    }
});
exports.createBlog = createBlog;
// use multer middleware to insert image to single column
exports.blog_image = multer_1.upload1.single("blog_image");
