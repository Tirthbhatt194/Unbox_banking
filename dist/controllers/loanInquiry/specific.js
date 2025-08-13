"use strict";
// import { RequestHandler } from "express";
// import loanInquiryModel from "../../model/loanInquiryModel";
// import loanModel from "../../model/loan";
// import loanTypeModel from "../../model/loanTypeModel";
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
exports.getSpecificUserLoanDetail = void 0;
const loanInquiryModel_1 = __importDefault(require("../../model/loanInquiryModel"));
const loan_1 = __importDefault(require("../../model/loan"));
const loanTypeModel_1 = __importDefault(require("../../model/loanTypeModel"));
const getSpecificUserLoanDetail = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.id;
        // Get all loan inquiry records for the user
        const loanInquiries = yield loanInquiryModel_1.default.findAll({
            where: { userId },
            attributes: ["loanId"],
        });
        // Get all loans associated with the loan inquiry records
        const loanIds = loanInquiries.map((inquiry) => inquiry.loanId);
        const loans = yield loan_1.default.findAll({
            where: { id: loanIds },
            include: [
                {
                    model: loanTypeModel_1.default,
                },
            ],
        });
        // If no loans found, return 404
        if (loans.length === 0) {
            return res.status(204).send("No loans found for this user");
        }
        return res.status(200).send(loans);
    }
    catch (err) {
        next(err);
    }
});
exports.getSpecificUserLoanDetail = getSpecificUserLoanDetail;
