import { DataTypes } from "sequelize";
import db from "../config";

const otherInsuranceInquiryModel = db.define(
  "other_insurance_inquiry",
  {
    fullName: {
      type: DataTypes.STRING,
    },
    mobileNumber: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    ownerOrTenan: {
      type: DataTypes.STRING,
    },
    valueOfBuilding: {
      type: DataTypes.INTEGER,
    },
    carpetArea: {
      type: DataTypes.INTEGER,
    },
    constructionCostPerSqFt: {
      type: DataTypes.INTEGER,
    },
    valueOfHouseHoldItems: {
      type: DataTypes.INTEGER,
    },
    organizationName: {
      type: DataTypes.STRING,
    },
    destination: {
      type: DataTypes.JSON,
    },
    startDate: {
      type: DataTypes.DATEONLY,
    },
    endDate: {
      type: DataTypes.DATEONLY,
    },
    numberOfTravellers: {
      type: DataTypes.INTEGER,
    },
    existingMedicalProblem: {
      type: DataTypes.BOOLEAN,
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

export default otherInsuranceInquiryModel;
