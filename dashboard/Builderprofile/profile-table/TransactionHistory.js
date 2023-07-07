import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { apiEndpoints } from "../../../Api/ApiEndpoint";
import { getAPI } from "../../../Api/ApiRequest";
import "./TransactionHistory.css";

const TransactionHistory = () => {
  const [data, setData] = useState([]); //Later use redux
  useEffect(() => {
    const getTransaction = async () => {
      const response = await getAPI(apiEndpoints.getAllPayment);
      // ;

      // console.log(response.data.data);
      setData(response?.data ?? []);
    };

    getTransaction();
  }, []);

  const paymentData = data?.map((itm) => (
    <tr>
      <td>{itm?.invoiceId}</td>
      <td>{itm?.transactionId}</td>
      <td>{itm?.transactionDate}</td>
      <td>{itm?.transactionAmount}</td>
    </tr>
  ));
  return (
    <>
      <h3 className="mb-2">Transactions</h3>

      <Table
        className="profile__transaction"
        style={{ border: "1.39082px solid #E9E9E9" }}
      >
        <thead>
          <tr>
            <th>Invoice ID</th>
            <th>Transaction ID</th>
            <th>Payment Date</th>
            <th>Amount ₹</th>
          </tr>
        </thead>
        <tbody>{paymentData}</tbody>
      </Table>
    </>
  );
};

export default TransactionHistory;
