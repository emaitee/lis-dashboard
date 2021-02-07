import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { checkStrEmpty } from "utils";
// import { secondaryColor } from "../../variables";

function TextInput(props) {
  const { label, required = false, className } = props;

  return (
    <InputGroup>
      {!checkStrEmpty(label) && (
        <InputGroup.Text className="font-weight-bold">
          {label}
          {required && <span className="text-danger">*</span>}
        </InputGroup.Text>
      )}
      <FormControl
        className={`form-control-alternative border border-primary ${className}`}
        // style={{ border: `1px solid ${secondaryColor}`, ...props.style }}
        {...props}
      />
    </InputGroup>
  );
}

export default TextInput;
