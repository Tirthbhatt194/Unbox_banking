import { DataTypes } from "sequelize";
import db from "../config";
import cardDetailsModel from "./cardDetailsModel";
import applyForCardModel from "./applyForCardModel";
const cardModel = db.define(
  "card",
  {
    cardName: {
      type: DataTypes.STRING,
    },
    cardFeatures: {
      type: DataTypes.TEXT("long"),
    },
    cardReviews: {
      type: DataTypes.INTEGER,
    },
    cardCategory: {
      type: DataTypes.STRING,
    },
    cardType: {
      type: DataTypes.STRING,
    },
    cardRewards: {
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
    eligibilityCriteria: {
      type: DataTypes.TEXT("long"),
    },
    cashWithdrawalFee: {
      type: DataTypes.STRING,
    },
    cardFaq: {
      type: DataTypes.TEXT("long"),
    },
    cardDescription: {
      type: DataTypes.TEXT("long"),
    },
    joiningFee: {
      type: DataTypes.INTEGER,
    },
    annualFee: {
      type: DataTypes.INTEGER,
    },
    keyHighlights: {
      type: DataTypes.TEXT("long"),
    },
    benifits: {
      type: DataTypes.TEXT("long"),
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
    paymentNetwork: {
      type: DataTypes.STRING,
    },
    cardImage: {
      type: DataTypes.STRING,
    },
    visibility: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
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

// cardModel.hasMany(cardDetailsModel, {
//   foreignKey: "cardId",
// });

cardDetailsModel.belongsTo(cardModel, {
  foreignKey: "cardId",
});

cardModel.hasMany(applyForCardModel, {
  foreignKey: "cardId",
});

applyForCardModel.belongsTo(cardModel, {
  foreignKey: "cardId",
});

(async () => {
  await db.sync();
})();

export default cardModel;
