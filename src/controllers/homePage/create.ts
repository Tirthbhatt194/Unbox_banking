import { RequestHandler } from "express";
import homePageModel from "../../model/homePageModel";

export const createHomePage: RequestHandler = async (req, res, next) => {
  let webLogo = [];
  let mobileLogo = [];
  let bannerImage = [];
  let downloadImage = [];
  let googleImage = [];
  let appleImage = [];
  let advantageImage1 = [];
  let advantageImage2 = [];
  let advantageImage3 = [];
  let advantageImage4 = [];
  let footerLogo = [];

  // Check if image is sent as set image as null
  if (req.hasOwnProperty("files") === true) {
    webLogo = (req.files as Array<Express.Multer.File>)
      .map((file) => {
        if (file.fieldname === "webLogo") {
          return file.filename;
        }
      })
      .filter((file) => {
        return file !== undefined;
      });

    mobileLogo = (req.files as Array<Express.Multer.File>)
      .map((file) => {
        if (file.fieldname === "mobileLogo") {
          return file.filename;
        }
      })
      .filter((file) => {
        return file !== undefined;
      });

    bannerImage = (req.files as Array<Express.Multer.File>)
      .map((file) => {
        if (file.fieldname === "bannerImage") {
          return file.filename;
        }
      })
      .filter((file) => {
        return file !== undefined;
      });

    downloadImage = (req.files as Array<Express.Multer.File>)
      .map((file) => {
        if (file.fieldname === "downloadImage") {
          return file.filename;
        }
      })
      .filter((file) => {
        return file !== undefined;
      });

    googleImage = (req.files as Array<Express.Multer.File>)
      .map((file) => {
        if (file.fieldname === "googleImage") {
          return file.filename;
        }
      })
      .filter((file) => {
        return file !== undefined;
      });

    appleImage = (req.files as Array<Express.Multer.File>)
      .map((file) => {
        if (file.fieldname === "appleImage") {
          return file.filename;
        }
      })
      .filter((file) => {
        return file !== undefined;
      });

    advantageImage1 = (req.files as Array<Express.Multer.File>)
      .map((file) => {
        if (file.fieldname === "advantageImage1") {
          return file.filename;
        }
      })
      .filter((file) => {
        return file !== undefined;
      });

    advantageImage2 = (req.files as Array<Express.Multer.File>)
      .map((file) => {
        if (file.fieldname === "advantageImage2") {
          return file.filename;
        }
      })
      .filter((file) => {
        return file !== undefined;
      });

    advantageImage3 = (req.files as Array<Express.Multer.File>)
      .map((file) => {
        if (file.fieldname === "advantageImage3") {
          return file.filename;
        }
      })
      .filter((file) => {
        return file !== undefined;
      });

    advantageImage4 = (req.files as Array<Express.Multer.File>)
      .map((file) => {
        if (file.fieldname === "advantageImage4") {
          return file.filename;
        }
      })
      .filter((file) => {
        return file !== undefined;
      });

    footerLogo = (req.files as Array<Express.Multer.File>)
      .map((file) => {
        if (file.fieldname === "footerLogo") {
          return file.filename;
        }
      })
      .filter((file) => {
        return file !== undefined;
      });
  } else {
    webLogo[0] = null;
    mobileLogo[0] = null;
    bannerImage[0] = null;
    downloadImage[0] = null;
    googleImage[0] = null;
    appleImage[0] = null;
    advantageImage1[0] = null;
    advantageImage2[0] = null;
    advantageImage3[0] = null;
    advantageImage4[0] = null;
    footerLogo[0] = null;
  }

  // insert data to faq and send status with object
  const homePage = {
    webLogo: webLogo[0],
    mobileLogo: mobileLogo[0],
    bannerTitle: req.body.bannerTitle,
    bannerText: req.body.bannerText,
    bannerImage: bannerImage[0],
    downloadTitle: req.body.downloadTitle,
    downloadText: req.body.downloadText,
    downloadImage: downloadImage[0],
    googleImage: googleImage[0],
    appleImage: appleImage[0],
    advantageTitle: req.body.advantageTitle,
    advantageTitle1: req.body.advantageTitle1,
    advantageText1: req.body.advantageText1,
    advantageImage1: advantageImage1[0],
    advantageTitle2: req.body.advantageTitle2,
    advantageText2: req.body.advantageText2,
    advantageImage2: advantageImage2[0],
    advantageTitle3: req.body.advantageTitle3,
    advantageText3: req.body.advantageText3,
    advantageImage3: advantageImage3[0],
    advantageTitle4: req.body.advantageTitle4,
    advantageText4: req.body.advantageText4,
    advantageImage4: advantageImage4[0],
    footerLogo: footerLogo[0],
    appStoreLink: req.body.appStoreLink,
    playStoreLink: req.body.playStoreLink,
    howItWorksData: req.body.howItWorksData,
  };

  const HomePage = await homePageModel.create(homePage);

  // If insert success send data object with status
  if (!HomePage) {
    res.status(400).send({
      statusCode: 400,
      status: false,
      message: "Failed To Insert Data!",
    });
  } else {
    res.status(201).send({
      statusCode: 201,
      status: true,
      message: "HomePage Details Created SuccessFully!",
      data: HomePage,
    });
  }
};
