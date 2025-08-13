import { RequestHandler } from "express";
import aboutUsModel from "../../model/aboutUsModel";

export const getAllAboutUs: RequestHandler = async (req, res, next) => {
  // Find all data
  const aboutUs = await aboutUsModel.findAll({});

  // If data exists send status with object
  if (!aboutUs) {
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
      data: aboutUs,
    });
  }
};
