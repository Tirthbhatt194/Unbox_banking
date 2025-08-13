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
const insuranceSubCategoryModel_1 = __importDefault(require("./insuranceSubCategoryModel"));
const faqModel = config_1.default.define("faq", {
    questions: {
        type: sequelize_1.DataTypes.TEXT('long'),
    },
    answers: {
        type: sequelize_1.DataTypes.TEXT('long'),
    },
    visibility: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: true
    },
    insuranceCategoryId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: 'insuranceCategory',
            key: 'id',
        },
    },
    insuranceSubCategoryId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: 'insuranceSubCategory',
            key: 'id',
        },
    },
}, {
    freezeTableName: true,
    timestamps: true,
    paranoid: true
});
faqModel.belongsTo(insuranceCategoryModel_1.default, { foreignKey: "insuranceCategoryId", onDelete: null });
faqModel.belongsTo(insuranceSubCategoryModel_1.default, { foreignKey: "insuranceSubCategoryId", onDelete: null });
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield config_1.default.sync();
}))();
exports.default = faqModel;
