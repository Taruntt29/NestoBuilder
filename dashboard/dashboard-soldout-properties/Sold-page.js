import DashboardHeader from "../header/DashboardHeader";
import { Col, Container, Modal, Row } from "react-bootstrap";
import SearchFilterBox from "../search-filter/SearchFilter";
import homeImage from "../../Images/homeImage.jpg";
// import map from "../../Images/Map.png";
import Anlytics from "../dashboard-property-analytics/dashboard-property-details/anlytics";
import { RxCheck } from "react-icons/rx";
import Aos from "aos";
import Location from "../dashboard-property-analytics/dashboard-property-details/Location";
import Amenities from "../dashboard-property-analytics/dashboard-property-details/Amenities";
import Payment from "../dashboard-property-analytics/dashboard-property-details/Payment";
import Danelions from "./Danelions";
import Footer from "../Footer/Footer";
import Floor from "../dashboard-property-analytics/dashboard-property-details/Floor";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAPI } from "../../Api/ApiRequest";
import { apiEndpoints } from "../../Api/ApiEndpoint";
import "./SoldOut.css";

const SoldPage = () => {
  const params = useParams();
  const [showPopup, setShowPopup] = useState(false);
  const [property, setProperty] = useState([]);

  useEffect(() => {
    Aos.init({ duration: 1400 });
  }, []);

  useEffect(() => {
    const getPropertyById = async () => {
      const response = await getAPI(
        `${apiEndpoints.getPropertyById}${params.propertyId}`
      );
      debugger;
      console.log(response.data[0]);
      setProperty(response.data[0]);
    };

    getPropertyById();
  }, []);
  const handleImage = () => {
    setShowPopup(true);
  };

  return (
    <>
      <DashboardHeader />
      <Container className="pt-2 pb-4 dashboard__wrapper">
        <SearchFilterBox />
        <Row>
          <Col md={12}>
            {/* <h3 className="m-0 heading">Property Details</h3> */}
            {/* <img src={homeImage} className="rounded w-100 my-3" alt="Home" /> */}
            <div className="container sold-page" data-aos="zoom-in">
              <span className="PropertyDetails-heading">Property Details</span>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 sold-page-col">
                  <div className="sold-page-col_div-1">
                    <img
                      src={homeImage}
                      className="sold-page-col_div_img"
                      alt="Home"
                      onClick={handleImage}
                    />
                    <div className="sold-page-col_div-2">
                      <div className="sold-page-col_div-3">
                        <span className="sold-page-col_div-3_span-1">
                          <RxCheck className="sold-page-col_div-3_span-1-icon" />{" "}
                          Rera{property?.isRera}
                        </span>
                      </div>
                      <div className="sold-page-col_div-4">
                        <span className="sold-page-col_div-4_span-1">
                          {property?.createdAt}
                        </span>
                      </div>
                    </div>

                    <div className="sold-page-col_div-5 justify-content-start gap-4">
                      <div className="sold-page-col_div-6">
                        <img
                          src={homeImage}
                          className="sold-page-col_div-6_img"
                          alt="Home"
                        />
                      </div>
                      <div className="sold-page-col_div-6">
                        <img
                          src={homeImage}
                          className="sold-page-col_div-6_img"
                          alt="Home"
                        />
                      </div>
                      <div className="sold-page-col_div-6">
                        <img
                          src={homeImage}
                          className="sold-page-col_div-6_img"
                          alt="Home"
                        />
                        <div className="sold-page-col_div-7">
                          <span className="sold-page-col_div-7-span">+3</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sold-page-col_div-8 gap-2">
                  <span className="sold-page-col_div-8-span">
                    {property?.constructionStatus}
                  </span>
                  <span className="sold-page-col_div-8-span">
                    {property?.possessionDate}
                  </span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        {/* <div
          className="d-flex gap-2 mb-4"
          style={{ color: "#7D7F88", border: "none", outline: "none" }}
        >
          <span className="prop-tag me-2">{property?.constructionStatus}</span>
          <span className="prop-tag">{property?.possessionDate}</span>
        </div> */}
        <br />
        <Danelions data={property} />
        <Anlytics data={property} />
        <Floor data={property} />
        <Amenities data={property} />
        <Row>
          <Col md={12}>
            <Location data={property} />
            <Row className="gx-4 dashboard-cards align-items-center">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7001.621621626714!2d${property?.longitude}!3d${property?.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd08c16bad3b%3A0x26668a270e9365b7!2sKashmere%20Gate%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1682425730846!5m2!1sen!2sin`}
                allowFullScreen=""
                title="Unique Title"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                style={{
                  width: "100%",
                  height: "300px",
                  marginTop: "30px",
                  borderRadius: "14px",
                }}
              ></iframe>
            </Row>
          </Col>

          <Col md={12}>
            <Payment data={property} />
          </Col>
          <Col md={12}>
            <h3 className="heading"> View offical brochure</h3>
            <Row className="gx-4 dashboard-cards align-items-center">
              <img
                src={property?.brochureUrl}
                // sizes="140"
                className="rounded my-3"
                alt="brochure"
                style={{ width: "300px" }}
              />
            </Row>
          </Col>
          <Col md={12}>
            <h3 className="heading"> Terms & Conditions</h3>
            <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4">
              <div className="p-4 d-flex justify-content-between">
                <p
                  style={{ color: "#7D7F88", fontFamily: "Bahnschrift" }}
                  dangerouslySetInnerHTML={{
                    __html: property?.termAndCondition,
                  }}
                >
                  {}
                </p>
              </div>
            </Container>
          </Col>
        </Row>
        <Modal
          show={showPopup}
          onHide={() => setShowPopup(false)}
          className="mt-5 align-item-center rounded"
          size="md"
          style={{
            borderRadius: "63.8029px",
          }}
        >
          <Modal.Body>
            {" "}
            <img
              src={homeImage}
              alt="Home"
              style={{ width: "100%", height: "100%" }}
            />
          </Modal.Body>
        </Modal>
      </Container>
      <Footer />
    </>
  );
};

export default SoldPage;
