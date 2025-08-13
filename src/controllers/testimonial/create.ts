import { RequestHandler } from "express";
import testimonialModel from "../../model/testimonialModel";
import { upload1 } from "./../../middleware/multer";
export const createTestimonial: RequestHandler = async (req, res, next) => {
  let testimonialImage = "";

  //Code for Image
  if (req.hasOwnProperty("file") === true) {
    testimonialImage = req.file.filename;
  } else {
    testimonialImage = null;
  }

  // insert data to faq and send status with object
  const data = {
    name: req.body.name as string,
    description: req.body.description as string,
    visibility: req.body.visibility as boolean,
    testimonialImage: testimonialImage as string,
    occupation: req.body.occupation as string,
  };

  const testimonial = await testimonialModel.create(data);

  // If insert success send data object with status
  if (!testimonial) {
    res.status(400).send({
      statusCode: 400,
      status: false,
      message: "Failed To Insert Data!",
    });
  } else {
    res.status(201).send({
      statusCode: 201,
      status: true,
      message: "Testimonial Created SuccessFully!",
      data: testimonial,
    });
  }
};

// USe Multer MiddleWare
export const testimonialImage = upload1.single("testimonialImage");
