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
exports.insuranceSubCategoryImage = exports.createInsuranceSubCategory = void 0;
const insuranceSubCategoryModel_1 = __importDefault(require("../../model/insuranceSubCategoryModel"));
const multer_1 = require("../../middleware/multer");
const createInsuranceSubCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let insuranceSubCategoryImage = "";
    // Check if image is sent as set image as null
    if (req.hasOwnProperty("file") === true) {
        insuranceSubCategoryImage = req.file.filename;
    }
    else {
        insuranceSubCategoryImage = null;
    }
    // insert data to faq and send status with object
    const insuranceSubCategory = {
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
    const proj = yield insuranceSubCategoryModel_1.default.create(insuranceSubCategory);
    // If insert success send data object with status
    if (!proj) {
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
            message: "Insurance SubCategory Created SuccessFully!",
            data: proj,
        });
    }
});
exports.createInsuranceSubCategory = createInsuranceSubCategory;
// Use multer middleware to insert image to single column
exports.insuranceSubCategoryImage = multer_1.upload1.single("insuranceSubCategoryImage");
