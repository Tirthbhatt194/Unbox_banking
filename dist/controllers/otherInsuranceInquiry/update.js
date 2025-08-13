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
exports.updateOtherInsInquiry = void 0;
const otherInsuranceInquiryModel_1 = __importDefault(require("../../model/otherInsuranceInquiryModel"));
const updateOtherInsInquiry = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    const upd = yield otherInsuranceInquiryModel_1.default.findOne({
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
        const inquiry = {
            id: parseInt(id),
            fullName: req.body.fullName,
            mobileNumber: req.body.mobileNumber,
            email: req.body.email,
            city: req.body.city,
            ownerOrTenan: req.body.ownerOrTenan,
            valueOfBuilding: req.body.valueOfBuilding,
            carpetArea: req.body.carpetArea,
            constructionCostPerSqFt: req.body.constructionCostPerSqFt,
            valueOfHouseHoldItems: req.body.valueOfHouseHoldItems,
            organizationName: req.body.organizationName,
            destination: req.body.destination,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            numberOfTravellers: req.body.numberOfTravellers,
            existingMedicalProblem: req.body.existingMedicalProblem,
            insuranceCategoryId: req.body.insuranceCategoryId,
            insuranceSubCategoryId: req.body.insuranceSubCategoryId,
        };
        const upda = yield otherInsuranceInquiryModel_1.default.update(inquiry, {
            where: {
                id: id,
            },
        });
        res.status(200).send({
            statusCode: 200,
            status: true,
            message: "Data Updated SuccessFully!",
            data: inquiry,
        });
        return upda;
    }
});
exports.updateOtherInsInquiry = updateOtherInsInquiry;
