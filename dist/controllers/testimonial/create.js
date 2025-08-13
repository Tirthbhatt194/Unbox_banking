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
exports.testimonialImage = exports.createTestimonial = void 0;
const testimonialModel_1 = __importDefault(require("../../model/testimonialModel"));
const multer_1 = require("./../../middleware/multer");
const createTestimonial = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let testimonialImage = "";
    //Code for Image
    if (req.hasOwnProperty("file") === true) {
        testimonialImage = req.file.filename;
    }
    else {
        testimonialImage = null;
    }
    // insert data to faq and send status with object
    const data = {
        name: req.body.name,
        description: req.body.description,
        visibility: req.body.visibility,
        testimonialImage: testimonialImage,
        occupation: req.body.occupation,
    };
    const testimonial = yield testimonialModel_1.default.create(data);
    // If insert success send data object with status
    if (!testimonial) {
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
            message: "Testimonial Created SuccessFully!",
            data: testimonial,
        });
    }
});
exports.createTestimonial = createTestimonial;
// USe Multer MiddleWare
exports.testimonialImage = multer_1.upload1.single("testimonialImage");
