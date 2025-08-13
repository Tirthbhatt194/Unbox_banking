import { body } from 'express-validator';

export const validatePolicies = [
    body('policyName')
        .isString()
        .withMessage('Must be a string'),
    body('policyFeatures')
        .isString()
        .withMessage('Must be a string'),
    body('covered')
        .isString()
        .withMessage('Must be a string'),
    body('notCovered')
        .isString()
        .withMessage('Must be a string'),
    body('what')
        .isString()
        .withMessage('Must be a string'),
    body('why')
        .isString()
        .withMessage('Must be a string'),
    body('how')
        .isString()
        .withMessage('Must be a string'),
    body('premium')
        .isString()
        .withMessage('Must be a string'),
    body('totalPolicyTerm')
        .isString()
        .withMessage('Must be a string'),
    body('about')
        .isString()
        .withMessage('Must be a string'),
    body('insuranceCategoryId')
        .isInt()
        .withMessage('Should be a number'),
    body('insuranceSubCategoryId')
        .isInt()
        .withMessage('Should be a number'),
    body('insuranceProviderId')
        .isInt()
        .withMessage('Should be a number'),
    body('insuranceCategoryTypeId')
        .isInt()
        .withMessage('Should be a number')
]