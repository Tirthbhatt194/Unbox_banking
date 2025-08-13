// import { RequestHandler } from "express";
// // import insuranceCategoryModel from "../../model/insuranceCategoryModel";
// // import insuranceSubCategoryModel from "../../model/insuranceSubCategoryModel";
// import customerModel from "../../model/customerModel";

// export const getOneBlogInDetail: RequestHandler = async (req, res, next) => {
//   let id = req.params.id;

//   const one = await customerModel.findOne({
//     where: {
//       id: id,
//     },
//     include: [
//       {
//         model: insuranceCategoryModel,
//       },
//       {
//         model: insuranceSubCategoryModel,
//       }]
//   });

//   if (!one) return res.status(400).send("Data Not Found!");
//   else return res.status(200).send(one);
// };
