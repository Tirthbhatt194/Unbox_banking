import { RequestHandler } from "express";
import inquiryModel from "../../model/inquiry";
import insuranceCategoryModel from "../../model/insuranceCategoryModel";
import insuranceSubCategoryModel from "../../model/insuranceSubCategoryModel";

export const getAllInquiry: RequestHandler = async (req, res, next) => {
  // Find all data
  const faq = await inquiryModel.findAll({
    include: [
      { model: insuranceCategoryModel, attributes: ["insuranceName"] },
      {
        model: insuranceSubCategoryModel,
        attributes: ["insuranceSubCategoryName"],
      },
    ],
  });

  // If data exists send status with object
  if (!faq) {
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
      data: faq,
    });
  }
};
