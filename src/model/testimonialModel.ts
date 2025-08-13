import { DataTypes } from "sequelize";
import db from "../config";

const testimonialModel = db.define(
  "testimonial",
  {
    name: {
      type: DataTypes.TEXT("long"),
    },
    description: {
      type: DataTypes.TEXT("long"),
    },
    visibility: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    testimonialImage: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    occupation: {
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

export default testimonialModel;
