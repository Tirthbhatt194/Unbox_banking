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
exports.getOneCustomer = void 0;
const customerModel_1 = __importDefault(require("../../model/customerModel"));
const getOneCustomer = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    const customer = yield customerModel_1.default.findOne({
        where: {
            id: id,
        },
    });
    if (!customer) {
        res.status(404).send({
            statusCode: 404,
            status: false,
            message: "Customer Not Found!",
        });
    }
    else {
        res.status(200).send({
            statusCode: 200,
            status: true,
            message: "Got Data SuccessFully!",
            data: customer,
        });
    }
});
exports.getOneCustomer = getOneCustomer;
