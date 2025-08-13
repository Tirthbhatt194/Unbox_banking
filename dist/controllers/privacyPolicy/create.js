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
exports.createPrivacyPolicy = void 0;
const privacyPolicyModel_1 = __importDefault(require("../../model/privacyPolicyModel"));
const createPrivacyPolicy = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // insert data to faq and send status with object
    const privacyPolicy = {
        title: req.body.title,
        subTitle: req.body.subTitle,
        text: req.body.text,
    };
    const PrivacyPolicy = yield privacyPolicyModel_1.default.create(privacyPolicy);
    // If insert success send data object with status
    if (!PrivacyPolicy) {
        res.status(400).send({
            statusCode: 400,
            status: false,
            message: "Failed To Insert Data!",
        });
    }
    else {
        res.status(201).send({
            statusCode: 201,
            status: true,
            message: "AboutUs Details Created SuccessFully!",
            data: PrivacyPolicy,
        });
    }
});
exports.createPrivacyPolicy = createPrivacyPolicy;
