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
const termInsuranceCheckOutModel = config_1.default.define("term_insurance_checkout", {
    fullName: {
        type: sequelize_1.DataTypes.STRING,
    },
    emailAddress: {
        type: sequelize_1.DataTypes.STRING,
    },
    annualIncome: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    occupation: {
        type: sequelize_1.DataTypes.STRING,
    },
    education: {
        type: sequelize_1.DataTypes.STRING,
    },
    lifeCover: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    coverTillAge: {
        type: sequelize_1.DataTypes.INTEGER,
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
    vaccinated: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    doseOfVaccine: {
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
    tobaccoUser: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    mobileNumber: {
        type: sequelize_1.DataTypes.STRING,
    },
    panCardNumber: {
        type: sequelize_1.DataTypes.STRING,
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
exports.default = termInsuranceCheckOutModel;
