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
exports.updateInquiry = void 0;
const inquiry_1 = __importDefault(require("../../model/inquiry"));
const updateInquiry = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    const upd = yield inquiry_1.default.findOne({
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
        const faq = {
            id: parseInt(id),
            gender: req.body.gender,
            name: req.body.name,
            dateOfBirth: req.body.dateOfBirth,
            mobileNumber: req.body.mobileNumber,
            insuredPersonType: req.body.insuredPersonType,
            age: req.body.age,
            cityNameOrPincode: req.body.cityNameOrPincode,
            medicalHistory: req.body.medicalHistory,
            vehicleNumber: req.body.vehicleNumber,
            vehicleBrand: req.body.vehicleBrand,
            vehicleModel: req.body.vehicleModel,
            vehicleFuelType: req.body.vehicleFuelType,
            vehicleVarient: req.body.vehicleVarient,
            vehicleRegistrationYear: req.body.vehicleRegistrationYear,
            email: req.body.email,
            existingPolicyExpiryDate: req.body.existingPolicyExpiryDate,
            madeClaim: req.body.madeClaim,
            coverOnExistingPolicy: req.body.coverOnExistingPolicy,
            RTOName: req.body.RTOName,
        };
        const upda = yield inquiry_1.default.update(faq, {
            where: {
                id: id,
            },
        });
        res.status(200).send({
            statusCode: 200,
            status: true,
            message: "Data Updated SuccessFully!",
            data: faq,
        });
        return upda;
    }
});
exports.updateInquiry = updateInquiry;
