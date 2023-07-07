import { useState } from "react";
import { Button, Container, Form, FormGroup, Modal } from "react-bootstrap";
import CreatableSelect from "react-select/creatable";
// import { useNavigate } from "react-router-dom";

// const AmenitiesPop = ({ show }) => {
//   const navigate = useNavigate();
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     navigate(`/`);
//   };
const sort = [
  { value: "3 Beds", label: "3 Beds" },
  { value: "2 Bathrooms", label: "2 Bathrooms" },
];
const AmenitiesPop = (props) => {
  // const [showModal, setShowModal] = useState(false);

  // const onContinueHandler = () => {
  //   setShowModal((prev) => {
  //     return (prev = true);
  //   });
  // };
  const onSubmitHandler = () => {
    props.onHide(false);
    props.onSubmit(true);
  };
  console.log(props.show);
  const onSelect = (e) => {
    props.onChange(e);
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
          <Modal.Title className="d-flex justify-content-center">
            Amenities
          </Modal.Title>
        </Modal.Header>
        {/* <Form onSubmit={handleSubmit}> */}
        <Container className="pt-2  dashboard__wrapper">
          <Form className="profile__form ">
            <Form.Group className="mb-4" controlId="email">
              <Form.Label>
                <h5>Add Amenities</h5>
              </Form.Label>
              <CreatableSelect
                isMulti
                placeholder="Property Manager"
                options={sort}
                className="rounded-0"
                styles={{ background: "#F8F8F8" }}
                onChange={onSelect}
                value={props.value}
              />
              <br />
            </Form.Group>
          </Form>
        </Container>

        <div className="d-flex justify-content-center align-items-center my-4">
          <Button
            type="submit"
            variant="primary"
            className="w-50 rounded-pill bg-color-primary"
            onClick={onSubmitHandler}
          >
            Submit
          </Button>
        </div>
        {/* </Form.Group> */}
        {/* </Form> */}
      </Modal>
    </>
  );
};
export default AmenitiesPop;
