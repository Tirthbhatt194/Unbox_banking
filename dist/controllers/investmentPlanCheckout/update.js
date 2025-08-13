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
exports.updateInvestmentPlanCheckOut = void 0;
const investmentPlanCheckOutModel_1 = __importDefault(require("../../model/investmentPlanCheckOutModel"));
const updateInvestmentPlanCheckOut = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    const upd = yield investmentPlanCheckOutModel_1.default.findOne({
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
        const investmentPlanCheckOutDetail = {
            id: parseInt(id),
            fullName: req.body.fullName,
            emailAddress: req.body.emailAddress,
            annualIncome: req.body.annualIncome,
            withdrawlAfter: req.body.withdrawlAfter,
            investedAmount: req.body.investedAmountv,
            planOption: req.body.planOption,
            for: req.body.for,
            modeOfPremiumPayment: req.body.modeOfPremiumPayment,
            pinCode: req.body.pinCode,
            city: req.body.city,
            nationality: req.body.nationality,
            gender: req.body.gender,
            payFor: req.body.payFor,
            dateOfBirth: req.body.dateOfBirth,
            mobileNumber: req.body.mobileNumber,
            panCardNumber: req.body.panCardNumber,
            assuredPersonName: req.body.assuredPersonName,
            assuredPersonEmail: req.body.assuredPersonEmail,
            assuredPersonPinCode: req.body.assuredPersonPinCode,
            assuredPersonCity: req.body.assuredPersonCity,
            assuredPersonNationality: req.body.assuredPersonNationality,
            assuredPersonGender: req.body.assuredPersonGender,
            assuredPersonDOB: req.body.assuredPersonDOB,
            assuredPersonPhoneNumber: req.body.assuredPersonPhoneNumber,
            retirementAge: req.body.retirementAge,
            startPensionFrom: req.body.startPensionFrom,
            lumpsumPayoutIn: req.body.lumpsumPayoutIn,
            userId: req.body.userId,
            insuranceCategoryId: req.body.insuranceCategoryId,
            insuranceSubCategoryId: req.body.insuranceSubCategoryId,
            policyId: req.body.policyId,
        };
        const upda = yield investmentPlanCheckOutModel_1.default.update(investmentPlanCheckOutDetail, {
            where: {
                id: id,
            },
        });
        res.status(200).send({
            statusCode: 200,
            status: true,
            message: "Updated SuccessFully!",
            data: investmentPlanCheckOutDetail,
        });
        return upda;
    }
});
exports.updateInvestmentPlanCheckOut = updateInvestmentPlanCheckOut;
