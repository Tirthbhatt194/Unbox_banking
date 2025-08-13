import { RequestHandler } from "express";
import policyInquiryModel from "../../model/policyInquiryModel";

export const getAllPolicyInquiry: RequestHandler = async (req, res, next) => {
  // Find all data
  const policyInquiry = await policyInquiryModel.findAll({});

  // If data exists send status with object
  if (!policyInquiry) {
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
      data: policyInquiry,
    });
  }
};
