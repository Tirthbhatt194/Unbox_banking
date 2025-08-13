import { body } from 'express-validator';

export const validateCategory = [
    body('insuranceName')
        .isString()
        .withMessage('Must be a string'),
    body('insuranceDescription')
        .isString()
        .withMessage('Must be a string'),
    body('insuranceDefinition')
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
]