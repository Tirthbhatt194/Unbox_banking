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
exports.createCardDetail = void 0;
const cardDetailsModel_1 = __importDefault(require("../../model/cardDetailsModel"));
const createCardDetail = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // insert data to faq and send status with object
    const cd = {
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
    const CardD = yield cardDetailsModel_1.default.create(cd);
    // If insert success send data object with status
    if (!CardD) {
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
            message: "Card Details Successfully Created!",
            data: CardD,
        });
    }
});
exports.createCardDetail = createCardDetail;
