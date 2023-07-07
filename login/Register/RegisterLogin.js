import { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  InputGroup,
  Row,
} from "react-bootstrap";
import Header from "../../header/Header";
import loginImage from "../../Images/Rectangle-34624401.png";
import Requirement from "./Requirement";
import Successful from "./Successful";
import "./RegisterLogin.css";
import CreatableSelect from "react-select/creatable";
import { postAPI } from "../../Api/ApiRequest";
import { apiEndpoints } from "../../Api/ApiEndpoint";

const RegisterLogin = (props) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [property, setProperty] = useState("");
  const [location, setLocation] = useState("");
  const [project, setProject] = useState("");
  const [description, setDescription] = useState("");
  // const [inputValue, setInputValue] = useState("");
  // const [inputName, setInputName] = useState("");
  const [showModal, setShowModal] = useState(false);
  // const [referral, setReferral] = useState("");
  const [showSucess, setShowSucess] = useState(false);

  // const onContinueHandler = () => {
  //   //
  //   setShowModal(true);
  // };
  // const handleNameChange = (e) => {
  //   setInputName(e.target.value);
  // };
  // const handleReferralChange = (e) => {
  //   setReferral(e.target.value);
  // };
  // const handleInputChange = (event) => {
  //   const inputText = event.target.value;
  //   const emailPhoneRegex = /^[0-9\b]+$/;

  //   const isMatch = emailPhoneRegex.test(inputText);

  //   setInputValue(inputText);
  // };
  const onContinueHandler = async () => {
    if (email.length <= 1) {
      //Set Error true
      return;
    }
    const formData = {
      name: name,
      phoneNumber: number,
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
      // props.onHide(false);
      // props.onSucess(true);
      setShowModal(true);
    }
  };
  return (
    <>
      {/* {showModal && ( */}
      <Successful
        // phone={inputValue}
        show={true}
        // name={inputName}
        onHide={setShowModal}
        onSucess={setShowSucess}
      />
      {/* )} */}
      {showSucess && <Successful show={true} />}
      <Header />
      <Container className="container-md my-5">
        <Row className="g-0 login__form login-shadow">
          <Col md={6}>
            <Image className="h-100" src={loginImage} fluid alt="login img" />
          </Col>
          <Col md={6} className="p-5 d-flex flex-column justify-content-center">
            <Container fluid className="mb-3 login__user">
              <h1 className="fw-bold text-center mb-2">
                Hello!
                <br /> Register to get started!
              </h1>
              {/* <p className="text-center">Be a part of our Brokerage Network: Register Today and Join a Community of Excellence!</p> */}
            </Container>

            {/* <Form>
              <InputGroup className="mb-0">
                <Form.Control
                  name="Name"
                  className="rounded input"
                  required
                  type="text"
                  value={inputName}
                  onChange={handleNameChange}
                  placeholder=" "
                />
                <Form.Label className="placeholder">Name</Form.Label>
              </InputGroup>
              <br />
              <InputGroup className="mb-0">
                <Form.Control
                  name="phone"
                  className="rounded input"
                  required
                  type="text"
                  value={inputValue}
                  maxLength="10"
                  onChange={handleInputChange}
                  placeholder=" "
                />
                <Form.Label className="placeholder">Phone Number</Form.Label>
                <Form.Control.Feedback type="invalid">
                  Please enter valid phone number.
                </Form.Control.Feedback>
                <Form.Control.Feedback type="valid">
                  Input is valid!
                </Form.Control.Feedback>
              </InputGroup>
              <br />
              <InputGroup className="mb-0">
                <Form.Control
                  name="Referral"
                  className="rounded input"
                  required
                  type="text"
                  value={referral}
                  onChange={handleReferralChange}
                  placeholder=" "
                />
                <Form.Label className="placeholder">
                  Enter Referral Code
                </Form.Label>
              </InputGroup>
              <br />
              <Form.Check
                type="checkbox"
                label="I agree to the Terms of Service &  Privacy Policy"
              />

              <div className="d-grid mt-3">
                <Button
                  variant="primary"
                  size="md"
                  className="rounded-pill border-0 bg-color-primary py-2"
                  onClick={onContinueHandler}
                >
                  Continue
                </Button>
              </div>
            </Form> */}
            <Container className="pt-2 pb-2 dashboard__wrapper">
              <Form className="profile__form">
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label className="mb-0">Builder Name</Form.Label>
                  <Form.Control
                    className="rounded-2"
                    type="text"
                    placeholder="Builder Name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    // readOnly
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="mb-0">Enter Phone Number</Form.Label>
                  <Form.Control
                    className="rounded-2"
                    type="text"
                    placeholder="Enter Phone Number"
                    maxLength="10"
                    value={number}
                    // readOnly
                    onChange={(e) => {
                      setNumber(e.target.value);
                    }}
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
                  // onClick={onSubmitHandler}
                  onClick={onContinueHandler}
                >
                  Submit
                </Button>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RegisterLogin;
