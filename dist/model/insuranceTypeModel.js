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
const policyInquiryModel_1 = __importDefault(require("./policyInquiryModel"));
const insuranceCategoryTypeModel = config_1.default.define("insuranceCategoryType", {
    insuranceCategoryTypeName: {
        type: sequelize_1.DataTypes.STRING,
    },
    insuranceCategoryTypeDescription: {
        type: sequelize_1.DataTypes.TEXT("long"),
    },
    insuranceCategoryTypeDefinition: {
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
    visibility: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: true,
    },
    insuranceCategoryTypeImage: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
});
insuranceCategoryTypeModel.hasMany(policyInquiryModel_1.default, {
    foreignKey: "insuranceTypeId",
});
policyInquiryModel_1.default.belongsTo(insuranceCategoryTypeModel, {
    foreignKey: "insuranceTypeId",
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield config_1.default.sync();
}))();
exports.default = insuranceCategoryTypeModel;
