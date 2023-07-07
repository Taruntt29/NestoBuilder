import { Card, Col, Container, Row } from "react-bootstrap";
import propertyImage from "../../../Images/propertyimage.png";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

import { apiEndpoints } from "../../../Api/ApiEndpoint";
import { getAPI } from "../../../Api/ApiRequest";

const PastPropertyList = (props) => {
  // const data = useSelector((state) => state.soldPropertyDetail.properties);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getBoughtProperties = async () => {
      const response = await getAPI(apiEndpoints.getAllBoughtProperty);

      // console.log(response.data);

      setData(response.data);
    };

    getBoughtProperties();
  }, []);

  const propertyListing = data?.map((itm, index) => {
    return (
      <Col
        md={3}
        className="card mb-4 shadow-sm rounded-4 col-md-3 p-0 border-0"
        style={{
          width: "21.75rem",
        }}
        id={itm?._id}
        key={itm?._id}
      >
        <Card.Img className="w-100" variant="top" src={propertyImage} />
        <Card.Body>
          <div>
            <div>
              {" "}
              {/* <Link
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: "1.4em",
                  textDecoration: "none",
                }}
                // to="/builder/home-dashboard/description"
              > */}
              <h4
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: "1.4em",
                  textDecoration: "none",
                }}
              >
                {itm?.propertyId === null
                  ? "no data Name"
                  : itm?.propertyId?.name}
              </h4>
              {/* {itm.propertyId.companyName} */}
              {/* </Link> */}
            </div>
            <div style={{ opacity: 0.5, fontFamily: "Bahnschrift" }}>
              {itm?.propertyId === null ? "no data" : itm?.propertyId?.location}
            </div>
          </div>
          <Row className="p-2">
            <Col>
              <Row style={{ opacity: 0.5 }}>Unit Type</Row>
              <Row>{itm?.unitType}</Row>
            </Col>
            <Col>
              <Row style={{ opacity: 0.5 }}>Unit Number</Row>
              <Row>{itm?.unitNumber}</Row>
            </Col>
            <Col>
              <Row style={{ opacity: 0.5 }}>Selling Price</Row>
              <Row>₹ {itm?.sellingPrice}</Row>
            </Col>
          </Row>
          <Row className="p-2">
            <Col>
              <Row style={{ opacity: 0.5 }}>Client Name</Row>
              <Row>{itm?.customerId?.clientName}</Row>
            </Col>
            <Col>
              <Row style={{ opacity: 0.5 }}>Broker ID</Row>
              {/* <Row>{itm.brokerId.referalCode}</Row> */}
              <Row>{itm?.brokerId?._id.slice(-10)}</Row>
            </Col>
            <Col>
              <Row style={{ opacity: 0.5 }}>Selling Date</Row>
              <Row>{itm?.bookingDate}</Row>
            </Col>
          </Row>
        </Card.Body>
      </Col>
    );
  });
  return (
    <>
      <Container className="mt-5">
        <div className="mt-2 row justify-content-around">{propertyListing}</div>
      </Container>
    </>
  );
};

export default PastPropertyList;
