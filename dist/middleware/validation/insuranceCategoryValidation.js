"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCategory = void 0;
const express_validator_1 = require("express-validator");
exports.validateCategory = [
    (0, express_validator_1.body)('insuranceName')
        .isString()
        .withMessage('Must be a string'),
    (0, express_validator_1.body)('insuranceDescription')
        .isString()
        .withMessage('Must be a string'),
    (0, express_validator_1.body)('insuranceDefinition')
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
];
