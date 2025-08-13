import { RequestHandler } from "express";
import faqModel from "../../model/faqModel";
import insuranceProviderAddressModel from "../../model/insuranceProviderAddressModel";
import insuranceProviderModel from "../../model/insuranceProviderModel";

export const getAllInsuranceProviderAddressInDetail: RequestHandler = async (
  req,
  res,
  next
) => {
  // find all data and join respective foreign key tables to it
  const proj = await insuranceProviderAddressModel.findAll({
    include: [
      {
        model: insuranceProviderModel,
      },
    ],
  });

  // If data exists send status with object
  if (!proj) {
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
      data: proj,
    });
  }
};
