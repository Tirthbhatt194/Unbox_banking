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
exports.providerImage = exports.createInsuranceProvider = void 0;
const multer_1 = require("../../middleware/multer");
const insuranceProviderModel_1 = __importDefault(require("../../model/insuranceProviderModel"));
const createInsuranceProvider = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let providerImage = "";
    // Check if image is sent as set image as null
    if (req.hasOwnProperty("file") === true) {
        providerImage = req.file.filename;
    }
    else {
        providerImage = null;
    }
    // insert data to faq and send status with object
    const insuranceProvider = {
        providerName: req.body.providerName,
        visibility: req.body.visibility,
        providerImage: providerImage,
    };
    const proj = yield insuranceProviderModel_1.default.create(insuranceProvider);
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
            message: "Insurance Provider Created SuccessFully!",
            data: proj,
        });
    }
});
exports.createInsuranceProvider = createInsuranceProvider;
// use multer middleware to insert image to single column
exports.providerImage = multer_1.upload1.single("providerImage");
