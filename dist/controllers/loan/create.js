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
exports.createLoan = void 0;
const loan_1 = __importDefault(require("../../model/loan"));
const createLoan = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // insert data to faq and send status with object
    const loan = {
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
        faq: req.body.faq,
        slug: req.body.slug,
        visibility: req.body.visibility,
        riskFactors: req.body.riskFactors,
        bankId: req.body.bankId,
        loanTypeId: req.body.loanTypeId,
        details: req.body.details,
    };
    const Loan = yield loan_1.default.create(loan);
    // If insert success send data object with status
    if (!Loan) {
        res.status(400).send({
            statusCode: 400,
            status: false,
            message: "Failed to insert data",
        });
    }
    else {
        res.status(201).send({
            statusCode: 201,
            status: true,
            message: "Loan Successfully Created!",
            data: Loan,
        });
    }
});
exports.createLoan = createLoan;
