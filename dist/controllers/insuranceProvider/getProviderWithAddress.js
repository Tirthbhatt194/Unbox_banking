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
exports.GetProviderWithAddress = void 0;
const insuranceProviderModel_1 = __importDefault(require("../../model/insuranceProviderModel"));
const insuranceProviderAddressModel_1 = __importDefault(require("../../model/insuranceProviderAddressModel"));
const GetProviderWithAddress = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    // let icon = []
    // let image = []
    const one = yield insuranceProviderModel_1.default.findAll({
        where: {
            id: id,
        },
        include: [
            {
                model: insuranceProviderAddressModel_1.default,
                where: {
                    insuranceProviderId: id,
                },
                required: false,
            },
        ],
    });
    // If insert success send data object with status
    if (!one) {
        res.status(400).send({
            statusCode: 400,
            status: false,
            message: "Failed To Insert Data!",
        });
    }
    else {
        res.status(200).send({
            statusCode: 200,
            status: true,
            message: "Got Data SuccessFully!",
            data: one,
        });
    }
});
exports.GetProviderWithAddress = GetProviderWithAddress;
