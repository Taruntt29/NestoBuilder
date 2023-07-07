import { Card } from 'react-bootstrap';
import './CardWrapper.css';

const CardWrapper = ({ title, children }) => {
  return (
    <Card className="bg-transparent border-0 shadow-none profile__main">
      <Card.Header
        className={`bg-transparent border-0 ${
          title ? `bg-transparent py-0 pb-1` : `p-0`
        } `}
      >
        <h5 className="mb-0 fw-semibold profile__main__title">{title}</h5>
      </Card.Header>
      <Card.Body>{children}</Card.Body>
    </Card>
  );
};

export default CardWrapper;
