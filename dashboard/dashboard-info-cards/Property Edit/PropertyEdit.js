import { Container, Table, Button, Form, Row, Col } from "react-bootstrap";
import SearchFilterBox from "../../search-filter/SearchFilter";

import DashboardHeader from "../../header/DashboardHeader";

// import { useState } from "react";
import { useParams } from "react-router-dom";
import AmenitiesPop from "./Amenitiespop";
import LocationPop from "./LocationPop";
import Footer from "../../Footer/Footer";

import { RiAddFill } from "react-icons/ri";
import { BsPencilFill } from "react-icons/bs";

import SubmitPop from "./Submitpop";
// import CreatableSelect from "react-select/creatable";
import BankPop from "./BankPop";

import { useEffect, useState } from "react";
import { getAPI, postAPI, putAPI } from "../../../Api/ApiRequest";
import { apiEndpoints } from "../../../Api/ApiEndpoint";
// import FileUpload from "../../Fileupload/Fileupload";
import FileUpload from "../../Builderprofile/file-upload/FileUpload";
// import { useDropzone } from "react-dropzone";
// const sort = [
//   { value: "Lorem Ipsum", label: "Lorem Ipsum" },
//   { value: "Lorem ipsum", label: "Lorem Ipsum" },
// ];

const PropertyEdit = () => {
  // ;
  const [data, setData] = useState([]);
  useEffect(() => {
    const getPropertyById = async () => {
      debugger;

      const response = await getAPI(
        `${apiEndpoints.getPropertyById}${params.propertyId}`
      );
      // console.log(response.data[0]);
      setData(response.data[0] ?? []);
    };

    getPropertyById();
  }, []);

  const [showAmenities, setShowAmenities] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [showSubmit, setShowSubmit] = useState(false);
  const [showBank, setShowBank] = useState(false);
  const [amenities, setAmenities] = useState([]);
  const [locationAdvantages, setLocationAdvantages] = useState([]);
  const [brochureUrl, setBrochureUrl] = useState(data?.brochureUrl);
  const [propertyImages, setPropertyImages] = useState([]);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const newBrochureUrl = e.target.result;
      setBrochureUrl(newBrochureUrl);
    };

    reader.readAsDataURL(file);
  };

  const params = useParams();

  const onAmenitiesClick = () => {
    setShowAmenities(true);
  };
  const onLocationClick = () => {
    setShowLocation(true);
  };
  const onBankClick = () => {
    setShowBank(true);
  };

  const onSubmit = async () => {
    debugger;
    // console.log(data);
    console.log(propertyImages);
    const amenitiesFormat = amenities.map((itm) => itm.label);
    const locationAdvantagesFormat = locationAdvantages.map((itm) => {
      const [name, distance] = itm.label.split("(");
      return { name, distance };
    });
    const formData = {
      name: data?.name,
      location: data?.location,
      categoryId: "",
      // locationAdvantages: data.locationAdvantagesId,
      locationAdvantages: locationAdvantagesFormat,
      // amenities: data.amenitiesId,
      amenities: amenitiesFormat,
      paymentPlan: data.paymentPlan,
      propertyId: data._id,
      builderId: data.builderId._id,
      loanApprovedBy: data.loanApprovedByIds,
      images: data.images,
      brochure: data?.brochureUrl,
    };
    console.log(formData);

    const resposne = await postAPI(
      apiEndpoints.addRequestProperty,
      // data,
      formData
    );
    console.log(resposne);
    setData(resposne.data);
  };

  const paymentData = data.paymentPlan?.map((itm) => (
    <tr>
      <td>{itm?.payment}</td>
      <td>{itm?.milestone}</td>
    </tr>
  ));
  const bankData = data?.loanApprovedByIds?.map((item) => (
    <img
      key={item.id}
      src={item?.image}
      className="rounded my-2 gap-2"
      alt="Bank"
      style={{ width: "135px" }}
    />
  ));

  return (
    <>
      <DashboardHeader />
      <Container className="pt-5 pb-4 dashboard__wrapper">
        <SearchFilterBox />
        <h3 className="heading">Property Edit</h3> <br></br>
        <br></br>
        <h3> Images</h3>
        <br></br>
        <Row className="gx-4 dashboard-cards align-items-center">
          <div
            className="d-flex gap-2"
            style={{ border: "5.72244px solid #FFFFFF" }}
          >
            <Col md={12} sm={12}>
              <FileUpload files={propertyImages} setFiles={setPropertyImages} />
            </Col>
          </div>
        </Row>
        <br></br>
        <br></br>
        <Form.Group className="mb-3">
          <Form.Label>
            <h5>Name</h5>
          </Form.Label>
          <Form.Control
            size="lg"
            className="rounded-0"
            type="text"
            disabled
            placeholder="Reet"
            value={data?.name}
            // onChange={(e) => {
            //   console.log(e.target.value);
            //   setName(e.target.value);
            // }}
          />
        </Form.Group>
        <br></br>
        <br></br>
        <Form.Group className="mb-3">
          <Form.Label>
            <h5>Location</h5>
          </Form.Label>
          <Form.Control
            size="lg"
            className="rounded-0"
            type="text"
            disabled
            placeholder="Lorem Ipsum"
            value={data?.location}
            // onChange={(e) => {
            //   console.log(e.target.value);
            //   setLocation(e.target.value);
            // }}
          />
        </Form.Group>
        <br></br>
        <br></br>
        <Form className="profile__form">
          <Form.Group className="mb-4" controlId="email">
            <Form.Label>
              <h3 className="heading">Property Category</h3>
            </Form.Label>
            {/* <CreatableSelect
              size="lg"
              // isMulti
              value={data?.propertyType?.name}
              placeholder="Lorem Ipsum"
              // options={sort}
              className="rounded-0 "
              styles={{ background: "#F8F8F8" }}
            /> */}
            <Form.Control
              size="lg"
              className="rounded-0"
              type="text"
              disabled
              placeholder="Lorem Ipsum"
              value={data?.propertyType?.name}
              // onChange={(e) => {
              //   console.log(e.target.value);
              //   setLocation(e.target.value);
              // }}
            />
            <br />
          </Form.Group>
        </Form>
        <br></br>
        <div className="d-flex justify-content-between">
          <h3 className="heading"> Amenities</h3>
          <SubmitPop show={showSubmit} onHide={setShowSubmit} />
          <Button
            variant="primary"
            size="sm"
            className="rounded-circle bg-color-primary p-3"
            onClick={onAmenitiesClick}
          >
            <RiAddFill size={20} />
          </Button>
          <AmenitiesPop
            onSubmit={setShowSubmit}
            show={showAmenities}
            onHide={setShowAmenities}
            value={amenities}
            onChange={setAmenities}
          />
        </div>
        <Container
          className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4"
          style={{ boxShadow: "0px 6.86709px 30.0435px rgba(0, 0, 0, 0.07)" }}
        >
          <div
            className="p-1 d-flex justify-content-around "
            style={{ opacity: 0.5 }}
          >
            {data?.amenitiesId?.map((itm) => (
              <div className="text-center d-flex flex-column ">
                <span>
                  <img
                    src={itm?.image}
                    className="rounded my-3"
                    alt="Amenities"
                  />
                </span>
                <span style={{ fontFamily: "Bahnschrift" }}>{itm?.name}</span>
              </div>
            ))}
          </div>
        </Container>
        <br></br>
        <br></br>
        <div className="d-flex justify-content-between">
          <h3 className="heading">Location Advantage</h3>
          <SubmitPop show={showSubmit} onHide={setShowSubmit} />
          <Button
            variant="primary"
            size="sm"
            className="rounded-circle  bg-color-primary p-3"
            onClick={onLocationClick}
          >
            <RiAddFill size={20} />
          </Button>
          <LocationPop
            onSubmit={setShowSubmit}
            show={showLocation}
            onHide={setShowLocation}
            value={locationAdvantages}
            onChange={setLocationAdvantages}
          />
        </div>
        <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4">
          <div className="d-flex justify-content-around">
            {data?.locationAdvantagesId?.map((itm) => (
              <div className="text-center d-flex flex-column">
                <span>
                  <img
                    src={itm?.image}
                    className="rounded my-3"
                    alt="location"
                    style={{ width: "95px" }}
                  />
                </span>
                <span style={{ fontFamily: "Bahnschrift" }}>
                  {itm?.name}
                  <br></br>
                  <span style={{ opacity: "0.5" }}>{itm?.distance}</span>
                </span>
              </div>
            ))}
          </div>
        </Container>
        <br></br>
        <br></br>
        <h3 className="heading">About the Project</h3>
        <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4">
          <span
            style={{ color: "#7D7F88", alignitems: "cente" }}
            dangerouslySetInnerHTML={{ __html: data?.propertyDescription }}
          >
            {}
          </span>
        </Container>
        <br></br>
        <br></br>
        <h3 className="heading">Payment Plan</h3>
        <Table
          className=" table table-secondary profile__transaction table"
          style={{ background: "#F8F8F8" }}
        >
          <thead>
            <tr>
              <th>Payment %</th>
              <th>Milestone</th>
            </tr>
          </thead>
          <tbody>{paymentData}</tbody>
        </Table>
        <br></br>
        <div className="p-4 d-flex justify-content-between">
          <h3 className="heading">Loan Approved By</h3>
          <SubmitPop show={showSubmit} onHide={setShowSubmit} />
          <Button
            variant="primary"
            size="md"
            className="rounded-circle  bg-color-primary p-3"
            onClick={onBankClick}
          >
            <RiAddFill size={20} />
          </Button>
          <BankPop
            onSubmit={setShowSubmit}
            show={showBank}
            onHide={setShowBank}
          />
        </div>
        <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-3">
          <div className="p-2 d-flex justify-content-around">{bankData}</div>
        </Container>
        <br></br>
        <br></br>
        <h3 className="heading">About the Builder</h3>
        <Container
          className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4 "
          style={{ background: "#F8F8F8" }}
        >
          <span
            style={{ color: "#7D7F88", alignitems: "cente" }}
            dangerouslySetInnerHTML={{ __html: data?.builderId?.description }}
          >
            {}
          </span>
        </Container>
        <br></br>
        <br></br>
        <div>
          <div className="d-flex justify-content-between">
            <h3 className="heading">View Official Brochure</h3>
            <span>
              <label htmlFor="brochure-upload" className="upload-button">
                <BsPencilFill
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    color: "#fff",
                    background: "#278fd9",
                    padding: "8px",
                    borderRadius: "50%",
                    marginRight: "4px",
                    marginBottom: "5px",
                  }}
                />
              </label>
              <input
                id="brochure-upload"
                type="file"
                accept="image/*"
                onChange={handleUpload}
                style={{ display: "none" }}
              />
            </span>
          </div>
          <div className="gx-4 dashboard-cards align-items-center">
            <img
              src={brochureUrl}
              className="rounded my-3"
              alt="brochure"
              style={{ width: "300px" }}
            />
          </div>
        </div>
      </Container>
      <div className="container text-center">
        <Button
          variant="primary"
          size="sm"
          className="rounded-pill border-0 py-2 px-5 my-3"
          onClick={onSubmit}
        >
          Submit
        </Button>
      </div>
      <Footer />
    </>
  );
};

export default PropertyEdit;
