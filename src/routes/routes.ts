import { loginAccount } from "./../controllers/login";
import { Router } from "express";
import { upload } from "../middleware/multer";
import auth from "../middleware/auth/auth";

import {
  validationRes,
  validateBlog,
  validateCategory,
  validateFaq,
  validatePolicies,
  validateProvider,
  validateSubCategory,
  validateType,
  validateTestimonial,
  validateProviderAddress,
} from "../middleware/validation";

//Policy category
import {
  createInsuranceCategory,
  GetOneCategory,
  GetAllCategory,
  UpdateCategory,
  DeleteCategory,
  insuranceImage,
  getSubInsData,
} from "../controllers/insuranceCategory";

//Policies
import {
  createPolicies,
  GetOneDetail,
  GetAllDetails,
  UpdateDetails,
  DeleteDetails,
  policyImage,
  GetAllInDetails,
  GetOneInDetail,
} from "../controllers/policies";

//Policy Providers
import {
  createInsuranceProvider,
  GetOneProvider,
  GetAllProvider,
  UpdateProvider,
  DeleteProvider,
  GetProviderWithAddress,
  providerImage, // uploadIcon,
  // uploader
} from "../controllers/insuranceProvider";

//Policy Sub Category
import {
  createInsuranceSubCategory,
  GetOneSubCategory,
  GetAllSubCategory,
  UpdateSubCategory,
  DeleteSubCategory,
  insuranceSubCategoryImage,
  GetOneSubCategoryInDetail,
  GetAllSubCategoryInDetail,
} from "../controllers/insuranceSubCategory";

//Policy Sub Category Type
import {
  createInsuranceType,
  GetOneInsuranceType,
  GetAllInsuranceType,
  UpdateInsuranceType,
  DeleteInsuranceType,
  insuranceCategoryTypeImage,
} from "../controllers/insuranceSubCategoryType";

//Provider Address
import {
  createProviderAddress,
  getOneInsuranceProviderAddress,
  getAllInsuranceProviderAddress,
  UpdateProviderAddress,
  deleteProvederAddress,
  getOneInsuranceProviderAddressInDetail,
  getAllInsuranceProviderAddressInDetail,
} from "../controllers/insuranceProviderAddress";

//Blog
import {
  createBlog,
  getOneBlog,
  getAllBlog,
  updateBlog,
  deleteBlog,
  blog_image,
  getOneBlogInDetail,
  getAllBlogInDetail,
} from "../controllers/blog";

//Faq
import {
  createFaq,
  getOneFaq,
  getAllFaq,
  updateFaq,
  deleteFaq,
  getOneFaqInDetail,
  getAllFaqInDetail,
} from "../controllers/faq";

//Testimonial
import {
  createTestimonial,
  getOneTestimonial,
  getAllTestimonial,
  updateTestimonial,
  deleteTestimonial,
  testimonialImage,
} from "../controllers/testimonial";

// Home Page
import {
  createHomePage,
  getOnehomePage,
  getAllhomePage,
  deletehomePage,
  updatehomePage,
} from "../controllers/homePage";

//unbox workings
import {
  createUnboxWorks,
  getOneUnboxWorks,
  getAllUnboxWorks,
  updateUnboxWorks,
  deleteUnboxWorks,
  image,
} from "../controllers/unboxWorks";

// unbox People
import {
  createUnboxPeople,
  getOneUnboxPeople,
  getAllUnboxPeople,
  updateUnboxPeople,
  deleteUnboxPeople,
  // getAllUnboxPeopleByType,
  unboxPeopleImage,
  isActiveUnboxPeople,
} from "../controllers/unboxPeople";

import {
  bankImage,
  createBank,
  getOneBank,
  getAllBank,
  updateBank,
  deleteBank,
} from "../controllers/bank";

import {
  createCard,
  cardImage,
  getOneCard,
  getAllCard,
  GetAllCardDetails,
  deleteCard,
  updateCard,
} from "../controllers/card";
import {
  createCardDetail,
  deleteCardDetail,
  getAllCardDetailsInfo,
  getOneCardDetail,
  updateCardDetail,
} from "../controllers/cardDetails";
import { GetAllDetailsInfo } from "../controllers/cardDetails/cardDetailInfo";
import {
  createInquiry,
  deleteInquiry,
  getAllInquiry,
  getOneInquiry,
  updateInquiry,
} from "../controllers/inquiry";

import { createApplyForCardDetail } from "../controllers/applyForCard/create";
import { getAllApplyForCard } from "../controllers/applyForCard/getAll";
import { getAllApplyForCardInDetail } from "../controllers/applyForCard/getAllInDetails";
import { getOneApplyForCard } from "../controllers/applyForCard/getOne";
import { getOneApplyForCardInDetail } from "../controllers/applyForCard/getOneInDetail";
import { updateApplyForCard } from "../controllers/applyForCard/update";
import { deleteApplyForCardDetail } from "../controllers/applyForCard/delete";
import {
  createOtherInsInquiry,
  deleteOtherInsInquiry,
  getAllOtherInsInquiry,
  getAllOtherInsInquiryInDetail,
  getOneOtherInsInquiry,
  getOneOtherInsInquiryInDetail,
  updateOtherInsInquiry,
} from "../controllers/otherInsuranceInquiry";

import {
  createLoanType,
  deleteLoanType,
  getAllLoanType,
  getOneLoanType,
  updateLoanType,
} from "../controllers/loanType";
import {
  createLoan,
  deleteLoan,
  getAllLoan,
  getAllLoanInDetail,
  getOneLoan,
  getOneLoanInDetail,
  updateLoan,
} from "../controllers/loan";

import { verifyUserToken } from "../controllers/user/verifyToken";
import {
  createPolicyInquiry,
  deletePolicyInquiry,
  getAllPolicyInquiry,
  getAllPolicyInquiryInDetail,
  getOnePolicyInquiry,
  getOnePolicyInquiryInDetail,
  updatePolicyInquiry,
} from "../controllers/policyInquiry";
import {
  createLoanInquiry,
  deleteLoanInquiry,
  getAllLoanInquiry,
  getAllLoanInquiryInDetail,
  getOneLoanInquiry,
  getOneLoanInquiryInDetail,
  updateLoanInquiry,
} from "../controllers/loanInquiry";
import { getSpecificUserCardDetail } from "../controllers/applyForCard/specific";
import { getSpecificUserPolicyDetail } from "../controllers/policyInquiry/specific";
import { getSpecificUserLoanDetail } from "../controllers/loanInquiry/specific";
import {
  fireEmail,
  resetPassword,
} from "../controllers/unboxPeople/forgotPassword";
import { loanTypeImage } from "../controllers/loanType/create";
import {
  createAllCardInquiry,
  createAllLoanInquiry,
  createAllPolicyInquiry,
} from "../controllers/allInquiries/create";
import { otpVerification } from "../controllers/unboxPeople/create";
import { getAllTheInquiry } from "../controllers/allInquiries/getAll";
import { getAllInquiryByUser } from "../controllers/allInquiries/getAllByUser";
import { getOneFromAllInquiry } from "../controllers/allInquiries/getOne";
import { getAllStates } from "../controllers/stateAndCity/getAllStates";
import { getCitiesStateWise } from "../controllers/stateAndCity/getCities";
import { getAllInquiriesByDate } from "../controllers/allInquiries/getInquiriesByDate";
import { AllInquiriesByDate } from "../controllers/inquiry/getAllByDate";
import {
  createAboutUs,
  deleteAboutUs,
  getAllAboutUs,
  getOneAboutUs,
  updateAboutUs,
} from "../controllers/aboutUs";
import {
  createContactUs,
  deleteContactUs,
  getAllContactUs,
  getOneContactUs,
  updateContactUs,
} from "../controllers/contactUs";
import {
  createPrivacyPolicy,
  deletePrivacyPolicy,
  getAllPrivacyPolicy,
  getOnePrivacyPolicy,
  updatePrivacyPolicy,
} from "../controllers/privacyPolicy";
import {
  createTermsAndConditions,
  deleteTermsAndConditions,
  getAllTermsAndConditions,
  getOneTermsAndConditions,
  updateTermsAndConditions,
} from "../controllers/termsAndConditions";
const router = Router();

//Blog Routes
router.post("/createBlog", blog_image, validateBlog, validationRes, createBlog);
router.delete("/deleteBlog/:id", deleteBlog);
router.put("/updateBlog/:id", blog_image, updateBlog);
router.get("/blog/:id", getOneBlog);
router.get("/blog", getAllBlog);
router.get("/blogInDetail/:id", getOneBlogInDetail);
router.get("/blogInDetail", getAllBlogInDetail);

//Faq
router.post("/createFaq", validateFaq, validationRes, createFaq);
router.delete("/deleteFaq/:id", deleteFaq);
router.put("/updateFaq/:id", updateFaq);
router.get("/faq/:id", getOneFaq);
router.get("/faq", getAllFaq);
router.get("/faqInDetail/:id", getOneFaqInDetail);
router.get("/faqInDetail", getAllFaqInDetail);

//Testimonial
router.post(
  "/createTestimonial",
  testimonialImage,
  validateTestimonial,
  validationRes,
  createTestimonial
);
router.delete("/deleteTestimonial/:id", deleteTestimonial);
router.put("/updateTestimonial/:id", testimonialImage, updateTestimonial);
router.get("/testimonial/:id", getOneTestimonial);
router.get("/testimonial", getAllTestimonial);

//Insurance Provider Address Routes
router.post(
  "/createProviderAddress",

  validateProviderAddress,
  validationRes,
  createProviderAddress
);
router.put("/updateProviderAddress/:id", UpdateProviderAddress);
router.delete("/deleteProviderAddress/:id", deleteProvederAddress);
router.get("/providerAddress/:id", getOneInsuranceProviderAddress);
router.get("/providerAddress", getAllInsuranceProviderAddress);
router.get(
  "/providerAddressInDetail/:id",
  getOneInsuranceProviderAddressInDetail
);
router.get("/providerAddressInDetail", getAllInsuranceProviderAddressInDetail);

//Insurance Category Routes
router.get("/insuranceCategory", GetAllCategory);
router.get("/insuranceCategory/:id", GetOneCategory);
router.post(
  "/createInsuranceCategory",
  insuranceImage,
  validateCategory,
  validationRes,
  createInsuranceCategory
);
router.put("/updateInsuranceCategory/:id", insuranceImage, UpdateCategory);
router.delete("/deleteInsuranceCategory/:id", DeleteCategory);
router.get("/subInsData", getSubInsData);

//Policies Details Routes
router.get("/policies", GetAllDetails);
router.get("/policies/:id", GetOneDetail);
router.get("/policiesDetails", GetAllInDetails);
router.get("/policiesDetails/:id", GetOneInDetail);
router.post(
  "/createPolicies",
  policyImage,
  validatePolicies,
  validationRes,
  createPolicies
);
router.put("/updatePolicies/:id", policyImage, UpdateDetails);
router.delete("/deletePolicies/:id", DeleteDetails);

//Insurance Provider Routes
router.get("/insuranceProvider", GetAllProvider);
router.get("/insuranceProvider/:id", GetOneProvider);
router.get("/getProviderWithAddress/:id", GetProviderWithAddress);
router.post(
  "/createInsuranceProvider",
  providerImage,
  validateProvider,
  validationRes,
  createInsuranceProvider
);
router.put("/updateInsuranceProvider/:id", providerImage, UpdateProvider);
router.delete("/deleteInsuranceProvider/:id", DeleteProvider);

//Insurance SubCategory Routes
router.get("/insuranceSubCategory", GetAllSubCategory);
router.get("/insuranceSubCategory/:id", GetOneSubCategory);
router.get("/insuranceSubCategoryInDetail", GetAllSubCategoryInDetail);
router.get("/insuranceSubCategoryInDetail/:id", GetOneSubCategoryInDetail);
router.post(
  "/createInsuranceSubCategory",
  insuranceSubCategoryImage,
  validateSubCategory,
  validationRes,
  createInsuranceSubCategory
);
router.put(
  "/updateInsuranceSubCategory/:id",
  insuranceSubCategoryImage,
  UpdateSubCategory
);
router.delete("/deleteInsuranceSubCategory/:id", DeleteSubCategory);

//Insurance SubCategoryType Routes
router.get("/insuranceCategoryType", GetAllInsuranceType);
router.get("/insuranceCategoryType/:id", GetOneInsuranceType);
router.post(
  "/createInsuranceCategoryType",
  insuranceCategoryTypeImage,
  validateType,
  createInsuranceType
);
router.put(
  "/updateInsuranceCategoryType/:id",
  insuranceCategoryTypeImage,
  validateType,
  UpdateInsuranceType
);
router.delete("/deleteInsuranceCategoryType/:id", DeleteInsuranceType);

//Home Page
router.get("/homePage", getAllhomePage);
router.get("/homePage/:id", getOnehomePage);
router.post("/createHomePage", upload, createHomePage);
router.put("/updateHomePage/:id", upload, updatehomePage);
router.delete("/deleteHomePage/:id", deletehomePage);

//Unbox Works Routes
router.post("/createUnboxWorks", image, createUnboxWorks);
router.delete("/deleteUnboxWorks/:id", deleteUnboxWorks);
router.put("/updateUnboxWorks/:id", image, updateUnboxWorks);
router.get("/unboxWorks/:id", getOneUnboxWorks);
router.get("/unboxWorks", getAllUnboxWorks);

//Unbox people Routes
router.post("/createUnboxPeople", unboxPeopleImage, createUnboxPeople);
router.delete("/deleteUnboxPeople/:id", deleteUnboxPeople);
router.put("/updateUnboxPeople/:id", unboxPeopleImage, updateUnboxPeople);
router.get("/unboxPeople/:id", getOneUnboxPeople);
router.get("/unboxPeople", getAllUnboxPeople);
router.put("/unboxpeople/:id", isActiveUnboxPeople);
// router.get("/getAllUnboxPeopleByType/:type", getAllUnboxPeopleByType);

//bank Routes
router.post("/bank", bankImage, createBank);
router.get("/bank", getAllBank);
router.get("/bank/:id", getOneBank);
router.delete("/bank/:id", deleteBank);
router.put("/bank/:id", bankImage, updateBank);

//card routes
router.post("/card", cardImage, createCard);
router.get("/card/:id", getOneCard);
router.get("/card", getAllCard);
router.get("/cardDetail", GetAllCardDetails);
router.delete("/card/:id", deleteCard);
router.put("/card/:id", cardImage, updateCard);

//cardDetails routes
router.post("/cardDetails", createCardDetail);
router.get("/cardDetails/:id", getOneCardDetail);
router.get("/cardDetails", getAllCardDetailsInfo);
router.get("/cardDetailsInfo", GetAllDetailsInfo);
router.delete("/cardDetails/:id", deleteCardDetail);
router.put("/cardDetails/:id", updateCardDetail);

router.post("/loginAccount", loginAccount);

//inquiry Routes

router.post("/inquiry/:key", createInquiry);
router.get("/inquiry", getAllInquiry);
router.get("/inquiry/:id", getOneInquiry);
router.put("/inquiry/:id", updateInquiry);
router.delete("/inquiry/:id", deleteInquiry);
router.post("/inquiry-report", AllInquiriesByDate);

// otherINquiry Routes

router.post("/otherinsinquiry", createOtherInsInquiry);
router.get("/otherinsinquiry", getAllOtherInsInquiry);
router.get("/allotherinsinquiry", getAllOtherInsInquiryInDetail);
router.get("/otherinsinquiry/:id", getOneOtherInsInquiry);
router.get("/oneotherinsinquiry/:id", getOneOtherInsInquiryInDetail);
router.put("/otherinsinquiry", updateOtherInsInquiry);
router.delete("/otherinsinquiry", deleteOtherInsInquiry);

// aaplyForCArd Details Routes

router.post("/applyforcard", createApplyForCardDetail);
router.get("/applyforcard", getAllApplyForCard);
router.get("/applyforcardindetail", getAllApplyForCardInDetail);
router.get("/applyforcard/:id", getOneApplyForCard);
router.get("/applyforcardoneindetail/:id", getOneApplyForCardInDetail);
router.put("/applyforcard/:id", updateApplyForCard);
router.delete("/applyforcard/:id", deleteApplyForCardDetail);

//Loan Type Routes

router.post("/loantype", loanTypeImage, createLoanType);
router.get("/loantype", getAllLoanType);
router.get("/loantype/:id", getOneLoanType);
router.put("/loantype/:id", loanTypeImage, updateLoanType);
router.delete("/loantype/:id", deleteLoanType);

//Loan  Routes

router.post("/loan", createLoan);
router.get("/loan", getAllLoan);
router.get("/allloanindetail", getAllLoanInDetail);
router.get("/loan/:id", getOneLoan);
router.get("/oneloanindetail/:id", getOneLoanInDetail);
router.put("/loan/:id", updateLoan);
router.delete("/loan/:id", deleteLoan);

// VERIFY USER BY USER TOKEN ROUTE

router.post("/verifytoken", verifyUserToken);

//Policy Inquiry Routes

router.post("/policyinquiry", createPolicyInquiry);
router.get("/policyinquiry", getAllPolicyInquiry);
router.get("/policyInquiryindetail", getAllPolicyInquiryInDetail);
router.get("/policyinquiry/:id", getOnePolicyInquiry);
router.get("/policyinquiryindetail/:id", getOnePolicyInquiryInDetail);
router.put("/policyinquiry/:id", updatePolicyInquiry);
router.delete("/policyinquiry/:id", deletePolicyInquiry);

//LoanInquiry routes

router.post("/loaninquiry", createLoanInquiry);
router.get("/loaninquiry", getAllLoanInquiry);
router.get("/loaninquiryindetail", getAllLoanInquiryInDetail);
router.get("/loaninquiry/:id", getOneLoanInquiry);
router.get("/loaninquiryindetail/:id", getOneLoanInquiryInDetail);
router.put("/loaninquiry/:id", updateLoanInquiry);
router.delete("/loaninquiry/:id", deleteLoanInquiry);

//Specific User Routes

router.get("/user/:id/cards", getSpecificUserCardDetail);
router.get("/user/:id/policies", getSpecificUserPolicyDetail);
router.get("/user/:id/loans", getSpecificUserLoanDetail);

router.post("/forgot_password", fireEmail);
router.post("/reset_password", resetPassword);

// all inquiry routes

router.post("/policy-inquiry", createAllPolicyInquiry);
router.post("/loan-inquiry", createAllLoanInquiry);
router.post("/card-inquiry", createAllCardInquiry);
router.get("/all-inquiry", getAllTheInquiry);
router.get("/all-inquiry-user/:id", getAllInquiryByUser);
router.get("/all-inquiry/:id", getOneFromAllInquiry);
router.post("/all-inquiry-report", getAllInquiriesByDate);
// register otp verification route

router.post("/otp-verificaton", otpVerification);

// city and state routes

router.get("/state", getAllStates);
router.get("/city/:name", getCitiesStateWise);

// aboutUs Routes

router.get("/about-us", getAllAboutUs);
router.get("/about-us/:id", getOneAboutUs);
router.post("/about-us", upload, createAboutUs);
router.put("/about-us/:id", upload, updateAboutUs);
router.delete("/about-us/:id", deleteAboutUs);

// contact-us Routes

router.get("/contact-us", getAllContactUs);
router.get("/contact-us/:id", getOneContactUs);
router.post("/contact-us", upload, createContactUs);
router.put("/contact-us/:id", upload, updateContactUs);
router.delete("/contact-us/:id", deleteContactUs);

// privacy-policy Routes

router.get("/privacy-policy", getAllPrivacyPolicy);
router.get("/privacy-policy/:id", getOnePrivacyPolicy);
router.post("/privacy-policy", createPrivacyPolicy);
router.put("/privacy-policy/:id", updatePrivacyPolicy);
router.delete("/privacy-policy/:id", deletePrivacyPolicy);

// term-and-conditions Routes

router.get("/term-and-conditions", getAllTermsAndConditions);
router.get("/term-and-conditions/:id", getOneTermsAndConditions);
router.post("/term-and-conditions", createTermsAndConditions);
router.put("/term-and-conditions/:id", updateTermsAndConditions);
router.delete("/term-and-conditions/:id", deleteTermsAndConditions);

export default router;
