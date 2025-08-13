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
exports.updateCardDetail = void 0;
const cardDetailsModel_1 = __importDefault(require("../../model/cardDetailsModel"));
const updateCardDetail = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    const upd = yield cardDetailsModel_1.default.findOne({
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
        const cd = {
            id: parseInt(id),
            cardId: req.body.cardId,
            firstYearFee: req.body.firstYearFee,
            rewards: req.body.rewards,
            joiningPerks: req.body.joiningPerks,
            feeDetails: req.body.feeDetails,
            documents: req.body.documents,
            specialFeatures: req.body.specialFeatures,
            keyHighlights: req.body.keyHighlights,
            lifeStyleBenifits: req.body.lifeStyleBenifits,
            featuresAndBenifits: req.body.featuresAndBenifits,
            documentsRequired: req.body.documentsRequired,
            eligibilityCriteria: req.body.eligibilityCriteria,
            cardFaq: req.body.cardFaq,
            interestRate: req.body.interestRate,
            cashWithdrawalFee: req.body.cashWithdrawalFee,
            rewardsRedemptionFee: req.body.rewardsRedemptionFee,
            duplicateStatementFee: req.body.duplicateStatementFee,
            unsuccessfullECSPayment: req.body.unsuccessfullECSPayment,
            cashWithdrawalFeeAtForeignATM: req.body
                .cashWithdrawalFeeAtForeignATM,
            overlimitFee: req.body.overlimitFee,
            latePaymentFee: req.body.latePaymentFee,
            salesSlipRetrievalFee: req.body.salesSlipRetrievalFee,
            outOfTownChequeProcessing: req.body.outOfTownChequeProcessing,
            creditCardReplacementFee: req.body.creditCardReplacementFee,
            currencyConversionFee: req.body.currencyConversionFee,
            cashPaymentAtBranch: req.body.cashPaymentAtBranch,
            copyOfCreditInformationReport: req.body
                .copyOfCreditInformationReport,
        };
        const upda = yield cardDetailsModel_1.default.update(cd, {
            where: {
                id: id,
            },
        });
        res.status(200).send({
            statusCode: 200,
            status: true,
            message: "Data Updated SuccessFully!",
            data: cd,
        });
        return upda;
    }
});
exports.updateCardDetail = updateCardDetail;
