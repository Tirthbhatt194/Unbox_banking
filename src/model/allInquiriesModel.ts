import { type } from "os";
import { DataTypes } from "sequelize";
import db from "../config";

const allInquiryModel = db.define(
  "all_inquiry",
  {
    type: {
      type: DataTypes.ENUM("loan", "policy", "card"),
      allowNull: false,
    },
    data: {
      type: DataTypes.JSON,
    },
    userContactNumber: {
      type: DataTypes.STRING,
    },
    userEmail: {
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.INTEGER,
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

export default allInquiryModel;
