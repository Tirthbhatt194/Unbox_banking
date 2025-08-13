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
exports.getOneLoanInDetail = void 0;
const bankModel_1 = __importDefault(require("../../model/bankModel"));
const loan_1 = __importDefault(require("../../model/loan"));
const loanTypeModel_1 = __importDefault(require("../../model/loanTypeModel"));
const getOneLoanInDetail = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    // find data at id and join respective foreign key tables to it
    const one = yield loan_1.default.findOne({
        where: {
            id: id,
        },
        include: [
            {
                model: bankModel_1.default,
            },
            {
                model: loanTypeModel_1.default,
            },
        ],
    });
    let newLoan = Object.assign(Object.assign({}, one.dataValues), { details: JSON.parse(one.dataValues.details) });
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
            message: "SuccessFully Got Data!",
            data: newLoan,
        });
    }
});
exports.getOneLoanInDetail = getOneLoanInDetail;
