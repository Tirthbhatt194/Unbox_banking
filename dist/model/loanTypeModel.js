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
const loan_1 = __importDefault(require("./loan"));
const loanInquiryModel_1 = __importDefault(require("./loanInquiryModel"));
const loanTypeModel = config_1.default.define("loantype", {
    loanTypeName: {
        type: sequelize_1.DataTypes.STRING,
    },
    loanDescription: {
        type: sequelize_1.DataTypes.TEXT("long"),
    },
    documents: {
        type: sequelize_1.DataTypes.TEXT("long"),
    },
    eligibilityCriteria: {
        type: sequelize_1.DataTypes.TEXT("long"),
    },
    features: {
        type: sequelize_1.DataTypes.TEXT("long"),
    },
    benifits: {
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
    image: {
        type: sequelize_1.DataTypes.STRING,
    },
    visibility: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: true,
    },
}, {
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
});
loanTypeModel.hasMany(loan_1.default, {
    foreignKey: "loanTypeId",
});
loan_1.default.belongsTo(loanTypeModel, {
    foreignKey: "loanTypeId",
});
loanTypeModel.hasMany(loanInquiryModel_1.default, {
    foreignKey: "loanTypeId",
});
loanInquiryModel_1.default.belongsTo(loanTypeModel, {
    foreignKey: "loanTypeId",
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield config_1.default.sync();
}))();
exports.default = loanTypeModel;
