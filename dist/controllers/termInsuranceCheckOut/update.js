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
exports.updateTermInsCheckOut = void 0;
const termInsuranceCheckOutModel_1 = __importDefault(require("../../model/termInsuranceCheckOutModel"));
const updateTermInsCheckOut = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    const upd = yield termInsuranceCheckOutModel_1.default.findOne({
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
        const termInsuranceCheckOutDetail = {
            id: parseInt(id),
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
            userId: req.body.userId,
            insuranceCategoryId: req.body.insuranceCategoryId,
            insuranceSubCategoryId: req.body.insuranceSubCategoryId,
            policyId: req.body.policyId,
            panCardNumber: req.body.panCardNumber,
        };
        const upda = yield termInsuranceCheckOutModel_1.default.update(termInsuranceCheckOutDetail, {
            where: {
                id: id,
            },
        });
        res.status(200).send({
            statusCode: 200,
            status: true,
            message: "Updated SuccessFully!",
            data: termInsuranceCheckOutDetail,
        });
        return upda;
    }
});
exports.updateTermInsCheckOut = updateTermInsCheckOut;
