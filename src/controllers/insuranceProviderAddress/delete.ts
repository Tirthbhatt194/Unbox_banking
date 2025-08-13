import { RequestHandler } from "express";
import insuranceProviderAddressModel from "../../model/insuranceProviderAddressModel";

export const deleteProvederAddress: RequestHandler = async (req, res, next) => {
  let id = req.params.id as unknown as number;

  // find data by id
  const del = await insuranceProviderAddressModel.findOne({
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
    const dele = await insuranceProviderAddressModel.destroy({
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
