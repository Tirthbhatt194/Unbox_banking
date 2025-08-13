import { RequestHandler } from "express";
import homePageModel from "../../model/homePageModel";

export const getOnehomePage: RequestHandler = async (req, res, next) => {
  let id = req.params.id;

  // Find data by id and send status with object at that id
  const homePage = await homePageModel.findOne({
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
  } else {
    return res.status(200).send({
      statusCode: 200,
      status: true,
      message: "Got Data SuccessFully!",
      data: newInq,
    });
  }
};
