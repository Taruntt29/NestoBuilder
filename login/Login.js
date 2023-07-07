import LoginUser from "./LoginUser";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Image,
  InputGroup,
} from "react-bootstrap";

import { useState } from "react";
import EnterOtp from "./EnterOtp";

import "./Login.css";
import loginImage from "../Images/Rectangle-34624401.png";
// import Header from "../header/Header";
import Header from "../../broker/features/Dashboard/components/header/Header";
import builder from "../Images/builder.png";
import loan from "../Images/loan.png";
import axios from "axios";
import NotRegister from "./Register/NotRegister";
import { postAPI } from "../Api/ApiRequest";
import { apiEndpoints } from "../Api/ApiEndpoint";
const Login = () => {
  const [inputValue, setInputValue] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [register, setRegister] = useState(false);

  const onContinueHandler = async () => {
    if (inputValue.length === 10) {
      const response = await postAPI(apiEndpoints.sendOtp, {
        phoneNumber: inputValue,
      });
      console.log(response);

      setShowModal((prev) => {
        return (prev = true);
      });
    }
  };

  const handleInputChange = (event) => {
    const inputText = event.target.value;
    const emailPhoneRegex = /^[0-9\b]+$/;

    const isMatch = emailPhoneRegex.test(inputText);

    setInputValue(inputText);

    if (isMatch) {
      setShowErrorMessage(false);
      event.target.classList.remove("is-invalid");
      event.target.classList.add("is-valid");
    } else {
      setShowErrorMessage(true);
      event.target.classList.remove("is-valid");
      event.target.classList.add("is-invalid");
    }
  };

  return (
    <>
      {showModal && (
        <EnterOtp
          phone={inputValue}
          show={true}
          setRegister={setRegister}
          onHide={setShowModal}
        />
      )}
      {register && <NotRegister show={true} />}
      {/* <Header /> */}
      <Header />

      <Container className="container-md my-5">
        <Row className="g-0 login__form login-shadow">
          <Col md={6}>
            <Image className="h-100" src={loginImage} fluid alt="login img" />
          </Col>
          <Col md={6} className="p-5 d-flex flex-column justify-content-center">
            <LoginUser />

            <Form>
              <InputGroup className="mb-0">
                <Form.Control
                  name="phone"
                  className="rounded"
                  required
                  type="text"
                  value={inputValue}
                  maxLength="10"
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  isInvalid={showErrorMessage}
                  isValid={!showErrorMessage && inputValue !== ""}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter valid phone number.
                </Form.Control.Feedback>
                <Form.Control.Feedback type="valid">
                  Input is valid!
                </Form.Control.Feedback>
              </InputGroup>

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
            </Form>

            <div className="d-flex align-items-center my-4">
              <div className="divider flex-grow-1"></div>
              <p className="m-0 px-1">Or Login</p>
              <div className="divider flex-grow-1"></div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-grid mb-0">
                <Button
                  variant="primary"
                  size="md"
                  className="rounded-pill border-0 bg-color-primary py-2 px-5 btn-shadow"
                >
                  <Image
                    src={builder}
                    fluid
                    className="rounded-circle mx-2 user-img"
                    alt="builder"
                  />
                  Broker
                </Button>
              </div>
              <div className="d-grid mb-0">
                <Button
                  variant="primary"
                  size="md"
                  className="rounded-pill border-0 bg-color-primary py-2 px-5 btn-shadow"
                >
                  <Image
                    src={loan}
                    fluid
                    className="rounded-circle mx-2 user-img"
                    alt="broker"
                  />
                  Loan Agent
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
