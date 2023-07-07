import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { apiEndpoints } from "../../../Api/ApiEndpoint";
import { getAPI } from "../../../Api/ApiRequest";
import ManageRole from "../queries-history/ManageRole";
import { useSelector } from "react-redux";

const Property = () => {
  const [data, setData] = useState([]); //Later use redux
  const builderId = useSelector((state) => state.auth.builderId);

  useEffect(() => {
    const getAllPropertymanager = async () => {
      const response = await getAPI(
        `${apiEndpoints.getAllRolesProperty}${builderId}&add=property`
      );
      // console.log(response.data);
      setData(response.data ?? []);
    };

    // getAllPropertymanager();
    const id = setInterval(getAllPropertymanager, 2000);
    return () => {
      clearInterval(id);
    };
  }, []);

  const tabelData = data?.map((itm) => (
    <ManageRole itm={itm} className={"mb-3 py-3 border rounded"} />
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
export default Property;
