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
exports.DeleteInsuranceType = void 0;
const insuranceTypeModel_1 = __importDefault(require("../../model/insuranceTypeModel"));
const DeleteInsuranceType = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    // find data by id
    const del = yield insuranceTypeModel_1.default.findOne({
        where: {
            id: id,
        },
    });
    // If data dosent exist
    if (!del)
        return res.status(404).send({
            statusCode: 404,
            status: false,
            message: "Data Not Found!",
        });
    // If data exist delete
    if (id === id) {
        const dele = yield insuranceTypeModel_1.default.destroy({
            where: {
                id: id,
            },
        });
        res.status(200).send({
            statusCode: 200,
            status: true,
            message: "Data Deleted SuccessFully!",
            data: del,
        });
        return dele;
    }
});
exports.DeleteInsuranceType = DeleteInsuranceType;
