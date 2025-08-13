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
exports.getAllTermInsCheckOutInDetail = void 0;
const insuranceCategoryModel_1 = __importDefault(require("../../model/insuranceCategoryModel"));
const insuranceSubCategoryModel_1 = __importDefault(require("../../model/insuranceSubCategoryModel"));
const termInsuranceCheckOutModel_1 = __importDefault(require("../../model/termInsuranceCheckOutModel"));
// import bankModel from "../../model/bankModel";
const policiesModel_1 = __importDefault(require("../../model/policiesModel"));
const unboxPeopleModel_1 = __importDefault(require("../../model/unboxPeopleModel"));
const getAllTermInsCheckOutInDetail = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // find all data and join respective foreign key tables to it
    const proj = yield termInsuranceCheckOutModel_1.default.findAll({
        include: [
            {
                model: insuranceCategoryModel_1.default,
            },
            {
                model: insuranceSubCategoryModel_1.default,
            },
            {
                model: policiesModel_1.default,
            },
            {
                model: unboxPeopleModel_1.default,
            },
        ],
    });
    // If data exists send status with object
    if (!proj) {
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
            message: "SuccessFully Got All Data!",
            data: proj,
        });
    }
});
exports.getAllTermInsCheckOutInDetail = getAllTermInsCheckOutInDetail;
