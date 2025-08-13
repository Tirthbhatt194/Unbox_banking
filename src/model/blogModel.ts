import { DataTypes } from "sequelize";
import db from "../config";
import insuranceCategoryModel from "./insuranceCategoryModel";
import insuranceSubCategoryModel from "./insuranceSubCategoryModel";

const blogModel = db.define(
  "blog",
  {
    link: {
      type: DataTypes.STRING,
    },
    blog_title: {
      type: DataTypes.STRING,
    },
    blog_description: {
      type: DataTypes.TEXT('long'),
    },
    blog_image: {
      type: DataTypes.STRING,
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

blogModel.belongsTo(insuranceCategoryModel, { foreignKey: "insuranceCategoryId", onDelete: null });
blogModel.belongsTo(insuranceSubCategoryModel, { foreignKey: "insuranceSubCategoryId", onDelete: null });

(async () => {
  await db.sync();
})();

export default blogModel;
