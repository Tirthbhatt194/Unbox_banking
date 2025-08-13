import { RequestHandler } from "express";
import loanTypeModel from "../../model/loanTypeModel";

export const getAllLoanType: RequestHandler = async (req, res, next) => {
  // Find all data
  const loanType = await loanTypeModel.findAll({});

  // If data exists send status with object
  if (!loanType) {
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
      data: loanType,
    });
  }
};
