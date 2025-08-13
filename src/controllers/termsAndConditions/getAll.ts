import { RequestHandler } from "express";
import termsAndConditionsModel from "../../model/termsAndConditionsModel";

export const getAllTermsAndConditions: RequestHandler = async (
  req,
  res,
  next
) => {
  // Find all data
  const termsAndConditions = await termsAndConditionsModel.findAll({});

  // If data exists send status with object
  if (!termsAndConditions) {
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
      data: termsAndConditions,
    });
  }
};
