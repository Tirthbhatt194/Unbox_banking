import { RequestHandler } from "express";
import homePageModel from "../../model/homePageModel";

export const getAllhomePage: RequestHandler = async (req, res, next) => {
  // Find all data
  const homePage = await homePageModel.findAll({});

  if (!homePage) {
    return res.status(404).send("NO DATA FOUND!");
  }

  const newInq = homePage.map((i) => ({
    id: i.dataValues.id,
    webLogo: i.dataValues.webLogo,
    mobileLogo: i.dataValues.mobileLogo,
    bannerTitle: i.dataValues.bannerTitle,
    bannerText: i.dataValues.bannerText,
    bannerImage: i.dataValues.bannerImage,
    downloadTitle: i.dataValues.downloadTitle,
    downloadText: i.dataValues.downloadText,
    downloadImage: i.dataValues.downloadImage,
    googleImage: i.dataValues.googleImage,
    appleImage: i.dataValues.appleImage,
    advantageTitle: i.dataValues.advantageTitle,
    advantageTitle1: i.dataValues.advantageTitle1,
    advantageText1: i.dataValues.advantageText1,
    advantageImage1: i.dataValues.advantageImage1,
    advantageTitle2: i.dataValues.advantageTitle2,
    advantageText2: i.dataValues.advantageText2,
    advantageImage2: i.dataValues.advantageImage2,
    advantageTitle3: i.dataValues.advantageTitle3,
    advantageText3: i.dataValues.advantageText3,
    advantageImage3: i.dataValues.advantageImage3,
    advantageTitle4: i.dataValues.advantageTitle4,
    advantageText4: i.dataValues.advantageText4,
    advantageImage4: i.dataValues.advantageImage4,
    footerLogo: i.dataValues.footerLogo,
    appStoreLink: i.dataValues.appStoreLink,
    playStoreLink: i.dataValues.playStoreLink,
    howItWorksData: JSON.parse(i.dataValues.howItWorksData),
  }));

  // If data exists send status with object
  if (!homePage) {
    return res.status(404).send({
      statusCode: 404,
      status: false,
      message: "Data Not Found!",
    });
  } else {
    return res.status(200).send({
      statusCode: 200,
      status: true,
      message: "Got All Data SuccessFully!",
      data: newInq,
    });
  }
};
