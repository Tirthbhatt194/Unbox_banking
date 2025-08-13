// import { RequestHandler } from "express";
// import insuranceCategoryModel from "../../model/insuranceCategoryModel";
// import insuranceSubCategoryModel from "../../model/insuranceSubCategoryModel";
// import customerModel from "../../model/customerModel";
// import customerPoliciesModel from "../../model/customerPoliciesModel";
// export const getAllCustomerInDetail: RequestHandler = async (req, res, next) => {
//   const proj = await customerModel.findAll({
//     include: [
//       {
//         model: customerPoliciesModel,
//         where:{}
//       },
//       {
//         model: insuranceSubCategoryModel,
//       }]
//   });
//   res.status(200).send(proj);
// };
