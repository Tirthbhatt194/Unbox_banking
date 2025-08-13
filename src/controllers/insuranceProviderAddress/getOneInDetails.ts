import { RequestHandler } from "express";
import insuranceProviderModel from "../../model/insuranceProviderModel";
import insuranceProviderAddressModel from "../../model/insuranceProviderAddressModel";

export const getOneInsuranceProviderAddressInDetail: RequestHandler = async (
  req,
  res,
  next
) => {
  let id = req.params.id;

  // find data at id and join respective foreign key tables to it
  const one = await insuranceProviderAddressModel.findOne({
    where: {
      id: id,
    },
    include: [
      {
        model: insuranceProviderModel,
      },
    ],
  });

  // If data exists send data object with status
  if (!one) {
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
      data: one,
    });
  }
};
