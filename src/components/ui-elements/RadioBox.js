import React from "react";
import { Form } from "react-bootstrap";
// import { themeClass } from "../../variables";

function RadioBox(props) {
  const { container = "", label = "" } = props;

  return (
    <div className={`custom-control custom-radio mb-3 ${container}`}>
      <Form.Check
        {...props}
        className="custom-control-input custom-control-input-default"
        id={`${props.label}${props.name}-1`}
        type="radio"
      />
      <label
        className="custom-control-label"
        htmlFor={`${props.label}${props.name}-1`}
      >
        {label}
      </label>
    </div>
    // <Label
    //   className={`font-weight-bold ${container}`}
    //   style={{ cursor: "pointer" }}
    // >
    //   <Input type="radio" />
    //   {label}
    // </Label>
  );
}

export default RadioBox;
