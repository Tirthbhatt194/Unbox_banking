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
const healthInsuranceCheckOutModel = config_1.default.define("health_insurance_checkout", {
    coverAmount: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    policyPeriod: {
        type: sequelize_1.DataTypes.STRING,
    },
    riders: {
        type: sequelize_1.DataTypes.STRING,
    },
    membersCovered: {
        type: sequelize_1.DataTypes.JSON,
    },
    proposer: {
        type: sequelize_1.DataTypes.STRING,
    },
    proposerFullName: {
        type: sequelize_1.DataTypes.STRING,
    },
    proposerGender: {
        type: sequelize_1.DataTypes.STRING,
    },
    proposerPanCardNumber: {
        type: sequelize_1.DataTypes.STRING,
    },
    proposerAddress: {
        type: sequelize_1.DataTypes.TEXT("long"),
    },
    proposerEmail: {
        type: sequelize_1.DataTypes.STRING,
    },
    proposerMobileNumber: {
        type: sequelize_1.DataTypes.STRING,
    },
    proposerEmergencyMobileNumber: {
        type: sequelize_1.DataTypes.STRING,
    },
    membersDetails: {
        type: sequelize_1.DataTypes.JSON,
    },
    nomineeName: {
        type: sequelize_1.DataTypes.STRING,
    },
    nomineeRelation: {
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
exports.default = healthInsuranceCheckOutModel;
