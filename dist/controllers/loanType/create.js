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
exports.loanTypeImage = exports.createLoanType = void 0;
const loanTypeModel_1 = __importDefault(require("../../model/loanTypeModel"));
const multer_1 = require("../../middleware/multer");
const createLoanType = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let loanTypeImage = null;
    if (req.file) {
        loanTypeImage = req.file.filename;
    }
    console.log("IMAGE ", loanTypeImage);
    // insert data to faq and send status with object
    const loanType = {
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
    const LoanType = yield loanTypeModel_1.default.create(loanType);
    // If insert success send data object with status
    if (!LoanType) {
        res.status(400).send({
            statusCode: 400,
            status: false,
            message: "Failed to insert data",
        });
    }
    else {
        res.status(201).send({
            statusCode: 201,
            status: true,
            message: "Loan Type Successfully Created!",
            data: LoanType,
        });
    }
});
exports.createLoanType = createLoanType;
exports.loanTypeImage = multer_1.upload1.single("image");
