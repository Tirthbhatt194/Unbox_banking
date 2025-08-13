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
exports.createInquiry = void 0;
const inquiry_1 = __importDefault(require("../../model/inquiry"));
const createInquiry = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let key = req.params.key;
    // insert data to faq and send status with object
    if (key === "Term Insurance") {
        const inq = {
            // gender: req.body.gender as String,
            name: req.body.name,
            dateOfBirth: req.body.dateOfBirth,
            mobileNumber: req.body.mobileNumber,
            // insuredPersonType: req.body.insuredPersonType as [],
            // age: req.body.age as Number,
            // cityNameOrPincode: req.body.cityNameOrPincode as String,
            // medicalHistory: req.body.medicalHistory as String,
            // vehicleNumber: req.body.vehicleNumber as Number,
            // vehicleBrand: req.body.vehicleBrand as String,
            // vehicleModel: req.body.vehicleModel as String,
            // vehicleFuelType: req.body.vehicleFuelType as String,
            // vehicleVarient: req.body.vehicleVarient as String,
            // vehicleRegistrationYear: req.body.vehicleRegistrationYear as Number,
            email: req.body.email,
            // existingPolicyExpiryDate: req.body.existingPolicyExpiryDate as Date,
            // madeClaim: req.body.madeClaim as boolean,
            // coverOnExistingPolicy: req.body.coverOnExistingPolicy as Number,
            // RTOName: req.body.RTOName as String,
            insuranceCategoryId: req.body.insuranceCategoryId,
            insuranceSubCategoryId: req.body.insuranceSubCategoryId,
        };
        const Inq = yield inquiry_1.default.create(inq);
        console.log("NUMBER ====>", typeof Inq.dataValues.mobileNumber);
        // If insert success send data object with status
        if (!Inq) {
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
                message: "Inquiry Successfully Created!",
                data: Inq,
            });
        }
    }
    else if (key === "Investment Plan") {
        const inq = {
            // gender: req.body.gender as String,
            name: req.body.name,
            // dateOfBirth: req.body.dateOfBirth as Date,
            mobileNumber: req.body.mobileNumber,
            // insuredPersonType: req.body.insuredPersonType as [],
            // age: req.body.age as Number,
            // cityNameOrPincode: req.body.cityNameOrPincode as String,
            // medicalHistory: req.body.medicalHistory as String,
            // vehicleNumber: req.body.vehicleNumber as Number,
            // vehicleBrand: req.body.vehicleBrand as String,
            // vehicleModel: req.body.vehicleModel as String,
            // vehicleFuelType: req.body.vehicleFuelType as String,
            // vehicleVarient: req.body.vehicleVarient as String,
            // vehicleRegistrationYear: req.body.vehicleRegistrationYear as Number,
            // email: req.body.email as String,
            // existingPolicyExpiryDate: req.body.existingPolicyExpiryDate as Date,
            // madeClaim: req.body.madeClaim as boolean,
            // coverOnExistingPolicy: req.body.coverOnExistingPolicy as Number,
            // RTOName: req.body.RTOName as String,
            insuranceCategoryId: req.body.insuranceCategoryId,
            insuranceSubCategoryId: req.body.insuranceSubCategoryId,
        };
        const Inq = yield inquiry_1.default.create(inq);
        // If insert success send data object with status
        if (!Inq) {
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
                message: "Inquiry Successfully Created!",
                data: Inq,
            });
        }
    }
    else if (key === "Health Insurance") {
        const inq = {
            gender: req.body.gender,
            name: req.body.name,
            // dateOfBirth: req.body.dateOfBirth as Date,
            mobileNumber: req.body.mobileNumber,
            insuredPersonType: req.body.insuredPersonType,
            age: req.body.age,
            cityNameOrPincode: req.body.cityNameOrPincode,
            // medicalHistory: req.body.medicalHistory as String,
            // vehicleNumber: req.body.vehicleNumber as Number,
            // vehicleBrand: req.body.vehicleBrand as String,
            // vehicleModel: req.body.vehicleModel as String,
            // vehicleFuelType: req.body.vehicleFuelType as String,
            // vehicleVarient: req.body.vehicleVarient as String,
            // vehicleRegistrationYear: req.body.vehicleRegistrationYear as Number,
            // email: req.body.email as String,
            // existingPolicyExpiryDate: req.body.existingPolicyExpiryDate as Date,
            // madeClaim: req.body.madeClaim as boolean,
            // coverOnExistingPolicy: req.body.coverOnExistingPolicy as Number,
            // RTOName: req.body.RTOName as String,
            insuranceCategoryId: req.body.insuranceCategoryId,
            insuranceSubCategoryId: req.body.insuranceSubCategoryId,
        };
        const Inq = yield inquiry_1.default.create(inq);
        // If insert success send data object with status
        if (!Inq) {
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
                message: "Inquiry Successfully Created!",
                data: Inq,
            });
        }
    }
    else if (key === "Motor Insurance") {
        const inq = {
            // gender: req.body.gender as String,
            name: req.body.name,
            // dateOfBirth: req.body.dateOfBirth as Date,
            mobileNumber: req.body.mobileNumber,
            // insuredPersonType: req.body.insuredPersonType as [],
            // age: req.body.age as Number,
            // cityNameOrPincode: req.body.cityNameOrPincode as String,
            // medicalHistory: req.body.medicalHistory as String,
            vehicleNumber: req.body.vehicleNumber,
            vehicleBrand: req.body.vehicleBrand,
            vehicleModel: req.body.vehicleModel,
            vehicleFuelType: req.body.vehicleFuelType,
            vehicleVarient: req.body.vehicleVarient,
            vehicleRegistrationYear: req.body.vehicleRegistrationYear,
            email: req.body.email,
            // existingPolicyExpiryDate: req.body.existingPolicyExpiryDate as Date,
            // madeClaim: req.body.madeClaim as boolean,
            // coverOnExistingPolicy: req.body.coverOnExistingPolicy as Number,
            RTOName: req.body.RTOName,
            insuranceCategoryId: req.body.insuranceCategoryId,
            insuranceSubCategoryId: req.body.insuranceSubCategoryId,
        };
        const Inq = yield inquiry_1.default.create(inq);
        // If insert success send data object with status
        if (!Inq) {
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
                message: "Inquiry Successfully Created!",
                data: Inq,
            });
        }
    }
});
exports.createInquiry = createInquiry;
