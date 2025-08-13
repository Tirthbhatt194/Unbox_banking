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
exports.createApplyForCardDetail = void 0;
const applyForCardModel_1 = __importDefault(require("../../model/applyForCardModel"));
const bankModel_1 = __importDefault(require("../../model/bankModel"));
const cardModel_1 = __importDefault(require("../../model/cardModel"));
const unboxPeopleModel_1 = __importDefault(require("../../model/unboxPeopleModel"));
const email_1 = require("../../middleware/email");
const createApplyForCardDetail = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.body.token || req.query.token || req.headers["authorization"];
    const check = yield unboxPeopleModel_1.default.findOne({
        where: { user_token: token.substring(7) },
    });
    // insert data to faq and send status with object
    const applyForCardDetails = {
        designation: req.body.designation,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dateOfBirth: req.body.dateOfBirth,
        maritialStatus: req.body.maritialStatus,
        residentialStatus: req.body.residentialStatus,
        address: req.body.address,
        yearsLivedAtaAddress: req.body.yearsLivedAtaAddress,
        employmentStatus: req.body.employmentStatus,
        annualIncomeBeforeTax: req.body.annualIncomeBeforeTax,
        anyOtherHouseHoldIncome: req.body.anyOtherHouseHoldIncome,
        annualIncomeAfterTax: req.body.annualIncomeAfterTax,
        monthlyIncome: req.body.monthlyIncome,
        peopleDependOnYouFinancially: req.body
            .peopleDependOnYouFinancially,
        immediateWithdrawl: req.body.immediateWithdrawl,
        emailNotification: req.body.emailNotification,
        userId: check === null || check === void 0 ? void 0 : check.dataValues.id,
        cardId: req.body.cardId,
        bankId: req.body.bankId,
    };
    const ApplyForCard = yield applyForCardModel_1.default.create(applyForCardDetails);
    const userInfo = yield unboxPeopleModel_1.default.findOne({
        where: {
            id: ApplyForCard.dataValues.userId,
        },
    });
    console.log("");
    const card = yield applyForCardModel_1.default.findOne({
        where: {
            id: ApplyForCard.dataValues.id,
        },
        include: [
            {
                model: bankModel_1.default,
            },
            {
                model: cardModel_1.default,
            },
        ],
    });
    let data = {
        to: userInfo.dataValues.email,
        cardName: card.dataValues.card.cardName,
        first_name: userInfo.dataValues.first_name,
        name: card.dataValues.bank.name,
        path: "src/controllers/emailTemplates/cardInquiryTemplate.html",
    };
    (0, email_1.sendMail)(data);
    // If insert success send data object with status
    if (!ApplyForCard) {
        res.status(400).send({
            statusCode: 400,
            status: false,
            message: "Failed to Apply For Card",
        });
    }
    else {
        res.status(201).send({
            statusCode: 201,
            status: true,
            message: "ApplyForCardDetail Successfully Created!",
            data: ApplyForCard,
        });
    }
});
exports.createApplyForCardDetail = createApplyForCardDetail;
