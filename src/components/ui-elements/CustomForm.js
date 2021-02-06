import React from "react";
import { Row, Col } from "react-bootstrap";
import TextInput from "components/UI/TextInput";
import { RadioGroup, SelectInput } from ".";
import Checkbox from "./CheckBox";
import SwitchButton from "hooks/Switch";

function CustomForm({
  fields = [],
  handleChange = (f) => f,
  handleRadioChange = (f) => f,
}) {
  return (
    <Row className="m-0">
      {fields.map((el, i) => {
        if (el.type && el.type === "select") {
          return (
            <Col md={{ size: el.col || 4, offset: el.offset || "" }} key={i}>
              <SelectInput
                label={el.label}
                name={el.name}
                value={el.value}
                options={el.options || []}
                required={el.required}
                disabled={el.disabled}
                onChange={handleChange}
              />
            </Col>
          );
        } else if (el.type && el.type === "radio") {
          return (
            <Col md={{ size: el.col || 4, offset: el.offset || "" }} key={i}>
              <RadioGroup
                container="d-flex flex-row"
                label={el.label}
                name={el.name}
                options={el.options}
                onChange={handleRadioChange}
                value={el.value}
              />
            </Col>
          );
        } else if (el.type && el.type === "checkbox") {
          return (
            <Col md={{ size: el.col || 4, offset: el.offset || "" }} key={i}>
              <Checkbox
                container="d-flex flex-row"
                label={el.label}
                name={el.name}
                options={el.options}
                onChange={handleRadioChange}
                value={el.value}
              />
            </Col>
          );
        } else if (el.type && el.type === "custom") {
          return (
            <Col
              className={el.container}
              md={{ size: el.col || 4, offset: el.offset || "" }}
              key={i}
            >
              {el.component()}
            </Col>
          );
        } else if (el.type === "switch") {
          return <SwitchButton />;
        } else {
          return (
            <Col md={{ size: el.col || 4, offset: el.offset || "" }} key={i}>
              <TextInput
                label={el.label}
                type={el.type || "text"}
                name={el.name}
                value={el.value}
                required={el.required}
                disabled={el.disabled}
                onChange={handleChange}
              />
            </Col>
          );
        }
      })}
    </Row>
  );
}

export default CustomForm;
