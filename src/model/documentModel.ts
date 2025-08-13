import { DataTypes } from "sequelize";
import db from "../config";

const documentModel = db.define(
  "document",
  {
    documentName: {
      type: DataTypes.STRING,
    },
    documentType: {
      type: DataTypes.STRING,
    },
    documentDescription: {
      type: DataTypes.TEXT('long'),
    },
    documentImage: {
      type: DataTypes.STRING,
    },
    visibility: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    insuranceCategoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'customer',
        key: 'id',
      },
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    paranoid: true
  }
);

(async () => {
  await db.sync();
})();

export default documentModel;
