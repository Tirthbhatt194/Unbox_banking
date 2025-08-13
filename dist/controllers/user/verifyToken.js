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
exports.verifyUserToken = void 0;
const unboxPeopleModel_1 = __importDefault(require("../../model/unboxPeopleModel"));
const verifyUserToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_token } = req.body;
    try {
        const unboxPeople = yield unboxPeopleModel_1.default.findOne({
            where: {
                user_token,
            },
        });
        if (!unboxPeople) {
            return res.status(401).send({
                message: "Invalid User Token!",
            });
        }
        else {
            return res.status(200).send(unboxPeople);
        }
    }
    catch (err) {
        return res.status(500).send({
            message: "Internal server error!",
            error: err.message,
        });
    }
});
exports.verifyUserToken = verifyUserToken;
