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
const insuranceProviderAddressModel = config_1.default.define("insuranceProviderAddress", {
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
    phone1: {
        type: sequelize_1.DataTypes.STRING,
    },
    phone2: {
        type: sequelize_1.DataTypes.STRING,
    },
    fax: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
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
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield config_1.default.sync();
}))();
exports.default = insuranceProviderAddressModel;
