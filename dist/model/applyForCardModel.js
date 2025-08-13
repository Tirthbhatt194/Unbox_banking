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
const applyForCardModel = config_1.default.define("aaply_for_card", {
    designation: {
        type: sequelize_1.DataTypes.STRING,
    },
    firstName: {
        type: sequelize_1.DataTypes.STRING,
    },
    lastName: {
        type: sequelize_1.DataTypes.STRING,
    },
    dateOfBirth: {
        type: sequelize_1.DataTypes.DATEONLY,
    },
    maritialStatus: {
        type: sequelize_1.DataTypes.STRING,
    },
    residentialStatus: {
        type: sequelize_1.DataTypes.STRING,
    },
    address: {
        type: sequelize_1.DataTypes.TEXT("long"),
    },
    yearsLivedAtaAddress: {
        type: sequelize_1.DataTypes.STRING,
    },
    employmentStatus: {
        type: sequelize_1.DataTypes.STRING,
    },
    annualIncomeBeforeTax: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    anyOtherHouseHoldIncome: {
        type: sequelize_1.DataTypes.STRING,
    },
    annualIncomeAfterTax: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    monthlyIncome: {
        type: sequelize_1.DataTypes.STRING,
    },
    peopleDependOnYouFinancially: {
        type: sequelize_1.DataTypes.STRING,
    },
    immediateWithdrawl: {
        type: sequelize_1.DataTypes.STRING,
    },
    emailNotification: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: "unboxPeople",
            key: "id",
        },
    },
    cardId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: "card",
            key: "id",
        },
    },
    bankId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: "bank",
            key: "id",
        },
    },
}, {
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield config_1.default.sync();
}))();
exports.default = applyForCardModel;
