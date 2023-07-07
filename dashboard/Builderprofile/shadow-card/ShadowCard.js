import Card from "react-bootstrap/Card";
import "./ShadowCard.css";

function ShadowCard({ itemLength, title, text }) {
  return (
    <>
      {Array.from({ length: itemLength }, (_, index) => (
        <Card className="shadow border-0 shadow-card mb-4" key={index}>
          <Card.Header className="border-0 bg-transparent">{title}</Card.Header>
          <Card.Body>
            <Card.Text>{text}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default ShadowCard;
