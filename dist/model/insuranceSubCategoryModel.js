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
const inquiry_1 = __importDefault(require("./inquiry"));
const insuranceTypeModel_1 = __importDefault(require("./insuranceTypeModel"));
const policyInquiryModel_1 = __importDefault(require("./policyInquiryModel"));
const otherInsuranceInquiryModel_1 = __importDefault(require("./otherInsuranceInquiryModel"));
const insuranceSubCategoryModel = config_1.default.define("insuranceSubCategory", {
    insuranceSubCategoryName: {
        type: sequelize_1.DataTypes.STRING,
    },
    insuranceSubCategoryDescription: {
        type: sequelize_1.DataTypes.TEXT("long"),
    },
    insuranceSubCategoryDefinition: {
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
    features: {
        type: sequelize_1.DataTypes.JSON,
    },
    formTitle: {
        type: sequelize_1.DataTypes.STRING,
    },
    visibility: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: true,
    },
    insuranceSubCategoryImage: {
        type: sequelize_1.DataTypes.STRING,
    },
    slug: {
        type: sequelize_1.DataTypes.STRING,
    },
    eligibilityCriteria: {
        type: sequelize_1.DataTypes.TEXT("long"),
    },
    insuranceCategoryId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: "insuranceCategory",
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
}, {
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
});
insuranceSubCategoryModel.belongsTo(insuranceTypeModel_1.default, {
    foreignKey: "insuranceCategoryTypeId",
    onDelete: null,
});
insuranceSubCategoryModel.hasMany(inquiry_1.default, {
    foreignKey: "insuranceSubCategoryId",
});
inquiry_1.default.belongsTo(insuranceSubCategoryModel, {
    foreignKey: "insuranceSubCategoryId",
});
insuranceSubCategoryModel.hasMany(otherInsuranceInquiryModel_1.default, {
    foreignKey: "insuranceSubCategoryId",
});
otherInsuranceInquiryModel_1.default.belongsTo(insuranceSubCategoryModel, {
    foreignKey: "insuranceSubCategoryId",
});
insuranceSubCategoryModel.hasMany(policyInquiryModel_1.default, {
    foreignKey: "insuranceSubCategoryId",
});
policyInquiryModel_1.default.belongsTo(insuranceSubCategoryModel, {
    foreignKey: "insuranceSubCategoryId",
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield config_1.default.sync();
}))();
exports.default = insuranceSubCategoryModel;
