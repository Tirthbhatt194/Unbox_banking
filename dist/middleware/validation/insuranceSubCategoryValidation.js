"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSubCategory = void 0;
const express_validator_1 = require("express-validator");
exports.validateSubCategory = [
    (0, express_validator_1.body)("insuranceSubCategoryName").isString().withMessage("Must be a string"),
    (0, express_validator_1.body)("insuranceSubCategoryDescription")
        .isString()
        .withMessage("Must be a string"),
    (0, express_validator_1.body)("insuranceSubCategoryDefinition")
        .isString()
        .withMessage("Must be a string"),
    (0, express_validator_1.body)("what").isString().withMessage("Must be a string"),
    (0, express_validator_1.body)("why").isString().withMessage("Must be a string"),
    (0, express_validator_1.body)("how").isString().withMessage("Must be a string"),
    (0, express_validator_1.body)("slug").isString().withMessage("Slug must be a string"),
];
