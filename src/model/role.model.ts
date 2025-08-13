// import { DataTypes } from "sequelize";
// import db from "../config";
// import unboxPeopleModel from "./unboxPeopleModel";

// const roleModel = db.define(
//     "role",
//     {
//         name: {
//             type: DataTypes.STRING,
//         },
//     },
//     {
//         freezeTableName: true,
//         timestamps: true,
//         paranoid: true,
//     }
// );

// roleModel.belongsToMany(unboxPeopleModel, {
//     through: "unboxPeople_roles",
//     foreignKey: "unboxPeopleId",
//     otherKey: "roleId"
// });

// (async () => {
//     await db.sync();
// })();

// export default roleModel;
