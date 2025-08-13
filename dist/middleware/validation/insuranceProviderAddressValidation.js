"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateProviderAddress = void 0;
const express_validator_1 = require("express-validator");
exports.validateProviderAddress = [
    (0, express_validator_1.body)('country')
        .isString()
        .withMessage('Must be a String')
        .isLength({ min: 4 })
        .withMessage('Name must be atleast 4 charactars !'),
    (0, express_validator_1.body)('state')
        .isString()
        .withMessage('Must be a String')
        .isLength({ min: 3 })
        .withMessage('Name must be atleast 3 charactars !'),
    (0, express_validator_1.body)('district')
        .isString()
        .isLength({ min: 3 })
        .withMessage('Name must be atleast 3 charactars !'),
    (0, express_validator_1.body)('taluka')
        .isString()
        .withMessage('Must be a String')
        .isLength({ min: 3 })
        .withMessage('Name must be atleast 3 charactars !'),
    (0, express_validator_1.body)('address_1')
        .isString()
        .withMessage('Must be a String')
        .isLength({ min: 4 })
        .withMessage('Name must be atleast 4 charactars !'),
    (0, express_validator_1.body)('address_2')
        .isString()
        .withMessage('Must be a String')
        .isLength({ min: 4 })
        .withMessage('Name must be atleast 4 charactars !'),
    (0, express_validator_1.body)('zipcode')
        .isNumeric()
        .withMessage('Must be a number')
        .isLength({ min: 6, max: 6 })
        .withMessage('Zipcode must be number of length 6 !'),
    (0, express_validator_1.body)('phone1')
        .isNumeric()
        .withMessage('Must be a number')
        .isLength({ min: 10, max: 10 })
        .withMessage('Phone must be number of length 10 !'),
    (0, express_validator_1.body)('phone2')
        .isNumeric()
        .withMessage('Must be a number')
        .isLength({ min: 10, max: 10 })
        .withMessage('Phone must be number of length 10 !'),
    (0, express_validator_1.body)('fax')
        .isNumeric()
        .withMessage('Must be a number')
        .isLength({ min: 8, max: 10 })
        .withMessage('Phone must be number of length between 8 to 10 !'),
    (0, express_validator_1.body)('email')
        .normalizeEmail()
        .isEmail()
        .withMessage('Invalid email !')
];
