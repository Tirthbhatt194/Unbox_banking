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
exports.updateCard = void 0;
const cardModel_1 = __importDefault(require("../../model/cardModel"));
const fs_1 = __importDefault(require("fs"));
const updateCard = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    const upd = yield cardModel_1.default.findOne({
        where: {
            id: id,
        },
    });
    // console.log("object", upd);
    // If data dosent exist
    if (!upd)
        return res.status(404).send({
            statusCode: 404,
            status: false,
            message: "Data Not Found!",
        });
    // If data exist
    if (id === id) {
        console.log("object", id);
        //update data and image at particular id and update - send status with data object
        let cardImage = "";
        if (req.hasOwnProperty("file") && upd.getDataValue("cardImage") !== null) {
            if (upd.getDataValue("cardImage") !== req.file.filename) {
                fs_1.default.unlinkSync(`./images/${upd.getDataValue("cardImage")}`);
                cardImage = req.file.filename;
            }
            else if (upd.getDataValue("cardImage") === req.file.filename) {
                fs_1.default.unlinkSync(`./images/${upd.getDataValue("cardImage")}`);
                cardImage = req.file.filename;
            }
            else {
                cardImage = req.file.filename;
            }
        }
        else if (upd.getDataValue("cardImage") === null &&
            req.hasOwnProperty("file")) {
            cardImage = req.file.filename;
        }
        else {
            cardImage = upd.getDataValue("cardImage");
        }
        console.log("object", cardImage);
        const card = {
            id: parseInt(id),
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
            riskFactors: req.body.riskFactors,
            bankId: req.body.bankId,
            paymentNetwork: req.body.paymentNetwork,
            cardImage: cardImage,
            visibility: req.body.visibility,
            details: req.body.details,
        };
        const upda = yield cardModel_1.default.update(card, {
            where: {
                id: id,
            },
        });
        res.status(200).send({
            statusCode: 200,
            status: true,
            message: "Data Updated SuccessFully!",
            data: card,
        });
        return upda;
    }
});
exports.updateCard = updateCard;
