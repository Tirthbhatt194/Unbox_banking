import { RequestHandler } from "express";
import insuranceProviderAddressModel from "../../model/insuranceProviderAddressModel";

export const getOneInsuranceProviderAddress: RequestHandler = async (
  req,
  res,
  next
) => {
  let id = req.params.id;

  // Find data by id and send status with object at that id
  const address = await insuranceProviderAddressModel.findOne({
    where: {
      id: id,
    },
  });

  // If data exists send data object with status
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
      message: "Got Data SuccessFully!",
      data: address,
    });
  }
};
