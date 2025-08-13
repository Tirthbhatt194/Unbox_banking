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
exports.GetOneInDetail = void 0;
const policiesModel_1 = __importDefault(require("../../model/policiesModel"));
const insuranceCategoryModel_1 = __importDefault(require("../../model/insuranceCategoryModel"));
const insuranceProviderModel_1 = __importDefault(require("../../model/insuranceProviderModel"));
const insuranceSubCategoryModel_1 = __importDefault(require("../../model/insuranceSubCategoryModel"));
const insuranceTypeModel_1 = __importDefault(require("../../model/insuranceTypeModel"));
const GetOneInDetail = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    // find data at id and join respective foreign key tables to it
    const one = yield policiesModel_1.default.findOne({
        where: {
            id: id,
        },
        include: [
            {
                model: insuranceCategoryModel_1.default,
            },
            {
                model: insuranceProviderModel_1.default,
            },
            {
                model: insuranceSubCategoryModel_1.default,
            },
            {
                model: insuranceTypeModel_1.default,
            },
        ],
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
exports.GetOneInDetail = GetOneInDetail;
