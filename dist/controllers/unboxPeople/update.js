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
exports.updateUnboxPeople = void 0;
const unboxPeopleModel_1 = __importDefault(require("../../model/unboxPeopleModel"));
const fs_1 = __importDefault(require("fs"));
const updateUnboxPeople = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    const upd = yield unboxPeopleModel_1.default.findOne({
        where: {
            id: id,
        },
    });
    // If data dosent exist
    if (!upd)
        return res.status(404).send({
            statusCode: 404,
            status: false,
            message: "Data Not Found!",
        });
    // If data exist
    if (id === id) {
        let unboxPeopleImage = "";
        // Image validation before update
        if (req.hasOwnProperty("file") &&
            upd.getDataValue("unboxPeopleImage") !== null) {
            if (upd.getDataValue("unboxPeopleImage") !== req.file.filename) {
                fs_1.default.unlinkSync(`./images/${upd.getDataValue("unboxPeopleImage")}`);
                unboxPeopleImage = req.file.filename;
            }
            else if (upd.getDataValue("unboxPeopleImage") === req.file.filename) {
                fs_1.default.unlinkSync(`./images/${upd.getDataValue("unboxPeopleImage")}`);
                unboxPeopleImage = req.file.filename;
            }
            else {
                unboxPeopleImage = req.file.filename;
            }
        }
        else if (upd.getDataValue("unboxPeopleImage") === null &&
            req.hasOwnProperty("file")) {
            unboxPeopleImage = req.file.filename;
        }
        else {
            unboxPeopleImage = upd.getDataValue("unboxPeopleImage");
        }
        //update data and image at particular id and update - send status with data object
        const unboxPeople = {
            id: parseInt(id),
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            designation: req.body.designation,
            contactNumber: req.body.contactNumber,
            email: req.body.email,
            postalAddress: req.body.postalAddress,
            description: req.body.description,
            gender: req.body.gender,
            token: req.body.token,
            unboxPeopleImage: unboxPeopleImage,
            is_active: req.body.is_active,
            annualIncome: req.body.annualIncome,
            anyOtherHouseHoldIncome: req.body.anyOtherHouseHoldIncome,
            city: req.body.city,
            dateOfBirth: req.body.dateOfBirth,
            employmentStatus: req.body.employmentStatus,
            maritialStatus: req.body.maritialStatus,
            monthlyIncome: req.body.monthlyIncome,
            peopleDependOnYouFinancially: req.body
                .peopleDependOnYouFinancially,
            residentialStatus: req.body.residentialStatus,
            pincode: req.body.pincode,
            state: req.body.state,
        };
        const upda = yield unboxPeopleModel_1.default.update(unboxPeople, {
            where: {
                id: id,
            },
        });
        res.status(200).send({
            statusCode: 200,
            status: true,
            message: "Data Updated SuccessFully!",
            data: unboxPeople,
        });
        return upda;
    }
});
exports.updateUnboxPeople = updateUnboxPeople;
