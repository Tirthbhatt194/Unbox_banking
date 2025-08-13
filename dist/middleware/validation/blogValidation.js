"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBlog = void 0;
const express_validator_1 = require("express-validator");
exports.validateBlog = [
    (0, express_validator_1.body)("link")
        .isURL()
        .withMessage("Must be a proper Url")
        .isString()
        .withMessage("Must be a string"),
    (0, express_validator_1.body)("blog_title").isString().withMessage("Must be a string"),
    (0, express_validator_1.body)("blog_description").isString().withMessage("Must be a string"),
    (0, express_validator_1.body)("insuranceCategoryId").isInt().withMessage("Must be number"),
];
