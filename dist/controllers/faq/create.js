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
exports.createFaq = void 0;
const faqModel_1 = __importDefault(require("../../model/faqModel"));
const createFaq = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // insert data to faq and send status with object
    const faq = {
        questions: req.body.questions,
        answers: req.body.answers,
        insuranceCategoryId: req.body.insuranceCategoryId,
        insuranceSubCategoryId: req.body.insuranceSubCategoryId,
        visibility: req.body.visibility,
    };
    const Faq = yield faqModel_1.default.create(faq);
    // If insert success send data object with status
    if (!Faq) {
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
            message: "FAQ Successfully Created!",
            data: Faq,
        });
    }
});
exports.createFaq = createFaq;
