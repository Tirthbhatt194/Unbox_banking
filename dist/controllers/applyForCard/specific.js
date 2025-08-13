"use strict";
// import { RequestHandler } from "express";
// import applyForCardModel from "../../model/applyForCardModel";
// import cardModel from "../../model/cardModel";
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
exports.getSpecificUserCardDetail = void 0;
const applyForCardModel_1 = __importDefault(require("../../model/applyForCardModel"));
const cardModel_1 = __importDefault(require("../../model/cardModel"));
const getSpecificUserCardDetail = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.id;
        // Get all applyForCard records for the user
        const applyForCards = yield applyForCardModel_1.default.findAll({
            where: { userId },
            attributes: ["cardId"],
        });
        // Get all cards associated with the applyForCard records
        const cardIds = applyForCards.map((applyForCard) => applyForCard.cardId);
        const cards = yield cardModel_1.default.findAll({
            where: { id: cardIds },
        });
        // If no cards found, return 204
        if (cards.length === 0) {
            return res.status(204).send("No cards found for this user");
        }
        return res.status(200).send(cards);
    }
    catch (err) {
        next(err);
    }
});
exports.getSpecificUserCardDetail = getSpecificUserCardDetail;
