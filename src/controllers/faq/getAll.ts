import { RequestHandler } from "express";
import faqModel from "../../model/faqModel";

export const getAllFaq: RequestHandler = async (req, res, next) => {
  // Find all data
  const faq = await faqModel.findAll({});

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
