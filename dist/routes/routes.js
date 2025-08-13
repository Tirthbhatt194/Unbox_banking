"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const login_1 = require("./../controllers/login");
const express_1 = require("express");
const multer_1 = require("../middleware/multer");
const validation_1 = require("../middleware/validation");
//Policy category
const insuranceCategory_1 = require("../controllers/insuranceCategory");
//Policies
const policies_1 = require("../controllers/policies");
//Policy Providers
const insuranceProvider_1 = require("../controllers/insuranceProvider");
//Policy Sub Category
const insuranceSubCategory_1 = require("../controllers/insuranceSubCategory");
//Policy Sub Category Type
const insuranceSubCategoryType_1 = require("../controllers/insuranceSubCategoryType");
//Provider Address
const insuranceProviderAddress_1 = require("../controllers/insuranceProviderAddress");
//Blog
const blog_1 = require("../controllers/blog");
//Faq
const faq_1 = require("../controllers/faq");
//Testimonial
const testimonial_1 = require("../controllers/testimonial");
// Home Page
const homePage_1 = require("../controllers/homePage");
//unbox workings
const unboxWorks_1 = require("../controllers/unboxWorks");
// unbox People
const unboxPeople_1 = require("../controllers/unboxPeople");
const bank_1 = require("../controllers/bank");
const card_1 = require("../controllers/card");
const cardDetails_1 = require("../controllers/cardDetails");
const cardDetailInfo_1 = require("../controllers/cardDetails/cardDetailInfo");
const inquiry_1 = require("../controllers/inquiry");
const create_1 = require("../controllers/applyForCard/create");
const getAll_1 = require("../controllers/applyForCard/getAll");
const getAllInDetails_1 = require("../controllers/applyForCard/getAllInDetails");
const getOne_1 = require("../controllers/applyForCard/getOne");
const getOneInDetail_1 = require("../controllers/applyForCard/getOneInDetail");
const update_1 = require("../controllers/applyForCard/update");
const delete_1 = require("../controllers/applyForCard/delete");
const otherInsuranceInquiry_1 = require("../controllers/otherInsuranceInquiry");
const loanType_1 = require("../controllers/loanType");
const loan_1 = require("../controllers/loan");
const verifyToken_1 = require("../controllers/user/verifyToken");
const policyInquiry_1 = require("../controllers/policyInquiry");
const loanInquiry_1 = require("../controllers/loanInquiry");
const specific_1 = require("../controllers/applyForCard/specific");
const specific_2 = require("../controllers/policyInquiry/specific");
const specific_3 = require("../controllers/loanInquiry/specific");
const forgotPassword_1 = require("../controllers/unboxPeople/forgotPassword");
const create_2 = require("../controllers/loanType/create");
const create_3 = require("../controllers/allInquiries/create");
const create_4 = require("../controllers/unboxPeople/create");
const getAll_2 = require("../controllers/allInquiries/getAll");
const getAllByUser_1 = require("../controllers/allInquiries/getAllByUser");
const getOne_2 = require("../controllers/allInquiries/getOne");
const getAllStates_1 = require("../controllers/stateAndCity/getAllStates");
const getCities_1 = require("../controllers/stateAndCity/getCities");
const getInquiriesByDate_1 = require("../controllers/allInquiries/getInquiriesByDate");
const getAllByDate_1 = require("../controllers/inquiry/getAllByDate");
const aboutUs_1 = require("../controllers/aboutUs");
const contactUs_1 = require("../controllers/contactUs");
const privacyPolicy_1 = require("../controllers/privacyPolicy");
const termsAndConditions_1 = require("../controllers/termsAndConditions");
const router = (0, express_1.Router)();
//Blog Routes
router.post("/createBlog", blog_1.blog_image, validation_1.validateBlog, validation_1.validationRes, blog_1.createBlog);
router.delete("/deleteBlog/:id", blog_1.deleteBlog);
router.put("/updateBlog/:id", blog_1.blog_image, blog_1.updateBlog);
router.get("/blog/:id", blog_1.getOneBlog);
router.get("/blog", blog_1.getAllBlog);
router.get("/blogInDetail/:id", blog_1.getOneBlogInDetail);
router.get("/blogInDetail", blog_1.getAllBlogInDetail);
//Faq
router.post("/createFaq", validation_1.validateFaq, validation_1.validationRes, faq_1.createFaq);
router.delete("/deleteFaq/:id", faq_1.deleteFaq);
router.put("/updateFaq/:id", faq_1.updateFaq);
router.get("/faq/:id", faq_1.getOneFaq);
router.get("/faq", faq_1.getAllFaq);
router.get("/faqInDetail/:id", faq_1.getOneFaqInDetail);
router.get("/faqInDetail", faq_1.getAllFaqInDetail);
//Testimonial
router.post("/createTestimonial", testimonial_1.testimonialImage, validation_1.validateTestimonial, validation_1.validationRes, testimonial_1.createTestimonial);
router.delete("/deleteTestimonial/:id", testimonial_1.deleteTestimonial);
router.put("/updateTestimonial/:id", testimonial_1.testimonialImage, testimonial_1.updateTestimonial);
router.get("/testimonial/:id", testimonial_1.getOneTestimonial);
router.get("/testimonial", testimonial_1.getAllTestimonial);
//Insurance Provider Address Routes
router.post("/createProviderAddress", validation_1.validateProviderAddress, validation_1.validationRes, insuranceProviderAddress_1.createProviderAddress);
router.put("/updateProviderAddress/:id", insuranceProviderAddress_1.UpdateProviderAddress);
router.delete("/deleteProviderAddress/:id", insuranceProviderAddress_1.deleteProvederAddress);
router.get("/providerAddress/:id", insuranceProviderAddress_1.getOneInsuranceProviderAddress);
router.get("/providerAddress", insuranceProviderAddress_1.getAllInsuranceProviderAddress);
router.get("/providerAddressInDetail/:id", insuranceProviderAddress_1.getOneInsuranceProviderAddressInDetail);
router.get("/providerAddressInDetail", insuranceProviderAddress_1.getAllInsuranceProviderAddressInDetail);
//Insurance Category Routes
router.get("/insuranceCategory", insuranceCategory_1.GetAllCategory);
router.get("/insuranceCategory/:id", insuranceCategory_1.GetOneCategory);
router.post("/createInsuranceCategory", insuranceCategory_1.insuranceImage, validation_1.validateCategory, validation_1.validationRes, insuranceCategory_1.createInsuranceCategory);
router.put("/updateInsuranceCategory/:id", insuranceCategory_1.insuranceImage, insuranceCategory_1.UpdateCategory);
router.delete("/deleteInsuranceCategory/:id", insuranceCategory_1.DeleteCategory);
router.get("/subInsData", insuranceCategory_1.getSubInsData);
//Policies Details Routes
router.get("/policies", policies_1.GetAllDetails);
router.get("/policies/:id", policies_1.GetOneDetail);
router.get("/policiesDetails", policies_1.GetAllInDetails);
router.get("/policiesDetails/:id", policies_1.GetOneInDetail);
router.post("/createPolicies", policies_1.policyImage, validation_1.validatePolicies, validation_1.validationRes, policies_1.createPolicies);
router.put("/updatePolicies/:id", policies_1.policyImage, policies_1.UpdateDetails);
router.delete("/deletePolicies/:id", policies_1.DeleteDetails);
//Insurance Provider Routes
router.get("/insuranceProvider", insuranceProvider_1.GetAllProvider);
router.get("/insuranceProvider/:id", insuranceProvider_1.GetOneProvider);
router.get("/getProviderWithAddress/:id", insuranceProvider_1.GetProviderWithAddress);
router.post("/createInsuranceProvider", insuranceProvider_1.providerImage, validation_1.validateProvider, validation_1.validationRes, insuranceProvider_1.createInsuranceProvider);
router.put("/updateInsuranceProvider/:id", insuranceProvider_1.providerImage, insuranceProvider_1.UpdateProvider);
router.delete("/deleteInsuranceProvider/:id", insuranceProvider_1.DeleteProvider);
//Insurance SubCategory Routes
router.get("/insuranceSubCategory", insuranceSubCategory_1.GetAllSubCategory);
router.get("/insuranceSubCategory/:id", insuranceSubCategory_1.GetOneSubCategory);
router.get("/insuranceSubCategoryInDetail", insuranceSubCategory_1.GetAllSubCategoryInDetail);
router.get("/insuranceSubCategoryInDetail/:id", insuranceSubCategory_1.GetOneSubCategoryInDetail);
router.post("/createInsuranceSubCategory", insuranceSubCategory_1.insuranceSubCategoryImage, validation_1.validateSubCategory, validation_1.validationRes, insuranceSubCategory_1.createInsuranceSubCategory);
router.put("/updateInsuranceSubCategory/:id", insuranceSubCategory_1.insuranceSubCategoryImage, insuranceSubCategory_1.UpdateSubCategory);
router.delete("/deleteInsuranceSubCategory/:id", insuranceSubCategory_1.DeleteSubCategory);
//Insurance SubCategoryType Routes
router.get("/insuranceCategoryType", insuranceSubCategoryType_1.GetAllInsuranceType);
router.get("/insuranceCategoryType/:id", insuranceSubCategoryType_1.GetOneInsuranceType);
router.post("/createInsuranceCategoryType", insuranceSubCategoryType_1.insuranceCategoryTypeImage, validation_1.validateType, insuranceSubCategoryType_1.createInsuranceType);
router.put("/updateInsuranceCategoryType/:id", insuranceSubCategoryType_1.insuranceCategoryTypeImage, validation_1.validateType, insuranceSubCategoryType_1.UpdateInsuranceType);
router.delete("/deleteInsuranceCategoryType/:id", insuranceSubCategoryType_1.DeleteInsuranceType);
//Home Page
router.get("/homePage", homePage_1.getAllhomePage);
router.get("/homePage/:id", homePage_1.getOnehomePage);
router.post("/createHomePage", multer_1.upload, homePage_1.createHomePage);
router.put("/updateHomePage/:id", multer_1.upload, homePage_1.updatehomePage);
router.delete("/deleteHomePage/:id", homePage_1.deletehomePage);
//Unbox Works Routes
router.post("/createUnboxWorks", unboxWorks_1.image, unboxWorks_1.createUnboxWorks);
router.delete("/deleteUnboxWorks/:id", unboxWorks_1.deleteUnboxWorks);
router.put("/updateUnboxWorks/:id", unboxWorks_1.image, unboxWorks_1.updateUnboxWorks);
router.get("/unboxWorks/:id", unboxWorks_1.getOneUnboxWorks);
router.get("/unboxWorks", unboxWorks_1.getAllUnboxWorks);
//Unbox people Routes
router.post("/createUnboxPeople", unboxPeople_1.unboxPeopleImage, unboxPeople_1.createUnboxPeople);
router.delete("/deleteUnboxPeople/:id", unboxPeople_1.deleteUnboxPeople);
router.put("/updateUnboxPeople/:id", unboxPeople_1.unboxPeopleImage, unboxPeople_1.updateUnboxPeople);
router.get("/unboxPeople/:id", unboxPeople_1.getOneUnboxPeople);
router.get("/unboxPeople", unboxPeople_1.getAllUnboxPeople);
router.put("/unboxpeople/:id", unboxPeople_1.isActiveUnboxPeople);
// router.get("/getAllUnboxPeopleByType/:type", getAllUnboxPeopleByType);
//bank Routes
router.post("/bank", bank_1.bankImage, bank_1.createBank);
router.get("/bank", bank_1.getAllBank);
router.get("/bank/:id", bank_1.getOneBank);
router.delete("/bank/:id", bank_1.deleteBank);
router.put("/bank/:id", bank_1.bankImage, bank_1.updateBank);
//card routes
router.post("/card", card_1.cardImage, card_1.createCard);
router.get("/card/:id", card_1.getOneCard);
router.get("/card", card_1.getAllCard);
router.get("/cardDetail", card_1.GetAllCardDetails);
router.delete("/card/:id", card_1.deleteCard);
router.put("/card/:id", card_1.cardImage, card_1.updateCard);
//cardDetails routes
router.post("/cardDetails", cardDetails_1.createCardDetail);
router.get("/cardDetails/:id", cardDetails_1.getOneCardDetail);
router.get("/cardDetails", cardDetails_1.getAllCardDetailsInfo);
router.get("/cardDetailsInfo", cardDetailInfo_1.GetAllDetailsInfo);
router.delete("/cardDetails/:id", cardDetails_1.deleteCardDetail);
router.put("/cardDetails/:id", cardDetails_1.updateCardDetail);
router.post("/loginAccount", login_1.loginAccount);
//inquiry Routes
router.post("/inquiry/:key", inquiry_1.createInquiry);
router.get("/inquiry", inquiry_1.getAllInquiry);
router.get("/inquiry/:id", inquiry_1.getOneInquiry);
router.put("/inquiry/:id", inquiry_1.updateInquiry);
router.delete("/inquiry/:id", inquiry_1.deleteInquiry);
router.post("/inquiry-report", getAllByDate_1.AllInquiriesByDate);
// otherINquiry Routes
router.post("/otherinsinquiry", otherInsuranceInquiry_1.createOtherInsInquiry);
router.get("/otherinsinquiry", otherInsuranceInquiry_1.getAllOtherInsInquiry);
router.get("/allotherinsinquiry", otherInsuranceInquiry_1.getAllOtherInsInquiryInDetail);
router.get("/otherinsinquiry/:id", otherInsuranceInquiry_1.getOneOtherInsInquiry);
router.get("/oneotherinsinquiry/:id", otherInsuranceInquiry_1.getOneOtherInsInquiryInDetail);
router.put("/otherinsinquiry", otherInsuranceInquiry_1.updateOtherInsInquiry);
router.delete("/otherinsinquiry", otherInsuranceInquiry_1.deleteOtherInsInquiry);
// aaplyForCArd Details Routes
router.post("/applyforcard", create_1.createApplyForCardDetail);
router.get("/applyforcard", getAll_1.getAllApplyForCard);
router.get("/applyforcardindetail", getAllInDetails_1.getAllApplyForCardInDetail);
router.get("/applyforcard/:id", getOne_1.getOneApplyForCard);
router.get("/applyforcardoneindetail/:id", getOneInDetail_1.getOneApplyForCardInDetail);
router.put("/applyforcard/:id", update_1.updateApplyForCard);
router.delete("/applyforcard/:id", delete_1.deleteApplyForCardDetail);
//Loan Type Routes
router.post("/loantype", create_2.loanTypeImage, loanType_1.createLoanType);
router.get("/loantype", loanType_1.getAllLoanType);
router.get("/loantype/:id", loanType_1.getOneLoanType);
router.put("/loantype/:id", create_2.loanTypeImage, loanType_1.updateLoanType);
router.delete("/loantype/:id", loanType_1.deleteLoanType);
//Loan  Routes
router.post("/loan", loan_1.createLoan);
router.get("/loan", loan_1.getAllLoan);
router.get("/allloanindetail", loan_1.getAllLoanInDetail);
router.get("/loan/:id", loan_1.getOneLoan);
router.get("/oneloanindetail/:id", loan_1.getOneLoanInDetail);
router.put("/loan/:id", loan_1.updateLoan);
router.delete("/loan/:id", loan_1.deleteLoan);
// VERIFY USER BY USER TOKEN ROUTE
router.post("/verifytoken", verifyToken_1.verifyUserToken);
//Policy Inquiry Routes
router.post("/policyinquiry", policyInquiry_1.createPolicyInquiry);
router.get("/policyinquiry", policyInquiry_1.getAllPolicyInquiry);
router.get("/policyInquiryindetail", policyInquiry_1.getAllPolicyInquiryInDetail);
router.get("/policyinquiry/:id", policyInquiry_1.getOnePolicyInquiry);
router.get("/policyinquiryindetail/:id", policyInquiry_1.getOnePolicyInquiryInDetail);
router.put("/policyinquiry/:id", policyInquiry_1.updatePolicyInquiry);
router.delete("/policyinquiry/:id", policyInquiry_1.deletePolicyInquiry);
//LoanInquiry routes
router.post("/loaninquiry", loanInquiry_1.createLoanInquiry);
router.get("/loaninquiry", loanInquiry_1.getAllLoanInquiry);
router.get("/loaninquiryindetail", loanInquiry_1.getAllLoanInquiryInDetail);
router.get("/loaninquiry/:id", loanInquiry_1.getOneLoanInquiry);
router.get("/loaninquiryindetail/:id", loanInquiry_1.getOneLoanInquiryInDetail);
router.put("/loaninquiry/:id", loanInquiry_1.updateLoanInquiry);
router.delete("/loaninquiry/:id", loanInquiry_1.deleteLoanInquiry);
//Specific User Routes
router.get("/user/:id/cards", specific_1.getSpecificUserCardDetail);
router.get("/user/:id/policies", specific_2.getSpecificUserPolicyDetail);
router.get("/user/:id/loans", specific_3.getSpecificUserLoanDetail);
router.post("/forgot_password", forgotPassword_1.fireEmail);
router.post("/reset_password", forgotPassword_1.resetPassword);
// all inquiry routes
router.post("/policy-inquiry", create_3.createAllPolicyInquiry);
router.post("/loan-inquiry", create_3.createAllLoanInquiry);
router.post("/card-inquiry", create_3.createAllCardInquiry);
router.get("/all-inquiry", getAll_2.getAllTheInquiry);
router.get("/all-inquiry-user/:id", getAllByUser_1.getAllInquiryByUser);
router.get("/all-inquiry/:id", getOne_2.getOneFromAllInquiry);
router.post("/all-inquiry-report", getInquiriesByDate_1.getAllInquiriesByDate);
// register otp verification route
router.post("/otp-verificaton", create_4.otpVerification);
// city and state routes
router.get("/state", getAllStates_1.getAllStates);
router.get("/city/:name", getCities_1.getCitiesStateWise);
// aboutUs Routes
router.get("/about-us", aboutUs_1.getAllAboutUs);
router.get("/about-us/:id", aboutUs_1.getOneAboutUs);
router.post("/about-us", multer_1.upload, aboutUs_1.createAboutUs);
router.put("/about-us/:id", multer_1.upload, aboutUs_1.updateAboutUs);
router.delete("/about-us/:id", aboutUs_1.deleteAboutUs);
// contact-us Routes
router.get("/contact-us", contactUs_1.getAllContactUs);
router.get("/contact-us/:id", contactUs_1.getOneContactUs);
router.post("/contact-us", multer_1.upload, contactUs_1.createContactUs);
router.put("/contact-us/:id", multer_1.upload, contactUs_1.updateContactUs);
router.delete("/contact-us/:id", contactUs_1.deleteContactUs);
// privacy-policy Routes
router.get("/privacy-policy", privacyPolicy_1.getAllPrivacyPolicy);
router.get("/privacy-policy/:id", privacyPolicy_1.getOnePrivacyPolicy);
router.post("/privacy-policy", privacyPolicy_1.createPrivacyPolicy);
router.put("/privacy-policy/:id", privacyPolicy_1.updatePrivacyPolicy);
router.delete("/privacy-policy/:id", privacyPolicy_1.deletePrivacyPolicy);
// term-and-conditions Routes
router.get("/term-and-conditions", termsAndConditions_1.getAllTermsAndConditions);
router.get("/term-and-conditions/:id", termsAndConditions_1.getOneTermsAndConditions);
router.post("/term-and-conditions", termsAndConditions_1.createTermsAndConditions);
router.put("/term-and-conditions/:id", termsAndConditions_1.updateTermsAndConditions);
router.delete("/term-and-conditions/:id", termsAndConditions_1.deleteTermsAndConditions);
exports.default = router;
