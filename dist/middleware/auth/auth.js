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
const dotenv_1 = __importDefault(require("dotenv"));
const unboxPeopleModel_1 = __importDefault(require("../../model/unboxPeopleModel"));
dotenv_1.default.config();
const verifyToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.body.token || req.query.token || req.headers["authorization"];
    console.log("first", token);
    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    else {
        const check = yield unboxPeopleModel_1.default.findOne({ where: { user_token: token.substring(7) } });
        console.log("check", check);
        if (check) {
            return next();
        }
        else {
            return res.status(401).send("Invalid Token");
        }
    }
});
exports.default = verifyToken;
