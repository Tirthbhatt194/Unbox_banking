import { RequestHandler } from "express";
import stateModel from "../../model/stateModel";

export const getAllStates: RequestHandler = async (req, res) => {
  let states = await stateModel.findAll();

  if (!states) {
    return res.status(404).send({
      statusCode: 404,
      status: false,
      message: "Data Not Found!",
    });
  } else {
    return res.status(200).send({
      statusCode: 200,
      status: true,
      message: "SuccessFully Got All Data!",
      data: states,
    });
  }
};
