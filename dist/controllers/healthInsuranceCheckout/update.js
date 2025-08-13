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
exports.updateHealthInsuranceCheckOut = void 0;
const healthInsuranceCheckoutModel_1 = __importDefault(require("../../model/healthInsuranceCheckoutModel"));
const updateHealthInsuranceCheckOut = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    const upd = yield healthInsuranceCheckoutModel_1.default.findOne({
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
        const checkOutDetails = {
            id: parseInt(id),
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
            userId: req.body.userId,
            insuranceCategoryId: req.body.insuranceCategoryId,
            insuranceSubCategoryId: req.body.insuranceSubCategoryId,
            policyId: req.body.policyId,
        };
        const upda = yield healthInsuranceCheckoutModel_1.default.update(checkOutDetails, {
            where: {
                id: id,
            },
        });
        res.status(200).send({
            statusCode: 200,
            status: true,
            message: "Updated SuccessFully!",
            data: checkOutDetails,
        });
        return upda;
    }
});
exports.updateHealthInsuranceCheckOut = updateHealthInsuranceCheckOut;
