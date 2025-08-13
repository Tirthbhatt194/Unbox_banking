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
exports.deleteOtherInsInquiry = void 0;
const otherInsuranceInquiryModel_1 = __importDefault(require("../../model/otherInsuranceInquiryModel"));
const deleteOtherInsInquiry = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    // find data by id
    const del = yield otherInsuranceInquiryModel_1.default.findOne({
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
    // If data dosent exist delete
    if (id === id) {
        const dele = yield otherInsuranceInquiryModel_1.default.destroy({
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
exports.deleteOtherInsInquiry = deleteOtherInsInquiry;
