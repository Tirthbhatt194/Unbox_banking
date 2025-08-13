import { RequestHandler } from "express";
import otherInsuranceInquiryModel from "../../model/otherInsuranceInquiryModel";

export const getAllOtherInsInquiry: RequestHandler = async (req, res, next) => {
  // Find all data
  const inquiry = await otherInsuranceInquiryModel.findAll({});

  // If data exists send status with object
  if (!inquiry) {
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
      data: inquiry,
    });
  }
};
