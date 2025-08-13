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
exports.UpdateSubCategory = void 0;
const insuranceSubCategoryModel_1 = __importDefault(require("../../model/insuranceSubCategoryModel"));
const fs_1 = __importDefault(require("fs"));
const UpdateSubCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    const upd = yield insuranceSubCategoryModel_1.default.findOne({
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
        let insuranceSubCategoryImage = "";
        // Image validation before update
        if (req.hasOwnProperty("file") &&
            upd.getDataValue("insuranceSubCategoryImage") !== null) {
            if (upd.getDataValue("insuranceSubCategoryImage") !== req.file.filename) {
                fs_1.default.unlinkSync(`./images/${upd.getDataValue("insuranceSubCategoryImage")}`);
                insuranceSubCategoryImage = req.file.filename;
            }
            else if (upd.getDataValue("insuranceSubCategoryImage") === req.file.filename) {
                fs_1.default.unlinkSync(`./images/${upd.getDataValue("insuranceSubCategoryImage")}`);
                insuranceSubCategoryImage = req.file.filename;
            }
            else {
                insuranceSubCategoryImage = req.file.filename;
            }
        }
        else if (req.hasOwnProperty("file") &&
            upd.getDataValue("insuranceSubCategoryImage") === null) {
            insuranceSubCategoryImage = req.file.filename;
        }
        else {
            insuranceSubCategoryImage = upd.getDataValue("insuranceSubCategoryImage");
        }
        //update data and image at particular id and update - send status with data object
        const updateInsuranceSubCategory = {
            id: parseInt(id),
            insuranceSubCategoryName: req.body.insuranceSubCategoryName,
            insuranceSubCategoryDescription: req.body
                .insuranceSubCategoryDescription,
            insuranceSubCategoryDefinition: req.body
                .insuranceSubCategoryDefinition,
            what: req.body.what,
            why: req.body.why,
            how: req.body.how,
            visibility: req.body.visibility,
            slug: req.body.slug,
            formTitle: req.body.formTitle,
            eligibilityCriteria: req.body.eligibilityCriteria,
            features: req.body.features,
            insuranceSubCategoryImage: insuranceSubCategoryImage,
            insuranceCategoryId: req.body.insuranceCategoryId,
            insuranceCategoryTypeId: req.body.insuranceCategoryTypeId,
        };
        const upda = yield insuranceSubCategoryModel_1.default.update(updateInsuranceSubCategory, {
            where: {
                id: id,
            },
        });
        res.status(200).send({
            statusCode: 200,
            status: true,
            message: "Data Updated SuccessFully!",
            data: updateInsuranceSubCategory,
        });
        return upda;
    }
});
exports.UpdateSubCategory = UpdateSubCategory;
