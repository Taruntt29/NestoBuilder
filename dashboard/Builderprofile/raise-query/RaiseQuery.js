import AccordionCard from "../accordion/AccordionCard";
import "./RaiseQuery.css";
import { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { apiEndpoints } from "../../../Api/ApiEndpoint";
import { getAPI } from "../../../Api/ApiRequest";

const RaiseQuery = () => {
  const [queryData, setQueryData] = useState([]);
  useEffect(() => {
    const getQuery = async () => {
      const response = await getAPI(apiEndpoints.getAllRaiseQuery);

      setQueryData(response.data ?? []);
    };

    getQuery();
  }, []);

  const recentQuery = queryData?.map((data, index) => {
    return (
      <Accordion.Item eventKey={index} key={data._id} className="my-3">
        <Accordion.Header>{data?.subject}</Accordion.Header>
        <Accordion.Body> {data?.description} </Accordion.Body>
      </Accordion.Item>
    );
  });
  return (
    <>
      <div className="dashboard__wrapper__filter border border-light rounded shadow-sm ">
        <Accordion defaultActiveKey="0"> {recentQuery}</Accordion>
      </div>

      <div className="mt-5 mb-3 chat-text">Chat With Us</div>

      <AccordionCard itemLength={1} accordionTitle="Contact 24×7 Help" />
      <AccordionCard itemLength={1} accordionTitle="Email Us" />
    </>
  );
};

export default RaiseQuery;
