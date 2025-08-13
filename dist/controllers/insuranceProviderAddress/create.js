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
exports.createProviderAddress = void 0;
const insuranceProviderAddressModel_1 = __importDefault(require("../../model/insuranceProviderAddressModel"));
const createProviderAddress = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // insert data to faq and send status with object
    const providerAddress = {
        country: req.body.country,
        state: req.body.state,
        district: req.body.district,
        taluka: req.body.taluka,
        address_1: req.body.address_1,
        address_2: req.body.address_2,
        zipcode: req.body.zipcode,
        phone1: req.body.phone1,
        phone2: req.body.phone2,
        fax: req.body.fax,
        email: req.body.email,
        insuranceProviderId: req.body.insuranceProviderId,
    };
    const proj = yield insuranceProviderAddressModel_1.default.create(providerAddress);
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
            message: "Insurance Provider Adress Created SuccessFully!",
            data: proj,
        });
    }
});
exports.createProviderAddress = createProviderAddress;
