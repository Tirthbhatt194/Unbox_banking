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
const motorInsuranceCheckOutModel = config_1.default.define("motor_insurance_checkout", {
    vehicleNumber: {
        type: sequelize_1.DataTypes.STRING,
    },
    vehicleRegistrationDate: {
        type: sequelize_1.DataTypes.DATEONLY,
    },
    vehicleType: {
        type: sequelize_1.DataTypes.STRING,
    },
    fullName: {
        type: sequelize_1.DataTypes.STRING,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
    },
    mobileNumber: {
        type: sequelize_1.DataTypes.STRING,
    },
    nomineeName: {
        type: sequelize_1.DataTypes.STRING,
    },
    nomineeRelation: {
        type: sequelize_1.DataTypes.STRING,
    },
    address: {
        type: sequelize_1.DataTypes.STRING,
    },
    city: {
        type: sequelize_1.DataTypes.STRING,
    },
    state: {
        type: sequelize_1.DataTypes.STRING,
    },
    pincode: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    idv: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    totalPolicyTerm: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    claimSettled: {
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
exports.default = motorInsuranceCheckOutModel;
