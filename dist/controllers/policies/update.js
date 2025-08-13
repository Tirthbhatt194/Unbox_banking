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
exports.UpdateDetails = void 0;
const policiesModel_1 = __importDefault(require("../../model/policiesModel"));
const fs_1 = __importDefault(require("fs"));
const UpdateDetails = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    const upd = yield policiesModel_1.default.findOne({
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
        let policyImage = "";
        // Image validation before update
        if (req.hasOwnProperty("file") &&
            upd.getDataValue("policyImage") !== null) {
            if (upd.getDataValue("policyImage") !== req.file.filename) {
                fs_1.default.unlinkSync(`./images/${upd.getDataValue("policyImage")}`);
                policyImage = req.file.filename;
            }
            else if (upd.getDataValue("policyImage") === req.file.filename) {
                fs_1.default.unlinkSync(`./images/${upd.getDataValue("policyImage")}`);
                policyImage = req.file.filename;
            }
            else {
                policyImage = req.file.filename;
            }
        }
        else if (req.hasOwnProperty("file") &&
            upd.getDataValue("policyImage") === null) {
            policyImage = req.file.filename;
        }
        else {
            policyImage = upd.getDataValue("policyImage");
        }
        //update data and image at particular id and update - send status with data object
        const updatePolicies = {
            id: parseInt(id),
            policyName: req.body.policyName,
            policyFeatures: req.body.policyFeatures,
            lifeCover: req.body.lifeCover,
            lumpsumPayout: req.body.lumpsumPayout,
            returnOfPremium: req.body.returnOfPremium,
            claimSetteled: req.body.claimSetteled,
            payYearly: req.body.payYearly,
            maxAgeLimit: req.body.maxAgeLimit,
            coverTillAge: req.body.coverTillAge,
            cashlessHospital: req.body.cashlessHospital,
            cashlessGarages: req.body.cashlessGarages,
            IDV: req.body.IDV,
            covered: req.body.covered,
            notCovered: req.body.notCovered,
            what: req.body.what,
            why: req.body.why,
            how: req.body.how,
            premium: req.body.premium,
            totalPolicyTerm: req.body.totalPolicyTerm,
            about: req.body.about,
            policyBenifits: req.body.policyBenifits,
            visibility: req.body.visibility,
            topPlan: req.body.topPlan,
            policyImage: policyImage,
            medicalExpence: req.body.medicalExpence,
            passportLoss: req.body.passportLoss,
            baggageLoss: req.body.baggageLoss,
            riskFactors: req.body.riskFactors,
            insuranceCategoryId: req.body.insuranceCategoryId,
            insuranceSubCategoryId: req.body.insuranceSubCategoryId,
            insuranceProviderId: req.body.insuranceProviderId,
            insuranceCategoryTypeId: req.body.insuranceCategoryTypeId,
        };
        const upda = yield policiesModel_1.default.update(updatePolicies, {
            where: {
                id: id,
            },
        });
        res.status(200).send({
            statusCode: 200,
            status: true,
            message: "Data Updated SuccessFully!",
            data: updatePolicies,
        });
        return upda;
    }
});
exports.UpdateDetails = UpdateDetails;
