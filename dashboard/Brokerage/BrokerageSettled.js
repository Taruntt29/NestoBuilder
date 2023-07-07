import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../../header/Header";
// import DashboardTabs from "../../../components/dashboard-tabs/DashboardTabs";
import DashboardHeader from "../header/DashboardHeader";
import SearchFilterBox from "../search-filter/SearchFilter";

import SettledInvoice from "./SettledInvoice";

// const tabKey = ["Pending Invoices", "Settled Invoices"];

const BrokerageSettled = () => {
  // const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  // const propertyListing = arr.map((itm) => (
  //   <PendingInvoice className={"mb-3 py-3 border rounded"} />
  // ));
  return (
    <>
      <DashboardHeader />
      {/* <Header /> */}
      <Container className="pt-5 pb-4 dashboard__wrapper">
        <SearchFilterBox />
        <br /> <h1> Brokerage Management</h1>
        <div
          className="w-100 btn-group rounded-pill col-2  justify-content-center  py-2 mx-3 row"
          role="group"
          aria-label="Basic example"
        >
          <button
            type="button"
            className="w-50 rounded-pill col-2 btn btn-secondary"
          >
            Pending Invoices
          </button>

          <Button
            variant="primary"
            type="button"
            className=" w-50 rounded-pill col-2 btn btn-primary "
            as={Link}
            to="/builder/home-dashboard/Brokerage/settled"
          >
            {/* <SettledInvoice /> */}
            Settled Invoice
          </Button>
          {/* <DashboardTabs activeState={tabKey[0]} tabsKey={tabKey} /> */}
        </div>
        {/* {propertyListing} */}
        {/* <PendingInvoice data={[1, 2, 3, 4, 5, 6, 7, 8]} /> */}
        <SettledInvoice data={[1, 2, 3, 4, 5, 6]} />
      </Container>
    </>
  );
};
export default BrokerageSettled;
