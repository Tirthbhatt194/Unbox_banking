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
exports.getOnehomePage = void 0;
const homePageModel_1 = __importDefault(require("../../model/homePageModel"));
const getOnehomePage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    // Find data by id and send status with object at that id
    const homePage = yield homePageModel_1.default.findOne({
        where: {
            id: id,
        },
    });
    const newInq = {
        id: homePage.dataValues.id,
        webLogo: homePage.dataValues.webLogo,
        mobileLogo: homePage.dataValues.mobileLogo,
        bannerTitle: homePage.dataValues.bannerTitle,
        bannerText: homePage.dataValues.bannerText,
        bannerImage: homePage.dataValues.bannerImage,
        downloadTitle: homePage.dataValues.downloadTitle,
        downloadText: homePage.dataValues.downloadText,
        downloadImage: homePage.dataValues.downloadImage,
        googleImage: homePage.dataValues.googleImage,
        appleImage: homePage.dataValues.appleImage,
        advantageTitle: homePage.dataValues.advantageTitle,
        advantageTitle1: homePage.dataValues.advantageTitle1,
        advantageText1: homePage.dataValues.advantageText1,
        advantageImage1: homePage.dataValues.advantageImage1,
        advantageTitle2: homePage.dataValues.advantageTitle2,
        advantageText2: homePage.dataValues.advantageText2,
        advantageImage2: homePage.dataValues.advantageImage2,
        advantageTitle3: homePage.dataValues.advantageTitle3,
        advantageText3: homePage.dataValues.advantageText3,
        advantageImage3: homePage.dataValues.advantageImage3,
        advantageTitle4: homePage.dataValues.advantageTitle4,
        advantageText4: homePage.dataValues.advantageText4,
        advantageImage4: homePage.dataValues.advantageImage4,
        footerLogo: homePage.dataValues.footerLogo,
        appStoreLink: homePage.dataValues.appStoreLink,
        playStoreLink: homePage.dataValues.playStoreLink,
        howItWorksData: JSON.parse(homePage.dataValues.howItWorksData),
    };
    // If data exists send data object with status
    if (!homePage) {
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
            message: "Got Data SuccessFully!",
            data: newInq,
        });
    }
});
exports.getOnehomePage = getOnehomePage;
