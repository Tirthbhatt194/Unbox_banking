import { DataTypes } from "sequelize";
import db from "../config";
import cityModel from "./cityModel";
const stateModel = db.define(
  "master_state",
  {
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
  }
);

stateModel.hasMany(cityModel, {
  foreignKey: "state_id",
});

cityModel.belongsTo(stateModel, {
  foreignKey: "state_id",
});

(async () => {
  await db.sync();
})();

export default stateModel;
