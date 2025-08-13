"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateFaq = void 0;
const express_validator_1 = require("express-validator");
exports.validateFaq = [
    (0, express_validator_1.body)('questions')
        .isString()
        .withMessage('Must be a string'),
    (0, express_validator_1.body)('answers')
        .isString()
        .withMessage('Must be a string'),
];
