import { RequestHandler } from "express";
import testimonialModel from "../../model/testimonialModel";

export const getOneTestimonial: RequestHandler = async (req, res, next) => {
  let id = req.params.id;

  // Find data by id and send status with object at that id
  const testimonial = await testimonialModel.findOne({
    where: {
      id: id,
    },
  });

  // If data exists send data object with status
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
      message: "Got Data SuccessFully!",
      data: testimonial,
    });
  }
};
