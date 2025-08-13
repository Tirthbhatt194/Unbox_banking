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
exports.createOtherInsInquiry = void 0;
const otherInsuranceInquiryModel_1 = __importDefault(require("../../model/otherInsuranceInquiryModel"));
const createOtherInsInquiry = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // insert data to faq and send status with object
    const inquiry = {
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
    const Inquiry = yield otherInsuranceInquiryModel_1.default.create(inquiry);
    // If insert success send data object with status
    if (!Inquiry) {
        res.status(400).send({
            statusCode: 400,
            status: false,
            message: "Failed to insert data",
        });
    }
    res.status(201).send({
        statusCode: 201,
        status: true,
        message: "Inquiry Successfully Created!",
        data: Inquiry,
    });
});
exports.createOtherInsInquiry = createOtherInsInquiry;
