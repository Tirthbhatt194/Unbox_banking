import { RequestHandler } from "express";
import unboxPeopleModel from "../../model/unboxPeopleModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import allInquiryModel from "../../model/allInquiriesModel";

dotenv.config();

export const loginAccount: RequestHandler = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await unboxPeopleModel.findOne({
    where: { email },
  });
  if (!user) {
    return res.status(404).send({
      message: "Account not found!",
    });
  }
  if (user.dataValues.is_active === false) {
    return res.status(404).send({
      message: "User is Deectivated!",
    });
  } else {
    bcrypt.compare(password, user.dataValues.password, async (err, result) => {
      if (!result) {
        return res.status(401).send({
          message: "Invalid Credentials.",
        });
      }

      const token = jwt.sign(
        {
          id: user.dataValues.id,
          email: user.dataValues.email,
        },
        "thisisunboxbankingencryptionsecretkeyforusertoken"
      );
      let date = new Date();

      let istDateStr = date.toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
      });

      await unboxPeopleModel.update(
        {
          user_token: token,
          lastLogin: istDateStr,
        },
        { where: { id: user.dataValues.id } }
      );

      user.dataValues.user_token = token;

      const policies = await allInquiryModel.findAll({
        where: {
          userEmail: email,
        },
      });

      policies.forEach(async (p) => {
        await allInquiryModel.update(
          { userId: user.dataValues.id },
          {
            where: {
              id: p.dataValues.id,
            },
          }
        );
      });

      res.status(200).send(user);
    });
  }
};
