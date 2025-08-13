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
exports.updateBlog = void 0;
const blogModel_1 = __importDefault(require("../../model/blogModel"));
const fs_1 = __importDefault(require("fs"));
const updateBlog = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    const upd = yield blogModel_1.default.findOne({
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
        let blog_image = "";
        // Image validation before update
        if (req.hasOwnProperty("file") && upd.getDataValue("blog_image") !== null) {
            if (upd.getDataValue("blog_image") !== req.file.filename) {
                fs_1.default.unlinkSync(`./images/${upd.getDataValue("blog_image")}`);
                blog_image = req.file.filename;
            }
            else if (upd.getDataValue("blog_image") === req.file.filename) {
                fs_1.default.unlinkSync(`./images/${upd.getDataValue("blog_image")}`);
                blog_image = req.file.filename;
            }
            else {
                blog_image = req.file.filename;
            }
        }
        else if (upd.getDataValue("blog_image") === null &&
            req.hasOwnProperty("file")) {
            blog_image = req.file.filename;
        }
        else {
            blog_image = upd.getDataValue("blog_image");
        }
        //update data and image at particular id and update - send status with data object
        const updateBlog = {
            id: parseInt(id),
            link: req.body.link,
            blog_title: req.body.blog_title,
            blog_description: req.body.blog_description,
            blog_image: blog_image,
            insuranceCategoryId: req.body.insuranceCategoryId,
            insuranceSubCategoryId: req.body.insuranceSubCategoryId,
            visibility: req.body.visibility,
        };
        const upda = yield blogModel_1.default.update(updateBlog, {
            where: {
                id: id,
            },
        });
        // updateBlog.id = parseInt(req.body.id)
        res.status(200).send({
            statusCode: 200,
            status: true,
            message: "Data Updated SuccessFully!",
            data: updateBlog,
        });
        return upda;
    }
});
exports.updateBlog = updateBlog;
