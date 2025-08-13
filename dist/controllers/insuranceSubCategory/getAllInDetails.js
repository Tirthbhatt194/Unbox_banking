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
exports.GetAllSubCategoryInDetail = void 0;
const insuranceCategoryModel_1 = __importDefault(require("../../model/insuranceCategoryModel"));
const insuranceTypeModel_1 = __importDefault(require("../../model/insuranceTypeModel"));
const insuranceSubCategoryModel_1 = __importDefault(require("../../model/insuranceSubCategoryModel"));
const GetAllSubCategoryInDetail = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // find all data and join respective foreign key tables to it
    const proj = yield insuranceSubCategoryModel_1.default.findAll({
        include: [
            {
                model: insuranceCategoryModel_1.default,
            },
            {
                model: insuranceTypeModel_1.default,
            },
        ],
    });
    const newSub = proj.map((i) => (Object.assign(Object.assign({}, i.dataValues), { features: JSON.parse(i.dataValues.features) })));
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
            message: "Got All Data SuccessFully!",
            data: newSub,
        });
    }
});
exports.GetAllSubCategoryInDetail = GetAllSubCategoryInDetail;
