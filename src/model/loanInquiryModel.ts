import { type } from "os";
import { DataTypes } from "sequelize";
import db from "../config";

const loanInquiryModel = db.define(
  "loan_inquiry",
  {
    designation: {
      type: DataTypes.STRING,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    dateOfBirth: {
      type: DataTypes.DATEONLY,
    },
    maritialStatus: {
      type: DataTypes.STRING,
    },
    residentialStatus: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.TEXT("long"),
    },
    yearsLivedAtaAddress: {
      type: DataTypes.STRING,
    },
    employmentStatus: {
      type: DataTypes.STRING,
    },
    annualIncomeBeforeTax: {
      type: DataTypes.INTEGER,
    },
    anyOtherHouseHoldIncome: {
      type: DataTypes.STRING,
    },
    annualIncomeAfterTax: {
      type: DataTypes.INTEGER,
    },
    monthlyIncome: {
      type: DataTypes.STRING,
    },
    peopleDependOnYouFinancially: {
      type: DataTypes.STRING,
    },
    immediateWithdrawl: {
      type: DataTypes.STRING,
    },
    emailNotification: {
      type: DataTypes.BOOLEAN,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "unboxPeople",
        key: "id",
      },
    },
    loanId: {
      type: DataTypes.INTEGER,
      references: {
        model: "loan",
        key: "id",
      },
    },
    bankId: {
      type: DataTypes.INTEGER,
      references: {
        model: "bank",
        key: "id",
      },
    },
    loanTypeId: {
      type: DataTypes.INTEGER,
      references: {
        model: "loantype",
        key: "id",
      },
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
  }
);

(async () => {
  await db.sync();
})();

export default loanInquiryModel;
