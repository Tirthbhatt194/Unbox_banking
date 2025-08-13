import { RequestHandler } from "express";
import customerModel from "../../model/customerModel";

export const deleteCustomer: RequestHandler = async (req, res, next) => {
  let id = req.params.id as unknown as number;

  const del = await customerModel.findOne({
    where: {
      id: id,
    },
  });
  if (!del)
    return res.status(404).send({
      statusCode: 404,
      status: false,
      message: "Data Not Found!",
    });

  if (id === id) {
    const dele = await customerModel.destroy({
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
