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
exports.updateCustomers = void 0;
const customerModel_1 = __importDefault(require("../../model/customerModel"));
const fs_1 = __importDefault(require("fs"));
const updateCustomers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    const upd = yield customerModel_1.default.findOne({
        where: {
            id: id,
        },
    });
    if (!upd)
        return res.status(404).send({
            statusCode: 404,
            status: false,
            message: "Data Not Found!",
        });
    if (id === id) {
        let customerImage = "";
        if (req.hasOwnProperty("file")) {
            if (upd.getDataValue("customerImage") !== req.file.filename) {
                fs_1.default.unlinkSync(`./images/${upd.getDataValue("customerImage")}`);
                customerImage = req.file.filename;
            }
            else if (upd.getDataValue("customerImage") === req.file.filename) {
                fs_1.default.unlinkSync(`./images/${upd.getDataValue("customerImage")}`);
                customerImage = req.file.filename;
            }
            else {
                customerImage = req.file.filename;
            }
        }
        else {
            customerImage = upd.getDataValue("customerImage");
        }
        const updateCustomer = {
            id: parseInt(id),
            firstName: req.params.firstName,
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
        const upda = yield customerModel_1.default.update(updateCustomer, {
            where: {
                id: id,
            },
        });
        res.status(200).send({
            statusCode: 200,
            status: true,
            message: "Data Updated SuccessFully!",
            data: updateCustomer,
        });
        return upda;
    }
});
exports.updateCustomers = updateCustomers;
