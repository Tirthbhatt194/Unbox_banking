"use strict";
// import { RequestHandler } from "express";
// import policyInquiryModel from "../../model/policyInquiryModel";
// import policyModel from "../../model/policiesModel";
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
exports.getSpecificUserPolicyDetail = void 0;
const policyInquiryModel_1 = __importDefault(require("../../model/policyInquiryModel"));
const policiesModel_1 = __importDefault(require("../../model/policiesModel"));
const insuranceCategoryModel_1 = __importDefault(require("../../model/insuranceCategoryModel"));
const getSpecificUserPolicyDetail = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.id;
        // Get all policy inquiry records for the user
        const policyInquiries = yield policyInquiryModel_1.default.findAll({
            where: { userId },
            include: [
                {
                    model: policiesModel_1.default,
                },
                {
                    model: insuranceCategoryModel_1.default,
                    attributes: ["insuranceName"],
                },
            ],
        });
        // Get all policies associated with the policy inquiry records
        // const policyIds = policyInquiries.map((inquiry: any) => inquiry.policyId);
        // const policies = await policyModel.findAll({
        //   where: { id: policyIds },
        // });
        // If no policies found, return 404
        if (policyInquiries.length === 0) {
            return res.status(204).send("No policies found for this user");
        }
        return res.status(200).send(policyInquiries);
    }
    catch (err) {
        next(err);
    }
});
exports.getSpecificUserPolicyDetail = getSpecificUserPolicyDetail;
