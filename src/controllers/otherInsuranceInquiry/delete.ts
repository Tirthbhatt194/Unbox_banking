import { RequestHandler } from "express";
import otherInsuranceInquiryModel from "../../model/otherInsuranceInquiryModel";

export const deleteOtherInsInquiry: RequestHandler = async (req, res, next) => {
  let id = req.params.id as unknown as number;

  // find data by id
  const del = await otherInsuranceInquiryModel.findOne({
    where: {
      id: id,
    },
  });

  // If data dosent exist
  if (!del)
    return res.status(404).send({
      statusCode: 404,
      status: false,
      message: "Data Not Found!",
    });

  // If data dosent exist delete
  if (id === id) {
    const dele = await otherInsuranceInquiryModel.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).send({
      statusCode: 200,
      status: true,
      message: "Data Deleted SuccessFully!",
      data: del,
    });
    return dele;
  }
};
