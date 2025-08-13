import { RequestHandler } from "express";
import loanModel from "../../model/loan";

export const getOneLoan: RequestHandler = async (req, res, next) => {
  let id = req.params.id;

  // Find data by id and send status with object at that id
  const loan = await loanModel.findOne({
    where: {
      id: id,
    },
  });

  let newLoan = {
    ...loan.dataValues,
    details: JSON.parse(loan.dataValues.details),
  };

  // If data exists send data object with status
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
      message: "SuccessFully Got Data!",
      data: newLoan,
    });
  }
};
