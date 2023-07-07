// import React from "react";
import { Container } from "react-bootstrap";
import ReactApexChart from "react-apexcharts";

const series = [
  {
    name: "series1",
    data: [31, 40, 28, 51, 42, 109, 100],
  },
  {
    name: "series2",
    data: [11, 32, 45, 32, 34, 52, 41],
  },
];

const options = {
  chart: {
    height: 350,
    type: "area",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    categories: [
      "2018-09-19T00:00:00.000Z",
      "2018-09-19T01:30:00.000Z",
      "2018-09-19T02:30:00.000Z",
      "2018-09-19T03:30:00.000Z",
      "2018-09-19T04:30:00.000Z",
      "2018-09-19T05:30:00.000Z",
      "2018-09-19T06:30:00.000Z",
    ],
  },
  // xaxis: {
  //   type: "numeric",
  //   min: 2018,
  //   max: 2023,
  // },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm",
      // format: "yyyy",
    },
  },
};

const Charts = () => (
  <>
    <h3 className="heading mt-3 mb-3">Property Invoices</h3>
    <Container
      className="dashboard__wrapper__filter border border-light rounded shadow-sm"
      style={{ boxShadow: "0px 10.7036px 46.8282px rgba(0, 0, 0, 0.07)" }}
    >
      <div className="d-flex justify-content-between mt-2">
        <h4>The Graph shows the quarterly average rates of properties</h4>
        <button className="rounded-pill" style={{ background: "#F8F7F7" }}>
          Last 5 Years
        </button>
      </div>
      <p style={{ color: "#B8B8B8" }}>AVG. PROPERTY RATE</p>

      <ReactApexChart
        // className="border border-dark p-0"
        options={options}
        series={series}
        type="area"
        height={350}
      />
    </Container>
  </>
);

export default Charts;
