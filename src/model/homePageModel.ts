import { DataTypes } from "sequelize";
import db from "../config";

const homePageModel = db.define(
  "homePage",
  {
    webLogo: {
      type: DataTypes.STRING,
    },
    mobileLogo: {
      type: DataTypes.STRING,
    },
    bannerTitle: {
      type: DataTypes.STRING,
    },
    bannerText: {
      type: DataTypes.STRING,
    },
    bannerImage: {
      type: DataTypes.STRING,
    },
    downloadTitle: {
      type: DataTypes.STRING,
    },
    downloadText: {
      type: DataTypes.STRING,
    },
    downloadImage: {
      type: DataTypes.STRING,
    },
    googleImage: {
      type: DataTypes.STRING,
    },
    appleImage: {
      type: DataTypes.STRING,
    },
    advantageTitle: {
      type: DataTypes.STRING,
    },
    advantageTitle1: {
      type: DataTypes.STRING,
    },
    advantageText1: {
      type: DataTypes.STRING,
    },
    advantageImage1: {
      type: DataTypes.STRING,
    },
    advantageTitle2: {
      type: DataTypes.STRING,
    },
    advantageText2: {
      type: DataTypes.STRING,
    },
    advantageImage2: {
      type: DataTypes.STRING,
    },
    advantageTitle3: {
      type: DataTypes.STRING,
    },
    advantageText3: {
      type: DataTypes.STRING,
    },
    advantageImage3: {
      type: DataTypes.STRING,
    },
    advantageTitle4: {
      type: DataTypes.STRING,
    },
    advantageText4: {
      type: DataTypes.STRING,
    },
    advantageImage4: {
      type: DataTypes.STRING,
    },
    footerLogo: {
      type: DataTypes.STRING,
    },
    appStoreLink: {
      type: DataTypes.STRING,
    },
    playStoreLink: {
      type: DataTypes.STRING,
    },
    howItWorksData: {
      type: DataTypes.JSON,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
  }
);

(async () => {
  await db.sync();
})();

export default homePageModel;
