import { RequestHandler } from "express";
import inquiryModel from "../../model/inquiry";
import insuranceCategoryModel from "../../model/insuranceCategoryModel";
import insuranceSubCategoryModel from "../../model/insuranceSubCategoryModel";

export const getOneInquiry: RequestHandler = async (req, res, next) => {
  let id = req.params.id;

  // Find data by id and send status with object at that id
  const faq = await inquiryModel.findOne({
    where: {
      id: id,
    },
    include: [
      {
        model: insuranceCategoryModel,
      },
      {
        model: insuranceSubCategoryModel,
      },
    ],
  });

  // If data exists send data object with status
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
      message: "SuccessFully Got Data!",
      data: faq,
    });
  }
};
