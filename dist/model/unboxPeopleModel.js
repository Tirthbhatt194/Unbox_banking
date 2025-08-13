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
const applyForCardModel_1 = __importDefault(require("./applyForCardModel"));
const loanInquiryModel_1 = __importDefault(require("./loanInquiryModel"));
const unboxPeopleModel = config_1.default.define("unboxPeople", {
    // roleId: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //         model: 'roleModel',
    //         key: 'id',
    //     },
    // },
    first_name: {
        type: sequelize_1.DataTypes.STRING,
    },
    last_name: {
        type: sequelize_1.DataTypes.STRING,
    },
    designation: {
        type: sequelize_1.DataTypes.STRING,
    },
    contactNumber: {
        type: sequelize_1.DataTypes.STRING,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
    },
    postalAddress: {
        type: sequelize_1.DataTypes.STRING,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
    },
    gender: {
        type: sequelize_1.DataTypes.STRING,
    },
    user_token: {
        type: sequelize_1.DataTypes.STRING,
    },
    device_token: {
        type: sequelize_1.DataTypes.STRING,
    },
    unboxPeopleImage: {
        type: sequelize_1.DataTypes.STRING,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
    },
    is_active: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: true,
    },
    resetToken: {
        type: sequelize_1.DataTypes.STRING,
    },
    expiration: {
        type: sequelize_1.DataTypes.DATE,
    },
    used: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
    },
    lastLogin: {
        type: sequelize_1.DataTypes.STRING,
    },
    verified: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
    },
    registered: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
    },
    otp: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    annualIncome: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    anyOtherHouseHoldIncome: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    city: {
        type: sequelize_1.DataTypes.STRING,
    },
    dateOfBirth: {
        type: sequelize_1.DataTypes.DATEONLY,
    },
    employmentStatus: {
        type: sequelize_1.DataTypes.STRING,
    },
    maritialStatus: {
        type: sequelize_1.DataTypes.STRING,
    },
    monthlyIncome: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    peopleDependOnYouFinancially: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    residentialStatus: {
        type: sequelize_1.DataTypes.STRING,
    },
    pincode: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    state: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
});
unboxPeopleModel.hasMany(applyForCardModel_1.default, {
    foreignKey: "userId",
});
applyForCardModel_1.default.belongsTo(unboxPeopleModel, {
    foreignKey: "userId",
});
unboxPeopleModel.hasMany(policyInquiryModel_1.default, {
    foreignKey: "userId",
});
policyInquiryModel_1.default.belongsTo(unboxPeopleModel, {
    foreignKey: "userId",
});
unboxPeopleModel.hasMany(loanInquiryModel_1.default, {
    foreignKey: "userId",
});
loanInquiryModel_1.default.belongsTo(unboxPeopleModel, {
    foreignKey: "userId",
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield config_1.default.sync();
}))();
exports.default = unboxPeopleModel;
