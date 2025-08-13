import { DataTypes } from "sequelize";
import db from "../config";
import loanModel from "./loan";
import loanInquiryModel from "./loanInquiryModel";

const loanTypeModel = db.define(
  "loantype",
  {
    loanTypeName: {
      type: DataTypes.STRING,
    },
    loanDescription: {
      type: DataTypes.TEXT("long"),
    },
    documents: {
      type: DataTypes.TEXT("long"),
    },
    eligibilityCriteria: {
      type: DataTypes.TEXT("long"),
    },
    features: {
      type: DataTypes.TEXT("long"),
    },
    benifits: {
      type: DataTypes.TEXT("long"),
    },
    what: {
      type: DataTypes.TEXT("long"),
    },
    why: {
      type: DataTypes.TEXT("long"),
    },
    how: {
      type: DataTypes.TEXT("long"),
    },
    image: {
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

loanTypeModel.hasMany(loanModel, {
  foreignKey: "loanTypeId",
});

loanModel.belongsTo(loanTypeModel, {
  foreignKey: "loanTypeId",
});
loanTypeModel.hasMany(loanInquiryModel, {
  foreignKey: "loanTypeId",
});

loanInquiryModel.belongsTo(loanTypeModel, {
  foreignKey: "loanTypeId",
});

(async () => {
  await db.sync();
})();

export default loanTypeModel;
