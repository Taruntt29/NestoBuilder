import { Button, Container, Tab, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Header from "../../header/Header";
// import DashboardTabs from "../../../components/dashboard-tabs/DashboardTabs";
import DashboardHeader from "../header/DashboardHeader";
import SearchFilterBox from "../search-filter/SearchFilter";
import PendingInvoice from "./PendingInvoice";
import SettledInvoice from "./SettledInvoice";
import { useEffect, useState } from "react";
import axios from "axios";

// const tabKey = ["Pending Invoices", "Settled Invoices"];

const Brokerage = () => {
  return (
    <>
      <DashboardHeader />
      {/* <Header /> */}

      <Container className="pt-5 pb-4 dashboard__wrapper">
        <SearchFilterBox />
        <br /> <h1> Brokerage Management</h1>
        <Tabs
          defaultActiveKey="Pending"
          id="fill-tab-example"
          className="mb-3 mx-auto w-50"
          fill
        >
          <Tab eventKey="Pending" title="Pending Invoices">
            <PendingInvoice data={[1, 2, 3, 4, 5, 6, 7, 8]} />
          </Tab>

          <Tab eventKey="Settled" title="Settled Invoices ">
            <SettledInvoice data={[1, 2, 3, 4, 5, 6, 7, 8]} />
          </Tab>
        </Tabs>
      </Container>
    </>
  );
};
export default Brokerage;
