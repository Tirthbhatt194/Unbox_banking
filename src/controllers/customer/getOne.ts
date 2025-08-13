import { RequestHandler } from "express";
import customerModel from "../../model/customerModel";

export const getOneCustomer: RequestHandler = async (req, res, next) => {
  let id = req.params.id;

  const customer = await customerModel.findOne({
    where: {
      id: id,
    },
  });

  if (!customer) {
    res.status(404).send({
      statusCode: 404,
      status: false,
      message: "Customer Not Found!",
    });
  } else {
    res.status(200).send({
      statusCode: 200,
      status: true,
      message: "Got Data SuccessFully!",
      data: customer,
    });
  }
};
