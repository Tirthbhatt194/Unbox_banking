import { DataTypes } from "sequelize";
import db from "../config";
import policyInquiryModel from "./policyInquiryModel";
import applyForCardModel from "./applyForCardModel";
import loanInquiryModel from "./loanInquiryModel";
const unboxPeopleModel = db.define(
  "unboxPeople",
  {
    // roleId: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //         model: 'roleModel',
    //         key: 'id',
    //     },
    // },
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    designation: {
      type: DataTypes.STRING,
    },
    contactNumber: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    postalAddress: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.STRING,
    },
    user_token: {
      type: DataTypes.STRING,
    },
    device_token: {
      type: DataTypes.STRING,
    },
    unboxPeopleImage: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    resetToken: {
      type: DataTypes.STRING,
    },
    expiration: {
      type: DataTypes.DATE,
    },
    used: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    lastLogin: {
      type: DataTypes.STRING,
    },
    verified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    registered: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    otp: {
      type: DataTypes.INTEGER,
    },
    annualIncome: {
      type: DataTypes.INTEGER,
    },
    anyOtherHouseHoldIncome: {
      type: DataTypes.INTEGER,
    },
    city: {
      type: DataTypes.STRING,
    },
    dateOfBirth: {
      type: DataTypes.DATEONLY,
    },
    employmentStatus: {
      type: DataTypes.STRING,
    },
    maritialStatus: {
      type: DataTypes.STRING,
    },
    monthlyIncome: {
      type: DataTypes.INTEGER,
    },
    peopleDependOnYouFinancially: {
      type: DataTypes.INTEGER,
    },
    residentialStatus: {
      type: DataTypes.STRING,
    },
    pincode: {
      type: DataTypes.INTEGER,
    },
    state: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
  }
);

unboxPeopleModel.hasMany(applyForCardModel, {
  foreignKey: "userId",
});

applyForCardModel.belongsTo(unboxPeopleModel, {
  foreignKey: "userId",
});

unboxPeopleModel.hasMany(policyInquiryModel, {
  foreignKey: "userId",
});

policyInquiryModel.belongsTo(unboxPeopleModel, {
  foreignKey: "userId",
});

unboxPeopleModel.hasMany(loanInquiryModel, {
  foreignKey: "userId",
});

loanInquiryModel.belongsTo(unboxPeopleModel, {
  foreignKey: "userId",
});

(async () => {
  await db.sync();
})();

export default unboxPeopleModel;
