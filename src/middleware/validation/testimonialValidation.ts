import { body } from 'express-validator';

export const validateTestimonial = [
    body('name')
        .isString()
        .withMessage('Must be a string'),
    body('description')
        .isString()
        .withMessage('Must be a string'),
]

