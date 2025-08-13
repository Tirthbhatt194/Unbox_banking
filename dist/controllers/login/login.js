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
exports.loginAccount = void 0;
const unboxPeopleModel_1 = __importDefault(require("../../model/unboxPeopleModel"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const allInquiriesModel_1 = __importDefault(require("../../model/allInquiriesModel"));
dotenv_1.default.config();
const loginAccount = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield unboxPeopleModel_1.default.findOne({
        where: { email },
    });
    if (!user) {
        return res.status(404).send({
            message: "Account not found!",
        });
    }
    if (user.dataValues.is_active === false) {
        return res.status(404).send({
            message: "User is Deectivated!",
        });
    }
    else {
        bcrypt_1.default.compare(password, user.dataValues.password, (err, result) => __awaiter(void 0, void 0, void 0, function* () {
            if (!result) {
                return res.status(401).send({
                    message: "Invalid Credentials.",
                });
            }
            const token = jsonwebtoken_1.default.sign({
                id: user.dataValues.id,
                email: user.dataValues.email,
            }, process.env.AUTH_SECRET);
            let date = new Date();
            let istDateStr = date.toLocaleString("en-IN", {
                timeZone: "Asia/Kolkata",
            });
            yield unboxPeopleModel_1.default.update({
                user_token: token,
                lastLogin: istDateStr,
            }, { where: { id: user.dataValues.id } });
            user.dataValues.user_token = token;
            const policies = yield allInquiriesModel_1.default.findAll({
                where: {
                    userEmail: email,
                },
            });
            policies.forEach((p) => __awaiter(void 0, void 0, void 0, function* () {
                yield allInquiriesModel_1.default.update({ userId: user.dataValues.id }, {
                    where: {
                        id: p.dataValues.id,
                    },
                });
            }));
            res.status(200).send(user);
        }));
    }
});
exports.loginAccount = loginAccount;
