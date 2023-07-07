import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import propertyImage from "../../Images/propertyadded.png";
import build from "../../Images/build.png";
import { Link } from "react-router-dom";
import { BsPencilFill } from "react-icons/bs";
import { RiVipCrownFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { getAPI } from "../../Api/ApiRequest";
import { apiEndpoints } from "../../Api/ApiEndpoint";

const RecentlyAdded = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getAddedProperties = async () => {
      try {
        debugger;
        const response = await getAPI(apiEndpoints.getAllproperty);
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getAddedProperties();
  }, []);

  if (loading) {
    return (
      <Container className="mt-5">
        <div className="text-center">
          <Spinner animation="border" role="status" />
        </div>
      </Container>
    );
  }

  const propertyListing = data?.slice(0, 6).map((itm, index) => {
    return (
      <Col
        md={3}
        className="card bl-card mb-4 shadow-sm rounded-4 col-md-3 p-0 border-0 w-100"
        style={{ width: "21.75rem" }}
        id={itm._id}
        key={itm._id}
      >
        <Link to={`/builder/home-dashboard/description/${itm._id}`}>
          <Card.Img
            className="w-100 bl-prop-img"
            variant="top"
            src={propertyImage}
          />
        </Link>
        <Card.Body>
          <Card.Text>
            <Row>
              <Col md={10} sm={10}>
                <div>
                  {" "}
                  <Link
                    className="recent-heading"
                    to={`/builder/home-dashboard/description/${itm._id}`}
                  >
                    {itm.name}
                  </Link>
                </div>
                <p style={{ opacity: 0.5 }}>{itm?.location}</p>
              </Col>
              <Col md={2} sm={2}>
                <RiVipCrownFill
                  style={{
                    padding: "5px",
                    borderRadius: "50%",
                    background: "#ffd600",
                    color: "#fff",
                    width: "1.85em",
                    height: "1.85em",
                  }}
                />
              </Col>
            </Row>
            <Row className="mt-3">
              {itm?.unitType?.map((item) => (
                <Col md={3} sm={3} className="text-center">
                  <img src={build} alt="build" className="build-icon" />
                  <p style={{ opacity: 0.5 }}>{item}</p>
                </Col>
              ))}
            </Row>

            <Row className="align-items-center">
              <Col
                md={5}
                style={{
                  color: "#000000",
                  fontSize: "1.35em",
                  fontWeight: "bold",
                }}
              >
                {itm?.minPrice}-{itm?.maxPrice}
              </Col>
              <Col md={7} style={{ color: "#7D7F88", fontSize: "0.8em" }}>
                {itm?.discountDescription}
              </Col>
            </Row>
            <div className="d-flex justify-content-end gap-2 mt-2">
              <Button
                variant="transparent"
                type="button"
                className="rounded-pill px-4 py-2 border border-primary"
                style={{ color: "#278FD9", fontSize: "14px" }}
                as={Link}
                to="/builder/home-dashboard/visit"
              >
                {itm?.noOfVisits} Visits
              </Button>
              <Button
                variant="transparent"
                type="button"
                className="primary rounded-pill px-4 py-2 border border-primary"
                as={Link}
                to="/builder/home-dashboard/propertyedit"
              >
                <BsPencilFill
                  style={{
                    width: "0.9em",
                    color: "#fff",
                    background: "#278fd9",
                    padding: "2px",
                    borderRadius: "50%",
                    marginRight: "4px",
                    marginBottom: "5px",
                  }}
                />
                Edit
              </Button>
            </div>
          </Card.Text>
        </Card.Body>
      </Col>
    );
  });
  return (
    <Container className="mt-2">
      <div className="row justify-content-between">
        <h3 className="col-8 heading">Recently Added</h3>
        <a
          className="col-4 text-danger text-end w-auto"
          as={Link}
          href="/builder/home-dashboard/recentlyadded"
        >
          View All
        </a>
      </div>
      <div className="mt-2 mb-5 row row-cols-2 w-100 justify-content-between ms-0">
        {propertyListing}
      </div>
    </Container>
  );
};

export default RecentlyAdded;
