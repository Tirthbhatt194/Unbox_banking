import { RequestHandler } from "express";
import blogModel from "../../model/blogModel";
import fs from "fs";

export const updateBlog: RequestHandler = async (req, res, next) => {
  let id = req.params.id;

  const upd = await blogModel.findOne({
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
    let blog_image = "";

    // Image validation before update
    if (req.hasOwnProperty("file") && upd.getDataValue("blog_image") !== null) {
      if (upd.getDataValue("blog_image") !== req.file.filename) {
        fs.unlinkSync(`./images/${upd.getDataValue("blog_image")}`);
        blog_image = req.file.filename;
      } else if (upd.getDataValue("blog_image") === req.file.filename) {
        fs.unlinkSync(`./images/${upd.getDataValue("blog_image")}`);
        blog_image = req.file.filename;
      } else {
        blog_image = req.file.filename;
      }
    } else if (
      upd.getDataValue("blog_image") === null &&
      req.hasOwnProperty("file")
    ) {
      blog_image = req.file.filename;
    } else {
      blog_image = upd.getDataValue("blog_image");
    }

    //update data and image at particular id and update - send status with data object
    const updateBlog = {
      id: parseInt(id) as Number,
      link: req.body.link as string,
      blog_title: req.body.blog_title as string,
      blog_description: req.body.blog_description as string,
      blog_image: blog_image as string,
      insuranceCategoryId: req.body.insuranceCategoryId as number,
      insuranceSubCategoryId: req.body.insuranceSubCategoryId as number,
      visibility: req.body.visibility as Boolean,
    };

    const upda = await blogModel.update(updateBlog, {
      where: {
        id: id,
      },
    });
    // updateBlog.id = parseInt(req.body.id)
    res.status(200).send({
      statusCode: 200,
      status: true,
      message: "Data Updated SuccessFully!",
      data: updateBlog,
    });
    return upda;
  }
};
