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
exports.updatePolicyInquiry = void 0;
const policyInquiryModel_1 = __importDefault(require("../../model/policyInquiryModel"));
const updatePolicyInquiry = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    const upd = yield policyInquiryModel_1.default.findOne({
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
        const policyInquiry = {
            id: parseInt(id),
            fullName: req.body.fullName,
            emailAddress: req.body.emailAddress,
            annualIncome: req.body.annualIncome,
            occupation: req.body.occupation,
            education: req.body.education,
            address: req.body.address,
            pinCode: req.body.pinCode,
            city: req.body.city,
            state: req.body.state,
            nationality: req.body.nationality,
            gender: req.body.gender,
            dateOfBirth: req.body.dateOfBirth,
            mobileNumber: req.body.mobileNumber,
            panCardNumber: req.body.panCardNumber,
            vehicleNumber: req.body.vehicleNumber,
            vehicleRegistrationDate: req.body.vehicleRegistrationDate,
            vehicleType: req.body.vehicleType,
            nomineeName: req.body.nomineeName,
            nomineeRelation: req.body.nomineeRelation,
            destination: req.body.destination,
            numberOfTravellers: req.body.numberOfTravellers,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            membersDetails: req.body.membersDetails,
            numberOfMembers: req.body.numberOfMembers,
            valueOfBuilding: req.body.valueOfBuilding,
            carpetArea: req.body.carpetArea,
            constructionCostPerSqFt: req.body.constructionCostPerSqFt,
            valueOfHouseHoldItems: req.body.valueOfHouseHoldItems,
            is_active: req.body.is_active,
            organizationName: req.body.organizationName,
            employeeStrength: req.body.employeeStrength,
            userId: req.body.userId,
            insuranceCategoryId: req.body.insuranceCategoryId,
            insuranceSubCategoryId: req.body.insuranceSubCategoryId,
            policyId: req.body.policyId,
            insuranceTypeId: req.body.insuranceTypeId,
        };
        const upda = yield policyInquiryModel_1.default.update(policyInquiry, {
            where: {
                id: id,
            },
        });
        res.status(200).send({
            statusCode: 200,
            status: true,
            message: "Data Updated SuccessFully!",
            data: policyInquiry,
        });
        return upda;
    }
});
exports.updatePolicyInquiry = updatePolicyInquiry;
