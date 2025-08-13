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
const customerPoliciesModel_1 = __importDefault(require("./customerPoliciesModel"));
const documentModel_1 = __importDefault(require("./documentModel"));
const customerModel = config_1.default.define("customer", {
    firstName: {
        type: sequelize_1.DataTypes.STRING,
    },
    lastName: {
        type: sequelize_1.DataTypes.STRING,
    },
    dateOfBirth: {
        type: sequelize_1.DataTypes.DATE,
    },
    customerImage: {
        type: sequelize_1.DataTypes.STRING,
    },
    age: {
        type: sequelize_1.DataTypes.STRING,
    },
    contactNo: {
        type: sequelize_1.DataTypes.STRING,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
    },
    country: {
        type: sequelize_1.DataTypes.STRING,
    },
    state: {
        type: sequelize_1.DataTypes.STRING,
    },
    district: {
        type: sequelize_1.DataTypes.STRING,
    },
    taluka: {
        type: sequelize_1.DataTypes.STRING,
    },
    address_1: {
        type: sequelize_1.DataTypes.STRING,
    },
    address_2: {
        type: sequelize_1.DataTypes.STRING,
    },
    zipcode: {
        type: sequelize_1.DataTypes.INTEGER,
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
customerModel.hasMany(customerPoliciesModel_1.default, {
    foreignKey: "customerId",
    onDelete: null,
});
customerModel.hasMany(documentModel_1.default, {
    foreignKey: "customerId",
    onDelete: null,
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield config_1.default.sync();
}))();
exports.default = customerModel;
