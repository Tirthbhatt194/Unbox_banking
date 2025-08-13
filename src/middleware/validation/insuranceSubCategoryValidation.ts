import { body } from "express-validator";

export const validateSubCategory = [
  body("insuranceSubCategoryName").isString().withMessage("Must be a string"),
  body("insuranceSubCategoryDescription")
    .isString()
    .withMessage("Must be a string"),
  body("insuranceSubCategoryDefinition")
    .isString()
    .withMessage("Must be a string"),
  body("what").isString().withMessage("Must be a string"),
  body("why").isString().withMessage("Must be a string"),
  body("how").isString().withMessage("Must be a string"),
  body("slug").isString().withMessage("Slug must be a string"),
];
