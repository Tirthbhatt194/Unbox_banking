import { RequestHandler } from "express";
import customerModel from "../../model/customerModel";

export const getAllCustomer: RequestHandler = async (req, res, next) => {
  const customer = await customerModel.findAll({});
  if (!customer) {
    res.status(404).send({
      statusCode: 404,
      status: false,
      message: "Data Not Found!",
    });
  } else {
    res.status(200).send({
      statusCode: 200,
      status: true,
      message: "Got All Data SuccessFully!",
      data: customer,
    });
  }
};
