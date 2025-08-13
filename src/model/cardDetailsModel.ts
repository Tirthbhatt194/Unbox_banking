import { DataTypes } from "sequelize";
import db from "../config";

const cardDetailsModel = db.define(
  "cardDetails",
  {
    cardId: {
      type: DataTypes.INTEGER,
      references: {
        model: "card",
        key: "id",
      },
    },
    firstYearFee: {
      type: DataTypes.STRING,
    },
    rewards: {
      type: DataTypes.TEXT("long"),
    },
    joiningPerks: {
      type: DataTypes.TEXT("long"),
    },
    feeDetails: {
      type: DataTypes.TEXT("long"),
    },
    documents: {
      type: DataTypes.TEXT("long"),
    },
    specialFeatures: {
      type: DataTypes.TEXT("long"),
    },
    keyHighlights: {
      type: DataTypes.TEXT("long"),
    },
    lifeStyleBenifits: {
      type: DataTypes.TEXT("long"),
    },
    featuresAndBenifits: {
      type: DataTypes.TEXT("long"),
    },
    documentsRequired: {
      type: DataTypes.TEXT("long"),
    },
    eligibilityCriteria: {
      type: DataTypes.TEXT("long"),
    },
    cardFaq: {
      type: DataTypes.TEXT("long"),
    },
    interestRate: {
      type: DataTypes.STRING,
    },
    cashWithdrawalFee: {
      type: DataTypes.STRING,
    },
    rewardsRedemptionFee: {
      type: DataTypes.STRING,
    },
    duplicateStatementFee: {
      type: DataTypes.STRING,
    },
    unsuccessfullECSPayment: {
      type: DataTypes.STRING,
    },
    cashWithdrawalFeeAtForeignATM: {
      type: DataTypes.STRING,
    },
    overlimitFee: {
      type: DataTypes.STRING,
    },
    latePaymentFee: {
      type: DataTypes.STRING,
    },
    salesSlipRetrievalFee: {
      type: DataTypes.STRING,
    },
    outOfTownChequeProcessing: {
      type: DataTypes.TEXT("long"),
    },
    creditCardReplacementFee: {
      type: DataTypes.STRING,
    },
    currencyConversionFee: {
      type: DataTypes.STRING,
    },
    cashPaymentAtBranch: {
      type: DataTypes.STRING,
    },
    copyOfCreditInformationReport: {
      type: DataTypes.STRING,
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

export default cardDetailsModel;
