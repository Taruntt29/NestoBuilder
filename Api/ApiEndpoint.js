export const apiEndpoints = {
  verifyOtp: "/v1/builder/verifyOtp",
  sendOtp: "/v1/builder/sendOtp",
  resendOtp: "/v1/builder/resendOtp",
  addShareYourIntern: "/v1/builder/addShareYourIntern",
  getPropertyAnalytics: "/v1/builder/getPropertyAnalytics?id=",
  getPropertiesAnalyticsForIndividualProperty:
    "/v1/property/getPropertiesAnalyticsForIndividualProperty?builderId=641069056532f2569479fc9d&propertyId=640ee6a8cbe2f98daaa8813f",
  getPropertyById: "/v1/property/getPropertyById?id=",
  getBuilderById: "/v1/builder/getBuilderById?id=",
  getAllSubscriptionOrder: "/v1/subscriptionOrder/getAllSubscriptionOrder",
  getAllSubscription: "/v1/subscription/getAllSubscription",
  getPendingInvoice:
    "/v1/builder/getPendingInvoice?id=641069056532f2569479fc9d", //CRASH
  getVisitAnalytics:
    "/v1/visit/getVisitAnalytics?builderId=641069056532f2569479fc9d",
  getAllVisit: "/v1/visit/getAllVisit",
  getAllproperty: "/v1/property/getAllproperty",
  updateRequestProperty: "/v1/requestProperty/updateRequestProperty",
  getAllPayment: "/v1/payment/getAllPayment",
  getAllBoughtProperty: "/v1/boughtProperty/getAllBoughtProperty",
  getAllFaqAndSupport:
    "/v1/faqAndSupport/getAllFaqAndSupport?search=&for=builder&type=support",
  getAllFaqAndSupport1:
    "/v1/faqAndSupport/getAllFaqAndSupport?search=&for=builder&type=faq",
  getAllRaiseQuery: "/v1/raiseQuery/getAllRaiseQuery",
  getAllInvoiceForBuilder: "/v1/invoice/getAllInvoiceForBuilder?status=pending",
  getAllInvoiceForBuilder1:
    "/v1/invoice/getAllInvoiceForBuilder?status=settled",
  getClaimById: "/v1/claim/getClaimById?id=",
  addPayment: "/v1/payment/addPayment",
  // getAllBuilder: "/v1/builder/getAllBuilder",
  getAllBanner: "/v1/banner/getAllBanner",
  getAllClaim:
    "/v1/claim/getAllClaim?builderId=641069056532f2569479fc9d&claimType=property",
  addRaiseDispute: "/v1/raiseDispute/addRaiseDispute",
  deleteRoles: "/v1/roles/deleteRoles?id=",
  getAllReason: "/v1/reason/getAllReason",
  addRole: "/v1/roles/addRoles",
  getAllRolesProperty: "/v1/roles/getAllRoles?builderId=",
  getAllRolesFinance: "/v1/roles/getAllRoles?builderId=",
  updateRoles: "/v1/roles/updateRoles",
  addRequestNewProperty: "/v1/requestNewProperty/addRequestNewProperty",
  addContactus: "/v1/contactus/addContactus",
  addRequestProperty: "/v1/requestProperty/addRequestProperty",
};
