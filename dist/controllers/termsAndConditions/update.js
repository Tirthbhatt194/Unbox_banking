"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTermsAndConditions = void 0;
const termsAndConditionsModel_1 = __importDefault(require("../../model/termsAndConditionsModel"));
const updateTermsAndConditions = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    const upd = yield termsAndConditionsModel_1.default.findOne({
        where: {
            id: id,
        },
    });
    // If data dosent exist
    if (!upd)
        return res.status(404).send({
            statusCode: 404,
            status: false,
            message: "Data Not Found!",
        });
    // If data  exist
    if (id === id) {
        // Image validation before update
        //update data and image at particular id and update - send status with data object
        const updateTermsAndConditions = {
            id: parseInt(id),
            title: req.body.title,
            subTitle: req.body.subTitle,
            text: req.body.text,
        };
        const upda = yield termsAndConditionsModel_1.default.update(updateTermsAndConditions, {
            where: {
                id: id,
            },
        });
        res.status(200).send({
            statusCode: 200,
            status: true,
            message: "Data Updated SuccessFully!",
            data: updateTermsAndConditions,
        });
        return upda;
    }
});
exports.updateTermsAndConditions = updateTermsAndConditions;
