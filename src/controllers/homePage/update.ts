import { RequestHandler } from "express";
import homePageModel from "../../model/homePageModel";
import fs from "fs";

export const updatehomePage: RequestHandler = async (req, res, next) => {
  let id = req.params.id;

  const upd = await homePageModel.findOne({
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

  // If data  exist
  if (id === id) {
    // Image validation before update
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

    let allFiles = (req.files as Array<Express.Multer.File>).map((file) => {
      return file.fieldname;
    });

    if (
      allFiles.find((o) => o === "footerLogo") !== undefined &&
      upd.getDataValue("footerLogo") !== null
    ) {
      fs.unlinkSync(`./images/${upd.getDataValue("footerLogo")}`);
      footerLogo = (req.files as Array<Express.Multer.File>)
        .map((file) => {
          if (file.fieldname === "footerLogo") {
            return file.filename;
          }
        })
        .filter((file) => {
          return file !== undefined;
        });
    } else if (
      allFiles.find((o) => o === "footerLogo") !== undefined &&
      upd.getDataValue("footerLogo") === null
    ) {
      // fs.unlinkSync(`./images/${upd.getDataValue("footerLogo")}`)
      footerLogo = (req.files as Array<Express.Multer.File>)
        .map((file) => {
          if (file.fieldname === "footerLogo") {
            return file.filename;
          }
        })
        .filter((file) => {
          return file !== undefined;
        });
    } else if (
      allFiles.find((o) => o === "footerLogo") === undefined &&
      upd.getDataValue("footerLogo") === null
    ) {
      footerLogo[0] = null;
    } else {
      footerLogo[0] = upd.getDataValue("footerLogo");
    }

    if (
      allFiles.find((o) => o === "webLogo") !== undefined &&
      upd.getDataValue("webLogo") !== null
    ) {
      fs.unlinkSync(`./images/${upd.getDataValue("webLogo")}`);
      webLogo = (req.files as Array<Express.Multer.File>)
        .map((file) => {
          if (file.fieldname === "webLogo") {
            return file.filename;
          }
        })
        .filter((file) => {
          return file !== undefined;
        });
    } else if (
      allFiles.find((o) => o === "webLogo") !== undefined &&
      upd.getDataValue("webLogo") === null
    ) {
      // fs.unlinkSync(`./images/${upd.getDataValue("webLogo")}`)
      webLogo = (req.files as Array<Express.Multer.File>)
        .map((file) => {
          if (file.fieldname === "webLogo") {
            return file.filename;
          }
        })
        .filter((file) => {
          return file !== undefined;
        });
    } else if (
      allFiles.find((o) => o === "webLogo") === undefined &&
      upd.getDataValue("webLogo") === null
    ) {
      webLogo[0] = null;
    } else {
      webLogo[0] = upd.getDataValue("webLogo");
    }

    if (
      allFiles.find((o) => o === "mobileLogo") !== undefined &&
      upd.getDataValue("mobileLogo") !== null
    ) {
      fs.unlinkSync(`./images/${upd.getDataValue("mobileLogo")}`);
      mobileLogo = (req.files as Array<Express.Multer.File>)
        .map((file) => {
          if (file.fieldname === "mobileLogo") {
            return file.filename;
          }
        })
        .filter((file) => {
          return file !== undefined;
        });
    } else if (
      allFiles.find((o) => o === "mobileLogo") !== undefined &&
      upd.getDataValue("mobileLogo") === null
    ) {
      // fs.unlinkSync(`./images/${upd.getDataValue("mobileLogo")}`)
      mobileLogo = (req.files as Array<Express.Multer.File>)
        .map((file) => {
          if (file.fieldname === "mobileLogo") {
            return file.filename;
          }
        })
        .filter((file) => {
          return file !== undefined;
        });
    } else if (
      allFiles.find((o) => o === "mobileLogo") === undefined &&
      upd.getDataValue("mobileLogo") === null
    ) {
      mobileLogo[0] = null;
    } else {
      mobileLogo[0] = upd.getDataValue("mobileLogo");
    }

    if (
      allFiles.find((o) => o === "bannerImage") !== undefined &&
      upd.getDataValue("bannerImage") !== null
    ) {
      fs.unlinkSync(`./images/${upd.getDataValue("bannerImage")}`);
      bannerImage = (req.files as Array<Express.Multer.File>)
        .map((file) => {
          if (file.fieldname === "bannerImage") {
            return file.filename;
          }
        })
        .filter((file) => {
          return file !== undefined;
        });
    } else if (
      allFiles.find((o) => o === "bannerImage") !== undefined &&
      upd.getDataValue("bannerImage") === null
    ) {
      // fs.unlinkSync(`./images/${upd.getDataValue("mobileLogo")}`)
      bannerImage = (req.files as Array<Express.Multer.File>)
        .map((file) => {
          if (file.fieldname === "bannerImage") {
            return file.filename;
          }
        })
        .filter((file) => {
          return file !== undefined;
        });
    } else if (
      allFiles.find((o) => o === "bannerImage") === undefined &&
      upd.getDataValue("bannerImage") === null
    ) {
      bannerImage[0] = null;
    } else {
      bannerImage[0] = upd.getDataValue("bannerImage");
    }

    if (
      allFiles.find((o) => o === "downloadImage") !== undefined &&
      upd.getDataValue("downloadImage") !== null
    ) {
      fs.unlinkSync(`./images/${upd.getDataValue("downloadImage")}`);
      downloadImage = (req.files as Array<Express.Multer.File>)
        .map((file) => {
          if (file.fieldname === "downloadImage") {
            return file.filename;
          }
        })
        .filter((file) => {
          return file !== undefined;
        });
    } else if (
      allFiles.find((o) => o === "downloadImage") !== undefined &&
      upd.getDataValue("downloadImage") === null
    ) {
      // fs.unlinkSync(`./images/${upd.getDataValue("mobileLogo")}`)
      downloadImage = (req.files as Array<Express.Multer.File>)
        .map((file) => {
          if (file.fieldname === "downloadImage") {
            return file.filename;
          }
        })
        .filter((file) => {
          return file !== undefined;
        });
    } else if (
      allFiles.find((o) => o === "downloadImage") === undefined &&
      upd.getDataValue("downloadImage") === null
    ) {
      downloadImage[0] = null;
    } else {
      downloadImage[0] = upd.getDataValue("downloadImage");
    }

    if (
      allFiles.find((o) => o === "googleImage") !== undefined &&
      upd.getDataValue("googleImage") !== null
    ) {
      fs.unlinkSync(`./images/${upd.getDataValue("googleImage")}`);
      googleImage = (req.files as Array<Express.Multer.File>)
        .map((file) => {
          if (file.fieldname === "googleImage") {
            return file.filename;
          }
        })
        .filter((file) => {
          return file !== undefined;
        });
    } else if (
      allFiles.find((o) => o === "googleImage") !== undefined &&
      upd.getDataValue("googleImage") === null
    ) {
      // fs.unlinkSync(`./images/${upd.getDataValue("mobileLogo")}`)
      googleImage = (req.files as Array<Express.Multer.File>)
        .map((file) => {
          if (file.fieldname === "googleImage") {
            return file.filename;
          }
        })
        .filter((file) => {
          return file !== undefined;
        });
    } else if (
      allFiles.find((o) => o === "googleImage") === undefined &&
      upd.getDataValue("googleImage") === null
    ) {
      googleImage[0] = null;
    } else {
      googleImage[0] = upd.getDataValue("googleImage");
    }

    if (
      allFiles.find((o) => o === "appleImage") !== undefined &&
      upd.getDataValue("appleImage") !== null
    ) {
      fs.unlinkSync(`./images/${upd.getDataValue("appleImage")}`);
      appleImage = (req.files as Array<Express.Multer.File>)
        .map((file) => {
          if (file.fieldname === "appleImage") {
            return file.filename;
          }
        })
        .filter((file) => {
          return file !== undefined;
        });
    } else if (
      allFiles.find((o) => o === "appleImage") !== undefined &&
      upd.getDataValue("appleImage") === null
    ) {
      // fs.unlinkSync(`./images/${upd.getDataValue("mobileLogo")}`)
      appleImage = (req.files as Array<Express.Multer.File>)
        .map((file) => {
          if (file.fieldname === "appleImage") {
            return file.filename;
          }
        })
        .filter((file) => {
          return file !== undefined;
        });
    } else if (
      allFiles.find((o) => o === "appleImage") === undefined &&
      upd.getDataValue("appleImage") === null
    ) {
      appleImage[0] = null;
    } else {
      appleImage[0] = upd.getDataValue("appleImage");
    }

    if (
      allFiles.find((o) => o === "advantageImage1") !== undefined &&
      upd.getDataValue("advantageImage1") !== null
    ) {
      fs.unlinkSync(`./images/${upd.getDataValue("advantageImage1")}`);
      advantageImage1 = (req.files as Array<Express.Multer.File>)
        .map((file) => {
          if (file.fieldname === "advantageImage1") {
            return file.filename;
          }
        })
        .filter((file) => {
          return file !== undefined;
        });
    } else if (
      allFiles.find((o) => o === "advantageImage1") !== undefined &&
      upd.getDataValue("advantageImage1") === null
    ) {
      // fs.unlinkSync(`./images/${upd.getDataValue("mobileLogo")}`)
      advantageImage1 = (req.files as Array<Express.Multer.File>)
        .map((file) => {
          if (file.fieldname === "advantageImage1") {
            return file.filename;
          }
        })
        .filter((file) => {
          return file !== undefined;
        });
    } else if (
      allFiles.find((o) => o === "advantageImage1") === undefined &&
      upd.getDataValue("advantageImage1") === null
    ) {
      advantageImage1[0] = null;
    } else {
      advantageImage1[0] = upd.getDataValue("advantageImage1");
    }

    if (
      allFiles.find((o) => o === "advantageImage2") !== undefined &&
      upd.getDataValue("advantageImage2") !== null
    ) {
      fs.unlinkSync(`./images/${upd.getDataValue("advantageImage2")}`);
      advantageImage2 = (req.files as Array<Express.Multer.File>)
        .map((file) => {
          if (file.fieldname === "advantageImage2") {
            return file.filename;
          }
        })
        .filter((file) => {
          return file !== undefined;
        });
    } else if (
      allFiles.find((o) => o === "advantageImage2") !== undefined &&
      upd.getDataValue("advantageImage2") === null
    ) {
      // fs.unlinkSync(`./images/${upd.getDataValue("mobileLogo")}`)
      advantageImage2 = (req.files as Array<Express.Multer.File>)
        .map((file) => {
          if (file.fieldname === "advantageImage2") {
            return file.filename;
          }
        })
        .filter((file) => {
          return file !== undefined;
        });
    } else if (
      allFiles.find((o) => o === "advantageImage2") === undefined &&
      upd.getDataValue("advantageImage2") === null
    ) {
      advantageImage2[0] = null;
    } else {
      advantageImage2[0] = upd.getDataValue("advantageImage2");
    }

    if (
      allFiles.find((o) => o === "advantageImage3") !== undefined &&
      upd.getDataValue("advantageImage3") !== null
    ) {
      fs.unlinkSync(`./images/${upd.getDataValue("advantageImage3")}`);
      advantageImage3 = (req.files as Array<Express.Multer.File>)
        .map((file) => {
          if (file.fieldname === "advantageImage3") {
            return file.filename;
          }
        })
        .filter((file) => {
          return file !== undefined;
        });
    } else if (
      allFiles.find((o) => o === "advantageImage3") !== undefined &&
      upd.getDataValue("advantageImage3") === null
    ) {
      // fs.unlinkSync(`./images/${upd.getDataValue("mobileLogo")}`)
      advantageImage3 = (req.files as Array<Express.Multer.File>)
        .map((file) => {
          if (file.fieldname === "advantageImage3") {
            return file.filename;
          }
        })
        .filter((file) => {
          return file !== undefined;
        });
    } else if (
      allFiles.find((o) => o === "advantageImage3") === undefined &&
      upd.getDataValue("advantageImage3") === null
    ) {
      advantageImage3[0] = null;
    } else {
      advantageImage3[0] = upd.getDataValue("advantageImage3");
    }

    if (
      allFiles.find((o) => o === "advantageImage4") !== undefined &&
      upd.getDataValue("advantageImage4") !== null
    ) {
      fs.unlinkSync(`./images/${upd.getDataValue("advantageImage4")}`);

      advantageImage4 = (req.files as Array<Express.Multer.File>)
        .map((file) => {
          if (file.fieldname === "advantageImage4") {
            return file.filename;
          }
        })
        .filter((file) => {
          return file !== undefined;
        });
    } else if (
      allFiles.find((o) => o === "advantageImage4") !== undefined &&
      upd.getDataValue("advantageImage4") === null
    ) {
      // fs.unlinkSync(`./images/${upd.getDataValue("mobileLogo")}`)
      advantageImage4 = (req.files as Array<Express.Multer.File>)
        .map((file) => {
          if (file.fieldname === "advantageImage4") {
            return file.filename;
          }
        })
        .filter((file) => {
          return file !== undefined;
        });
    } else if (
      allFiles.find((o) => o === "advantageImage4") === undefined &&
      upd.getDataValue("advantageImage4") === null
    ) {
      advantageImage4[0] = null;
    } else {
      advantageImage4[0] = upd.getDataValue("advantageImage4");
    }

    //update data and image at particular id and update - send status with data object
    const updatehomePage = {
      id: parseInt(id) as Number,
      webLogo: webLogo[0] as string,
      mobileLogo: mobileLogo[0] as string,
      bannerTitle: req.body.bannerTitle as string,
      bannerText: req.body.bannerText as string,
      bannerImage: bannerImage[0] as string,
      downloadTitle: req.body.downloadTitle as string,
      downloadText: req.body.downloadText as string,
      downloadImage: downloadImage[0] as string,
      googleImage: googleImage[0] as string,
      appleImage: appleImage[0] as string,
      advantageTitle: req.body.advantageTitle as string,
      advantageTitle1: req.body.advantageTitle1 as string,
      advantageText1: req.body.advantageText1 as string,
      advantageImage1: advantageImage1[0] as string,
      advantageTitle2: req.body.advantageTitle2 as string,
      advantageText2: req.body.advantageText2 as string,
      advantageImage2: advantageImage2[0] as string,
      advantageTitle3: req.body.advantageTitle3 as string,
      advantageText3: req.body.advantageText3 as string,
      advantageImage3: advantageImage3[0] as string,
      advantageTitle4: req.body.advantageTitle4 as string,
      advantageText4: req.body.advantageText4 as string,
      advantageImage4: advantageImage4[0] as string,
      footerLogo: footerLogo[0] as string,
      appStoreLink: req.body.appStoreLink as string,
      playStoreLink: req.body.playStoreLink as string,
      howItWorksData: req.body.howItWorksData as JSON,
    };

    const upda = await homePageModel.update(updatehomePage, {
      where: {
        id: id,
      },
    });

    res.status(200).send({
      statusCode: 200,
      status: true,
      message: "Data Updated SuccessFully!",
      data: updatehomePage,
    });
    return upda;
  }
};
