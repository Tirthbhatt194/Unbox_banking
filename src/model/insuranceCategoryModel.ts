import { DataTypes } from "sequelize";
import db from "../config";
import insuranceSubCategoryModel from "./insuranceSubCategoryModel";
import inquiryModel from "./inquiry";
import policyInquiryModel from "./policyInquiryModel";
import otherInsuranceInquiryModel from "./otherInsuranceInquiryModel";

const insuranceCategoryModel = db.define(
  "insuranceCategory",
  {
    insuranceName: {
      type: DataTypes.STRING,
    },
    insuranceDescription: {
      type: DataTypes.TEXT("long"),
    },
    insuranceDefinition: {
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
    eligibilityCriteria: {
      type: DataTypes.TEXT("long"),
    },
    insuranceImage: {
      type: DataTypes.STRING,
    },
    slug: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
  }
);

insuranceCategoryModel.hasMany(insuranceSubCategoryModel, {
  onDelete: "set null",
});
insuranceCategoryModel.hasMany(insuranceSubCategoryModel, {
  foreignKey: "insuranceCategoryId",
});

insuranceSubCategoryModel.belongsTo(insuranceCategoryModel, {
  foreignKey: "insuranceCategoryId",
});

insuranceCategoryModel.hasMany(inquiryModel, {
  foreignKey: "insuranceCategoryId",
});

inquiryModel.belongsTo(insuranceCategoryModel, {
  foreignKey: "insuranceCategoryId",
});

insuranceCategoryModel.hasMany(otherInsuranceInquiryModel, {
  foreignKey: "insuranceCategoryId",
});

otherInsuranceInquiryModel.belongsTo(insuranceCategoryModel, {
  foreignKey: "insuranceCategoryId",
});

insuranceCategoryModel.hasMany(policyInquiryModel, {
  foreignKey: "insuranceCategoryId",
});

policyInquiryModel.belongsTo(insuranceCategoryModel, {
  foreignKey: "insuranceCategoryId",
});

(async () => {
  await db.sync();
})();

export default insuranceCategoryModel;
