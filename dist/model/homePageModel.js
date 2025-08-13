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
const homePageModel = config_1.default.define("homePage", {
    webLogo: {
        type: sequelize_1.DataTypes.STRING,
    },
    mobileLogo: {
        type: sequelize_1.DataTypes.STRING,
    },
    bannerTitle: {
        type: sequelize_1.DataTypes.STRING,
    },
    bannerText: {
        type: sequelize_1.DataTypes.STRING,
    },
    bannerImage: {
        type: sequelize_1.DataTypes.STRING,
    },
    downloadTitle: {
        type: sequelize_1.DataTypes.STRING,
    },
    downloadText: {
        type: sequelize_1.DataTypes.STRING,
    },
    downloadImage: {
        type: sequelize_1.DataTypes.STRING,
    },
    googleImage: {
        type: sequelize_1.DataTypes.STRING,
    },
    appleImage: {
        type: sequelize_1.DataTypes.STRING,
    },
    advantageTitle: {
        type: sequelize_1.DataTypes.STRING,
    },
    advantageTitle1: {
        type: sequelize_1.DataTypes.STRING,
    },
    advantageText1: {
        type: sequelize_1.DataTypes.STRING,
    },
    advantageImage1: {
        type: sequelize_1.DataTypes.STRING,
    },
    advantageTitle2: {
        type: sequelize_1.DataTypes.STRING,
    },
    advantageText2: {
        type: sequelize_1.DataTypes.STRING,
    },
    advantageImage2: {
        type: sequelize_1.DataTypes.STRING,
    },
    advantageTitle3: {
        type: sequelize_1.DataTypes.STRING,
    },
    advantageText3: {
        type: sequelize_1.DataTypes.STRING,
    },
    advantageImage3: {
        type: sequelize_1.DataTypes.STRING,
    },
    advantageTitle4: {
        type: sequelize_1.DataTypes.STRING,
    },
    advantageText4: {
        type: sequelize_1.DataTypes.STRING,
    },
    advantageImage4: {
        type: sequelize_1.DataTypes.STRING,
    },
    footerLogo: {
        type: sequelize_1.DataTypes.STRING,
    },
    appStoreLink: {
        type: sequelize_1.DataTypes.STRING,
    },
    playStoreLink: {
        type: sequelize_1.DataTypes.STRING,
    },
    howItWorksData: {
        type: sequelize_1.DataTypes.JSON,
    },
}, {
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield config_1.default.sync();
}))();
exports.default = homePageModel;
