import { DataTypes } from "sequelize";
import db from "../config";

const policyInquiryModel = db.define(
  "policy_inquiry",
  {
    fullName: {
      type: DataTypes.STRING,
    },
    emailAddress: {
      type: DataTypes.STRING,
    },
    annualIncome: {
      type: DataTypes.INTEGER,
    },
    occupation: {
      type: DataTypes.STRING,
    },
    education: {
      type: DataTypes.STRING,
    },

    address: {
      type: DataTypes.STRING,
    },
    pinCode: {
      type: DataTypes.INTEGER,
    },
    city: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.STRING,
    },
    nationality: {
      type: DataTypes.STRING,
    },

    gender: {
      type: DataTypes.STRING,
    },

    dateOfBirth: {
      type: DataTypes.DATEONLY,
    },

    mobileNumber: {
      type: DataTypes.STRING,
    },
    panCardNumber: {
      type: DataTypes.STRING,
    },
    vehicleNumber: {
      type: DataTypes.STRING,
    },
    vehicleRegistrationDate: {
      type: DataTypes.DATEONLY,
    },
    vehicleType: {
      type: DataTypes.STRING,
    },
    nomineeName: {
      type: DataTypes.STRING,
    },
    nomineeRelation: {
      type: DataTypes.STRING,
    },
    destination: {
      type: DataTypes.STRING,
    },
    numberOfTravellers: {
      type: DataTypes.INTEGER,
    },
    startDate: {
      type: DataTypes.DATEONLY,
    },
    endDate: {
      type: DataTypes.DATEONLY,
    },
    membersDetails: {
      type: DataTypes.JSON,
    },
    numberOfMembers: {
      type: DataTypes.INTEGER,
    },
    valueOfBuilding: {
      type: DataTypes.FLOAT,
    },
    carpetArea: {
      type: DataTypes.STRING,
    },
    constructionCostPerSqFt: {
      type: DataTypes.STRING,
    },
    valueOfHouseHoldItems: {
      type: DataTypes.STRING,
    },
    organizationName: {
      type: DataTypes.STRING,
    },
    employeeStrength: {
      type: DataTypes.INTEGER,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "unboxPeople",
        key: "id",
      },
    },
    insuranceCategoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: "insuranceCategory",
        key: "id",
      },
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    insuranceSubCategoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: "insuranceSubCategory",
        key: "id",
      },
    },
    policyId: {
      type: DataTypes.INTEGER,
      references: {
        model: "policies",
        key: "id",
      },
    },
    insuranceTypeId: {
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

(async () => {
  await db.sync();
})();

export default policyInquiryModel;
