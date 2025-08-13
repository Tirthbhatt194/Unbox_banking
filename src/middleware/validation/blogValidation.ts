import { body } from "express-validator";

export const validateBlog = [
  body("link")
    .isURL()
    .withMessage("Must be a proper Url")
    .isString()
    .withMessage("Must be a string"),
  body("blog_title").isString().withMessage("Must be a string"),
  body("blog_description").isString().withMessage("Must be a string"),
  body("insuranceCategoryId").isInt().withMessage("Must be number"),
];
