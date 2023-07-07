import { Container } from "react-bootstrap";
import { GrDocumentPdf } from "react-icons/gr";

import Accordion from "react-bootstrap/Accordion";

import { useEffect, useState } from "react";
import { apiEndpoints } from "../../../Api/ApiEndpoint";
import { getAPI } from "../../../Api/ApiRequest";
const SupportMenu = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getSupport = async () => {
      const response = await getAPI(apiEndpoints.getAllFaqAndSupport);

      setData(response.data);
    };

    getSupport();
  }, []);

  const accordionData = data?.map((itm, index) => {
    return (
      <Accordion.Item eventKey={index} key={data._id} className="my-3">
        <Accordion.Header>{itm?.question}</Accordion.Header>
        <Accordion.Body>
          {itm?.answer}
          <div className="d-flex justify-content-end">
            <h3>
              <GrDocumentPdf />
            </h3>
          </div>
          {/* </Container> */}
          <h3 className="d-flex justify-content-center">
            Was this information helpful?
          </h3>
          <div className="d-flex justify-content-center gap-5">
            <button
              type="button"
              className="btn btn-outline-dark btn-lg btn-block"
            >
              Yes
            </button>
            <button
              type="button"
              className="btn  btn-outline-dark btn-lg btn-block "
            >
              No
            </button>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    );
  });

  return (
    <>
      <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4">
        <Accordion defaultActiveKey="0">{accordionData}</Accordion>
      </Container>
      <br />
    </>
  );
};
export default SupportMenu;
