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
const policiesModel_1 = __importDefault(require("./policiesModel"));
const customerPoliciesModel = config_1.default.define("customerPolicies", {
    policyNumber: {
        type: sequelize_1.DataTypes.NUMBER
    },
    policyStartDate: {
        type: sequelize_1.DataTypes.DATE
    },
    policyEndDate: {
        type: sequelize_1.DataTypes.DATE
    },
    paymentType: {
        type: sequelize_1.DataTypes.ENUM("month", "quaterYear", "halfYear", "year")
    },
    totalPolicyCost: {
        type: sequelize_1.DataTypes.NUMBER
    },
    paymentDone: {
        type: sequelize_1.DataTypes.NUMBER
    },
    paymentPending: {
        type: sequelize_1.DataTypes.NUMBER
    },
    premium: {
        type: sequelize_1.DataTypes.NUMBER
    },
    customerId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: 'customer',
            key: 'id',
        },
    },
    policyId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: 'policies',
            key: 'id',
        },
    },
    visibility: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: true
    },
}, {
    freezeTableName: true,
    timestamps: true,
    paranoid: true
});
customerPoliciesModel.belongsTo(policiesModel_1.default, { foreignKey: 'policyId', onDelete: null });
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield config_1.default.sync();
}))();
exports.default = customerPoliciesModel;
