import { DataTypes } from "sequelize";
import db from "../config";
import policyInquiryModel from "./policyInquiryModel";

const insuranceCategoryTypeModel = db.define(
  "insuranceCategoryType",
  {
    insuranceCategoryTypeName: {
      type: DataTypes.STRING,
    },
    insuranceCategoryTypeDescription: {
      type: DataTypes.TEXT("long"),
    },
    insuranceCategoryTypeDefinition: {
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
    visibility: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    insuranceCategoryTypeImage: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
  }
);

insuranceCategoryTypeModel.hasMany(policyInquiryModel, {
  foreignKey: "insuranceTypeId",
});

policyInquiryModel.belongsTo(insuranceCategoryTypeModel, {
  foreignKey: "insuranceTypeId",
});

(async () => {
  await db.sync();
})();

export default insuranceCategoryTypeModel;
