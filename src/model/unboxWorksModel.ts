import { DataTypes } from "sequelize";
import db from "../config";

const unboxWorksModel = db.define(
  "unboxWorks",
  {
    title: {
      type: DataTypes.STRING,
    },
    text: {
      type: DataTypes.TEXT("long"),
    },
    image: {
      type: DataTypes.STRING,
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

(async () => {
  await db.sync();
})();

export default unboxWorksModel;
