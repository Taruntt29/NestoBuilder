import { useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { apiEndpoints } from "../../../../Api/ApiEndpoint";
import { postAPI } from "../../../../Api/ApiRequest";

const Payment = (props) => {
  const navigate = useNavigate();
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [transactionDate, setTransactionDate] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [transactionAmount, setTransactionAmount] = useState("");

  const [moreOption, setMoreOption] = useState(false);
  const update = () => {
    setMoreOption(true);
  };
  const submitHandler = async () => {
    const formData = {
      bankName,
      accountNumber,
      ifscCode,
      recipientName,
      transactionDate,
      transactionId,
      transactionAmount,
    };
    console.log(formData);
    const response = await postAPI(
      apiEndpoints.addPayment,

      formData
    );

    console.log(response);

    navigate("/builder/home-dashboard/promoted/claim");
  };

  return (
    <>
      <Modal
        // size="sm"
        show={props.show}
        onHide={() => {
          props.onHide();
        }}
      >
        <Modal.Header className="justify-content-center" closeButton>
          <Modal.Title>Payment Using Below Details</Modal.Title>
        </Modal.Header>
        <br />
        <Container className=" dashboard__wrapper">
          <h5>Pay to Account</h5>
          <br />
          <Form.Group className="mb-3">
            <Form.Label>
              <h5> Bank Name</h5>
            </Form.Label>
            <Form.Control
              className="rounded-0"
              type="text"
              placeholder="HDFC"
              value={bankName}
              onChange={(e) => {
                console.log(e.target.value);
                setBankName(e.target.value);
              }}
            />
            <br />
            <Form.Label>
              <h5>Account No.</h5>
            </Form.Label>
            <Form.Control
              className="rounded-0"
              type="text"
              placeholder="3343263623"
              value={accountNumber}
              onChange={(e) => {
                console.log(e.target.value);
                setAccountNumber(e.target.value);
              }}
            />{" "}
            <br />
            <Form.Label>
              <h5>IFSC Code</h5>
            </Form.Label>
            <Form.Control
              className="rounded-0"
              type="text"
              placeholder="Lorem Ipsum"
              value={ifscCode}
              onChange={(e) => {
                console.log(e.target.value);
                setIfscCode(e.target.value);
              }}
            />
            <br />
            <Form.Label>
              <h5>Recipient Name</h5>
            </Form.Label>
            <Form.Control
              className="rounded-0"
              type="text"
              placeholder="Lorem Ipsum"
              value={recipientName}
              onChange={(e) => {
                console.log(e.target.value);
                setRecipientName(e.target.value);
              }}
            />
            <br />
            {moreOption && (
              <>
                <Form.Label>
                  <h5>Transaction Date*</h5>
                </Form.Label>
                <Form.Control
                  className="rounded-0"
                  type="text"
                  placeholder="Lorem Ipsum"
                  value={transactionDate}
                  onChange={(e) => {
                    console.log(e.target.value);
                    setTransactionDate(e.target.value);
                  }}
                />
                <br />

                <Form.Label>
                  <h5>Transaction ID*</h5>
                </Form.Label>
                <Form.Control
                  className="rounded-0"
                  type="text"
                  placeholder="Lorem Ipsum"
                  value={transactionId}
                  onChange={(e) => {
                    console.log(e.target.value);
                    setTransactionId(e.target.value);
                  }}
                />
                <br />
                <Form.Label>
                  <h5>Transaction Amount*</h5>
                </Form.Label>
                <Form.Control
                  className="rounded-0"
                  type="text"
                  placeholder="Lorem Ipsum"
                  value={transactionAmount}
                  onChange={(e) => {
                    console.log(e.target.value);
                    setTransactionAmount(e.target.value);
                  }}
                />
                <br />
              </>
            )}
            <div className="d-flex justify-content-center align-items-center my-4">
              {!moreOption && (
                <Button
                  variant="primary"
                  className="w-100 rounded-pill bg-color-primary"
                  onClick={update}
                >
                  Update Payment Status
                </Button>
              )}
              {moreOption && (
                <Button
                  variant="primary"
                  className="w-100 rounded-pill bg-color-primary"
                  onClick={submitHandler}
                  // onClick={(submitHandler) => {
                  //   navigate("/builder/home-dashboard/promoted/claim");
                  // }}
                >
                  Update
                </Button>
              )}
            </div>
          </Form.Group>
        </Container>
      </Modal>
    </>
  );
};
export default Payment;
