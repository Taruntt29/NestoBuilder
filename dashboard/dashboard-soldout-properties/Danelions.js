import React from "react";
import { Container, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsPencilFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import sky from "../../Images/Sky.png";
import build from "../../Images/build.png";

const Danelions = ({ data }) => {
  const unitType = data?.unitType ? data?.unitType : [];

  return (
    <Container className="dashboard__wrapper border border-light rounded shadow-sm my-2">
      <Row className="align-items-center">
        <Col md={3} sm={12}>
          <div
            className="logo-wrapper"
            style={{
              width: "125px",
              height: "125px",
              borderRadius: "50%",
              overflow: "hidden",
              display: " flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={sky}
              className="logo-img"
              alt="Logo"
              style={{ width: " 100%", height: "auto", objectFit: "cover" }}
            />
          </div>
        </Col>
        <Col md={4} sm={12}>
          <h3 className="heading">{data?.name}</h3>
          <div className="star-rating">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                size={25}
                color={index < data?.builderId?.rating ? "#ffc107" : "#e4e5e9"}
              />
            ))}
          </div>
          <p style={{ color: "#7D7F88" }}>{data?.location}</p>
          <Row className="mt-3">
            {unitType.map((itm) => (
              <Col md={3} sm={3} className="text-center">
                <img src={build} alt="build" className="build-icon" />
                <p style={{ opacity: 0.5 }}>{itm}</p>
              </Col>
            ))}
          </Row>
        </Col>
        <Col md={5} sm={12} className="text-center">
          <h4 className="heading">
            Rs. {data?.minPrice} - {data?.maxPrice}
          </h4>
          <p style={{ color: "#7D7F88" }}>{data?.discountDescription}</p>
          <br />
          <Button
            variant="transparent"
            type="button"
            className="rounded-pill border-primary btn-lg justify-content-center px-4 gap-3 py-1"
            as={Link}
            to={`/builder/home-dashboard/propertyedit/${data?._id}`}
          >
            <BsPencilFill
              style={{
                width: "1.25rem",
                height: "1.25rem",
                color: "#fff",
                background: "#278fd9",
                padding: "4px",
                borderRadius: "50%",
                marginRight: "8px",
              }}
            />
            Edit
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Danelions;
