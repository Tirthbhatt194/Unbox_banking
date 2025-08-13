import { RequestHandler } from "express";
import termsAndConditionsModel from "../../model/termsAndConditionsModel";

export const updateTermsAndConditions: RequestHandler = async (
  req,
  res,
  next
) => {
  let id = req.params.id;

  const upd = await termsAndConditionsModel.findOne({
    where: {
      id: id,
    },
  });

  // If data dosent exist
  if (!upd)
    return res.status(404).send({
      statusCode: 404,
      status: false,
      message: "Data Not Found!",
    });

  // If data  exist
  if (id === id) {
    // Image validation before update

    //update data and image at particular id and update - send status with data object
    const updateTermsAndConditions = {
      id: parseInt(id) as Number,

      title: req.body.title as string,
      subTitle: req.body.subTitle as string,
      text: req.body.text as string,
    };

    const upda = await termsAndConditionsModel.update(
      updateTermsAndConditions,
      {
        where: {
          id: id,
        },
      }
    );

    res.status(200).send({
      statusCode: 200,
      status: true,
      message: "Data Updated SuccessFully!",
      data: updateTermsAndConditions,
    });
    return upda;
  }
};
