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
exports.updateMotorCheckOut = void 0;
const motorInsuranceCheckoutModel_1 = __importDefault(require("../../model/motorInsuranceCheckoutModel"));
const updateMotorCheckOut = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    const upd = yield motorInsuranceCheckoutModel_1.default.findOne({
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
        const motorCheckOutDetail = {
            id: parseInt(id),
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
            userId: req.body.userId,
            insuranceCategoryId: req.body.insuranceCategoryId,
            insuranceSubCategoryId: req.body.insuranceSubCategoryId,
            policyId: req.body.policyId,
            insuranceTypeId: req.body.insuranceTypeId,
        };
        const upda = yield motorInsuranceCheckoutModel_1.default.update(motorCheckOutDetail, {
            where: {
                id: id,
            },
        });
        res.status(200).send({
            statusCode: 200,
            status: true,
            message: "Updated SuccessFully!",
            data: motorCheckOutDetail,
        });
        return upda;
    }
});
exports.updateMotorCheckOut = updateMotorCheckOut;
