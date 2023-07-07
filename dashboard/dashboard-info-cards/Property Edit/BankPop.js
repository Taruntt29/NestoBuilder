// import { useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import CreatableSelect from "react-select/creatable";
import { useEffect, useState } from "react";
import axios from "axios";

// const bank = [
//   { value: "AXIS", label: "AXIS " },
//   { value: "HDFC ", label: "HDFC " },
// ];
const BankPop = (props) => {
  const [data, setData] = useState({}); //Later use redux
  useEffect(() => {
    const Bank = async () => {
      const response = await axios.post(
        "http://13.233.149.97:3000/api/v1/bank/addBank",
        // formData,
        {
          headers: {
            Authorization:
              // "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwNWY3ODY1MzJmMjU2OTQ2YzE0NWYiLCJpYXQiOjE2Nzg3OTUzMTcsImV4cCI6MTY4NjU3MTMxN30.9zrslAOUlETLt38rLLrAp-UZqMEfV629il4L4I-lZs0",
              "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwNWY3ODY1MzJmMjU2OTQ2YzE0NWYiLCJpYXQiOjE2Nzg3OTUzMTcsImV4cCI6MTY4NjU3MTMxN30.9zrslAOUlETLt38rLLrAp-UZqMEfV629il4L4I-lZs0",
          },
        }
      );
      console.log(response.data);
      setData(response.data.data);
    };

    Bank();
  }, []);

  const onSubmitHandler = () => {
    props.onHide(false);
    props.onSubmit(true);
  };

  return (
    <>
      <Modal
        show={props.show}
        onHide={() => {
          props.onHide(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Bank</Modal.Title>
        </Modal.Header>
        <Container className="pt-2  dashboard__wrapper">
          <Form className="profile__form ">
            <Form.Group className="mb-4" controlId="email">
              <Form.Label>
                <h5>Add Bank</h5>
              </Form.Label>
              <CreatableSelect
                // isMulti
                placeholder="Add Bank"
                // options={bank}
                value={data.name}
                className="rounded-0"
                styles={{ background: "#F8F8F8" }}
              />
              <br />
            </Form.Group>
          </Form>
        </Container>

        <div className="d-flex justify-content-center align-items-center my-4">
          <Button
            variant="primary"
            className="w-50 rounded-pill bg-color-primary"
            onClick={onSubmitHandler}
          >
            Submit
          </Button>
        </div>
      </Modal>
    </>
  );
};
export default BankPop;
