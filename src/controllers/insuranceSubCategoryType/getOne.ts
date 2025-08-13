import insuranceTypeModel from "../../model/insuranceTypeModel";
import { RequestHandler } from "express";

export const GetOneInsuranceType: RequestHandler = async (req, res, next) => {
  let id = req.params.id;

  // Find data by id and send status with object at that id
  const one = await insuranceTypeModel.findOne({
    where: {
      id: id,
    },
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
