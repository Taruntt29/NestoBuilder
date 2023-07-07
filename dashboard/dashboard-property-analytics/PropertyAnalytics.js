import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./PropertyAnalytics.css";
import { useEffect, useState } from "react";
import { apiEndpoints } from "../../Api/ApiEndpoint";
import { getAPI } from "../../Api/ApiRequest";
import { useSelector } from "react-redux";

const PropertyAnalytics = () => {
  const [data, setData] = useState({}); //Later use redux
  const builderId = useSelector((state) => state.auth.builderId);

  useEffect(() => {
    const getAnalytics = async () => {
      debugger;
      const response = await getAPI(
        `${apiEndpoints.getPropertyAnalytics}${builderId}`
      );
      console.log(response);
      setData(response.data ?? []);
    };

    getAnalytics();
  }, []);

  return (
    <>
      <h3 className="heading">Property Analytics</h3>
      <Container className="dashboard__wrapper__filter border border-light rounded-4 shadow-sm mt-2">
        <Row className="p-4 align-items-center text-center">
          <Col md={3} sm={6} className="d-grid my-2">
            {/* {plans} */}
            <span
              style={{
                color: "#278FD9",
                fontWeight: "bold",
                fontSize: "1.4em",
              }}
            >
              {data?.listedProperties}
            </span>
            <span style={{ opacity: 0.5 }}>
              Listed <br></br> Properties
            </span>
          </Col>
          <Col md={3} sm={6} className="d-grid my-2">
            <span
              style={{
                color: "#278FD9",
                fontWeight: "bold",
                fontSize: "1.4em",
              }}
            >
              {data?.soldOutUnits}
            </span>
            <span style={{ opacity: 0.5 }}>
              Sold Out <br></br> Units
            </span>
          </Col>
          <Col md={3} sm={6} className="d-grid my-2">
            <Link
              style={{
                color: "#278FD9",
                fontWeight: "bold",
                fontSize: "1.4em",
                textDecoration: "none",
              }}
              to="/builder/home-dashboard/visit"
            >
              {data?.totalVisit}
            </Link>
            <span style={{ opacity: 0.5 }}>
              Total <br></br> Visits
            </span>
          </Col>
          <Col md={3} sm={6} className="d-grid my-2">
            <span
              style={{
                color: "#278FD9",
                fontWeight: "bold",
                fontSize: "1.4em",
              }}
            >
              {data?.averageTimeToSell} Days
            </span>
            <span style={{ opacity: 0.5 }}>
              Average <br></br> time to sell
            </span>
          </Col>
        </Row>
      </Container>
    </>
  );
  // });
};

export default PropertyAnalytics;
