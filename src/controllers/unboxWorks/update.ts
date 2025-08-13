import { RequestHandler } from "express";
import unboxWorksModel from "../../model/unboxWorksModel";
import fs from "fs";

export const updateUnboxWorks: RequestHandler = async (req, res, next) => {
  let id = req.params.id;

  // find data of id passed in params
  const upd = await unboxWorksModel.findOne({
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

  // If data exists
  if (id === id) {
    let image = "";
    // Image validation before update
    if (req.hasOwnProperty("file") && upd.getDataValue("image") !== null) {
      if (upd.getDataValue("image") !== req.file.filename) {
        fs.unlinkSync(`./images/${upd.getDataValue("image")}`);
        image = req.file.filename;
      } else if (upd.getDataValue("image") === req.file.filename) {
        fs.unlinkSync(`./images/${upd.getDataValue("image")}`);
        image = req.file.filename;
      } else {
        image = req.file.filename;
      }
    } else if (
      upd.getDataValue("image") === null &&
      req.hasOwnProperty("file")
    ) {
      image = req.file.filename;
    } else {
      image = upd.getDataValue("image");
    }

    //update data and image at particular id and update - send status with data object
    const updateUnboxWorks = {
      id: parseInt(id) as Number,
      title: req.body.title as string,
      text: req.body.text as string,
      image: image as string,
      visibility: req.body.visibility as Boolean,
    };

    const upda = await unboxWorksModel.update(updateUnboxWorks, {
      where: {
        id: id,
      },
    });

    res.status(200).send({
      statusCode: 200,
      status: true,
      message: "Data Updated SuccessFully!",
      data: updateUnboxWorks,
    });
    return upda;
  }
};
