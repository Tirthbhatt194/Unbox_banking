"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTestimonial = void 0;
const express_validator_1 = require("express-validator");
exports.validateTestimonial = [
    (0, express_validator_1.body)('name')
        .isString()
        .withMessage('Must be a string'),
    (0, express_validator_1.body)('description')
        .isString()
        .withMessage('Must be a string'),
];
