import { RequestHandler } from "express";
import testimonialModel from "../../model/testimonialModel";
import fs from "fs";
export const updateTestimonial: RequestHandler = async (req, res, next) => {
  let id = req.params.id;

  const data1 = await testimonialModel.findOne({
    where: {
      id: id,
    },
  });

  // If data dosent exist
  if (!data1)
    return res.status(404).send({
      statusCode: 404,
      status: false,
      message: "Data Not Found!",
    });

  // If data exist
  if (id === id) {
    let testimonialImage = "";
    if (
      req.hasOwnProperty("file") &&
      data1.getDataValue("testimonialImage") !== null
    ) {
      if (data1.getDataValue("testimonialImage") !== req.file.filename) {
        fs.unlinkSync(`./images/${data1.getDataValue("testimonialImage")}`);
        testimonialImage = req.file.filename;
      } else if (data1.getDataValue("testimonialImage") === req.file.filename) {
        fs.unlinkSync(`./images/${data1.getDataValue("testimonialImage")}`);
        testimonialImage = req.file.filename;
      } else {
        testimonialImage = req.file.filename;
      }
    } else if (
      req.hasOwnProperty("file") &&
      data1.getDataValue("testimonialImage") === null
    ) {
      testimonialImage = req.file.filename;
    } else {
      testimonialImage = data1.getDataValue("testimonialImage");
    }

    //update data at particular id and update - send status with data object
    const data = {
      id: parseInt(id) as Number,
      name: req.body.name as string,
      description: req.body.description as string,
      visibility: req.body.visibility as Boolean,
      testimonialImage: testimonialImage as string,
      occupation: req.body.occupation as string,
    };

    const testimonial = await testimonialModel.update(data, {
      where: {
        id: id,
      },
    });

    res.status(200).send({
      statusCode: 200,
      status: true,
      message: "Data Updated SuccessFully!",
      data: data,
    });
    return testimonial;
  }
};
