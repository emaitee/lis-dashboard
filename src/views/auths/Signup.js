import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import asyncSignupValidate from "./asyncSignupValidate";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import { signup } from "../../redux/action/auth";
import { connect } from "react-redux";
import {
  Form,
  FormControl,
  FormGroup,
  ControlLabel,
  InputGroup,
  Col,
  Button,
} from "react-bootstrap";
import logo from "../../assets/img/lis.png";
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
    };
  }

  static validate(values) {
    const errors = {};
    const requiredFields = ["email", "password"];
    requiredFields.forEach((field) => {
      if (!values[field]) {
        errors[field] = `${field} is required`;
      }
    });
    if (
      values.password &&
      (values.password.length < 8 || values.password.length > 32)
    ) {
      errors.password = "Password length is between 8 to 32";
    }
    if (values.email) {
      if (
        values.email.includes("@") &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (
        values.email.includes(" ") ||
        !values.email.includes("@") ||
        values.email.includes("@.")
      ) {
        errors.email = "Invalid email address";
      }
    }
    return errors;
  }

  renderTextField({
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
  }) {
    console.log({ touched, invalid, error });
    return (
      <>
        <span style={{ marginLeft: "10px" }}>{label}</span>
        <input
          label={label}
          placeholder={label}
          margin="normal"
          className="form-control"
          style={{ width: "100%" }}
          error={touched && invalid}
          helperText={touched && error}
          {...input}
          {...custom}
        />
        {touched && error && (
          <span style={{ marginLeft: "10px", color: "red" }}>{error}</span>
        )}
      </>
    );
  }
  submitSignup(props) {
    this.setState({ submitted: true });
    console.log({ SUBMIT: props });
    const { email, password, firstname, lastname, phone, dispatch } = props;
    const username = email;
    const name = firstname + " " + lastname;
    if (email && password) {
      this.props.dispatch(signup({ email, password, name, phone }));
    }
  }

  renderFromHelper({ touched, error }) {
    if (!(touched && error)) {
      return;
    } else {
      return <span>{touched && error}</span>;
    }
  }

  render() {
    const {
      handleSubmit,
      pristine,
      reset,
      className,
      submitting,
      classes,
    } = this.props;

    return (
      <div className="container px-8 py-8 mx-auto">
        <header className="header">
          <nav className="navbar navbar-expand-lg navbar-light py-3">
            <div className="container">
              {/* Navbar Brand */}
              <a href="#" className="navbar-brand">
                <h3>Land infortion system</h3>
              </a>
            </div>
          </nav>
        </header>
        <div className="container">
          <div className="row py-5 mt-4 align-items-center">
            {/* For Demo Purpose */}
            <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
              <img
                src={logo}
                alt=""
                className="img-fluid mb-3 d-none d-md-block"
              />
              <h1>Create an Account</h1>
              <p className="font-italic text-white mb-0">
                Create a minimal registeration page using Bootstrap 4 HTML form
                elements.
              </p>
            </div>

            {/* Registeration Form */}
            <div className="col-md-7 col-lg-6 ml-auto">
              <form onSubmit={handleSubmit(this.submitSignup.bind(this))}>
                <div className="row">
                  {/* First Name */}
                  <Col className="input-group col-lg-6 mb-4">
                    <InputGroup>
                      <Field
                        name="firstname"
                        placeholder="First Name"
                        component={this.renderTextField}
                        className="form-control bg-white border-md border-left-0 pl-3"
                      />
                    </InputGroup>
                  </Col>

                  {/* Last Name */}
                  <Col className="input-group col-lg-6 mb-4">
                    <InputGroup>
                      <Field
                        name="lastname"
                        placeholder="Last Name"
                        component={this.renderTextField}
                        className="form-control bg-white border-md border-left-0 pl-3"
                      />
                    </InputGroup>
                  </Col>

                  {/* Email Address */}
                  <Col className="input-group col-lg-6 mb-4">
                    <InputGroup>
                      <Field
                        name="email"
                        placeholder="Email"
                        component={this.renderTextField}
                        className="form-control bg-white border-md border-left-0 pl-3"
                      />
                    </InputGroup>
                  </Col>
                  {/* Phone Number */}
                  <Col className="input-group col-lg-6 mb-4">
                    <InputGroup>
                      <Field
                        name="phone"
                        placeholder="Phone"
                        type="number"
                        component={this.renderTextField}
                        className="form-control bg-white border-md border-left-0 pl-3"
                      />
                    </InputGroup>
                  </Col>

                  {/* Job */}
                  <div className="input-group col-lg-12 mb-4">
                    <select
                      id="job"
                      name="jobtitle"
                      className="form-control custom-select bg-white border-left-0 border-md"
                    >
                      <option value="">Choose your job</option>
                      <option value="">Designer</option>
                      <option value="">Developer</option>
                      <option value="">Manager</option>
                      <option value="">Accountant</option>
                    </select>
                  </div>

                  {/* Password */}
                  <Col className="input-group col-lg-6 mb-4">
                    <InputGroup>
                      <Field
                        name="password"
                        placeholder="Email"
                        type="Password"
                        component={this.renderTextField}
                        className="form-control bg-white border-md border-left-0 pl-3"
                      />
                    </InputGroup>
                  </Col>

                  {/* Password Confirmation */}
                  <Col className="input-group col-lg-6 mb-4">
                    <InputGroup>
                      <Field
                        name="passwordConfirmation"
                        placeholder="Confirm password"
                        type="password"
                        component={this.renderTextField}
                        className="form-control bg-white border-md border-left-0 pl-3"
                      />
                    </InputGroup>
                  </Col>

                  {/* Submit Button */}
                  <div className="row justify-content-center col-lg-6 mb-4">
                    {" "}
                    <Button
                      type="submit"
                      disabled={pristine || submitting}
                      className="btn-block btn-color"
                    >
                      Signup
                    </Button>{" "}
                  </div>

                  {/* Divider Text */}
                  <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                    <div className="border-bottom w-100 ml-5"></div>
                    <span className="px-2 small text-muted font-weight-bold text-muted">
                      OR
                    </span>
                    <div className="border-bottom w-100 mr-5"></div>
                  </div>

                  {/* Social Signup */}
                  <div className="form-group col-lg-12 mx-auto">
                    <a
                      href="#"
                      className="btn btn-primary btn-block py-2 btn-facebook"
                    >
                      <i className="fa fa-facebook-f mr-2"></i>
                      <span className="font-weight-bold">
                        Continue with Facebook
                      </span>
                    </a>
                    <a
                      href="#"
                      className="btn btn-primary btn-block py-2 btn-twitter"
                    >
                      <i className="fa fa-twitter mr-2"></i>
                      <span className="font-weight-bold">
                        Continue with Twitter
                      </span>
                    </a>
                  </div>

                  {/* Already Registered */}
                  <div className="text-center w-100">
                    <p className="text-muted font-weight-bold">
                      Already Registered?{" "}
                      <Link to="/auth/login" className="text-primary ml-2">
                        Login
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Signup.defaultProps = {
  onSubmit: () => {},
};
const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};
Signup.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  className: PropTypes.string,
  onSubmit: PropTypes.func,
};

Signup.defaultProps = {
  onSubmit: () => {},
};

const connectedPage = connect(mapStateToProps)(Signup);
export default reduxForm({
  form: "Signup",
  fields: ["email", "password", "name", "phone"],
  validate: Signup.validate,
  asyncSignupValidate,
})(connectedPage);
