import React from "react";
import { themeClass } from "../../variables";
import { RadioBox } from ".";

function RadioGroup(props) {
  const {
    container = "",
    options = [],
    onChange = (f) => f,
    value = "",
    label = "",
    name = "",
  } = props;

  return (
    <div className={container}>
      <h6 className={"font-weight-bold" + themeClass}>{label}</h6>

      <div className="d-flex flex-row">
        {/* {JSON.stringify({name, value})} */}
        {options.map((_item, _i) => (
          <RadioBox
            container="mx-4"
            label={_item.label}
            name={name}
            checked={_item.name === value}
            onChange={() => onChange(name, _item.name)}
          />
        ))}
      </div>
    </div>
  );
}

export default RadioGroup;
