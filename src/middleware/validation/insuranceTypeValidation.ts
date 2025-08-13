import { body } from 'express-validator';

export const validateType = [
    body('insuranceCategoryTypeName')
        .isString()
        .withMessage('Must be a string'),
    body('insuranceCategoryTypeDescription')
        .isString()
        .withMessage('Must be a string'),
    body('insuranceCategoryTypeDefinition')
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
    body('formTitle')
        .isString()
        .withMessage('Must be a string'),
]