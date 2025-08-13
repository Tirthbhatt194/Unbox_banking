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
const policyInquiryModel = config_1.default.define("policy_inquiry", {
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
    address: {
        type: sequelize_1.DataTypes.STRING,
    },
    pinCode: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    city: {
        type: sequelize_1.DataTypes.STRING,
    },
    state: {
        type: sequelize_1.DataTypes.STRING,
    },
    nationality: {
        type: sequelize_1.DataTypes.STRING,
    },
    gender: {
        type: sequelize_1.DataTypes.STRING,
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
    vehicleNumber: {
        type: sequelize_1.DataTypes.STRING,
    },
    vehicleRegistrationDate: {
        type: sequelize_1.DataTypes.DATEONLY,
    },
    vehicleType: {
        type: sequelize_1.DataTypes.STRING,
    },
    nomineeName: {
        type: sequelize_1.DataTypes.STRING,
    },
    nomineeRelation: {
        type: sequelize_1.DataTypes.STRING,
    },
    destination: {
        type: sequelize_1.DataTypes.STRING,
    },
    numberOfTravellers: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    startDate: {
        type: sequelize_1.DataTypes.DATEONLY,
    },
    endDate: {
        type: sequelize_1.DataTypes.DATEONLY,
    },
    membersDetails: {
        type: sequelize_1.DataTypes.JSON,
    },
    numberOfMembers: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    valueOfBuilding: {
        type: sequelize_1.DataTypes.FLOAT,
    },
    carpetArea: {
        type: sequelize_1.DataTypes.STRING,
    },
    constructionCostPerSqFt: {
        type: sequelize_1.DataTypes.STRING,
    },
    valueOfHouseHoldItems: {
        type: sequelize_1.DataTypes.STRING,
    },
    organizationName: {
        type: sequelize_1.DataTypes.STRING,
    },
    employeeStrength: {
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
    is_active: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: true,
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
    insuranceTypeId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: "insuranceCategoryType",
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
exports.default = policyInquiryModel;
