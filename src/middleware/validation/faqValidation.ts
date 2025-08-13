import { body } from 'express-validator';

export const validateFaq = [
    body('questions')
        .isString()
        .withMessage('Must be a string'),
    body('answers')
        .isString()
        .withMessage('Must be a string'),
]