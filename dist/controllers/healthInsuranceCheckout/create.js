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
exports.createHealthInsuranceCheckOut = void 0;
const healthInsuranceCheckoutModel_1 = __importDefault(require("../../model/healthInsuranceCheckoutModel"));
const unboxPeopleModel_1 = __importDefault(require("../../model/unboxPeopleModel"));
const createHealthInsuranceCheckOut = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // insert data to faq and send status with object
    const token = req.body.token || req.query.token || req.headers["authorization"];
    const check = yield unboxPeopleModel_1.default.findOne({
        where: { user_token: token.substring(7) },
    });
    const checkOutDetails = {
        coverAmount: req.body.coverAmount,
        policyPeriod: req.body.policyPeriod,
        riders: req.body.riders,
        membersCovered: req.body.membersCovered,
        proposer: req.body.proposer,
        proposerFullName: req.body.proposerFullName,
        proposerGender: req.body.proposerGender,
        proposerPanCardNumber: req.body.proposerPanCardNumber,
        proposerAddress: req.body.proposerAddress,
        proposerEmail: req.body.proposerEmail,
        proposerMobileNumber: req.body.proposerMobileNumber,
        proposerEmergencyMobileNumber: req.body
            .proposerEmergencyMobileNumber,
        membersDetails: req.body.membersDetails,
        nomineeName: req.body.nomineeName,
        nomineeRelation: req.body.nomineeRelation,
        userId: check.dataValues.id,
        insuranceCategoryId: req.body.insuranceCategoryId,
        insuranceSubCategoryId: req.body.insuranceSubCategoryId,
        policyId: req.body.policyId,
    };
    const CheckOutDetails = yield healthInsuranceCheckoutModel_1.default.create(checkOutDetails);
    // If insert success send data object with status
    if (!CheckOutDetails) {
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
            message: "CHECKOUT DETAIL Successfully Created!",
            data: CheckOutDetails,
        });
    }
});
exports.createHealthInsuranceCheckOut = createHealthInsuranceCheckOut;
