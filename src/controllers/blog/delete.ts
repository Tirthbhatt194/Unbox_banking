import { RequestHandler } from "express";
import blogModel from "../../model/blogModel";

export const deleteBlog: RequestHandler = async (req, res, next) => {
  let id = req.params.id as unknown as number;

  // Find data by id
  const del = await blogModel.findOne({
    where: {
      id: id,
    },
  });

  // If data dosent exist
  if (!del)
    return res.status(404).send({
      statusCode: 404,
      status: false,
      message: "Data Not Found!",
    });

  // If data  exist delete
  if (id === id) {
    const dele = await blogModel.destroy({
      where: {
        id: id,
      },
    });

    res.status(200).send({
      statusCode: 200,
      status: true,
      message: "Data Deleted SuccessFully!",
      data: del,
    });
    return dele;
  }
};
