import { useEffect, useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getBuilderDetail } from "../../../redux/https-requests/builderDetail-http";
// import CreatableSelect from "react-select/creatable";

import FileUpload from "../file-upload/FileUpload";

// const options = [
//   { value: "sector 28", label: "Sector 28" },
//   { value: "hDFC Bank", label: "HDFC Bank" },
// ];

const PersonalDetailsForm = () => {
  debugger;
  const dispatch = useDispatch();
  useEffect(() => {
    debugger;
    dispatch(getBuilderDetail(builderId));
  }, [dispatch]);
  const builderData = useSelector(
    (state) => state.builderDetail.details[0]
  ) || {
    email: "",
    phoneNumber: "",
    gst: "",
    companyName: "",
    address: "",
    panOfCompany: "",
    companyType: "",
  };
  const dt = useSelector(
    (state) => state.builderDetail.details[0]?.companyName
  );
  const [x, setX] = useState(dt);
  const [formData, setFormData] = useState(builderData);
  console.log(formData);
  const builderId = useSelector((state) => state.auth.builderId);

  const handleChange = (e) => {
    console.log(x);
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    dispatch({
      type: "UPDATE_BUILDER_DETAIL",
      payload: { ...builderData, [name]: value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "UPDATE_BUILDER_DETAIL",
      payload: formData,
    });
  };
  return (
    <>
      <h3>Personal Details</h3>
      <br />
      <Form className="profile__form row" onSubmit={handleSubmit}>
        <Col md={6} sm={12}>
          <Form.Group className="mb-3" controlId="companyName">
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              className="rounded-2"
              type="text"
              placeholder="DLF"
              value={x}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col md={6} sm={12}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              className="rounded-2"
              type="email"
              placeholder="jack.s@gmail.com"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>

        <Col md={6} sm={12}>
          <Form.Group className="mb-3" controlId="phoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              className="rounded-2"
              type="tel"
              placeholder="4857788898"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>

        <Col md={6} sm={12}>
          <Form.Group className="mb-3" controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              className="rounded-2"
              type="text"
              placeholder="Sector 13,Karnal"
              value={formData.address}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>

        <Col md={6} sm={12}>
          <Form.Group className="mb-3" controlId="companyType">
            <Form.Label>Company Type</Form.Label>
            <Form.Control
              className="rounded-2"
              type="text"
              placeholder="WD3 12 3321D"
              value={formData.companyType}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>

        <Col md={6} sm={12}>
          <Form.Group className="mb-3" controlId="gst">
            <Form.Label>GST</Form.Label>
            <Form.Control
              className="rounded-2"
              type="text"
              placeholder="WD3 12 3321D"
              value={formData.gst}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>

        <Col md={12} sm={12}>
          <Form.Group className="mb-3" controlId="panOfCompany">
            <Form.Label>PAN of the Company</Form.Label>
            <Form.Control
              className="rounded-2"
              type="text"
              placeholder="WD3 12 3321D"
              value={formData.panOfCompany}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col md={12} sm={12}>
          <Form.Label className="mb-0">Upload Documents</Form.Label>
          <FileUpload />
        </Col>

        <div className="d-flex gap-4 mt-2">
          <Button
            variant="transparent"
            className="btn-color-outline-primary rounded-100 btn-rounded"
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            className="btn-color-primary rounded-100 btn-rounded"
          >
            Save
          </Button>
        </div>
      </Form>
    </>
  );
};

export default PersonalDetailsForm;
