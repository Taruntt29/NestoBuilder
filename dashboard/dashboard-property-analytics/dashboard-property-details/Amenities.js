import { Container } from "react-bootstrap";
const Amenities = ({ data }) => {
  console.log(data);
  return (
    <>
      <h3 style={{ fontFamily: "Bahnschrift" }}>Project Amenities</h3>
      <Container
        className="dashboard__wrapper__filter border border-light rounded shadow-sm mt-4"
        style={{ border: "2.94206px solid #E3E3E7", boxSizing: "border-box" }}
      >
        <div
          className="p-1 d-flex justify-content-around "
          style={{ opacity: 0.5 }}
        >
          {data?.amenitiesId?.map((itm) => (
            <div className="text-center d-flex flex-column ">
              <span>
                <img
                  src={itm?.image}
                  className="rounded my-3"
                  alt="Amenities"
                />
              </span>
              <span style={{ fontFamily: "Bahnschrift" }}>{itm?.name}</span>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};
export default Amenities;
