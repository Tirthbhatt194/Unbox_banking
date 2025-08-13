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
exports.customerImage = exports.createCustomer = void 0;
const multer_1 = require("./../../middleware/multer");
const customerModel_1 = __importDefault(require("../../model/customerModel"));
const createCustomer = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // const blogImage = ((req.files as Array<Express.Multer.File>).map(file => { return file.filename }))
    let customerImage = "";
    if (req.hasOwnProperty("file") === true) {
        customerImage = req.file.filename;
    }
    else {
        customerImage = null;
    }
    const customer = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dateOfBirth: req.body.dateOfBirth,
        age: req.body.age,
        contactNo: req.body.contactNo,
        email: req.body.email,
        country: req.body.country,
        state: req.body.state,
        district: req.body.district,
        taluka: req.body.taluka,
        address_1: req.body.address_1,
        address_2: req.body.address_2,
        zipcode: req.body.zipcode,
        customerImage: customerImage,
        visibility: req.body.visibility,
    };
    const Customer = yield customerModel_1.default.create(customer);
    if (!Customer) {
        res.status(400).send({
            statusCode: 400,
            status: false,
            message: "Failed to insert data!",
        });
    }
    else {
        res.status(201).send({
            statusCode: 201,
            status: true,
            message: "Customer Created SuccessFully!",
            data: Customer,
        });
    }
});
exports.createCustomer = createCustomer;
exports.customerImage = multer_1.upload1.single("customerImage");
