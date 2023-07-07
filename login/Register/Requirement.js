import { Button, Container, Form } from "react-bootstrap";
import CreatableSelect from "react-select/creatable";
import CustomModal from "../../../components/common/CustomModal";
// import axios from "axios";
import { useState } from "react";
import { postAPI } from "../../Api/ApiRequest";
import { apiEndpoints } from "../../Api/ApiEndpoint";

const Requirement = (props) => {
  const properties = [
    { value: "Flats/Apartment", label: "Flats/Apartment" },
    { value: "Farmhouse/Villa", label: "Farmhouse/Villa" },
    { value: "Plots/Lands", label: "Plots/Lands" },
    { value: "Commercial", label: "Commercial" },
  ];
  //   const [name, setName] = useState("");
  //   const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [property, setProperty] = useState("");
  const [location, setLocation] = useState("");
  const [project, setProject] = useState("");
  const [description, setDescription] = useState("");
  const onSubmitHandler = async () => {
    if (email.length <= 1) {
      //Set Error true
      return;
    }
    const formData = {
      name: props.name,
      phoneNumber: props.phone,
      email: email,
      typeOfProperty: "Apartment",
      locationProperty: "New Delhi",
      projectName: project,
      description: description,
    };
    const response = await postAPI(
      apiEndpoints.addShareYourIntern,

      formData
    );
    console.log(response);
    if (response.data) {
      props.onHide(false);
      props.onSucess(true);
    }
  };

  return (
    <>
      <CustomModal
        title="List your property/requirement"
        show={props.show}
        border
        closeBtn
        onHide={() => {
          props.onHide(false);
        }}
        cssClassName="nes__dashboard__modal"
        modalHeader
      >
        <Container className="pt-2 pb-2 dashboard__wrapper">
          <Form className="profile__form">
            <Form.Group className="mb-3" controlId="email">
              <Form.Label className="mb-0">Builder Name</Form.Label>
              <Form.Control
                className="rounded-2"
                type="text"
                placeholder="Builder Name"
                value={props.name}
                readOnly
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="mb-0">Enter Phone Number</Form.Label>
              <Form.Control
                className="rounded-2"
                type="text"
                placeholder="Enter Phone Number"
                value={props.phone}
                readOnly
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="mb-0">Enter Email Address</Form.Label>
              <Form.Control
                className="rounded-2"
                type="email"
                placeholder="Enter Email Address"
                // value={name}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="mb-0">Type Of Property</Form.Label>
              <CreatableSelect
                isMulti
                placeholder="Choose Type Of Property"
                // options={add}
                className="rounded-2"
                styles={{ background: "#F8F8F8" }}
                onChange={(e) => {
                  setProperty(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="mb-0">Location of Property</Form.Label>
              <CreatableSelect
                isMulti
                placeholder="Choose Location Of Property"
                // options={add}
                className="rounded-2"
                styles={{ background: "#F8F8F8" }}
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="mb-0">Name Of Project</Form.Label>
              <Form.Control
                className="rounded-2"
                type="text"
                placeholder="Name Of Project"
                onChange={(e) => {
                  setProject(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="mb-0">Brief Description</Form.Label>
              <Form.Control
                className="rounded-2"
                as="textarea"
                placeholder="Write Brief Description"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </Form.Group>
          </Form>
          <div className="d-grid mt-3">
            <Button
              variant="primary"
              size="md"
              className="rounded-pill border-0 bg-color-primary py-2"
              onClick={onSubmitHandler}
            >
              Submit
            </Button>
          </div>
        </Container>
      </CustomModal>
      <br />
    </>
  );
};
export default Requirement;
