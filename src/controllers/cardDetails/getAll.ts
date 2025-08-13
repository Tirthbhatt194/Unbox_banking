import { RequestHandler } from "express";
import cardDetailsModel from "../../model/cardDetailsModel";

export const getAllCardDetailsInfo: RequestHandler = async (req, res, next) => {
  // Find all data
  const cd = await cardDetailsModel.findAll({});

  // If data exists send status with object
  if (!cd) {
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
      data: cd,
    });
  }
};
