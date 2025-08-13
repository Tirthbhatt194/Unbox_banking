import { RequestHandler } from 'express';
import {validationResult} from 'express-validator'

export const validationRes : RequestHandler = async (req, res, next) => {
    const result = await validationResult(req).array();
    console.log("vals",result)
    if (!result.length) return next();
    res.status(400).send(result)
}
