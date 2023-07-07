// import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
// import propertyImage from "../../../Images/propertyadded.png";
// import build from "../../../Images/build.png";
// import { Pagination } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { BsPencilFill } from "react-icons/bs";
// import { RiVipCrownFill } from "react-icons/ri";
// import DashboardHeader from "../../header/DashboardHeader";
// import SearchFilterBox from "../../search-filter/SearchFilter";
// import Footer from "../../Footer/Footer";
// import { useEffect, useState } from "react";
// import { getAPI } from "../../../Api/ApiRequest";
// import { apiEndpoints } from "../../../Api/ApiEndpoint";
// const AllProperty = () => {
//   const [data, setData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [propertiesPerPage] = useState(9);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

import { Container, Tab, Tabs } from "react-bootstrap";

import DashboardHeader from "../../header/DashboardHeader";
import SearchFilterBox from "../../search-filter/SearchFilter";
import AddedProperty from "./AddedProperty";
import SoldProperty from "./SoldProperty";

//   const pageNumbers = [];
//   for (let i = 1; i <= Math.ceil(data.length / propertiesPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   useEffect(() => {
//     const getAddedProperties = async () => {
//       try {
//         const response = await getAPI(apiEndpoints.getAllproperty);

//         setData(response.data);
//       } catch (error) {
//         setError(error.message);
//       }
//       setLoading(false);
//     };
//     getAddedProperties();
//   }, []);
//   const handlePageChange = (event) => {
//     setCurrentPage(Number(event.target.id));
//   };
//   const indexOfLastProperty = currentPage * propertiesPerPage;
//   const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
//   const currentProperties = data.slice(
//     indexOfFirstProperty,
//     indexOfLastProperty
//   );
//   if (loading) {
//     return (
//       <Container className="mt-5">
//         <div className="text-center">
//           <Spinner animation="border" role="status" />
//         </div>
//       </Container>
//     );
//   }
//   const propertyListing = currentProperties.map((itm, index) => {
//     // const propertyListing = data.map((itm, index) => {
//     return (
//       <Col
//         md={3}
//         className="card mb-4 shadow-sm rounded-4 p-0 border-0"
//         style={{ width: "21.75rem" }}
//         id={itm._id}
//         key={itm._id}
//       >
//         <Card.Img variant="top" src={propertyImage} />
//         <Card.Body>
//           <Card.Text>
//             <Row>
//               <Col md={10} sm={10}>
//                 <div>
//                   {" "}
//                   <Link
//                     className="recent-heading"
//                     to={`/builder/home-dashboard/description/${itm?.propertyId?._id}`}
//                   >
//                     {itm.name}
//                   </Link>
//                 </div>
//                 <p style={{ opacity: 0.5 }}>{itm.location}</p>
//               </Col>
//               <Col md={2} sm={2}>
//                 <RiVipCrownFill
//                   style={{
//                     padding: "5px",
//                     borderRadius: "50%",
//                     background: "#ffd600",
//                     color: "#fff",
//                     width: "1.85em",
//                     height: "1.85em",
//                   }}
//                 />
//               </Col>
//             </Row>
//             <Row className="mt-3">
//               {itm?.unitType?.map((item) => (
//                 <Col md={3} sm={3} className="text-center">
//                   <img src={build} alt="build" className="build-icon" />
//                   <p style={{ opacity: 0.5 }}>{item}</p>
//                 </Col>
//               ))}
//             </Row>

//             <Row className="align-items-center">
//               <Col
//                 md={5}
//                 style={{
//                   color: "#000000",
//                   fontSize: "1.35em",
//                   fontWeight: "bold",
//                 }}
//               >
//                 {itm.minPrice}-{itm.maxPrice}
//               </Col>
//               <Col md={7} style={{ color: "#7D7F88", fontSize: "0.8em" }}>
//                 {itm.discountDescription}
//               </Col>
//             </Row>
//             <div className="d-flex justify-content-end gap-2 mt-2">
//               <Button
//                 variant="transparent"
//                 type="button"
//                 className="rounded-pill px-4 py-2 border border-primary"
//                 style={{ color: "#278FD9", fontSize: "14px" }}
//                 as={Link}
//                 to="/builder/home-dashboard/visit"
//               >
//                 {itm.noOfVisits} Visits
//               </Button>
//               <Button
//                 variant="transparent"
//                 type="button"
//                 className="primary rounded-pill px-4 py-2 border border-primary"
//                 as={Link}
//                 to="/builder/home-dashboard/propertyedit"
//               >
//                 <BsPencilFill
//                   style={{
//                     width: "0.9em",
//                     color: "#fff",
//                     background: "#278fd9",
//                     padding: "2px",
//                     borderRadius: "50%",
//                     marginRight: "4px",
//                     marginBottom: "5px",
//                   }}
//                 />
//                 Edit
//               </Button>
//             </div>
//           </Card.Text>
//         </Card.Body>
//       </Col>
//     );
//   });

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }
//   return (
//     <>
//       <DashboardHeader />
//       <Container className="mt-5">
//         <SearchFilterBox />

//         <div className="row justify-content-between">
//           <h3 className="col-4 heading">All Properties</h3>
//         </div>

//         <div className="mt-2 mb-5 row row-cols-2 w-100 justify-content-between ms-0">
//           {propertyListing}
//         </div>
//         <Pagination className="mt-3 justify-content-center">
//           {pageNumbers.map((number) => (
//             <Pagination.Item
//               key={number}
//               id={number}
//               active={number === currentPage}
//               onClick={handlePageChange}
//             >
//               {number}
//             </Pagination.Item>
//           ))}
//         </Pagination>
//       </Container>
//       <Footer />
//     </>
//   );
// };

// export default AllProperty;

const AllProperty = () => {
  return (
    <>
      <DashboardHeader />
      <br />

      <Container className="pt-2 pb-4 dashboard__wrapper">
        <SearchFilterBox />
        <h3 className="heading">All Property </h3>

        <Tabs
          defaultActiveKey="soldOut"
          id="fill-tab-example"
          className="property-tab mb-3 mx-auto "
          fill
        >
          <Tab eventKey="soldOut" title="Soldout Property">
            <SoldProperty />
          </Tab>

          <Tab eventKey="added" title="Added Property">
            <AddedProperty />
          </Tab>
        </Tabs>
      </Container>
    </>
  );
};
export default AllProperty;
