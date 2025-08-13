import insuranceProviderModel from "../../model/insuranceProviderModel";
import { RequestHandler } from "express";
import insuranceProviderAddressModel from "../../model/insuranceProviderAddressModel";

export const GetProviderWithAddress: RequestHandler = async (
  req,
  res,
  next
) => {
  let id = req.params.id;
  // let icon = []
  // let image = []

  const one = await insuranceProviderModel.findAll({
    where: {
      id: id,
    },
    include: [
      {
        model: insuranceProviderAddressModel,
        where: {
          insuranceProviderId: id,
        },
        required: false,
      },
    ],
  });

  // If insert success send data object with status
  if (!one) {
    res.status(400).send({
      statusCode: 400,
      status: false,
      message: "Failed To Insert Data!",
    });
  } else {
    res.status(200).send({
      statusCode: 200,
      status: true,
      message: "Got Data SuccessFully!",
      data: one,
    });
  }
};
