import Accordion from 'react-bootstrap/Accordion';
import './AccordionCard.css';

const AccordionCard = ({ itemLength, accordionTitle, accordionText }) => {
  return (
    <>
      <Accordion
        defaultActiveKey="0"
        className="accordion__wrapper accordion-flush"
      >
        {!!itemLength &&
          Array.from({ length: itemLength }, (_, index) => (
            <Accordion.Item eventKey={`${index}`} key={index}>
              <Accordion.Header>{accordionTitle}</Accordion.Header>
              <Accordion.Body className="pt-0">{accordionText}</Accordion.Body>
            </Accordion.Item>
          ))}
      </Accordion>
    </>
  );
};

export default AccordionCard;
