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
exports.updateTestimonial = void 0;
const testimonialModel_1 = __importDefault(require("../../model/testimonialModel"));
const fs_1 = __importDefault(require("fs"));
const updateTestimonial = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    const data1 = yield testimonialModel_1.default.findOne({
        where: {
            id: id,
        },
    });
    // If data dosent exist
    if (!data1)
        return res.status(404).send({
            statusCode: 404,
            status: false,
            message: "Data Not Found!",
        });
    // If data exist
    if (id === id) {
        let testimonialImage = "";
        if (req.hasOwnProperty("file") &&
            data1.getDataValue("testimonialImage") !== null) {
            if (data1.getDataValue("testimonialImage") !== req.file.filename) {
                fs_1.default.unlinkSync(`./images/${data1.getDataValue("testimonialImage")}`);
                testimonialImage = req.file.filename;
            }
            else if (data1.getDataValue("testimonialImage") === req.file.filename) {
                fs_1.default.unlinkSync(`./images/${data1.getDataValue("testimonialImage")}`);
                testimonialImage = req.file.filename;
            }
            else {
                testimonialImage = req.file.filename;
            }
        }
        else if (req.hasOwnProperty("file") &&
            data1.getDataValue("testimonialImage") === null) {
            testimonialImage = req.file.filename;
        }
        else {
            testimonialImage = data1.getDataValue("testimonialImage");
        }
        //update data at particular id and update - send status with data object
        const data = {
            id: parseInt(id),
            name: req.body.name,
            description: req.body.description,
            visibility: req.body.visibility,
            testimonialImage: testimonialImage,
            occupation: req.body.occupation,
        };
        const testimonial = yield testimonialModel_1.default.update(data, {
            where: {
                id: id,
            },
        });
        res.status(200).send({
            statusCode: 200,
            status: true,
            message: "Data Updated SuccessFully!",
            data: data,
        });
        return testimonial;
    }
});
exports.updateTestimonial = updateTestimonial;
