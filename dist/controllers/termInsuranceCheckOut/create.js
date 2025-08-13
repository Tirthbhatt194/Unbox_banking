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
exports.createTermInsCheckOut = void 0;
const termInsuranceCheckOutModel_1 = __importDefault(require("../../model/termInsuranceCheckOutModel"));
const unboxPeopleModel_1 = __importDefault(require("../../model/unboxPeopleModel"));
const createTermInsCheckOut = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.body.token || req.query.token || req.headers["authorization"];
    const check = yield unboxPeopleModel_1.default.findOne({
        where: { user_token: token.substring(7) },
    });
    // insert data to faq and send status with object
    const termInsChk = {
        fullName: req.body.fullName,
        emailAddress: req.body.emailAddress,
        annualIncome: req.body.annualIncome,
        occupation: req.body.occupation,
        education: req.body.education,
        lifeCover: req.body.lifeCover,
        coverTillAge: req.body.coverTillAge,
        modeOfPremiumPayment: req.body.modeOfPremiumPayment,
        pinCode: req.body.pinCode,
        city: req.body.city,
        nationality: req.body.nationality,
        vaccinated: req.body.vaccinated,
        doseOfVaccine: req.body.doseOfVaccine,
        gender: req.body.gender,
        payFor: req.body.payFor,
        dateOfBirth: req.body.dateOfBirth,
        tobaccoUser: req.body.tobaccoUser,
        mobileNumber: req.body.mobileNumber,
        userId: check.dataValues.id,
        insuranceCategoryId: req.body.insuranceCategoryId,
        insuranceSubCategoryId: req.body.insuranceSubCategoryId,
        policyId: req.body.policyId,
        panCardNumber: req.body.panCardNumber,
    };
    const termInsuranceCheckOutDetail = yield termInsuranceCheckOutModel_1.default.create(termInsChk);
    // If insert success send data object with status
    if (!termInsuranceCheckOutDetail) {
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
            data: termInsuranceCheckOutDetail,
        });
    }
});
exports.createTermInsCheckOut = createTermInsCheckOut;
