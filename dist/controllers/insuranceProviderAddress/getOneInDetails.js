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
exports.getOneInsuranceProviderAddressInDetail = void 0;
const insuranceProviderModel_1 = __importDefault(require("../../model/insuranceProviderModel"));
const insuranceProviderAddressModel_1 = __importDefault(require("../../model/insuranceProviderAddressModel"));
const getOneInsuranceProviderAddressInDetail = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    // find data at id and join respective foreign key tables to it
    const one = yield insuranceProviderAddressModel_1.default.findOne({
        where: {
            id: id,
        },
        include: [
            {
                model: insuranceProviderModel_1.default,
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
exports.getOneInsuranceProviderAddressInDetail = getOneInsuranceProviderAddressInDetail;
