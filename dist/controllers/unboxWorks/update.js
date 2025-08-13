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
exports.updateUnboxWorks = void 0;
const unboxWorksModel_1 = __importDefault(require("../../model/unboxWorksModel"));
const fs_1 = __importDefault(require("fs"));
const updateUnboxWorks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    // find data of id passed in params
    const upd = yield unboxWorksModel_1.default.findOne({
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
    // If data exists
    if (id === id) {
        let image = "";
        // Image validation before update
        if (req.hasOwnProperty("file") && upd.getDataValue("image") !== null) {
            if (upd.getDataValue("image") !== req.file.filename) {
                fs_1.default.unlinkSync(`./images/${upd.getDataValue("image")}`);
                image = req.file.filename;
            }
            else if (upd.getDataValue("image") === req.file.filename) {
                fs_1.default.unlinkSync(`./images/${upd.getDataValue("image")}`);
                image = req.file.filename;
            }
            else {
                image = req.file.filename;
            }
        }
        else if (upd.getDataValue("image") === null &&
            req.hasOwnProperty("file")) {
            image = req.file.filename;
        }
        else {
            image = upd.getDataValue("image");
        }
        //update data and image at particular id and update - send status with data object
        const updateUnboxWorks = {
            id: parseInt(id),
            title: req.body.title,
            text: req.body.text,
            image: image,
            visibility: req.body.visibility,
        };
        const upda = yield unboxWorksModel_1.default.update(updateUnboxWorks, {
            where: {
                id: id,
            },
        });
        res.status(200).send({
            statusCode: 200,
            status: true,
            message: "Data Updated SuccessFully!",
            data: updateUnboxWorks,
        });
        return upda;
    }
});
exports.updateUnboxWorks = updateUnboxWorks;
