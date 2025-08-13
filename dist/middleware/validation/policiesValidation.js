"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePolicies = void 0;
const express_validator_1 = require("express-validator");
exports.validatePolicies = [
    (0, express_validator_1.body)('policyName')
        .isString()
        .withMessage('Must be a string'),
    (0, express_validator_1.body)('policyFeatures')
        .isString()
        .withMessage('Must be a string'),
    (0, express_validator_1.body)('covered')
        .isString()
        .withMessage('Must be a string'),
    (0, express_validator_1.body)('notCovered')
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
    (0, express_validator_1.body)('premium')
        .isString()
        .withMessage('Must be a string'),
    (0, express_validator_1.body)('totalPolicyTerm')
        .isString()
        .withMessage('Must be a string'),
    (0, express_validator_1.body)('about')
        .isString()
        .withMessage('Must be a string'),
    (0, express_validator_1.body)('insuranceCategoryId')
        .isInt()
        .withMessage('Should be a number'),
    (0, express_validator_1.body)('insuranceSubCategoryId')
        .isInt()
        .withMessage('Should be a number'),
    (0, express_validator_1.body)('insuranceProviderId')
        .isInt()
        .withMessage('Should be a number'),
    (0, express_validator_1.body)('insuranceCategoryTypeId')
        .isInt()
        .withMessage('Should be a number')
];
