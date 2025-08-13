import { DataTypes } from "sequelize";
import db from "../config";
import insuranceProviderAddressModel from "./insuranceProviderAddressModel";

const insuranceProviderModel = db.define(
  "insuranceProvider",
  {
    providerName: {
      type: DataTypes.STRING,
    },
    visibility: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    providerImage: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
  }
);
insuranceProviderModel.hasMany(insuranceProviderAddressModel, {
  foreignKey: "insuranceProviderId",
  onDelete: null,
});

(async () => {
  await db.sync();
})();

export default insuranceProviderModel;
