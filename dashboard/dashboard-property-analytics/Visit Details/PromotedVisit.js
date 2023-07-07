// import { Container, Button, Col, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import Header from "../../../header/Header";
// import Footer from "../../Footer/Footer";
// import { useEffect, useState } from "react";
// import axios from "axios";

// import SearchFilterBox from "../../search-filter/SearchFilter";
// import PromotedVisitItem from "./PromotedVisitItem";
// const PromotedVisit = () => {
//   const [data, setData] = useState({}); //Later use redux
//   useEffect(() => {
//     const getVisit = async () => {
//       const response = await axios.get(
//         "http://localhost:3000/api/v1/visit/getVisitAnalytics?builderId=641069056532f2569479fc9d",

//         {
//           headers: {
//             Authorization:
//               "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwNWY3ODY1MzJmMjU2OTQ2YzE0NWYiLCJpYXQiOjE2Nzg3OTUzMTcsImV4cCI6MTY4NjU3MTMxN30.9zrslAOUlETLt38rLLrAp-UZqMEfV629il4L4I-lZs0",
//           },
//         }
//       );
//       // ;

//       // console.log(response.data.data);
//       setData(response.data.data);
//     };

//     getVisit();
//   }, []);

//   const [data1, setData1] = useState([]); //Later use redux
//   const [filterData, setFilterData] = useState([]);
//   useEffect(() => {
//     const getVisit = async () => {
//       const response = await axios.get(
//         // "http://13.233.149.97:3000/api/v1/visit/getAllVisit?propertyId=641bf437067c659dc0be278c&isPromoted=false&builderId=641c31c0e55383765452d174",
//         // "http://localhost:3000/api/v1/visit/getAllVisit?propertyId=641bf437067c659dc0be278c&isPromoted=false&builderId=641c31c0e55383765452d174",
//         "http://localhost:3000/api/v1/visit/getAllVisit",
//         // formData,
//         {
//           headers: {
//             Authorization:
//               "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwNWY3ODY1MzJmMjU2OTQ2YzE0NWYiLCJpYXQiOjE2Nzg3OTUzMTcsImV4cCI6MTY4NjU3MTMxN30.9zrslAOUlETLt38rLLrAp-UZqMEfV629il4L4I-lZs0",
//           },
//         }
//       );
//       ;

//       console.log(response.data.data);
//       setData1(response.data.data);
//       setFilterData(response.data.data);
//     };

//     getVisit();
//   }, []);

//   const onPendingClick = () => {
//     const pendingData = data1.filter((itm) => itm.visitStatus === "pending");
//     setFilterData(pendingData);
//   };

//   const onCompletedClick = () => {
//     // console.log(e);
//     const pendingData = data1.filter((itm) => itm.visitStatus === "completed");
//     setFilterData(pendingData);
//   };

//   const onBoughtClick = () => {
//     // console.log(e);
//     const pendingData = data1.filter((itm) => itm.visitStatus === "bought");
//     setFilterData(pendingData);
//   };

//   const onFollowupClick = () => {
//     // console.log(e);
//     const pendingData = data1.filter((itm) => itm.visitStatus === "followup");
//     setFilterData(pendingData);
//   };

//   const onNegotiationClick = () => {
//     // console.log(e);
//     const pendingData = data1.filter(
//       (itm) => itm.visitStatus === "negotiation"
//     );
//     setFilterData(pendingData);
//   };
//   const tabelData = filterData.map((itm, index) => (
//     <PromotedVisitItem itm={itm} className={"mb-3 py-3 border rounded"} />
//   ));

//   return (
//     <>
//       <Header />
//       <Container className="pt-5 pb-4 dashboard__wrapper">
//         <SearchFilterBox />
//         <h3 className="heading"> Visit Details</h3>

//         <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4">
//           <div className="p-4 d-flex justify-content-around">
//             <div className="text-center d-flex flex-column">
//               <span
//                 onClick={onPendingClick}
//                 style={{
//                   color: "black",
//                   fontWeight: "bold",
//                   fontSize: "1.4em",
//                 }}
//               >
//                 {data.pendingVisit}
//               </span>
//               <span style={{ opacity: 0.5 }}>Pending</span>
//             </div>
//             <div className="text-center d-flex flex-column">
//               <span
//                 style={{
//                   color: "black",
//                   fontWeight: "bold",
//                   fontSize: "1.4em",
//                 }}
//               >
//                 {data.completedVisit}
//               </span>
//               <span onClick={onCompletedClick} style={{ opacity: 0.5 }}>
//                 Completed
//               </span>
//             </div>
//             <div className="text-center d-flex flex-column">
//               <span
//                 style={{
//                   color: "black",
//                   fontWeight: "bold",
//                   fontSize: "1.4em",
//                 }}
//               >
//                 {data.followUpVisit}
//               </span>
//               <span onClick={onFollowupClick} style={{ opacity: 0.5 }}>
//                 Follow Up
//               </span>
//             </div>
//             <div className="text-center d-flex flex-column">
//               <span
//                 style={{
//                   color: "black",
//                   fontWeight: "bold",
//                   fontSize: "1.4em",
//                 }}
//               >
//                 {data.negotiationVisit}
//               </span>
//               <span onClick={onNegotiationClick} style={{ opacity: 0.5 }}>
//                 Negotiation
//               </span>
//             </div>
//             <div className="text-center d-flex flex-column">
//               <span
//                 style={{
//                   color: "black",
//                   fontWeight: "bold",
//                   fontSize: "1.4em",
//                 }}
//               >
//                 {data.boughtVisit}
//               </span>
//               <span onClick={onBoughtClick} style={{ opacity: 0.5 }}>
//                 Brought
//               </span>
//             </div>
//           </div>
//         </Container>
//         <Container className="dashboard__wrapper__filter mt-5">
//           <Row>
//             <Col>Visit ID</Col>
//             <Col>Broker Name</Col>
//             <Col>Client Name</Col>
//             <Col>Visit Date</Col>
//             <Col>Status </Col>
//             <Col>Raise Dispute</Col>
//             <Col>Rating & Reviews</Col>
//           </Row>
//           <br />
//           {tabelData}
//         </Container>
//         <div className="d-flex justify-content-center mt-5">
//           <Button
//             variant="primary"
//             size="sm"
//             className="w-50 rounded-pill border-0 bg-color-primary py-2 my-5 mx-5 col-5 "
//           >
//             Download Pdf
//           </Button>
//         </div>
//       </Container>
//       <Footer />
//     </>
//   );
// };

// export default PromotedVisit;
