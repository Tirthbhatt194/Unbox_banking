import { RequestHandler } from "express";
import inquiryModel from "../../model/inquiry";
import insuranceCategoryModel from "../../model/insuranceCategoryModel";
import insuranceSubCategoryModel from "../../model/insuranceSubCategoryModel";

export const AllInquiriesByDate: RequestHandler = async (req, res) => {
  const startDate = req.body.startDate;
  const endDate = req.body.endDate;
 const id = req.body.insuranceCategoryId

 if(!startDate && !endDate && id === "All") {
  const inquiries = await inquiryModel.findAll({
   
    include: [
      { model: insuranceCategoryModel, attributes: ["insuranceName"] },
      {
        model: insuranceSubCategoryModel,
        attributes: ["insuranceSubCategoryName"],
      },
    ],
  });

  // let datewiseInquiries = [];

  // // console.log("Create", inquiries[0].dataValues.createdAt);

  // let str = `${startDate}T00:00:00.000Z`;
  // let st = new Date(str);

  // let end2 = `${endDate}T23:59:59.000Z`;
  // let en = new Date(end2);

  // inquiries.forEach((i) => {
  //   let date1 = new Date(i.dataValues.createdAt);
  //   let date = date1.getDate();

  //   if (date1 > st && date1 < en) {
  //     const d = {
  //       ...i.dataValues,
  //       createdAt: i.dataValues.createdAt,
  //     };
  
  //     datewiseInquiries.push(d);
  //   }
  // });

  return res.status(200).send(inquiries);
 } else if( startDate && endDate && id === "All" ) {

  const inquiries = await inquiryModel.findAll({
   
    include: [
      { model: insuranceCategoryModel, attributes: ["insuranceName"] },
      {
        model: insuranceSubCategoryModel,
        attributes: ["insuranceSubCategoryName"],
      },
    ],
  });
  
  let datewiseInquiries = [];
  
  // console.log("Create", inquiries[0].dataValues.createdAt);
  
  let str = `${startDate}T00:00:00.000Z`;
  let st = new Date(str);
  
  let end2 = `${endDate}T23:59:59.000Z`;
  let en = new Date(end2);
  
  inquiries.forEach((i) => {
    let date1 = new Date(i.dataValues.createdAt);
    let date = date1.getDate();
  
    if (date1 > st && date1 < en) {
      const d = {
        ...i.dataValues,
        createdAt: i.dataValues.createdAt,
      };
  
      datewiseInquiries.push(d);
    }
  });
  
  return res.status(200).send(datewiseInquiries);

 }else if (!startDate && !endDate && id ) {
  const inquiries = await inquiryModel.findAll({
    where: {
      insuranceCategoryId: id
    },
    include: [
      { model: insuranceCategoryModel, attributes: ["insuranceName"] },
      {
        model: insuranceSubCategoryModel,
        attributes: ["insuranceSubCategoryName"],
      },
    ],
  });
  return res.status(200).send(inquiries);

 } else{
  const inquiries = await inquiryModel.findAll({
    where: {
      insuranceCategoryId: id
    },
    include: [
      { model: insuranceCategoryModel, attributes: ["insuranceName"] },
      {
        model: insuranceSubCategoryModel,
        attributes: ["insuranceSubCategoryName"],
      },
    ],
  });
  
  let datewiseInquiries = [];
  
  // console.log("Create", inquiries[0].dataValues.createdAt);
  
  let str = `${startDate}T00:00:00.000Z`;
  let st = new Date(str);
  
  let end2 = `${endDate}T23:59:59.000Z`;
  let en = new Date(end2);
  
  inquiries.forEach((i) => {
    let date1 = new Date(i.dataValues.createdAt);
    let date = date1.getDate();
  
    if (date1 > st && date1 < en) {
      const d = {
        ...i.dataValues,
        createdAt: i.dataValues.createdAt,
      };
  
      datewiseInquiries.push(d);
    }
  });
  
  return res.status(200).send(datewiseInquiries);
 }



 



 
};
