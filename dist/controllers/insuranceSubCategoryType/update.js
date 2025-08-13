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
exports.UpdateInsuranceType = void 0;
const insuranceTypeModel_1 = __importDefault(require("../../model/insuranceTypeModel"));
const fs_1 = __importDefault(require("fs"));
const UpdateInsuranceType = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    const upd = yield insuranceTypeModel_1.default.findOne({
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
        let insuranceCategoryTypeImage = "";
        // Image validation before update
        if (req.hasOwnProperty("file") &&
            upd.getDataValue("insuranceCategoryTypeImage") !== null) {
            if (upd.getDataValue("insuranceCategoryTypeImage") !== req.file.filename) {
                fs_1.default.unlinkSync(`./images/${upd.getDataValue("insuranceCategoryTypeImage")}`);
                insuranceCategoryTypeImage = req.file.filename;
            }
            else if (upd.getDataValue("insuranceCategoryTypeImage") === req.file.filename) {
                fs_1.default.unlinkSync(`./images/${upd.getDataValue("insuranceCategoryTypeImage")}`);
                insuranceCategoryTypeImage = req.file.filename;
            }
            else {
                insuranceCategoryTypeImage = req.file.filename;
            }
        }
        else if (req.hasOwnProperty("file") &&
            upd.getDataValue("insuranceCategoryTypeImage") === null) {
            insuranceCategoryTypeImage = req.file.filename;
        }
        else {
            insuranceCategoryTypeImage = upd.getDataValue("insuranceCategoryTypeImage");
        }
        //update data and image at particular id and update - send status with data object
        const updateInsuranceType = {
            id: parseInt(id),
            insuranceCategoryTypeName: req.body.insuranceCategoryTypeName,
            insuranceCategoryTypeDescription: req.body
                .insuranceCategoryTypeDescription,
            insuranceCategoryTypeDefinition: req.body
                .insuranceCategoryTypeDefinition,
            what: req.body.what,
            why: req.body.why,
            how: req.body.how,
            formTitle: req.body.formTitle,
            path: req.body.path,
            visibility: req.body.visibility,
            insuranceCategoryTypeImage: insuranceCategoryTypeImage,
        };
        const upda = yield insuranceTypeModel_1.default.update(updateInsuranceType, {
            where: {
                id: id,
            },
        });
        res.status(200).send({
            statusCode: 200,
            status: true,
            message: "Data Updated SuccessFully!",
            data: updateInsuranceType,
        });
        return upda;
    }
});
exports.UpdateInsuranceType = UpdateInsuranceType;
