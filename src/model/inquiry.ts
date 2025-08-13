import { DataTypes } from "sequelize";
import db from "../config";

const inquiryModel = db.define(
  "inquiry",
  {
    gender: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    dateOfBirth: {
      type: DataTypes.DATE,
    },
    mobileNumber: {
      type: DataTypes.STRING,
    },
    insuredPersonType: {
      type: DataTypes.JSON,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    cityNameOrPincode: {
      type: DataTypes.STRING,
    },
    medicalHistory: {
      type: DataTypes.STRING,
    },
    vehicleNumber: {
      type: DataTypes.STRING,
    },
    vehicleBrand: {
      type: DataTypes.STRING,
    },
    vehicleModel: {
      type: DataTypes.STRING,
    },
    vehicleFuelType: {
      type: DataTypes.STRING,
    },
    vehicleVarient: {
      type: DataTypes.STRING,
    },
    vehicleRegistrationYear: {
      type: DataTypes.INTEGER,
    },
    email: {
      type: DataTypes.STRING,
    },
    existingPolicyExpiryDate: {
      type: DataTypes.DATE,
    },
    madeClaim: {
      type: DataTypes.BOOLEAN,
    },
    coverOnExistingPolicy: {
      type: DataTypes.INTEGER,
    },
    RTOName: {
      type: DataTypes.STRING,
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

export default inquiryModel;
