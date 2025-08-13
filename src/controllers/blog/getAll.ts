import { RequestHandler } from "express";
import blogModel from "../../model/blogModel";

export const getAllBlog: RequestHandler = async (req, res, next) => {
  // Find all data
  const blog = await blogModel.findAll({});

  // If data exists send status with object
  if (!blog) {
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
      data: blog,
    });
  }
};
