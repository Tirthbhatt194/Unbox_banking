import { RequestHandler } from "express";
import insuranceCategoryModel from "../../model/insuranceCategoryModel";
import insuranceSubCategoryModel from "../../model/insuranceSubCategoryModel";

export const getSubInsData: RequestHandler = async (req, res) => {
  const proj = await insuranceCategoryModel.findAll({
    include: [
      {
        model: insuranceSubCategoryModel,
        // as: "subInsurances",
      },
    ],
  });

  // If insert success send data object with status
  if (!proj) {
    res.status(404).send({
      statusCode: 404,
      status: false,
      message: "Data Not Found!",
    });
  } else {
    res.status(200).send({
      statusCode: 200,
      status: true,
      message: "Got Data SuccessFully!",
      data: proj,
    });
  }
};
