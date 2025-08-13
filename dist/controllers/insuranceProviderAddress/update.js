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
exports.UpdateProviderAddress = void 0;
const insuranceProviderAddressModel_1 = __importDefault(require("../../model/insuranceProviderAddressModel"));
const UpdateProviderAddress = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const isAddress = yield insuranceProviderAddressModel_1.default.findOne({
        where: { id: id },
    });
    //update data at particular id and update - send status with data object
    if (isAddress) {
        const { country, state, district, taluka, address_1, address_2, zipcode, phone1, phone2, fax, email, policyProviderId, } = req === null || req === void 0 ? void 0 : req.body;
        const providerAddress = {
            country,
            state,
            district,
            taluka,
            address_1,
            address_2,
            zipcode,
            phone1,
            phone2,
            fax,
            email,
            policyProviderId,
        };
        const address = yield insuranceProviderAddressModel_1.default.update(providerAddress, {
            where: {
                id: id,
            },
        });
        if (!isAddress) {
            res.status(404).send({
                statusCode: 404,
                status: false,
                message: "Data Not Found!",
            });
        }
        else {
            res.status(200).send({
                statusCode: 200,
                status: true,
                message: "Data  Updated SuccessFully!",
                data: providerAddress,
            });
        }
        return address;
    }
});
exports.UpdateProviderAddress = UpdateProviderAddress;
