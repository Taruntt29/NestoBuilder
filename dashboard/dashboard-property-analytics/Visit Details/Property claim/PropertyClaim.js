import { Col, Container, Row, Table, Button } from "react-bootstrap";
import SearchFilterBox from "../../../search-filter/SearchFilter";
import { BsFiletypePdf } from "react-icons/bs";
import Footer from "../../../Footer/Footer";
import Header from "../../../../header/Header";
import { TbMap2 } from "react-icons/tb";
import axios from "axios";
import { useEffect, useState } from "react";
import Payment from "./Payment";
import { useParams } from "react-router-dom";
import { getAPI } from "../../../../Api/ApiRequest";
import { apiEndpoints } from "../../../../Api/ApiEndpoint";

const PropertyClaim = () => {
  // ;
  const [data, setData] = useState([]);
  const params = useParams();
  useEffect(() => {
    const getClaim = async () => {
      // const response = await axios.get(
      //   `https://apis.nestohub.in/api/v1/claim/getAllClaim?claimType=property&claimStatus=pending`,

      //     {
      //       headers: {
      //         Authorization:
      //           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDBjMzA5MDJjZGYzNjczYTI5YWU3MWQiLCJpYXQiOjE2NzkzOTM1NDksImV4cCI6MTY4NzE2OTU0OX0.doSWScAsJZyCJk62uM7rBbsS8ipkpLZ-FjuYrfYJmu8",
      //       },${params.propertyId}
      //     }64353a693f099266360cd724
      //   );
      //   ;
      // try {
      const response = await getAPI(
        `${apiEndpoints.getAllClaim}${params.propertyId}`
      );
      // console.log(response.data);
      setData(response?.data ?? []);
    };

    getClaim();
  }, []);

  const [showPayment, setShowPayment] = useState(false);
  const onPayClick = () => {
    setShowPayment((prev) => !prev);
  };

  return (
    <>
      <Header />
      <Container className="pt-5 pb-4 dashboard__wrapper">
        <SearchFilterBox />
        <div className="d-flex justify-content-between">
          <h3 className="heading">Property Claim</h3>
          <h6 className="text-secondary claim-id">
            {/* Eligible Claim ID:{data[0]?._id} */}
          </h6>
        </div>
        <Container className="dashboard__wrapper__filter border border-light rounded shadow-sm p-3">
          <br />
          <div className="d-flex col justify-content-between align-items-center">
            <div>
              <h6 className="text-secondary">Property Name</h6>
              {/* <h5>{data[0]?.builderId?.projectName}</h5> */}
            </div>
            <div>
              <TbMap2 size="40" color="#278fd9" />
            </div>
          </div>
          <br />

          <Row>
            <Col md={4} className="mb-3">
              <h6 className="text-secondary">Visit ID</h6>
              {/* <h5 className="calim-sub-head">{data[0]?.visitId}</h5> */}
            </Col>
            <Col md={4} className="mb-3">
              <h6 className="text-secondary">Visit Date</h6>
              {/* <h5 className="calim-sub-head">{data[0]?.date}</h5> */}
            </Col>
            <Col md={4} className="mb-3">
              <h6 className="text-secondary">Client Name</h6>
              {/* <h5 className="calim-sub-head">{data[0]?.builderId?.name}</h5> */}
            </Col>
            <Col md={4} className="mb-3">
              <h6 className="text-secondary">Unit Type</h6>
              <h5 className="calim-sub-head">
                {data[0]?.propertyId?.unitType?.map((item) => item)}
              </h5>
            </Col>
            <Col md={4} className="mb-3">
              <h6 className="text-secondary">Unit Number</h6>
              <h5 className="calim-sub-head">
                {/* {data[0]?.boughtPropertyId?.unitNumber} */}
              </h5>
            </Col>
            <Col md={4} className="mb-3">
              <h6 className="text-secondary">Selling Price</h6>
              <h5 className="calim-sub-head">Rs.3.94 L</h5>
            </Col>
            <Col md={4} className="mb-3">
              <h6 className="text-secondary">Broker ID</h6>
              <h5 className="calim-sub-head">Lorem Ipsum</h5>
            </Col>
            <Col md={4} className="mb-3">
              <h6 className="text-secondary">Broker Name</h6>
              <h5 className="calim-sub-head">Lorem Ipsum</h5>
            </Col>
            <Col md={4} className="mb-3">
              <h6 className="text-secondary">Selling Date</h6>
              <h5 className="calim-sub-head">10/12/2022</h5>
            </Col>
          </Row>
        </Container>

        <h3 className="heading mt-5">Brokerage plan</h3>
        <Container>
          <Row className="align-items-center rounded shadow-sm p-3">
            <Col md={8}>
              <h2>Rs. {data[0]?.brokerageAmount}</h2>
              <h5 className="brokerage-head">
                *Brokerage Percentage -{data[0]?.brokeragePercentage}%
              </h5>
            </Col>
            <Col md={4} className="text-right">
              <h6 className="text-secondary">Builder Form</h6>
              <BsFiletypePdf size={30} />
            </Col>
          </Row>
        </Container>
        <br />
        <br />

        <h3 className="heading mt-4">Milestone</h3>

        <Container className="rounded shadow-sm">
          <br />
          <Container>
            <div className="d-flex justify-content-between">
              <h5>M1 - 10%</h5>
              <h6 className="text-secondary">12 Jan 2023</h6>
            </div>
          </Container>
          <br />

          <Container>
            <Row>
              <Col md={4}>
                <h5 className="milestone-head text-secondary">Brokerage %</h5>
                <h5 className="milestone-head">12324443</h5>
              </Col>
              <Col md={4}>
                <h5 className="milestone-head text-secondary">
                  Brokerage Amount
                </h5>
                <h5 className="milestone-head">Rs. 3.94 L</h5>
              </Col>
              <Col md={4}>
                <h5 className="milestone-head text-secondary">Claimed ID</h5>
                <h5 className="milestone-head">22132322</h5>
              </Col>
            </Row>
          </Container>

          <Container className="brokerage-table">
            <Table responsive className="border rounded mt-4">
              <thead>
                <tr>
                  <th>Invoice ID</th>
                  <th>Invoice Amount</th>
                  <th>Status</th>
                  <th>View Invoice</th>
                  <th>Pay</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2111321321</td>
                  <td>₹ 3.94</td>
                  <td>
                    <Button
                      variant="transparent"
                      type="button"
                      className="text-danger rounded-pill btn btn-outline-danger"
                    >
                      Pending
                    </Button>
                  </td>
                  <td>
                    <BsFiletypePdf size={24} />
                  </td>
                  <td>
                    <Payment show={showPayment} onHide={onPayClick} />
                    <h6
                      className="text-primary milestone-pay"
                      onClick={onPayClick}
                    >
                      Pay Now
                    </h6>
                  </td>
                </tr>
                <tr>
                  <td>2111321321</td>
                  <td>₹ 3.94</td>
                  <td>
                    <Button
                      variant="transparent"
                      type="button"
                      className="text-success rounded-pill btn btn-outline-success"
                    >
                      Settled
                    </Button>
                  </td>
                  <td>
                    <BsFiletypePdf size={24} />
                  </td>
                  <td>
                    <Payment show={showPayment} onHide={onPayClick} />
                    <h6
                      className="text-primary milestone-pay"
                      onClick={onPayClick}
                    >
                      Pay Now
                    </h6>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </Container>
        <br />

        <Container className="rounded shadow-sm">
          <br />
          <Container>
            <div className="d-flex justify-content-between">
              <h5>M2 - 10%</h5>
              <h6 className="text-secondary">12 Jan 2023</h6>
            </div>
          </Container>
          <br />

          <Container>
            <Row>
              <Col md={4}>
                <h5 className="milestone-head text-secondary">Brokerage %</h5>
                <h5 className="milestone-head">12324443</h5>
              </Col>
              <Col md={4}>
                <h5 className="milestone-head text-secondary">
                  Brokerage Amount
                </h5>
                <h5 className="milestone-head">Rs. 3.94 L</h5>
              </Col>
              <Col md={4}>
                <h5 className="milestone-head text-secondary">Claimed ID</h5>
                <h5 className="milestone-head">22132322</h5>
              </Col>
            </Row>
          </Container>

          <Container className="brokerage-table">
            <Table responsive className="border rounded mt-4">
              <thead>
                <tr>
                  <th>Invoice ID</th>
                  <th>Invoice Amount</th>
                  <th>Status</th>
                  <th>View Invoice</th>
                  <th>Pay</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2111321321</td>
                  <td>₹ 3.94</td>
                  <td>
                    <Button
                      variant="transparent"
                      type="button"
                      className="text-danger rounded-pill btn btn-outline-danger"
                    >
                      Pending
                    </Button>
                  </td>
                  <td>
                    <BsFiletypePdf size={24} />
                  </td>
                  <td>
                    <Payment show={showPayment} onHide={onPayClick} />
                    <h6
                      className="text-primary milestone-pay"
                      onClick={onPayClick}
                    >
                      Pay Now
                    </h6>
                  </td>
                </tr>
                <tr>
                  <td>2111321321</td>
                  <td>₹ 3.94</td>
                  <td>
                    <Button
                      variant="transparent"
                      type="button"
                      className="text-success rounded-pill btn btn-outline-success"
                    >
                      Settled
                    </Button>
                  </td>
                  <td>
                    <BsFiletypePdf size={24} />
                  </td>
                  <td>
                    <Payment show={showPayment} onHide={onPayClick} />
                    <h6
                      className="text-primary milestone-pay"
                      onClick={onPayClick}
                    >
                      Pay Now
                    </h6>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </Container>
        <br />

        <Container className="rounded shadow-sm">
          <br />
          <Container>
            <div className="d-flex justify-content-between">
              <h5>M3 - 10%</h5>
              <h6 className="text-secondary">12 Jan 2023</h6>
            </div>
          </Container>
          <br />

          <Container>
            <Row>
              <Col md={4}>
                <h5 className="milestone-head text-secondary">Brokerage %</h5>
                <h5 className="milestone-head">12324443</h5>
              </Col>
              <Col md={4}>
                <h5 className="milestone-head text-secondary">
                  Brokerage Amount
                </h5>
                <h5 className="milestone-head">Rs. 3.94 L</h5>
              </Col>
              <Col md={4}>
                <h5 className="milestone-head text-secondary">Claimed ID</h5>
                <h5 className="milestone-head">22132322</h5>
              </Col>
            </Row>
          </Container>

          <Container className="brokerage-table">
            <Table responsive className="border rounded mt-4">
              <thead>
                <tr>
                  <th>Invoice ID</th>
                  <th>Invoice Amount</th>
                  <th>Status</th>
                  <th>View Invoice</th>
                  <th>Pay</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2111321321</td>
                  <td>₹ 3.94</td>
                  <td>
                    <Button
                      variant="transparent"
                      type="button"
                      className="text-danger rounded-pill btn btn-outline-danger"
                    >
                      Pending
                    </Button>
                  </td>
                  <td>
                    <BsFiletypePdf size={24} />
                  </td>
                  <td>
                    <Payment show={showPayment} onHide={onPayClick} />
                    <h6
                      className="text-primary milestone-pay"
                      onClick={onPayClick}
                    >
                      Pay Now
                    </h6>
                  </td>
                </tr>
                <tr>
                  <td>2111321321</td>
                  <td>₹ 3.94</td>
                  <td>
                    <Button
                      variant="transparent"
                      type="button"
                      className="text-success rounded-pill btn btn-outline-success"
                    >
                      Settled
                    </Button>
                  </td>
                  <td>
                    <BsFiletypePdf size={24} />
                  </td>
                  <td>
                    <Payment show={showPayment} onHide={onPayClick} />
                    <h6
                      className="text-primary milestone-pay"
                      onClick={onPayClick}
                    >
                      Pay Now
                    </h6>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </Container>
        <br />
        <br />
      </Container>
      <Footer />
    </>
  );
};
export default PropertyClaim;
