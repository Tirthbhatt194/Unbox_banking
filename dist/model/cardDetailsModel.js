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
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config"));
const cardDetailsModel = config_1.default.define("cardDetails", {
    cardId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: "card",
            key: "id",
        },
    },
    firstYearFee: {
        type: sequelize_1.DataTypes.STRING,
    },
    rewards: {
        type: sequelize_1.DataTypes.TEXT("long"),
    },
    joiningPerks: {
        type: sequelize_1.DataTypes.TEXT("long"),
    },
    feeDetails: {
        type: sequelize_1.DataTypes.TEXT("long"),
    },
    documents: {
        type: sequelize_1.DataTypes.TEXT("long"),
    },
    specialFeatures: {
        type: sequelize_1.DataTypes.TEXT("long"),
    },
    keyHighlights: {
        type: sequelize_1.DataTypes.TEXT("long"),
    },
    lifeStyleBenifits: {
        type: sequelize_1.DataTypes.TEXT("long"),
    },
    featuresAndBenifits: {
        type: sequelize_1.DataTypes.TEXT("long"),
    },
    documentsRequired: {
        type: sequelize_1.DataTypes.TEXT("long"),
    },
    eligibilityCriteria: {
        type: sequelize_1.DataTypes.TEXT("long"),
    },
    cardFaq: {
        type: sequelize_1.DataTypes.TEXT("long"),
    },
    interestRate: {
        type: sequelize_1.DataTypes.STRING,
    },
    cashWithdrawalFee: {
        type: sequelize_1.DataTypes.STRING,
    },
    rewardsRedemptionFee: {
        type: sequelize_1.DataTypes.STRING,
    },
    duplicateStatementFee: {
        type: sequelize_1.DataTypes.STRING,
    },
    unsuccessfullECSPayment: {
        type: sequelize_1.DataTypes.STRING,
    },
    cashWithdrawalFeeAtForeignATM: {
        type: sequelize_1.DataTypes.STRING,
    },
    overlimitFee: {
        type: sequelize_1.DataTypes.STRING,
    },
    latePaymentFee: {
        type: sequelize_1.DataTypes.STRING,
    },
    salesSlipRetrievalFee: {
        type: sequelize_1.DataTypes.STRING,
    },
    outOfTownChequeProcessing: {
        type: sequelize_1.DataTypes.TEXT("long"),
    },
    creditCardReplacementFee: {
        type: sequelize_1.DataTypes.STRING,
    },
    currencyConversionFee: {
        type: sequelize_1.DataTypes.STRING,
    },
    cashPaymentAtBranch: {
        type: sequelize_1.DataTypes.STRING,
    },
    copyOfCreditInformationReport: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield config_1.default.sync();
}))();
exports.default = cardDetailsModel;
