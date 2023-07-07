import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import "./DashboardTabs.css";
const DashboardTabs = ({ children, tabsKey, activeState }) => {
  const [key, setKey] = useState(activeState);

  return (
    <Tabs
      id="dashboard-tabs"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3 p-5 rounded flex-column flex-sm-row"
    >
      {tabsKey &&
        tabsKey.map((item, index) => (
          <Tab eventKey={item} title={item} key={index}>
            <div className="bg-white p-3">{children}</div>
          </Tab>
        ))}
      {/* {tabsKey &&
        tabsKey.map((itm, index) => (
          <Tab eventKey={itm} title={itm} key={index}></Tab>
        ))} */}
    </Tabs>
  );
};

export default DashboardTabs;
