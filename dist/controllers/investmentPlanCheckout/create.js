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
exports.createInvestmentPlanCheckOut = void 0;
const investmentPlanCheckOutModel_1 = __importDefault(require("../../model/investmentPlanCheckOutModel"));
const unboxPeopleModel_1 = __importDefault(require("../../model/unboxPeopleModel"));
const createInvestmentPlanCheckOut = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // insert data to faq and send status with object
    const token = req.body.token || req.query.token || req.headers["authorization"];
    const check = yield unboxPeopleModel_1.default.findOne({
        where: { user_token: token.substring(7) },
    });
    const investmentPlanChk = {
        fullName: req.body.fullName,
        emailAddress: req.body.emailAddress,
        annualIncome: req.body.annualIncome,
        withdrawlAfter: req.body.withdrawlAfter,
        investedAmount: req.body.investedAmount,
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
        userId: check.dataValues.id,
        insuranceCategoryId: req.body.insuranceCategoryId,
        insuranceSubCategoryId: req.body.insuranceSubCategoryId,
        policyId: req.body.policyId,
    };
    const investmentPlanCheckOutDetail = yield investmentPlanCheckOutModel_1.default.create(investmentPlanChk);
    // If insert success send data object with status
    if (!investmentPlanCheckOutDetail) {
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
            message: "Details Successfully Created!",
            data: investmentPlanCheckOutDetail,
        });
    }
});
exports.createInvestmentPlanCheckOut = createInvestmentPlanCheckOut;
