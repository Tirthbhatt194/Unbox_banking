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
exports.bankImage = exports.createBank = void 0;
const multer_1 = require("../../middleware/multer");
const bankModel_1 = __importDefault(require("../../model/bankModel"));
const createBank = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let bankImage;
    // Check if image is sent as set image as null
    if (req.hasOwnProperty("file") === true) {
        bankImage = req.file.filename;
    }
    else {
        bankImage = null;
    }
    // insert data to Bank and send status with object
    const bank = {
        name: req.body.name,
        description: req.body.description,
        bankImage: bankImage,
        visibility: req.body.visibility,
    };
    const Bank = yield bankModel_1.default.create(bank);
    // If insert success send data object with status
    if (!Bank) {
        res.status(400).send({
            statusCode: 400,
            status: false,
            message: "Failed to insert data",
        });
    }
    else {
        res.status(201).send({
            statusCode: 201,
            status: true,
            message: "Bank Successfully Created!",
            data: Bank,
        });
    }
});
exports.createBank = createBank;
// use multer middleware to insert image to single column
exports.bankImage = multer_1.upload1.single("bankImage");
