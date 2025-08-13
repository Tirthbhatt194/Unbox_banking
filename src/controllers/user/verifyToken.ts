import { RequestHandler } from "express";
import unboxPeopleModel from "../../model/unboxPeopleModel";

export const verifyUserToken: RequestHandler = async (req, res, next) => {
  const { user_token } = req.body;

  try {
    const unboxPeople = await unboxPeopleModel.findOne({
      where: {
        user_token,
      },
    });
    if (!unboxPeople) {
      return res.status(401).send({
        message: "Invalid User Token!",
      });
    } else {
      return res.status(200).send(unboxPeople);
    }
  } catch (err) {
    return res.status(500).send({
      message: "Internal server error!",
      error: err.message,
    });
  }
};
