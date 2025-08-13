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
const loanTypeModel_1 = __importDefault(require("./loanTypeModel"));
const loanModel = config_1.default.define("loantype", {
    loanTypeName: {
        type: sequelize_1.DataTypes.STRING,
    },
    loanDescription: {
        type: sequelize_1.DataTypes.STRING,
    },
    documents: {
        type: sequelize_1.DataTypes.STRING,
    },
    eligibilityCriteria: {
        type: sequelize_1.DataTypes.STRING,
    },
    features: {
        type: sequelize_1.DataTypes.STRING,
    },
    benifits: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
});
loanModel.hasMany(loanTypeModel_1.default, {
    foreignKey: "loanId",
});
loanTypeModel_1.default.belongsTo(loanModel, {
    foreignKey: "loanId",
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield config_1.default.sync({ alter: true });
}))();
exports.default = loanModel;
