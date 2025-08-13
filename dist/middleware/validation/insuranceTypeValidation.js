"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateType = void 0;
const express_validator_1 = require("express-validator");
exports.validateType = [
    (0, express_validator_1.body)('insuranceCategoryTypeName')
        .isString()
        .withMessage('Must be a string'),
    (0, express_validator_1.body)('insuranceCategoryTypeDescription')
        .isString()
        .withMessage('Must be a string'),
    (0, express_validator_1.body)('insuranceCategoryTypeDefinition')
        .isString()
        .withMessage('Must be a string'),
    (0, express_validator_1.body)('what')
        .isString()
        .withMessage('Must be a string'),
    (0, express_validator_1.body)('why')
        .isString()
        .withMessage('Must be a string'),
    (0, express_validator_1.body)('how')
        .isString()
        .withMessage('Must be a string'),
    (0, express_validator_1.body)('formTitle')
        .isString()
        .withMessage('Must be a string'),
];
