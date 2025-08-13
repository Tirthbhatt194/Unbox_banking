import { DataTypes } from "sequelize";
import db from "../config";
import insuranceCategoryModel from "./insuranceCategoryModel";
import insuranceSubCategoryModel from "./insuranceSubCategoryModel";

const faqModel = db.define(
  "faq",
  {
    questions: {
      type: DataTypes.TEXT('long'),
    },
    answers: {
      type: DataTypes.TEXT('long'),
    },
    visibility: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    insuranceCategoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'insuranceCategory',
        key: 'id',
      },
    },
    insuranceSubCategoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'insuranceSubCategory',
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

faqModel.belongsTo(insuranceCategoryModel, { foreignKey: "insuranceCategoryId", onDelete: null });
faqModel.belongsTo(insuranceSubCategoryModel, { foreignKey: "insuranceSubCategoryId", onDelete: null });

(async () => {
  await db.sync();
})();

export default faqModel;
