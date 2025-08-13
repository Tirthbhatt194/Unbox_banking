import { RequestHandler } from "express";
import contactUsModel from "../../model/contactUsModel";
import fs from "fs";

export const updateContactUs: RequestHandler = async (req, res, next) => {
  let id = req.params.id;

  const upd = await contactUsModel.findOne({
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

    let image = [];

    let allFiles = (req.files as Array<Express.Multer.File>).map((file) => {
      return file.fieldname;
    });

    if (
      allFiles.find((o) => o === "image") !== undefined &&
      upd.getDataValue("image") !== null
    ) {
      fs.unlinkSync(`./images/${upd.getDataValue("image")}`);
      image = (req.files as Array<Express.Multer.File>)
        .map((file) => {
          if (file.fieldname === "image") {
            return file.filename;
          }
        })
        .filter((file) => {
          return file !== undefined;
        });
    } else if (
      allFiles.find((o) => o === "image") !== undefined &&
      upd.getDataValue("image") === null
    ) {
      // fs.unlinkSync(`./images/${upd.getDataValue("image")}`)
      image = (req.files as Array<Express.Multer.File>)
        .map((file) => {
          if (file.fieldname === "image") {
            return file.filename;
          }
        })
        .filter((file) => {
          return file !== undefined;
        });
    } else if (
      allFiles.find((o) => o === "image") === undefined &&
      upd.getDataValue("image") === null
    ) {
      image[0] = null;
    } else {
      image[0] = upd.getDataValue("image");
    }

    //update data and image at particular id and update - send status with data object
    const updateContactUs = {
      id: parseInt(id) as Number,
      image: image[0] as string,
      title: req.body.title as string,
      subTitle: req.body.subTitle as string,
      text: req.body.text as string,

      email: req.body.email as string,
      phone: req.body.phone as string,
      whatsapp: req.body.whatsapp as string,
      facebook: req.body.facebook as string,
      twitter: req.body.twitter as string,
      linkedin: req.body.linkedin as string,
      instagram: req.body.instagram as string,
    };

    const upda = await contactUsModel.update(updateContactUs, {
      where: {
        id: id,
      },
    });

    res.status(200).send({
      statusCode: 200,
      status: true,
      message: "Data Updated SuccessFully!",
      data: updateContactUs,
    });
    return upda;
  }
};
