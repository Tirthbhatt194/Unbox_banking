import { RequestHandler } from "express";
import privacyPolicyModel from "../../model/privacyPolicyModel";

export const deletePrivacyPolicy: RequestHandler = async (req, res, next) => {
  let id = req.params.id;

  // find data by id
  const del = await privacyPolicyModel.findOne({
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

  // If data dosent exist delete
  if (id === id) {
    const dele = await privacyPolicyModel.destroy({
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
