import { RiStarSFill } from 'react-icons/ri';

const Rating = ({ cardType }) => {
  return (
    <>
      {cardType === 'propertyDetailsProfile' &&
        Array.from({ length: 5 }, (_, index) => (
          <RiStarSFill key={index} color="#FFB630" className="ms-1" />
        ))}
    </>
  );
};

export default Rating;
