// import { useState } from "react";
import { Col, Row } from "react-bootstrap";
// import { IconContext } from "react-icons/lib";
import { RiDeleteBin6Fill } from "react-icons/ri";
import AddRole from "./AddRole";
import { BsPencilFill } from "react-icons/bs";
// import delete from "../../../Images/editbutton.png";
import { useEffect, useState } from "react";
import { delAPI } from "../../../Api/ApiRequest";
import { apiEndpoints } from "../../../Api/ApiEndpoint";

const Finance = (props) => {
  const [role, setRole] = useState(false);
  const [visible, setVisible] = useState(true);

  const removeElement = async () => {
    const response = await delAPI(
      `${apiEndpoints.deleteRoles}${props.itm._id}`
    );
    console.log(response.message);
  };
  const onRole = () => {
    // setRole((prev) => ({ ...prev, role: true }));
    setRole(true);
  };

  return (
    <>
      <Row className={props?.className}>
        <Col>{props?.itm?.name}</Col>
        <Col>{props?.itm?.mobileNumber}</Col>
        <Col>{props?.itm?.email}</Col>

        <Col>
          {props?.itm?.selectProperties?.map((itm, i) => (
            <div>{i}</div>
          ))}
        </Col>

        <Col className="d-flex justify-content-between">
          <Col onClick={onRole} role="button">
            {" "}
            <BsPencilFill
              style={{
                width: "0.95rem",
                height: "0.95rem",
                color: "#fff",
                background: "#278fd9",
                padding: "2px",
                borderRadius: "50%",
                marginRight: "4px",
                marginBottom: "5px",
              }}
            />
          </Col>
          <AddRole
            itm={props?.itm}
            propertyOptions={props?.propertyOptions}
            show={role}
            onChange={setRole}
          />
          <Col>
            <button onClick={removeElement}>
              <RiDeleteBin6Fill />
            </button>
          </Col>
        </Col>
      </Row>
    </>
  );
};
export default Finance;
