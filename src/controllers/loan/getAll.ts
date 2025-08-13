import { RequestHandler } from "express";
import loanModel from "../../model/loan";

export const getAllLoan: RequestHandler = async (req, res, next) => {
  // Find all data
  const loan = await loanModel.findAll({});

  let newLoan = loan.map((l) => {
    return {
      ...l.dataValues,
      details: JSON.parse(l.dataValues.details),
    };
  });

  // If data exists send status with object
  if (!loan) {
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
      data: newLoan,
    });
  }
};
