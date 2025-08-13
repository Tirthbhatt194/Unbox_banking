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
exports.updateBank = void 0;
const bankModel_1 = __importDefault(require("../../model/bankModel"));
const fs_1 = __importDefault(require("fs"));
const updateBank = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    const upd = yield bankModel_1.default.findOne({
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
    // If data exist
    if (id === id) {
        let bankImage = "";
        // Image validation before update
        if (req.hasOwnProperty("file") && upd.getDataValue("bankImage") !== null) {
            if (upd.getDataValue("bankImage") !== req.file.filename) {
                fs_1.default.unlinkSync(`./images/${upd.getDataValue("bankImage")}`);
                bankImage = req.file.filename;
            }
            else if (upd.getDataValue("bankImage") === req.file.filename) {
                fs_1.default.unlinkSync(`./images/${upd.getDataValue("bankImage")}`);
                bankImage = req.file.filename;
            }
            else {
                bankImage = req.file.filename;
            }
        }
        else if (upd.getDataValue("bankImage") === null &&
            req.hasOwnProperty("file")) {
            bankImage = req.file.filename;
        }
        else {
            bankImage = upd.getDataValue("bankImage");
        }
        //update data and image at particular id and update - send status with data object
        const bank = {
            id: parseInt(id),
            name: req.body.name,
            description: req.body.description,
            bankImage: bankImage,
            visibility: req.body.visibility,
        };
        const upda = yield bankModel_1.default.update(bank, {
            where: {
                id: id,
            },
        });
        res.status(200).send({
            statusCode: 200,
            status: true,
            message: "Data Updated SuccessFully!",
            data: bank,
        });
        return upda;
    }
});
exports.updateBank = updateBank;
