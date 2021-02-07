import React from "react";
import { Input, Label, FormGroup } from "react-bootstrap";
import { checkStrEmpty } from "utils";
// import { secondaryColor } from "variables";

function TextInput(props) {
  const { label, required = false, className } = props;

  return (
    <FormGroup>
      {!checkStrEmpty(label) && (
        <Label className="font-weight-bold">
          {label}
          {required && <span className="text-danger">*</span>}
        </Label>
      )}
      <Input
        className={`form-control-alternative border border-primary ${className}`}
        // style={{ border: `1px solid ${secondaryColor}`, ...props.style }}
        {...props}
      />
    </FormGroup>
  );
}

export default TextInput;
