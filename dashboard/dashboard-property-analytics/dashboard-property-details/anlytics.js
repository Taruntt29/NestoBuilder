import { Container } from "react-bootstrap";
import Search from "../../../Images/search.png";
import Sold from "../../../Images/sold.png";
import visit from "../../../Images/visits.png";
import view from "../../../Images/views.png";
import Share from "../../../Images/share.png";

import { useEffect, useState } from "react";

import { apiEndpoints } from "../../../Api/ApiEndpoint";
import { getAPI } from "../../../Api/ApiRequest";

const Anlytics = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    const getAnlytics = async () => {
      const response = await getAPI(
        apiEndpoints.getPropertiesAnalyticsForIndividualProperty
      );
      setData(response.data ?? []);
    };

    getAnlytics();
  }, []);

  const [data1, setData1] = useState([]);
  useEffect(() => {
    const getAnlyticsA = async () => {
      const response = await getAPI(apiEndpoints.getPropertyById);

      setData1(response.data[0] ?? []);
    };

    getAnlyticsA();
  }, []);

  return (
    <>
      <br></br>
      <br></br>
      <h3 className="heading">Property Analytics</h3>
      <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-2">
        <div className="p-4 d-flex justify-content-around">
          <div className="text-center d-flex flex-column">
            <span>
              <img src={Sold} className="rounded my-3" alt="Search" />
            </span>
            <span style={{ fontFamily: "Bahnschrift" }}>
              {data?.soldProperties}
              <br></br>Sold
            </span>
          </div>
          <div className="text-center d-flex flex-column">
            <span>
              <img src={visit} className="rounded my-3" alt="Search" />
            </span>

            <span style={{ fontFamily: "Bahnschrift" }}>
              {data?.numberOfvisit}
              <br></br>Visits
            </span>
          </div>
          <div className="text-center d-flex flex-column">
            <span>
              <img src={Search} className="rounded my-3" alt="Search" />
            </span>

            <span style={{ fontFamily: "Bahnschrift" }}>
              {data1[0]?.searchCount}
              <br></br> Search
            </span>
          </div>
          <div className="text-center d-flex flex-column">
            <span>
              <img src={view} className="rounded my-3" alt="Search" />
            </span>
            <span style={{ fontFamily: "Bahnschrift" }}>
              {data1[0]?.viewsCount}
              <br></br> Views
            </span>
          </div>{" "}
          <div className="text-center d-flex flex-column">
            <span>
              <img src={Share} className="rounded my-3" alt="Search" />
            </span>
            <span style={{ fontFamily: "Bahnschrift" }}>
              {data?.shareCount}
              <br></br> Shared
            </span>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Anlytics;
