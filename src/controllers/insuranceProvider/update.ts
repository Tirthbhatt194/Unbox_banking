import insuranceProviderModel from "../../model/insuranceProviderModel";
import { RequestHandler } from "express";
import fs from "fs";

export const UpdateProvider: RequestHandler = async (req, res, next) => {
  let id = req.params.id;

  const upd = await insuranceProviderModel.findOne({
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

  // If data exist
  if (id === id) {
    let providerImage = "";

    // Image validation before update
    if (
      req.hasOwnProperty("file") &&
      upd.getDataValue("providerImage") !== null
    ) {
      if (upd.getDataValue("providerImage") !== req.file.filename) {
        fs.unlinkSync(`./images/${upd.getDataValue("providerImage")}`);
        providerImage = req.file.filename;
      } else if (upd.getDataValue("providerImage") === req.file.filename) {
        fs.unlinkSync(`./images/${upd.getDataValue("providerImage")}`);
        providerImage = req.file.filename;
      } else {
        providerImage = req.file.filename;
      }
    } else if (
      upd.getDataValue("providerImage") === null &&
      req.hasOwnProperty("file")
    ) {
      providerImage = req.file.filename;
    } else {
      providerImage = upd.getDataValue("providerImage");
    }

    //update data and image at particular id and update - send status with data object
    const updateInsuranceProvider = {
      id: parseInt(id) as Number,
      providerName: req.body.providerName as string,
      visibility: req.body.visibility as boolean,
      providerImage: providerImage as string,
    };

    const upda = await insuranceProviderModel.update(updateInsuranceProvider, {
      where: {
        id: id,
      },
    });

    res.status(200).send({
      statusCode: 200,
      status: true,
      message: "Data Updated SuccessFully!",
      data: updateInsuranceProvider,
    });
    return upda;
  }
};
