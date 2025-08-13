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
exports.sendOTP = void 0;
const axios_1 = __importDefault(require("axios"));
const sendOTP = (phone, code) => __awaiter(void 0, void 0, void 0, function* () {
    //   const API_KEY = "YOUR_API_KEY";
    //   const SENDER_ID = "YOUR_SENDER_ID";
    const MESSAGE = `Your OTP for UnboxBanking is ${code}. Never share this code with anyone!`;
    const URL = `https://portal.vasudevsms.in/api/mt/SendSMS?user=patedr02&password=tQV5hGPZug&senderid=LIMERR&channel=Trans&DCS=0&flashsms=0&number=${phone}&text=Your+one+time+verification+code+for+Limerr-POS+app+is+%3A+${code}.+Powered+By+Limerr.&route=2&dlttemplateid=1307161950775170847`;
    try {
        const response = yield axios_1.default.get(URL);
        console.log("OTP sent successfully:", response.data);
    }
    catch (error) {
        console.error("Error sending OTP:", error);
    }
});
exports.sendOTP = sendOTP;
