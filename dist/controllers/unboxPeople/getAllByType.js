// import { RequestHandler } from "express";
// import unboxPeopleModel from "../../model/unboxPeopleModel";
// export const getAllUnboxPeopleByType: RequestHandler = async (
//   req,
//   res,
//   next
// ) => {
//   const type = req.params.type;
//   // Find all data
//   const unboxPeople = await unboxPeopleModel.findAll({
//     where: {
//       personType: type,
//     },
//   });
//   // If data exists send status with object
//   if (!unboxPeople) {
//     return res.status(404).send({
//       statusCode: 404,
//       status: false,
//       message: "Data Not Found!",
//     });
//   } else {
//     return res.status(200).send({
//       statusCode: 200,
//       status: true,
//       message: "Got All Data SuccessFully!",
//       data: unboxPeople,
//     });
//   }
// };
