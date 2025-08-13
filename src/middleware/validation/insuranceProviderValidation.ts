import { body } from 'express-validator';

export const validateProvider = [
    body('providerName')
        .isString()
        .withMessage('Must be a string'),
]