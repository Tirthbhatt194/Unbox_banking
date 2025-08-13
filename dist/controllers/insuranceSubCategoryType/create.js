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
exports.insuranceCategoryTypeImage = exports.createInsuranceType = void 0;
const multer_1 = require("./../../middleware/multer");
const insuranceTypeModel_1 = __importDefault(require("../../model/insuranceTypeModel"));
const createInsuranceType = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let insuranceCategoryTypeImage = "";
    // Check if image is sent as set image as null
    if (req.hasOwnProperty("file") === true) {
        insuranceCategoryTypeImage = req.file.filename;
    }
    else {
        insuranceCategoryTypeImage = null;
    }
    // insert data to faq and send status with object
    const insuranceType = {
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
    const proj = yield insuranceTypeModel_1.default.create(insuranceType);
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
            message: "Insurance SubCategory Type Created SuccessFully!",
            data: proj,
        });
    }
});
exports.createInsuranceType = createInsuranceType;
// use multer middleware to insert image to single column
exports.insuranceCategoryTypeImage = multer_1.upload1.single("insuranceCategoryTypeImage");
