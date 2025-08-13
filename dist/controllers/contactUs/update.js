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
exports.updateContactUs = void 0;
const contactUsModel_1 = __importDefault(require("../../model/contactUsModel"));
const fs_1 = __importDefault(require("fs"));
const updateContactUs = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    const upd = yield contactUsModel_1.default.findOne({
        where: {
            id: id,
        },
    });
    // If data dosent exist
    if (!upd)
        return res.status(404).send({
            statusCode: 404,
            status: false,
            message: "Data Not Found!",
        });
    // If data  exist
    if (id === id) {
        // Image validation before update
        let image = [];
        let allFiles = req.files.map((file) => {
            return file.fieldname;
        });
        if (allFiles.find((o) => o === "image") !== undefined &&
            upd.getDataValue("image") !== null) {
            fs_1.default.unlinkSync(`./images/${upd.getDataValue("image")}`);
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
        else if (allFiles.find((o) => o === "image") !== undefined &&
            upd.getDataValue("image") === null) {
            // fs.unlinkSync(`./images/${upd.getDataValue("image")}`)
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
        else if (allFiles.find((o) => o === "image") === undefined &&
            upd.getDataValue("image") === null) {
            image[0] = null;
        }
        else {
            image[0] = upd.getDataValue("image");
        }
        //update data and image at particular id and update - send status with data object
        const updateContactUs = {
            id: parseInt(id),
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
        const upda = yield contactUsModel_1.default.update(updateContactUs, {
            where: {
                id: id,
            },
        });
        res.status(200).send({
            statusCode: 200,
            status: true,
            message: "Data Updated SuccessFully!",
            data: updateContactUs,
        });
        return upda;
    }
});
exports.updateContactUs = updateContactUs;
