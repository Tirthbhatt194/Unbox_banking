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
exports.getAllCard = void 0;
const cardModel_1 = __importDefault(require("../../model/cardModel"));
const bankModel_1 = __importDefault(require("../../model/bankModel"));
const getAllCard = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let bankId = `[${req.query.bankId}]`;
    let category = req.query.category;
    // let myFunc = (num) => Number(num);
    // var intArr = Array.from(String(bankId), myFunc);
    console.log("BANKID===> ", typeof bankId);
    console.log("CATEGORY", typeof category);
    // Find all data
    if (category !== "" &&
        bankId !== "[]" &&
        category !== undefined &&
        bankId !== "[undefined]") {
        console.log("1");
        const card = yield cardModel_1.default.findAll({
            where: {
                cardCategory: category !== undefined && category.split(","),
                bankId: JSON.parse(bankId),
            },
            include: [
                {
                    model: bankModel_1.default,
                    attributes: ["name"],
                },
            ],
        });
        let newCard = card.map((c) => {
            return Object.assign(Object.assign({}, c.dataValues), { details: JSON.parse(c.dataValues.details) });
        });
        // If data exists send status with object
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
                message: "SuccessFully Got All Data!",
                data: newCard,
            });
        }
    }
    else if (category != "") {
        console.log("2");
        const card = yield cardModel_1.default.findAll({
            where: {
                cardCategory: category !== undefined && category.split(","),
            },
        });
        let newCard = card.map((c) => {
            return Object.assign(Object.assign({}, c.dataValues), { details: JSON.parse(c.dataValues.details) });
        });
        console.log("CARDDRDRRRRRDRRRRRD", card);
        // If data exists send status with object
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
                message: "SuccessFully Got All Data!",
                data: newCard,
            });
        }
    }
    else if (bankId != "[]") {
        console.log("3");
        const card = yield cardModel_1.default.findAll({
            where: {
                bankId: JSON.parse(bankId),
            },
            include: [
                {
                    model: bankModel_1.default,
                    attributes: ["name"],
                },
            ],
        });
        let newCard = card.map((c) => {
            return Object.assign(Object.assign({}, c.dataValues), { details: JSON.parse(c.dataValues.details) });
        });
        // If data exists send status with object
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
                message: "SuccessFully Got All Data!",
                data: newCard,
            });
        }
    }
    else {
        console.log("4");
        const card = yield cardModel_1.default.findAll({
            include: [
                {
                    model: bankModel_1.default,
                    attributes: ["name"],
                },
            ],
        });
        let newCard = card.map((c) => {
            return Object.assign(Object.assign({}, c.dataValues), { details: JSON.parse(c.dataValues.details) });
        });
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
                message: "SuccessFully Got All Data!",
                data: newCard,
            });
        }
    }
});
exports.getAllCard = getAllCard;
