import insuranceTypeModel from "../../model/insuranceTypeModel";
import { RequestHandler } from "express";

export const DeleteInsuranceType: RequestHandler = async (req, res, next) => {
  let id = req.params.id;

  // find data by id
  const del = await insuranceTypeModel.findOne({
    where: {
      id: id,
    },
  });

  // If data dosent exist
  if (!del)
    return res.status(404).send({
      statusCode: 404,
      status: false,
      message: "Data Not Found!",
    });

  // If data exist delete
  if (id === id) {
    const dele = await insuranceTypeModel.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).send({
      statusCode: 200,
      status: true,
      message: "Data Deleted SuccessFully!",
      data: del,
    });
    return dele;
  }
};
