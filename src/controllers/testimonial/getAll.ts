import { RequestHandler } from "express";
import testimonialModel from "../../model/testimonialModel";

export const getAllTestimonial: RequestHandler = async (req, res, next) => {
  // Find all data
  const testimonial = await testimonialModel.findAll({});

  // If data exists send status with object
  if (!testimonial) {
    return res.status(404).send({
      statusCode: 404,
      status: false,
      message: "Data Not Found!",
    });
  } else {
    return res.status(200).send({
      statusCode: 200,
      status: true,
      message: "Got All Data SuccessFully!",
      data: testimonial,
    });
  }
};
