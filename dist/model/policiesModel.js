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
const insuranceCategoryModel_1 = __importDefault(require("./insuranceCategoryModel"));
const insuranceProviderModel_1 = __importDefault(require("./insuranceProviderModel"));
const insuranceSubCategoryModel_1 = __importDefault(require("./insuranceSubCategoryModel"));
const insuranceTypeModel_1 = __importDefault(require("./insuranceTypeModel"));
const policyInquiryModel_1 = __importDefault(require("./policyInquiryModel"));
const policyModel = config_1.default.define("policies", {
    policyName: {
        type: sequelize_1.DataTypes.STRING,
    },
    policyFeatures: {
        type: sequelize_1.DataTypes.TEXT("long"),
    },
    lifeCover: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    lumpsumPayout: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    returnOfPremium: {
        type: sequelize_1.DataTypes.FLOAT,
    },
    claimSetteled: {
        type: sequelize_1.DataTypes.FLOAT,
    },
    payYearly: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    maxAgeLimit: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    coverTillAge: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    cashlessHospital: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    cashlessGarages: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    IDV: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    covered: {
        type: sequelize_1.DataTypes.TEXT("long"),
    },
    notCovered: {
        type: sequelize_1.DataTypes.TEXT("long"),
    },
    what: {
        type: sequelize_1.DataTypes.TEXT("long"),
    },
    why: {
        type: sequelize_1.DataTypes.TEXT("long"),
    },
    how: {
        type: sequelize_1.DataTypes.TEXT("long"),
    },
    premium: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    totalPolicyTerm: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    about: {
        type: sequelize_1.DataTypes.TEXT("long"),
    },
    policyBenifits: {
        type: sequelize_1.DataTypes.TEXT("long"),
    },
    policyImage: {
        type: sequelize_1.DataTypes.STRING,
    },
    riskFactors: {
        type: sequelize_1.DataTypes.TEXT("long"),
    },
    visibility: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: true,
    },
    topPlan: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
    },
    medicalExpence: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    passportLoss: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    baggageLoss: {
        type: sequelize_1.DataTypes.INTEGER,
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
    insuranceCategoryTypeId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: "insuranceCategoryType",
            key: "id",
        },
    },
    insuranceProviderId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: "insuranceProvider",
            key: "id",
        },
    },
}, {
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
});
policyModel.belongsTo(insuranceCategoryModel_1.default, {
    foreignKey: "insuranceCategoryId",
    onDelete: null,
});
policyModel.belongsTo(insuranceSubCategoryModel_1.default, {
    foreignKey: "insuranceSubCategoryId",
    onDelete: null,
});
policyModel.belongsTo(insuranceTypeModel_1.default, {
    foreignKey: "insuranceCategoryTypeId",
    onDelete: null,
});
policyModel.belongsTo(insuranceProviderModel_1.default, {
    foreignKey: "insuranceProviderId",
    onDelete: null,
});
policyModel.hasMany(policyInquiryModel_1.default, {
    foreignKey: "policyId",
});
policyInquiryModel_1.default.belongsTo(policyModel, {
    foreignKey: "policyId",
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield config_1.default.sync();
}))();
exports.default = policyModel;
