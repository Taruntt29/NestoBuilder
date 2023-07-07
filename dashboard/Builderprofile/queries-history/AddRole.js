import { Button, Container, Form, Modal } from "react-bootstrap";
import CreatableSelect from "react-select/creatable";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { getAPI, putAPI } from "../../../Api/ApiRequest";
import { apiEndpoints } from "../../../Api/ApiEndpoint";

const AddRole = (props) => {
  const [name, setName] = useState(props.itm?.name);
  const [mail, setMail] = useState(props.itm?.email);
  const [number, setNumber] = useState(props.itm?.mobileNumber);
  const [selectedProperty, setSelectedProperty] = useState([]);

  const [propertyOptions, setPropertyOptions] = useState([]);
  useEffect(() => {
    const getAllProperty = async () => {
      const response = await getAPI(apiEndpoints.getAllproperty);
      const propertySelectData = [];
      response.data.forEach((element) => {
        propertySelectData.push({ value: element._id, label: element.name });
      });
      setPropertyOptions(propertySelectData);
    };

    getAllProperty();
  }, []);

  const submitHandler = async () => {
    const formData = {
      id: props.itm._id,
      add: props.itm.add,
      name,
      email: mail,
      mobileNumber: number,
      selectProperties: selectedProperty,
      builderId: props.itm.builderId._id,
    };
    debugger;
    console.log(formData);
    const response = await putAPI(apiEndpoints.updateRoles, formData);
    if (response.code === 200) props.onChange(false);
  };
  return (
    <>
      <Modal
        show={props.show}
        onHide={() => {
          props.onChange(false);
        }}
      >
        <Modal.Header className="justify-content-center" closeButton>
          <Modal.Title>Edit Role</Modal.Title>
        </Modal.Header>
        <br />
        <Container className="pt-2 pb-5 dashboard__wrapper">
          <Form className="profile__form ps-2">
            <Form.Group className="mb-4" controlId="email">
              <Form.Label>
                <h5>Name</h5>
              </Form.Label>
              <Form.Control
                className="rounded-0"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  console.log(e.target.value);
                  setName(e.target.value);
                }}
              />
              <br />
              <Form.Label>
                <h5>Email</h5>
              </Form.Label>
              <Form.Control
                className="rounded-0"
                type="text"
                placeholder="Lorem Ipsum"
                value={mail}
                onChange={(e) => {
                  setMail(e.target.value);
                }}
              />
              <br />
              <Form.Label>
                <h5>Mobile Number</h5>
              </Form.Label>
              <Form.Control
                className="rounded-0"
                type="tel"
                placeholder="Lorem Ipsum"
                maxLength="10"
                value={number}
                onChange={(e) => {
                  setNumber(e.target.value);
                  console.log(e.target);
                }}
              />
              <br />
              <Form.Label>
                <h5>Select Properties</h5>
              </Form.Label>
              <CreatableSelect
                isMulti
                placeholder="Select Properties"
                options={propertyOptions}
                className="rounded-0"
                styles={{ background: "#F8F8F8" }}
                onChange={(e) => {
                  const selected = [];
                  e.forEach((element) => {
                    selected.push(element.value);
                  });
                  setSelectedProperty(selected);
                }}
              />
            </Form.Group>
          </Form>
        </Container>
        <div className="d-flex justify-content-center align-items-center my-2">
          <Button
            variant="primary"
            className="w-50 rounded-pill bg-color-primary"
            onClick={submitHandler}
          >
            Update
          </Button>
        </div>
      </Modal>
    </>
  );
};
export default AddRole;
