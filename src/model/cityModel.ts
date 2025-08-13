import { DataTypes } from "sequelize";
import db from "../config";

const cityModel = db.define(
  "master_city",
  {
    city: {
      type: DataTypes.STRING,
    },
    state_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "master_state",
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

export default cityModel;
