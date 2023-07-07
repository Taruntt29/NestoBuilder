import { Button, Card, Col, Container, Row } from "react-bootstrap";
import propertyImage from "../../Images/propertyimage.png";
import { Link } from "react-router-dom";
import "./SoldOut.css";
import { useEffect, useState } from "react";
import { getAPI } from "../../Api/ApiRequest";
import { apiEndpoints } from "../../Api/ApiEndpoint";

const SoldOut = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getBoughtProperties = async () => {
      const response = await getAPI(apiEndpoints.getAllBoughtProperty);

      // console.log(response.data);

      setData(response.data);
    };

    getBoughtProperties();
  }, []);

  const propertyListing = data?.slice(0, 6).map((itm, index) => {
    return (
      <Col
        md={3}
        sm={12}
        className="card bl-card mb-4 shadow-sm rounded-4 col-md-3 p-0 border-0 w-100"
        id={itm._id}
        key={itm._id}
      >
        <Link
          to={`/builder/home-dashboard/description/${itm?.propertyId?._id}`}
        >
          <Card.Img
            className="w-100 bl-prop-img"
            variant="top"
            src={propertyImage}
          />
        </Link>
        <Card.Body>
          <div>
            <div>
              {" "}
              <Link
                className="sold-heading"
                to={`/builder/home-dashboard/description/${itm?.propertyId?._id}`}
              >
                {itm.propertyId === null ? "no data Name" : itm.propertyId.name}
              </Link>
            </div>
            <div style={{ opacity: 0.5, fontFamily: "Bahnschrift" }}>
              {itm.propertyId === null ? "no data" : itm.propertyId.location}
            </div>
          </div>
          <Row className="bl-p-2">
            <Col>
              <Row style={{ opacity: 0.5 }}>Unit Type</Row>
              <Row>{itm.unitType}</Row>
            </Col>
            <Col>
              <Row style={{ opacity: 0.5 }}>Unit Number</Row>
              <Row>{itm.unitNumber}</Row>
            </Col>
            <Col>
              <Row style={{ opacity: 0.5 }}>Selling Price</Row>
              <Row>₹ {itm.sellingPrice}</Row>
            </Col>
          </Row>
          <Row className="p-2">
            <Col>
              <Row style={{ opacity: 0.5 }}>Client Name</Row>
              <Row>{itm.customerId.clientName}</Row>
            </Col>
            <Col>
              <Row style={{ opacity: 0.5 }}>Broker ID</Row>

              <Row>{itm.brokerId._id.slice(-10)}</Row>
            </Col>
            <Col>
              <Row style={{ opacity: 0.5 }}>Selling Date</Row>
              <Row>{itm.bookingDate}</Row>
            </Col>
          </Row>
        </Card.Body>
      </Col>
    );
  });
  return (
    <Container className="mt-5">
      <div className="row justify-content-between">
        <h3 className="col-8 heading">Recently Sold Out Property</h3>
        <a
          className="col-4 text-danger text-end w-auto"
          as={Link}
          href="/builder/home-dashboard/recentlysold"
        >
          View All
        </a>
      </div>
      {/* <div className="mt-4">{propertyListing}</div> */}
      <div className="mt-2 row w-100 justify-content-evenly ms-0">
        {propertyListing}
      </div>
    </Container>
  );
};

export default SoldOut;
