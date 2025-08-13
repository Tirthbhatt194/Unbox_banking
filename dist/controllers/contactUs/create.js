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
exports.createContactUs = void 0;
const contactUsModel_1 = __importDefault(require("../../model/contactUsModel"));
const createContactUs = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let image = [];
    // Check if image is sent as set image as null
    if (req.hasOwnProperty("files") === true) {
        image = req.files
            .map((file) => {
            if (file.fieldname === "image") {
                return file.filename;
            }
        })
            .filter((file) => {
            return file !== undefined;
        });
    }
    else {
        image[0] = null;
    }
    // insert data to faq and send status with object
    const contactUs = {
        image: image[0],
        title: req.body.title,
        subTitle: req.body.subTitle,
        text: req.body.text,
        email: req.body.email,
        phone: req.body.phone,
        whatsapp: req.body.whatsapp,
        facebook: req.body.facebook,
        twitter: req.body.twitter,
        linkedin: req.body.linkedin,
        instagram: req.body.instagram,
    };
    const ContactUs = yield contactUsModel_1.default.create(contactUs);
    // If insert success send data object with status
    if (!ContactUs) {
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
            message: "AboutUs Details Created SuccessFully!",
            data: ContactUs,
        });
    }
});
exports.createContactUs = createContactUs;
