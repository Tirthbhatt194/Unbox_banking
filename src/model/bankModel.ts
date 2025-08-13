import { DataTypes } from "sequelize";
import db from "../config";
import cardModel from "./cardModel";
import applyForCardModel from "./applyForCardModel";
import loanTypeodel from "./loan";
import loanInquiryModel from "./loanInquiryModel";
// import termInsuranceCheckOutModel from "./termInsuranceCheckOutModel";

const bankModel = db.define(
  "bank",
  {
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT("long"),
    },
    bankImage: {
      type: DataTypes.STRING,
    },
    visibility: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
  }
);

bankModel.hasMany(cardModel, {
  foreignKey: "bankId",
});

cardModel.belongsTo(bankModel, {
  foreignKey: "bankId",
});

bankModel.hasMany(applyForCardModel, {
  foreignKey: "bankId",
});

applyForCardModel.belongsTo(bankModel, {
  foreignKey: "bankId",
});

bankModel.hasMany(loanTypeodel, {
  foreignKey: "bankId",
});

loanTypeodel.belongsTo(bankModel, {
  foreignKey: "bankId",
});

bankModel.hasMany(loanInquiryModel, {
  foreignKey: "bankId",
});

loanInquiryModel.belongsTo(bankModel, {
  foreignKey: "bankId",
});
(async () => {
  await db.sync();
})();
export default bankModel;
