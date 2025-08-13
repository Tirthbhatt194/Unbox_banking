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
const cardDetailsModel_1 = __importDefault(require("./cardDetailsModel"));
const applyForCardModel_1 = __importDefault(require("./applyForCardModel"));
const cardModel = config_1.default.define("card", {
    cardName: {
        type: sequelize_1.DataTypes.STRING,
    },
    cardFeatures: {
        type: sequelize_1.DataTypes.TEXT("long"),
    },
    cardReviews: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    cardCategory: {
        type: sequelize_1.DataTypes.STRING,
    },
    cardType: {
        type: sequelize_1.DataTypes.STRING,
    },
    cardRewards: {
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
    eligibilityCriteria: {
        type: sequelize_1.DataTypes.TEXT("long"),
    },
    cashWithdrawalFee: {
        type: sequelize_1.DataTypes.STRING,
    },
    cardFaq: {
        type: sequelize_1.DataTypes.TEXT("long"),
    },
    cardDescription: {
        type: sequelize_1.DataTypes.TEXT("long"),
    },
    joiningFee: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    annualFee: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    keyHighlights: {
        type: sequelize_1.DataTypes.TEXT("long"),
    },
    benifits: {
        type: sequelize_1.DataTypes.TEXT("long"),
    },
    riskFactors: {
        type: sequelize_1.DataTypes.TEXT("long"),
    },
    bankId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: "bank",
            key: "id",
        },
    },
    paymentNetwork: {
        type: sequelize_1.DataTypes.STRING,
    },
    cardImage: {
        type: sequelize_1.DataTypes.STRING,
    },
    visibility: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: true,
    },
    details: {
        type: sequelize_1.DataTypes.JSON,
    },
}, {
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
});
// cardModel.hasMany(cardDetailsModel, {
//   foreignKey: "cardId",
// });
cardDetailsModel_1.default.belongsTo(cardModel, {
    foreignKey: "cardId",
});
cardModel.hasMany(applyForCardModel_1.default, {
    foreignKey: "cardId",
});
applyForCardModel_1.default.belongsTo(cardModel, {
    foreignKey: "cardId",
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield config_1.default.sync();
}))();
exports.default = cardModel;
