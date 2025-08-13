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
exports.GetOneCategory = void 0;
const insuranceCategoryModel_1 = __importDefault(require("../../model/insuranceCategoryModel"));
const GetOneCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    // Find data by id and send status with object at that id
    const one = yield insuranceCategoryModel_1.default.findOne({
        where: {
            id: id,
        },
    });
    // If data exists send data object with status
    if (!one) {
        return res.status(404).send({
            statusCode: 404,
            status: false,
            message: "Data Not Found!",
        });
    }
    else {
        return res.status(200).send({
            statusCode: 200,
            status: true,
            message: "Got Data SuccessFully!",
            data: one,
        });
    }
});
exports.GetOneCategory = GetOneCategory;
