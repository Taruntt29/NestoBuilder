import { Button, Container, Modal } from "react-bootstrap";
import submit from "../../../Images/submit.png";

const SubmitPop = (props) => {
  return (
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

        <h2 className="d-flex justify-content-center">Request Submitted</h2>
        <br />

        <span className="d-flex justify-content-center">
          <h4 style={{ color: "#838BA1" }}>
            Changes suggested by you will be live.Post review by NestoHub team
          </h4>
        </span>
        <br />

        <div className="d-flex justify-content-center mt-2 pt-2 ms-2">
          <Button
            type="submit"
            variant="primary"
            className="w-100 rounded-pill bg-color-primary py-3 my-2 mx-3 col-5"
            onClick={() => {
              props.onHide(false);
            }}
          >
            Done
          </Button>
        </div>
      </Container>
    </Modal>
  );
};
export default SubmitPop;
