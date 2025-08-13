import { RequestHandler } from "express";
import contactUsModel from "../../model/contactUsModel";

export const getAllContactUs: RequestHandler = async (req, res, next) => {
  // Find all data
  const contactUs = await contactUsModel.findAll({});

  // If data exists send status with object
  if (!contactUs) {
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
      data: contactUs,
    });
  }
};
