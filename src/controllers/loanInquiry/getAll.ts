import { RequestHandler } from "express";
import loanInquiryModel from "../../model/loanInquiryModel";

export const getAllLoanInquiry: RequestHandler = async (req, res, next) => {
  // Find all data
  const loanInquiry = await loanInquiryModel.findAll({});

  // If data exists send status with object
  if (!loanInquiry) {
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
      data: loanInquiry,
    });
  }
};
