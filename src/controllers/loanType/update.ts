import { RequestHandler } from "express";
import loanModel from "../../model/loanTypeModel";
import fs from "fs";
export const updateLoanType: RequestHandler = async (req, res, next) => {
  let id = req.params.id;

  const upd = await loanModel.findOne({
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
    let loanTypeImage = "";

    if (req.hasOwnProperty("file") && upd.getDataValue("image") !== null) {
      if (upd.getDataValue("image") !== req.file.filename) {
        fs.unlinkSync(`./images/${upd.getDataValue("image")}`);
        loanTypeImage = req.file.filename;
      } else if (upd.getDataValue("image") === req.file.filename) {
        fs.unlinkSync(`./images/${upd.getDataValue("image")}`);
        loanTypeImage = req.file.filename;
      } else {
        loanTypeImage = req.file.filename;
      }
    } else if (
      upd.getDataValue("image") === null &&
      req.hasOwnProperty("file")
    ) {
      loanTypeImage = req.file.filename;
    } else {
      loanTypeImage = upd.getDataValue("image");
    }

    //update data and image at particular id and update - send status with data object
    const loanType = {
      id: parseInt(id) as Number,
      loanTypeName: req.body.loanTypeName as String,
      loanDescription: req.body.loanDescription as String,
      documents: req.body.documents as String,
      eligibilityCriteria: req.body.eligibilityCriteria as String,
      features: req.body.features as String,
      benifits: req.body.benifits as String,
      what: req.body.what as String,
      why: req.body.why as String,
      how: req.body.how as String,
      image: loanTypeImage as string,
      visibility: req.body.visibility as Boolean,
    };

    const upda = await loanModel.update(loanType, {
      where: {
        id: id,
      },
    });

    res.status(200).send({
      statusCode: 200,
      status: true,
      message: "Data Updated SuccessFully!",
      data: loanType,
    });
    return upda;
  }
};
