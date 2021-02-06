import React from "react";
import { FormGroup, Input, Label } from "react-bootstrap";

function SelectInput(props) {
  const { label, options, className } = props;
  return (
    <FormGroup>
      {label && label !== "" ? (
        <Label className="font-weight-bold">{label}</Label>
      ) : null}
      <Input
        type="select"
        className={`form-control-alternative border border-primary ${className}`}
        {...props}
      >
        <option>--select--</option>
        {options.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </Input>
    </FormGroup>
  );
}

export default SelectInput;
