"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload1 = exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
// middleware multer storage configuration
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    },
});
// middleware multer file filter
const filter = (req, file, cb) => {
    if (file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg") {
        cb(null, true);
    }
    else {
        cb(null, false);
    }
};
// middleware handler for multi file upload
exports.upload = (0, multer_1.default)({
    storage: storage,
    fileFilter: filter,
    limits: {
        fields: Infinity,
        fieldNameSize: 100000,
    },
}).any();
// middleware handler for single file upload
exports.upload1 = (0, multer_1.default)({
    storage: storage,
    fileFilter: filter,
    limits: {
        // fields: Infinity,
        fieldNameSize: 10000000,
    },
});
