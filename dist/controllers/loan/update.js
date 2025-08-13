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
exports.updateLoan = void 0;
const loan_1 = __importDefault(require("../../model/loan"));
const updateLoan = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    const upd = yield loan_1.default.findOne({
        where: {
            id: id,
        },
    });
    // If data dosent exist
    if (!upd)
        return res.status(404).send({
            statusCode: 404,
            status: false,
            message: "Data Not Found!",
        });
    // If data exist
    if (id === id) {
        //update data and image at particular id and update - send status with data object
        const loan = {
            id: parseInt(id),
            loanName: req.body.loanName,
            interestRate: req.body.interestRate,
            processingFee: req.body.processingFee,
            loanAmount: req.body.loanAmount,
            tenureAmount: req.body.tenureAmount,
            features: req.body.features,
            benifits: req.body.benifits,
            eligibilityCriteria: req.body.eligibilityCriteria,
            documents: req.body.documents,
            description: req.body.description,
            slug: req.body.slug,
            visibility: req.body.visibility,
            riskFactors: req.body.riskFactors,
            bankId: req.body.bankId,
            loanTypeId: req.body.loanTypeId,
            details: req.body.details,
        };
        const upda = yield loan_1.default.update(loan, {
            where: {
                id: id,
            },
        });
        res.status(200).send({
            statusCode: 200,
            status: true,
            message: "Data Updated SuccessFully!",
            data: loan,
        });
        return upda;
    }
});
exports.updateLoan = updateLoan;
