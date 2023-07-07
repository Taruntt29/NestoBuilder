import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { apiEndpoints } from "../../Api/ApiEndpoint";
import { getAPI } from "../../Api/ApiRequest";
import "./PropertyAnalytics.css";

const PropertyInvoice = () => {
  const [data, setData] = useState({}); //Later use redux
  useEffect(() => {
    const getInvoice = async () => {
      const response = await getAPI(apiEndpoints.getPendingInvoice);

      setData(response.data);
    };

    getInvoice();
  }, []);

  return (
    <>
      <h3 className="heading">Property Invoices</h3>
      <Container
        className="dashboard__wrapper__filter border border-light rounded shadow-sm "
        style={{ boxShadow: "0px 10.7036px 46.8282px rgba(0, 0, 0, 0.07)" }}
      >
        <Row className="p-4 align-items-center text-center">
          <Col md={3} sm={6} className="d-grid my-2">
            <span
              style={{
                color: "#278FD9",
                fontWeight: "bold",
                fontSize: "1.4em",
              }}
            >
              {data?.pendingInvoice}
            </span>
            <span style={{ opacity: 0.5, fontFamily: "Bahnschrift" }}>
              Pending <br></br> Invoice
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
              ₹ {data?.totalAmount}
            </span>
            <span style={{ opacity: 0.5, fontFamily: "Bahnschrift" }}>
              Pending <br></br> Amount
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
              {data?.pendingDays} Days
            </span>
            <span style={{ opacity: 0.5, fontFamily: "Bahnschrift" }}>
              Pending <br></br> Since
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
              {data?.averagepayoutTime} Days
            </span>
            <span style={{ opacity: 0.5, fontFamily: "Bahnschrift" }}>
              Average <br></br> Payout Time
            </span>
          </Col>
        </Row>
        {/* <div className="p-4 d-flex justify-content-around">
          <div className="text-center d-flex flex-column">
            <span
              style={{
                color: "#278FD9",
                fontWeight: "bold",
                fontSize: "1.4em",
              }}
            >
              10
            </span>
            <span style={{ opacity: 0.5, fontFamily: "Bahnschrift" }}>
              Pending <br></br> Invoice
            </span>
          </div>
          <div className="text-center d-flex flex-column">
            <span
              style={{
                color: "#278FD9",
                fontWeight: "bold",
                fontSize: "1.4em",
              }}
            >
              ₹ 99 L
            </span>
            <span style={{ opacity: 0.5, fontFamily: "Bahnschrift" }}>
              Pending <br></br> Amount
            </span>
          </div>
          <div className="text-center d-flex flex-column">
            <span
              style={{
                color: "#278FD9",
                fontWeight: "bold",
                fontSize: "1.4em",
              }}
            >
              10 Days
            </span>
            <span style={{ opacity: 0.5, fontFamily: "Bahnschrift" }}>
              Pending <br></br> Since
            </span>
          </div>
          <div className="text-center d-flex flex-column">
            <span
              style={{
                color: "#278FD9",
                fontWeight: "bold",
                fontSize: "1.4em",
              }}
            >
              10 Days
            </span>
            <span style={{ opacity: 0.5, fontFamily: "Bahnschrift" }}>
              Average <br></br> Payout Time
            </span>
          </div>
        </div> */}
      </Container>
    </>
  );
};

export default PropertyInvoice;
