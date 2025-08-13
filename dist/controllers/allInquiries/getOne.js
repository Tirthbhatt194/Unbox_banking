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
exports.getOneFromAllInquiry = void 0;
const allInquiriesModel_1 = __importDefault(require("../../model/allInquiriesModel"));
const unboxPeopleModel_1 = __importDefault(require("../../model/unboxPeopleModel"));
const getOneFromAllInquiry = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    // Find data by id and send status with object at that id
    const card = yield allInquiriesModel_1.default.findOne({
        where: {
            id: id,
        },
    });
    const userImage = yield unboxPeopleModel_1.default.findOne({
        where: {
            email: card.dataValues.userEmail,
        },
    });
    console.log("CARDOBJ ===> ", card.dataValues.userEmail);
    if (userImage) {
        const newInq = {
            id: card.dataValues.id,
            type: card.dataValues.type,
            data: JSON.parse(card.dataValues.data),
            userContactNumber: card.dataValues.userContactNumber,
            userEmail: card.dataValues.userEmail,
            userId: card.dataValues.userId,
            userImage: userImage.dataValues.unboxPeopleImage,
            createdAt: card.dataValues.createdAt,
        };
        if (!card) {
            return res.status(404).send({
                statusCode: 404,
                status: false,
                message: "Data Not Found!",
            });
        }
        else {
            return res.status(200).send({
                statusCode: 200,
                status: true,
                message: "SuccessFully Got Data!",
                data: newInq,
            });
        }
    }
    else {
        const newInq = {
            id: card.dataValues.id,
            type: card.dataValues.type,
            data: JSON.parse(card.dataValues.data),
            userContactNumber: card.dataValues.userContactNumber,
            userEmail: card.dataValues.userEmail,
            userId: card.dataValues.userId,
            createdAt: card.dataValues.createdAt,
        };
        if (!card) {
            return res.status(404).send({
                statusCode: 404,
                status: false,
                message: "Data Not Found!",
            });
        }
        else {
            return res.status(200).send({
                statusCode: 200,
                status: true,
                message: "SuccessFully Got Data!",
                data: newInq,
            });
        }
    }
    // If data exists send data object with status
});
exports.getOneFromAllInquiry = getOneFromAllInquiry;
