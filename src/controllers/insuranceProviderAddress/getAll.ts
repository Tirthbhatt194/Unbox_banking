import { RequestHandler } from "express";
import insuranceProviderAddressModel from "../../model/insuranceProviderAddressModel";

export const getAllInsuranceProviderAddress: RequestHandler = async (
  req,
  res,
  next
) => {
  // Find all data
  const address = await insuranceProviderAddressModel.findAll({});

  // If data exists send status with object
  if (!address) {
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
      data: address,
    });
  }
};
