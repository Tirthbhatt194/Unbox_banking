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
const investmentPlanCheckOutModel = config_1.default.define("investment_plan_checkout", {
    fullName: {
        type: sequelize_1.DataTypes.STRING,
    },
    emailAddress: {
        type: sequelize_1.DataTypes.STRING,
    },
    annualIncome: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    withdrawlAfter: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    investedAmount: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    planOption: {
        type: sequelize_1.DataTypes.STRING,
    },
    for: {
        type: sequelize_1.DataTypes.STRING,
    },
    modeOfPremiumPayment: {
        type: sequelize_1.DataTypes.STRING,
    },
    pinCode: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    city: {
        type: sequelize_1.DataTypes.STRING,
    },
    nationality: {
        type: sequelize_1.DataTypes.STRING,
    },
    gender: {
        type: sequelize_1.DataTypes.STRING,
    },
    payFor: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    dateOfBirth: {
        type: sequelize_1.DataTypes.DATEONLY,
    },
    mobileNumber: {
        type: sequelize_1.DataTypes.STRING,
    },
    panCardNumber: {
        type: sequelize_1.DataTypes.STRING,
    },
    assuredPersonName: {
        type: sequelize_1.DataTypes.STRING,
    },
    assuredPersonEmail: {
        type: sequelize_1.DataTypes.STRING,
    },
    assuredPersonPinCode: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    assuredPersonCity: {
        type: sequelize_1.DataTypes.STRING,
    },
    assuredPersonNationality: {
        type: sequelize_1.DataTypes.STRING,
    },
    assuredPersonGender: {
        type: sequelize_1.DataTypes.STRING,
    },
    assuredPersonDOB: {
        type: sequelize_1.DataTypes.DATEONLY,
    },
    assuredPersonPhoneNumber: {
        type: sequelize_1.DataTypes.STRING,
    },
    retirementAge: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    startPensionFrom: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    lumpsumPayoutIn: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: "unboxPeople",
            key: "id",
        },
    },
    insuranceCategoryId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: "insuranceCategory",
            key: "id",
        },
    },
    insuranceSubCategoryId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: "insuranceSubCategory",
            key: "id",
        },
    },
    policyId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: "policies",
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
exports.default = investmentPlanCheckOutModel;
