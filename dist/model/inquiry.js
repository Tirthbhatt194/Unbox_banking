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
const inquiryModel = config_1.default.define("inquiry", {
    gender: {
        type: sequelize_1.DataTypes.STRING,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
    },
    dateOfBirth: {
        type: sequelize_1.DataTypes.DATE,
    },
    mobileNumber: {
        type: sequelize_1.DataTypes.STRING,
    },
    insuredPersonType: {
        type: sequelize_1.DataTypes.JSON,
    },
    age: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    cityNameOrPincode: {
        type: sequelize_1.DataTypes.STRING,
    },
    medicalHistory: {
        type: sequelize_1.DataTypes.STRING,
    },
    vehicleNumber: {
        type: sequelize_1.DataTypes.STRING,
    },
    vehicleBrand: {
        type: sequelize_1.DataTypes.STRING,
    },
    vehicleModel: {
        type: sequelize_1.DataTypes.STRING,
    },
    vehicleFuelType: {
        type: sequelize_1.DataTypes.STRING,
    },
    vehicleVarient: {
        type: sequelize_1.DataTypes.STRING,
    },
    vehicleRegistrationYear: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
    },
    existingPolicyExpiryDate: {
        type: sequelize_1.DataTypes.DATE,
    },
    madeClaim: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    coverOnExistingPolicy: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    RTOName: {
        type: sequelize_1.DataTypes.STRING,
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
exports.default = inquiryModel;
