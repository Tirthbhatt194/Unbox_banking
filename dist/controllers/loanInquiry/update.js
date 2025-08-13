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
exports.updateLoanInquiry = void 0;
const loanInquiryModel_1 = __importDefault(require("../../model/loanInquiryModel"));
const updateLoanInquiry = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    const upd = yield loanInquiryModel_1.default.findOne({
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
        const faq = {
            id: parseInt(id),
            designation: req.body.designation,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            dateOfBirth: req.body.dateOfBirth,
            maritialStatus: req.body.maritialStatus,
            residentialStatus: req.body.residentialStatus,
            address: req.body.address,
            yearsLivedAtaAddress: req.body.yearsLivedAtaAddress,
            employmentStatus: req.body.employmentStatus,
            annualIncomeBeforeTax: req.body.annualIncomeBeforeTax,
            anyOtherHouseHoldIncome: req.body.anyOtherHouseHoldIncome,
            annualIncomeAfterTax: req.body.annualIncomeAfterTax,
            monthlyIncome: req.body.monthlyIncome,
            peopleDependOnYouFinancially: req.body
                .peopleDependOnYouFinancially,
            immediateWithdrawl: req.body.immediateWithdrawl,
            emailNotification: req.body.emailNotification,
            userId: req.body.userId,
            loanId: req.body.loanId,
            bankId: req.body.bankId,
            loanTypeId: req.body.loanTypeId,
        };
        const upda = yield loanInquiryModel_1.default.update(faq, {
            where: {
                id: id,
            },
        });
        res.status(200).send({
            statusCode: 200,
            status: true,
            message: "Data Updated SuccessFully!",
            data: faq,
        });
        return upda;
    }
});
exports.updateLoanInquiry = updateLoanInquiry;
