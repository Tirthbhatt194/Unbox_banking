import { upload1 } from "./../../middleware/multer";
import { RequestHandler } from "express";
import blogModel from "../../model/blogModel";

export const createBlog: RequestHandler = async (req, res, next) => {
  let blog_image = "";

  // Check if image is sent as set image as null
  if (req.hasOwnProperty("file") === true) {
    blog_image = req.file.filename;
  } else {
    blog_image = null;
  }

  // insert data to faq and send status with object
  const blog = {
    link: req.body.link as string,
    blog_title: req.body.blog_title as string,
    blog_description: req.body.blog_description as string,
    blog_image: blog_image as string,
    insuranceCategoryId: req.body.insuranceCategoryId as Number,
    insuranceSubCategoryId: req.body.insuranceSubCategoryId as Number,
    visibility: req.body.visibility as Boolean,
  };

  const Blog = await blogModel.create(blog);

  // If insert success send data object with status
  if (!Blog) {
    res.status(400).send({
      statusCode: 400,
      status: false,
      message: "Failed to insert data!",
    });
  } else {
    res.status(201).send({
      statusCode: 201,
      status: true,
      message: "Blog Created SuccessFully!",
      data: Blog,
    });
  }
};

// use multer middleware to insert image to single column
export const blog_image = upload1.single("blog_image");
