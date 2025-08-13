import { DataTypes } from "sequelize";
import db from "../config";
import customerPoliciesModel from "./customerPoliciesModel";
import documentModel from "./documentModel";

const customerModel = db.define(
  "customer",
  {
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    dateOfBirth: {
      type: DataTypes.DATE,
    },
    customerImage: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.STRING,
    },
    contactNo: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.STRING,
    },
    district: {
      type: DataTypes.STRING,
    },
    taluka: {
      type: DataTypes.STRING,
    },
    address_1: {
      type: DataTypes.STRING,
    },
    address_2: {
      type: DataTypes.STRING,
    },
    zipcode: {
      type: DataTypes.INTEGER,
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

customerModel.hasMany(customerPoliciesModel, {
  foreignKey: "customerId",
  onDelete: null,
});
customerModel.hasMany(documentModel, {
  foreignKey: "customerId",
  onDelete: null,
});

(async () => {
  await db.sync();
})();

export default customerModel;
