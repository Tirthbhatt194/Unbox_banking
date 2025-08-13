import { RequestHandler } from "express";
import privacyPolicyModel from "../../model/privacyPolicyModel";

export const getAllPrivacyPolicy: RequestHandler = async (req, res, next) => {
  // Find all data
  const privacyPolicy = await privacyPolicyModel.findAll({});

  // If data exists send status with object
  if (!privacyPolicy) {
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
      data: privacyPolicy,
    });
  }
};
