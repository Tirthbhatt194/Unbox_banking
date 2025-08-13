import { DataTypes } from "sequelize";
import db from "../config";
import inquiryModel from "./inquiry";
import insuranceCategoryTypeModel from "./insuranceTypeModel";
import policyInquiryModel from "./policyInquiryModel";
import otherInsuranceInquiryModel from "./otherInsuranceInquiryModel";

const insuranceSubCategoryModel = db.define(
  "insuranceSubCategory",
  {
    insuranceSubCategoryName: {
      type: DataTypes.STRING,
    },
    insuranceSubCategoryDescription: {
      type: DataTypes.TEXT("long"),
    },
    insuranceSubCategoryDefinition: {
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
    features: {
      type: DataTypes.JSON,
    },
    formTitle: {
      type: DataTypes.STRING,
    },
    visibility: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    insuranceSubCategoryImage: {
      type: DataTypes.STRING,
    },
    slug: {
      type: DataTypes.STRING,
    },
    eligibilityCriteria: {
      type: DataTypes.TEXT("long"),
    },

    insuranceCategoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: "insuranceCategory",
        key: "id",
      },
    },
    insuranceCategoryTypeId: {
      type: DataTypes.INTEGER,
      references: {
        model: "insuranceCategoryType",
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

insuranceSubCategoryModel.belongsTo(insuranceCategoryTypeModel, {
  foreignKey: "insuranceCategoryTypeId",
  onDelete: null,
});

insuranceSubCategoryModel.hasMany(inquiryModel, {
  foreignKey: "insuranceSubCategoryId",
});

inquiryModel.belongsTo(insuranceSubCategoryModel, {
  foreignKey: "insuranceSubCategoryId",
});

insuranceSubCategoryModel.hasMany(otherInsuranceInquiryModel, {
  foreignKey: "insuranceSubCategoryId",
});

otherInsuranceInquiryModel.belongsTo(insuranceSubCategoryModel, {
  foreignKey: "insuranceSubCategoryId",
});

insuranceSubCategoryModel.hasMany(policyInquiryModel, {
  foreignKey: "insuranceSubCategoryId",
});

policyInquiryModel.belongsTo(insuranceSubCategoryModel, {
  foreignKey: "insuranceSubCategoryId",
});

(async () => {
  await db.sync();
})();

export default insuranceSubCategoryModel;
