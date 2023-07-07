import { Form, Button, Image } from "react-bootstrap";
import "./Login.css";
import Reset from "../Images/Reset.png";
import { Link } from "react-router-dom";

const OtpContent = () => {
  return (
    <>
      <Form.Group className="mb-3">
        {/* <Form.Label style={{ fontFamily: "Bahnschrift" }}>OTP</Form.Label> */}
        <p
          className="text-text-muted text-center mb-4"
          style={{ lineHeight: "1.6" }}
        >
          Enter the verification code we just sent on your phone number.
        </p>
        <div className="d-flex justify-content-between align-items-center gap-4 mb-3">
          <Form.Control className="rounded" type="text" maxLength={1} />
          <Form.Control className="rounded" type="text" maxLength={1} />
          <Form.Control className="rounded" type="text" maxLength={1} />
          <Form.Control className="rounded" type="text" maxLength={1} />
          <Form.Control className="rounded" type="text" maxLength={1} />
          <Form.Control className="rounded" type="text" maxLength={1} />
        </div>
        <div className="d-flex justify-content-center align-items-center my-4">
          <Form.Text
            className="text-muted me-3"
            style={{ fontFamily: "Bahnschrift" }}
          >
            Didn't get OTP. Resend In 30 Sec
          </Form.Text>
          <Image
            src={Reset}
            fluid
            className="rounded my-2 user-img"
            alt="Reset"
          />
        </div>
        <Button
          variant="primary"
          className="w-100 rounded-pill bg-color-primary"
          as={Link}
          to="/builder/home-dashboard"
        >
          Verify
        </Button>
      </Form.Group>
    </>
  );
};

export default OtpContent;
