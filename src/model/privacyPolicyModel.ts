import { DataTypes } from "sequelize";
import db from "../config";

const privacyPolicyModel = db.define(
  "privacyPolicy",
  {
    title: {
      type: DataTypes.STRING,
    },
    subTitle: {
      type: DataTypes.STRING,
    },
    text: {
      type: DataTypes.STRING,
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

export default privacyPolicyModel;
