import { CustomButton } from "components/ui-elements";
import { CustomForm } from "components/ui-elements";
import React, { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import Dropzone from "react-dropzone-uploader";
import "react-dropzone-uploader/dist/styles.css";
import moment from "moment";
import { _postApi } from "redux/action/api";
import { apiURL } from "redux/action/api";

function Registry() {
  const [form, setForm] = useState({
    occupation: "Employee",
    allocated_land: "No",
    in_aknowledgement_id: moment().format("Yhmmss"),
    in_form_no: moment().format("YYhmss"),
    in_application_date: moment().format("YYYY-MM-DD"),
  });
  const [files, setFiles] = useState([]);
  const [feilds, setFeild] = useState([]);

  const [loading, setLoading] = useState(false);
  const fields = [
    {
      name: "(in_form_no",
      label: "Form No.",
      value: form.in_form_no,
      // readonly: true,
      value: form.in_form_no,
      col: 4,
    },
    {
      name: "in_aknowledgement_id",
      label: "Acknoledgement ID.",
      value: form.in_aknowledgement_id,
      // readonly: true,
      col: 4,
    },
    {
      name: "in_application_date",
      label: "Date.",
      value: form.in_application_date,
      value: form.in_application_date,
      // readonly: true,
      col: 4,
    },

    {
      name: "in_full_name",
      label: "Applicant name",
      value: form.in_full_name,
      col: 4,
    },
    {
      type: "select",
      name: "in_nationality",
      label: "Nationality",
      options: ["Nigeria", "Niger", "Ghana"],
      value: form.in_nationality,
      col: 4,
    },
    {
      type: "select",
      name: "in_state_of_origin",
      label: "State of origin",
      options: ["Kano", "Kaduna"],
      value: form.in_state_of_origin,
      col: 4,
    },
    {
      name: "in_home_domicile",
      label: "Home domicle",
      value: form.in_home_domicile,
      col: 4,
    },
    {
      name: "in_type_of_use",
      label: "Type of use",
      value: form.in_type_of_use,
      col: 4,
    },
    {
      name: "in_nature_of_business",
      label: "Nature of businsess",
      value: form.in_nature_of_business,
      col: 4,
    },
    {
      name: "in_annual_income",
      label: "Annual income",
      value: form.in_annual_income,
      type: "number",
      col: 4,
    },
    {
      name: "in_registered_under",
      label: "Registed under",
      value: form.in_registered_under,
      col: 4,
    },
    {
      name: "in_reg_particulars",
      label: "Reg. particulars",
      value: form.in_reg_particulars,
      col: 4,
    },
    {
      name: "in_business_location",
      label: "Business location",
      value: form.in_business_location,
      col: 4,
    },
    {
      name: "in_correspondance_address",
      label: "Correspondance address",
      value: form.in_correspondance_address,
      col: 4,
    },
    {
      name: "in_land_allocated",
      label: "Correspondent address",
      value: form.in_land_allocated,
      col: 4,
    },
    {
      name: "in_cof_number",
      label: "Other info",
      value: form.in_cof_number,
      col: 4,
    },
    {
      name: "in_allocated_purpose_use",
      label: "Allocated purpose of use",
      value: form.in_allocated_purpose_use,
      col: 4,
    },
    {
      name: "in_purpose_use",
      label: "Allocated purpose of use",
      value: form.in_purpose_use,
      col: 4,
    },
    {
      name: "in_type_of_activity",
      label: "Plot number",
      value: form.in_type_of_activity,
      col: 4,
    },
    {
      name: "in_question_7",
      label: "Allocated land before?",
      type: "switch",
      options: ["Yes", "N/A", "No"],
      value: form.in_question_7,
      col: 4,
    },
    {
      name: "in_question_7_1",
      label: "Additional info 7.1",
      value: form.in_question_7_1,
      col: 4,
    },
    {
      name: "in_question_7_2",
      label: "Additional info 7.2",
      value: form.in_question_7_2,
      col: 4,
    },
    {
      name: "in_question_8",
      label: "Additional info 8",
      value: form.in_question_8,
      col: 4,
    },
    {
      name: "in_question_9",
      label: "Additional info 9",
      value: form.in_question_9,
      col: 4,
    },
    {
      name: "in_question_10",
      label: "Additional info 10",
      value: form.in_question_10,
      col: 4,
    },
    {
      name: "in_question_11",
      label: "Additional info 11",
      value: form.in_question_11,
      col: 4,
    },
    {
      name: "in_question_12",
      label: "Additional info 12",
      value: form.in_question_12,
      col: 4,
    },
  ];

  const handleChange = ({ target: { name, value } }) =>
    setForm((p) => ({ ...p, [name]: value }));

  const handleRadioChange = (name, value) =>
    setForm((prev) => ({ ...prev, [name]: value }));

  const handleSwitchChange = () => {};

  const handleReset = () => {
    setForm({});
  };

  const handleChangeStatus = ({ meta, file }, status) => {
    if (status === "done") {
      setFiles((prev) => [...prev, file]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // const formData = new FormData();
    // const values = Object.entries(form);
    // let data = [];
    // console.log({ values });
    // for (let i = 0; i < values.length; i++) {
    //   formData.append([values[i][0]], values[i][1]);
    // }

    fetch(`${apiURL}/application?in_query_type=insert`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => {
        res.json({ form: "gooood" });
        console.log(res);
        handleReset();
      })
      .catch((err) => {
        console.error("Error Occured", err);
        setLoading(false);
      });
    console.log(form);
  };

  return (
    <form id="myForm" onSubmit={() => handleSubmit}>
      <Card>
        <Card.Header>Application Frorm</Card.Header>
        <Card.Body>
          <CustomForm
            fields={fields}
            handleChange={handleChange}
            handleRadioChange={handleRadioChange}
            haneleSwitchChange={handleSwitchChange}
          />
          <Row>
            <Col md={12}>
              <label className="mr-3 font-weight-bold">
                Attach File<span style={{ color: "red" }}>*</span>
              </label>
              <Dropzone
                onChangeStatus={handleChangeStatus}
                inputContent="Drag and Drop Files"
                accept="image/*,audio/*,video/*"
                addClassNames="text-success"
                SubmitButtonComponent={null}
                styles={{
                  dropzone: {
                    height: 100,
                    marginTop: "8px",
                    border: "1px solid black",
                    textAlign: "center",
                  },
                }}
              />
            </Col>
          </Row>
          <br />

          <center>
            <CustomButton onClick={handleSubmit}>Submit</CustomButton>
          </center>
        </Card.Body>
      </Card>
    </form>
  );
}

export default Registry;
