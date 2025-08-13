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
exports.UpdateProvider = void 0;
const insuranceProviderModel_1 = __importDefault(require("../../model/insuranceProviderModel"));
const fs_1 = __importDefault(require("fs"));
const UpdateProvider = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    const upd = yield insuranceProviderModel_1.default.findOne({
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
        let providerImage = "";
        // Image validation before update
        if (req.hasOwnProperty("file") &&
            upd.getDataValue("providerImage") !== null) {
            if (upd.getDataValue("providerImage") !== req.file.filename) {
                fs_1.default.unlinkSync(`./images/${upd.getDataValue("providerImage")}`);
                providerImage = req.file.filename;
            }
            else if (upd.getDataValue("providerImage") === req.file.filename) {
                fs_1.default.unlinkSync(`./images/${upd.getDataValue("providerImage")}`);
                providerImage = req.file.filename;
            }
            else {
                providerImage = req.file.filename;
            }
        }
        else if (upd.getDataValue("providerImage") === null &&
            req.hasOwnProperty("file")) {
            providerImage = req.file.filename;
        }
        else {
            providerImage = upd.getDataValue("providerImage");
        }
        //update data and image at particular id and update - send status with data object
        const updateInsuranceProvider = {
            id: parseInt(id),
            providerName: req.body.providerName,
            visibility: req.body.visibility,
            providerImage: providerImage,
        };
        const upda = yield insuranceProviderModel_1.default.update(updateInsuranceProvider, {
            where: {
                id: id,
            },
        });
        res.status(200).send({
            statusCode: 200,
            status: true,
            message: "Data Updated SuccessFully!",
            data: updateInsuranceProvider,
        });
        return upda;
    }
});
exports.UpdateProvider = UpdateProvider;
