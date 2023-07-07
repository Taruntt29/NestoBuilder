import React, { useState } from "react";
import { Range } from "react-range";
import { Form } from "react-bootstrap";
import { currencyConverter } from "../helper/currencyConverter";

const RangeSlider = () => {
  const [values, setValues] = useState([0, 200]);

  const handleChange = (newValues) => {
    setValues(newValues);
  };

  return (
    <Form.Group controlId="rangeSlider" className="mb-4">
      <Form.Label className="mb-4">Price Range
      </Form.Label>
      <Range
        values={values}
        step={1}
        min={0}
        max={200}
        onChange={handleChange}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "4px",
              width: "100%",
              backgroundColor: "#ddd",
              borderRadius: "3px",
              marginBottom: "0.5rem"
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "12px",
              width: "12px",
              backgroundColor: "#278FD9",
              borderRadius: "50%",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
            }}
          />
        )}
      />
      <div className="d-flex justify-content-between">
        <span>{currencyConverter(values[0])}</span>
        <span>{currencyConverter(values[1])}</span>
      </div>
    </Form.Group>
  );
};

export default RangeSlider;
