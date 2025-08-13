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
exports.policyImage = exports.createPolicies = void 0;
const multer_1 = require("./../../middleware/multer");
const policiesModel_1 = __importDefault(require("../../model/policiesModel"));
const createPolicies = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let policyImage = "";
    // Check if image is sent as set image as null
    if (req.hasOwnProperty("file") === true) {
        policyImage = req.file.filename;
    }
    else {
        policyImage = null;
    }
    // insert data to faq and send status with object
    const policies = {
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
    const proj = yield policiesModel_1.default.create(policies);
    // If insert success send data object with status
    if (!proj) {
        res.status(400).send({
            statusCode: 400,
            status: false,
            message: "Failed To Insert Data!",
        });
    }
    else {
        res.status(201).send({
            statusCode: 201,
            status: true,
            message: "Policy Created SuccessFully!",
            data: proj,
        });
    }
});
exports.createPolicies = createPolicies;
// use multer middleware to insert image to single column
exports.policyImage = multer_1.upload1.single("policyImage");
