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
exports.cardImage = exports.createCard = void 0;
const multer_1 = require("../../middleware/multer");
const cardModel_1 = __importDefault(require("../../model/cardModel"));
const createCard = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let cardImage = "";
    // Check if image is sent as set image as null
    if (req.hasOwnProperty("file") === true) {
        cardImage = req.file.filename;
    }
    else {
        cardImage = null;
    }
    // insert data to faq and send status with object
    const card = {
        cardName: req.body.cardName,
        cardFeatures: req.body.cardFeatures,
        cardReviews: req.body.cardReviews,
        cardCategory: req.body.cardCategory,
        cardType: req.body.cardType,
        cardRewards: req.body.cardRewards,
        joiningPerks: req.body.joiningPerks,
        feeDetails: req.body.feeDetails,
        documents: req.body.documents,
        eligibilityCriteria: req.body.eligibilityCriteria,
        cashWithdrawalFee: req.body.cashWithdrawalFee,
        cardFaq: req.body.cardFaq,
        cardDescription: req.body.cardDescription,
        joiningFee: req.body.joiningFee,
        annualFee: req.body.annualFee,
        keyHighlights: req.body.keyHighlights,
        benifits: req.body.benifits,
        bankId: req.body.bankId,
        riskFactors: req.body.riskFactors,
        paymentNetwork: req.body.paymentNetwork,
        cardImage: cardImage,
        visibility: req.body.visibility,
        details: req.body.details,
    };
    const cred = yield cardModel_1.default.create(card);
    // If insert success send data object with status
    if (!cred) {
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
            message: "Card Created SuccessFully!",
            data: cred,
        });
    }
});
exports.createCard = createCard;
// use multer middleware to insert image to single column
exports.cardImage = multer_1.upload1.single("cardImage");
