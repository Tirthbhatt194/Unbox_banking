import { DataTypes } from "sequelize";
import db from "../config";
import insuranceCategoryModel from "./insuranceCategoryModel";
import insuranceProviderModel from "./insuranceProviderModel";
import insuranceSubCategoryModel from "./insuranceSubCategoryModel";
import insuranceCategoryTypeModel from "./insuranceTypeModel";
import policyInquiryModel from "./policyInquiryModel";
const policyModel = db.define(
  "policies",
  {
    policyName: {
      type: DataTypes.STRING,
    },
    policyFeatures: {
      type: DataTypes.TEXT("long"),
    },
    lifeCover: {
      type: DataTypes.INTEGER,
    },
    lumpsumPayout: {
      type: DataTypes.INTEGER,
    },
    returnOfPremium: {
      type: DataTypes.FLOAT,
    },
    claimSetteled: {
      type: DataTypes.FLOAT,
    },
    payYearly: {
      type: DataTypes.INTEGER,
    },
    maxAgeLimit: {
      type: DataTypes.INTEGER,
    },
    coverTillAge: {
      type: DataTypes.INTEGER,
    },
    cashlessHospital: {
      type: DataTypes.INTEGER,
    },
    cashlessGarages: {
      type: DataTypes.INTEGER,
    },
    IDV: {
      type: DataTypes.INTEGER,
    },
    covered: {
      type: DataTypes.TEXT("long"),
    },
    notCovered: {
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
    premium: {
      type: DataTypes.INTEGER,
    },
    totalPolicyTerm: {
      type: DataTypes.INTEGER,
    },
    about: {
      type: DataTypes.TEXT("long"),
    },
    policyBenifits: {
      type: DataTypes.TEXT("long"),
    },
    policyImage: {
      type: DataTypes.STRING,
    },
    riskFactors: {
      type: DataTypes.TEXT("long"),
    },
    visibility: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    topPlan: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    medicalExpence: {
      type: DataTypes.INTEGER,
    },
    passportLoss: {
      type: DataTypes.INTEGER,
    },
    baggageLoss: {
      type: DataTypes.INTEGER,
    },
    insuranceCategoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: "insuranceCategory",
        key: "id",
      },
    },
    insuranceSubCategoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: "insuranceSubCategory",
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
    insuranceProviderId: {
      type: DataTypes.INTEGER,
      references: {
        model: "insuranceProvider",
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

policyModel.belongsTo(insuranceCategoryModel, {
  foreignKey: "insuranceCategoryId",
  onDelete: null,
});
policyModel.belongsTo(insuranceSubCategoryModel, {
  foreignKey: "insuranceSubCategoryId",
  onDelete: null,
});
policyModel.belongsTo(insuranceCategoryTypeModel, {
  foreignKey: "insuranceCategoryTypeId",
  onDelete: null,
});
policyModel.belongsTo(insuranceProviderModel, {
  foreignKey: "insuranceProviderId",
  onDelete: null,
});

policyModel.hasMany(policyInquiryModel, {
  foreignKey: "policyId",
});

policyInquiryModel.belongsTo(policyModel, {
  foreignKey: "policyId",
});

(async () => {
  await db.sync();
})();

export default policyModel;
