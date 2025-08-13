import { RequestHandler } from "express";
import insuranceCategoryModel from "../../model/insuranceCategoryModel";

export const GetAllCategory: RequestHandler = async (req, res, next) => {
  // Find all data
  const proj = await insuranceCategoryModel.findAll({});

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
      message: "Got All Data SuccessFully!",
      data: proj,
    });
  }
};
