import { CustomButton } from "components/ui-elements";
import { CustomForm } from "components/ui-elements";
import React, { useState } from "react";
import { Card } from "react-bootstrap";

function Registry() {
  const [form, setForm] = useState({});
  const fields = [
    {
      name: "formno",
      label: "Form No.",
      value: form.formno,
      col: 4,
    },
    {
      type: "select",
      name: "application_type",
      label: "Application Type",
      value: form.application_type,
      col: 4,
    },
    {
      name: "application_name",
      label: "Application Name",
      value: form.application_name,
      col: 4,
    },
    
  ];

  const handleChange = ({ target: { name, value } }) =>
    setForm((p) => ({ ...p, [name]: value }));

  return (
    <Card>
      <Card.Header>Application Frorm</Card.Header>
      <Card.Body>
        <CustomForm fields={fields} handleChange={handleChange} />

        <center>
          <CustomButton>Submit</CustomButton>
        </center>
      </Card.Body>
    </Card>
  );
}

export default Registry;
