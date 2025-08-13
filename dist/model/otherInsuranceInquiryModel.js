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
const otherInsuranceInquiryModel = config_1.default.define("other_insurance_inquiry", {
    fullName: {
        type: sequelize_1.DataTypes.STRING,
    },
    mobileNumber: {
        type: sequelize_1.DataTypes.STRING,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
    },
    city: {
        type: sequelize_1.DataTypes.STRING,
    },
    ownerOrTenan: {
        type: sequelize_1.DataTypes.STRING,
    },
    valueOfBuilding: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    carpetArea: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    constructionCostPerSqFt: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    valueOfHouseHoldItems: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    organizationName: {
        type: sequelize_1.DataTypes.STRING,
    },
    destination: {
        type: sequelize_1.DataTypes.JSON,
    },
    startDate: {
        type: sequelize_1.DataTypes.DATEONLY,
    },
    endDate: {
        type: sequelize_1.DataTypes.DATEONLY,
    },
    numberOfTravellers: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    existingMedicalProblem: {
        type: sequelize_1.DataTypes.BOOLEAN,
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
}, {
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield config_1.default.sync();
}))();
exports.default = otherInsuranceInquiryModel;
