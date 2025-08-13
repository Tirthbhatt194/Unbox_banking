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
exports.getAllTheInquiry = void 0;
const allInquiriesModel_1 = __importDefault(require("../../model/allInquiriesModel"));
const getAllTheInquiry = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const inquiry = yield allInquiriesModel_1.default.findAll();
    if (!inquiry) {
        return res.status(404).send("NO DATA FOUND!");
    }
    const newInq = inquiry.map((i) => ({
        id: i.dataValues.id,
        type: i.dataValues.type,
        data: JSON.parse(i.dataValues.data),
        userContactNumber: i.dataValues.userContactNumber,
        userEmail: i.dataValues.userEmail,
        userId: i.dataValues.userId,
        createdAt: i.dataValues.createdAt,
    }));
    return res.status(200).send(newInq);
});
exports.getAllTheInquiry = getAllTheInquiry;
