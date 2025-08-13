import { DataTypes } from "sequelize";
import db from "../config";

const insuranceProviderAddressModel = db.define(
  "insuranceProviderAddress",
  {
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
    phone1: {
      type: DataTypes.STRING,
    },
    phone2: {
      type: DataTypes.STRING,
    },
    fax: {
      type: DataTypes.INTEGER,
    },
    email: {
      type: DataTypes.STRING,
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

(async () => {
  await db.sync();
})();

export default insuranceProviderAddressModel;
