import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { apiEndpoints } from "../../../Api/ApiEndpoint";
import { getAPI } from "../../../Api/ApiRequest";
// import ManageRole from "../queries-history/ManageRole";
import Finance from "./Finance";
import { useSelector } from "react-redux";

const FinanceProperty = () => {
  const [data, setData] = useState([]); //Later use redux
  const builderId = useSelector((state) => state.auth.builderId);
  useEffect(() => {
    const getAllFinanceManager = async () => {
      const response = await getAPI(
        `${apiEndpoints.getAllRolesFinance}${builderId}&add=finance`
      );
      // console.log(response.data);
      setData(response.data);
    };

    // getAllFinanceManager();
    const id = setInterval(getAllFinanceManager, 2000);
    return () => {
      clearInterval(id);
    };
  }, []);
  const tabelData = data?.map((itm) => (
    <Finance itm={itm} className={"mb-3 py-3 border rounded"} />
  ));
  return (
    <>
      <Container className="dashboard__wrapper__filter">
        <Row>
          <Col>Assigned To</Col>
          <Col>Phone Number</Col>
          <Col>Email</Col>
          <Col>Properties </Col>
          <Col>Action</Col>
        </Row>
        <br />
        {tabelData}
      </Container>
    </>
  );
};
export default FinanceProperty;
