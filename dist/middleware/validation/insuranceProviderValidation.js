"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateProvider = void 0;
const express_validator_1 = require("express-validator");
exports.validateProvider = [
    (0, express_validator_1.body)('providerName')
        .isString()
        .withMessage('Must be a string'),
];
