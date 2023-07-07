import { Button, Container, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import submit from "../../Images/submit.png";

const Successful = (props) => {
  const navigate = useNavigate();
  const submitHandler = () => {
    // props.onChange((prev) => ({ ...prev, submit: false }));
    navigate("/builder/login");
  };

  return (
    <>
      <Modal show={props.show}>
        <Container className="pt-5 pb-4 py-2 dashboard__wrapper">
          <h6 className="  d-flex justify-content-center">
            <img
              src={submit}
              alt="submit"
              style={{
                width: "121.99px",
                height: "121.99px",
                left: "608.77px",
                top: "282.5px",
              }}
            />
          </h6>
          <br />
          <div className=" d-flex row justify-content-center">
            <h2 className="d-flex justify-content-center">Successful</h2>
            <br />
            {/* <Modal.Title style={{ color: "#838BA1" }}> */}
            <h4
              className=" d-flex row justify-content-center"
              style={{ color: "#838BA1" }}
            >
              Your requirement is submitted!
            </h4>
            <h4
              className=" d-flex row justify-content-center"
              style={{ color: "#838BA1" }}
            >
              NestoHub team will contact you soon
            </h4>
            <br />
            {/* </Modal.Title> */}
          </div>

          <div className="d-flex justify-content-center mt-2 pt-2 ms-2">
            <Button
              type="submit"
              variant="primary"
              className="w-100 rounded-pill bg-color-primary py-3 my-2 mx-3 col-5"
              onClick={submitHandler}
            >
              Done
            </Button>
          </div>
        </Container>
      </Modal>
    </>
  );
};
export default Successful;
