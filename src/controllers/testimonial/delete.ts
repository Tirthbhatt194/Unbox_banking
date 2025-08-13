import { RequestHandler } from "express";
import testimonialModel from "../../model/testimonialModel";

export const deleteTestimonial: RequestHandler = async (req, res, next) => {
  let id = req.params.id;

  // find data by id
  const data = await testimonialModel.findOne({
    where: {
      id: id,
    },
  });

  // If data dosent exist
  if (!data)
    return res.status(404).send({
      statusCode: 404,
      status: false,
      message: "Data Not Found!",
    });

  // If data exist delete
  if (id === id) {
    const testimonial = await testimonialModel.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).send({
      statusCode: 200,
      status: true,
      message: "Data Deleted SuccessFully!",
      data: data,
    });
    return testimonial;
  }
};
