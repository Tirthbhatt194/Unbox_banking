import { DataTypes } from "sequelize";
import db from "../config";
import loanInquiryModel from "./loanInquiryModel";

const loanModel = db.define(
  "loan",
  {
    loanName: {
      type: DataTypes.STRING,
    },
    interestRate: {
      type: DataTypes.FLOAT,
    },
    processingFee: {
      type: DataTypes.FLOAT,
    },
    loanAmount: {
      type: DataTypes.INTEGER,
    },
    tenureAmount: {
      type: DataTypes.INTEGER,
    },
    features: {
      type: DataTypes.TEXT("long"),
    },
    benifits: {
      type: DataTypes.TEXT("long"),
    },
    eligibilityCriteria: {
      type: DataTypes.TEXT("long"),
    },
    documents: {
      type: DataTypes.TEXT("long"),
    },
    description: {
      type: DataTypes.TEXT("long"),
    },
    faq: {
      type: DataTypes.TEXT("long"),
    },
    slug: {
      type: DataTypes.STRING,
    },
    visibility: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    riskFactors: {
      type: DataTypes.TEXT("long"),
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
    details: {
      type: DataTypes.JSON,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
  }
);

loanModel.hasMany(loanInquiryModel, {
  foreignKey: "loanId",
});

loanInquiryModel.belongsTo(loanModel, {
  foreignKey: "loanId",
});

(async () => {
  await db.sync();
})();

export default loanModel;
