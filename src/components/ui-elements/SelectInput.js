import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";

function SelectInput(props) {
  const { label, options, className } = props;
  return (
    <InputGroup>
      {label && label !== "" ? (
        <InputGroup.Text className="font-weight-bold">{label}</InputGroup.Text>
      ) : null}
      <FormControl
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
      </FormControl>
    </InputGroup>
  );
}

export default SelectInput;
