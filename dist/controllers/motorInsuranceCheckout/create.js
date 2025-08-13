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
exports.createMotorCheckOut = void 0;
const motorInsuranceCheckoutModel_1 = __importDefault(require("../../model/motorInsuranceCheckoutModel"));
const unboxPeopleModel_1 = __importDefault(require("../../model/unboxPeopleModel"));
const createMotorCheckOut = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.body.token || req.query.token || req.headers["authorization"];
    const check = yield unboxPeopleModel_1.default.findOne({
        where: { user_token: token.substring(7) },
    });
    // insert data to faq and send status with object
    const motorChk = {
        vehicleNumber: req.body.vehicleNumber,
        vehicleRegistrationDate: req.body.vehicleRegistrationDate,
        vehicleType: req.body.vehicleType,
        fullName: req.body.fullName,
        email: req.body.email,
        mobileNumber: req.body.mobileNumber,
        nomineeName: req.body.nomineeName,
        nomineeRelation: req.body.nomineeRelation,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        pincode: req.body.pincode,
        idv: req.body.idv,
        totalPolicyTerm: req.body.totalPolicyTerm,
        claimSettled: req.body.claimSettled,
        userId: check.dataValues.id,
        insuranceCategoryId: req.body.insuranceCategoryId,
        insuranceSubCategoryId: req.body.insuranceSubCategoryId,
        policyId: req.body.policyId,
        insuranceTypeId: req.body.insuranceTypeId,
    };
    const motorCheckOutDetail = yield motorInsuranceCheckoutModel_1.default.create(motorChk);
    // If insert success send data object with status
    if (!motorCheckOutDetail) {
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
            data: motorCheckOutDetail,
        });
    }
});
exports.createMotorCheckOut = createMotorCheckOut;
