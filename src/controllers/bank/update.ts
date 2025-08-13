import { RequestHandler } from "express";
import bankModel from "../../model/bankModel";
import fs from "fs";

export const updateBank: RequestHandler = async (req, res, next) => {
  let id = req.params.id;

  const upd = await bankModel.findOne({
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
    let bankImage = "";

    // Image validation before update
    if (req.hasOwnProperty("file") && upd.getDataValue("bankImage") !== null) {
      if (upd.getDataValue("bankImage") !== req.file.filename) {
        fs.unlinkSync(`./images/${upd.getDataValue("bankImage")}`);
        bankImage = req.file.filename;
      } else if (upd.getDataValue("bankImage") === req.file.filename) {
        fs.unlinkSync(`./images/${upd.getDataValue("bankImage")}`);
        bankImage = req.file.filename;
      } else {
        bankImage = req.file.filename;
      }
    } else if (
      upd.getDataValue("bankImage") === null &&
      req.hasOwnProperty("file")
    ) {
      bankImage = req.file.filename;
    } else {
      bankImage = upd.getDataValue("bankImage");
    }
    //update data and image at particular id and update - send status with data object
    const bank = {
      id: parseInt(id) as Number,
      name: req.body.name as string,
      description: req.body.description as string,
      bankImage: bankImage as string,
      visibility: req.body.visibility as Boolean,
    };

    const upda = await bankModel.update(bank, {
      where: {
        id: id,
      },
    });

    res.status(200).send({
      statusCode: 200,
      status: true,
      message: "Data Updated SuccessFully!",
      data: bank,
    });
    return upda;
  }
};
