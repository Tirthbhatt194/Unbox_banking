import { RequestHandler } from "express";
import bankModel from "../../model/bankModel";

export const getAllBank: RequestHandler = async (req, res, next) => {
  // Find all data
  const bank = await bankModel.findAll({});

  // If data exists send status with object
  if (!bank) {
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
      data: bank,
    });
  }
};
