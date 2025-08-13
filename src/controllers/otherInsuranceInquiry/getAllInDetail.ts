import { RequestHandler } from "express";
import insuranceCategoryModel from "../../model/insuranceCategoryModel";
import insuranceSubCategoryModel from "../../model/insuranceSubCategoryModel";
import otherInsuranceInquiryModel from "../../model/otherInsuranceInquiryModel";

export const getAllOtherInsInquiryInDetail: RequestHandler = async (
  req,
  res,
  next
) => {
  // find all data and join respective foreign key tables to it
  const proj = await otherInsuranceInquiryModel.findAll({
    include: [
      {
        model: insuranceCategoryModel,
      },
      {
        model: insuranceSubCategoryModel,
      },
    ],
  });

  // If data exists send status with object
  if (!proj) {
    return res.status(404).send({
      statusCode: 404,
      status: false,
      message: "Data Not Found!",
    });
  } else {
    return res.status(200).send({
      statusCode: 200,
      status: true,
      message: "SuccessFully Got All Data!",
      data: proj,
    });
  }
};
