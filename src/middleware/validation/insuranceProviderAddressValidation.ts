import { body } from 'express-validator';

export const validateProviderAddress = [
    body('country')
        .isString()
        .withMessage('Must be a String')
        .isLength({ min: 4 })
        .withMessage('Name must be atleast 4 charactars !'),
    body('state')
        .isString()
        .withMessage('Must be a String')
        .isLength({ min: 3 })
        .withMessage('Name must be atleast 3 charactars !'),
    body('district')
        .isString()
        .isLength({ min: 3 })
        .withMessage('Name must be atleast 3 charactars !'),
    body('taluka')
        .isString()
        .withMessage('Must be a String')
        .isLength({ min: 3 })
        .withMessage('Name must be atleast 3 charactars !'),
    body('address_1')
        .isString()
        .withMessage('Must be a String')
        .isLength({ min: 4 })
        .withMessage('Name must be atleast 4 charactars !'),
    body('address_2')
        .isString()
        .withMessage('Must be a String')
        .isLength({ min: 4 })
        .withMessage('Name must be atleast 4 charactars !'),
    body('zipcode')
        .isNumeric()
        .withMessage('Must be a number')
        .isLength({ min: 6, max: 6 })
        .withMessage('Zipcode must be number of length 6 !'),
    body('phone1')
        .isNumeric()
        .withMessage('Must be a number')
        .isLength({ min: 10, max: 10 })
        .withMessage('Phone must be number of length 10 !'),
    body('phone2')
        .isNumeric()
        .withMessage('Must be a number')
        .isLength({ min: 10, max: 10 })
        .withMessage('Phone must be number of length 10 !'),
    body('fax')
        .isNumeric()
        .withMessage('Must be a number')
        .isLength({ min: 8, max: 10 })
        .withMessage('Phone must be number of length between 8 to 10 !'),
    body('email')
        .normalizeEmail()
        .isEmail()
        .withMessage('Invalid email !')
]
