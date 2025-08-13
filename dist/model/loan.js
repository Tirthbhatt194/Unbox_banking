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
const loanInquiryModel_1 = __importDefault(require("./loanInquiryModel"));
const loanModel = config_1.default.define("loan", {
    loanName: {
        type: sequelize_1.DataTypes.STRING,
    },
    interestRate: {
        type: sequelize_1.DataTypes.FLOAT,
    },
    processingFee: {
        type: sequelize_1.DataTypes.FLOAT,
    },
    loanAmount: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    tenureAmount: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    features: {
        type: sequelize_1.DataTypes.TEXT("long"),
    },
    benifits: {
        type: sequelize_1.DataTypes.TEXT("long"),
    },
    eligibilityCriteria: {
        type: sequelize_1.DataTypes.TEXT("long"),
    },
    documents: {
        type: sequelize_1.DataTypes.TEXT("long"),
    },
    description: {
        type: sequelize_1.DataTypes.TEXT("long"),
    },
    faq: {
        type: sequelize_1.DataTypes.TEXT("long"),
    },
    slug: {
        type: sequelize_1.DataTypes.STRING,
    },
    visibility: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: true,
    },
    riskFactors: {
        type: sequelize_1.DataTypes.TEXT("long"),
    },
    bankId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: "bank",
            key: "id",
        },
    },
    loanTypeId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: "loantype",
            key: "id",
        },
    },
    details: {
        type: sequelize_1.DataTypes.JSON,
    },
}, {
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
});
loanModel.hasMany(loanInquiryModel_1.default, {
    foreignKey: "loanId",
});
loanInquiryModel_1.default.belongsTo(loanModel, {
    foreignKey: "loanId",
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield config_1.default.sync();
}))();
exports.default = loanModel;
