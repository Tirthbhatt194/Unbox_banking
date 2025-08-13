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
exports.updateLoanType = void 0;
const loanTypeModel_1 = __importDefault(require("../../model/loanTypeModel"));
const fs_1 = __importDefault(require("fs"));
const updateLoanType = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    const upd = yield loanTypeModel_1.default.findOne({
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
    // If data exist
    if (id === id) {
        let loanTypeImage = "";
        if (req.hasOwnProperty("file") && upd.getDataValue("image") !== null) {
            if (upd.getDataValue("image") !== req.file.filename) {
                fs_1.default.unlinkSync(`./images/${upd.getDataValue("image")}`);
                loanTypeImage = req.file.filename;
            }
            else if (upd.getDataValue("image") === req.file.filename) {
                fs_1.default.unlinkSync(`./images/${upd.getDataValue("image")}`);
                loanTypeImage = req.file.filename;
            }
            else {
                loanTypeImage = req.file.filename;
            }
        }
        else if (upd.getDataValue("image") === null &&
            req.hasOwnProperty("file")) {
            loanTypeImage = req.file.filename;
        }
        else {
            loanTypeImage = upd.getDataValue("image");
        }
        //update data and image at particular id and update - send status with data object
        const loanType = {
            id: parseInt(id),
            loanTypeName: req.body.loanTypeName,
            loanDescription: req.body.loanDescription,
            documents: req.body.documents,
            eligibilityCriteria: req.body.eligibilityCriteria,
            features: req.body.features,
            benifits: req.body.benifits,
            what: req.body.what,
            why: req.body.why,
            how: req.body.how,
            image: loanTypeImage,
            visibility: req.body.visibility,
        };
        const upda = yield loanTypeModel_1.default.update(loanType, {
            where: {
                id: id,
            },
        });
        res.status(200).send({
            statusCode: 200,
            status: true,
            message: "Data Updated SuccessFully!",
            data: loanType,
        });
        return upda;
    }
});
exports.updateLoanType = updateLoanType;
