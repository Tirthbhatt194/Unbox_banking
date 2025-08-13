// import { DataTypes } from "sequelize";
// import db from "../config";
// // import roleModel from "./role.model";
// const userModel = db.define(
//     "user",
//     {
//         name: {
//             type: DataTypes.STRING,
//         },
//         password: {
//             type: DataTypes.STRING,
//         },
//     },
//     {
//         freezeTableName: true,
//         timestamps: true,
//         paranoid: true,
//     }
// );
// // userModel.belongsToMany(roleModel, {
// //     through: "user_roles",
// //     foreignKey: "roleId",
// //     otherKey: "userId"
// // });
// (async () => {
//     await db.sync();
// })();
// export default userModel;
