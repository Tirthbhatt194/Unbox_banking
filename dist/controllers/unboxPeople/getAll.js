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
exports.getAllUnboxPeople = void 0;
const unboxPeopleModel_1 = __importDefault(require("../../model/unboxPeopleModel"));
const getAllUnboxPeople = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // Find all data
    const unboxPeople = yield unboxPeopleModel_1.default.findAll({});
    // If data exists send status with object
    if (!unboxPeople) {
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
            message: "Got All Data SuccessFully!",
            data: unboxPeople,
        });
    }
});
exports.getAllUnboxPeople = getAllUnboxPeople;
