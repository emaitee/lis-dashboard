import React, { Component } from "react";
import PropTypes from "prop-types";
import "./login.css";
import asyncLoginValidate from "./asyncLoginValidate";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import { login } from "../../redux/action/auth";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import logo from "../../assets/img/lis.png";
import {
  Form,
  FormControl,
  FormGroup,
  ControlLabel,
  Col,
  Button,
} from "react-bootstrap";

class Login extends Component {
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
  handleLoginSubmit(props) {
    this.setState({ submitted: true });

    const { email, password, dispatch } = props;
    const username = email;
    if (username && password) {
      this.props.dispatch(login(username, password));
    }
  }

  renderFromHelper({ touched, error }) {
    if (!(touched && error)) {
      return;
    } else {
      return <span>{touched && error}</span>;
    }
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.auth) {
      alert("Done");
      return <Redirect to="/admin/registry" />;
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
      loggingIn,
      auth,
    } = this.props;

    return (
      <div className="container px-4 py-5 mx-auto">
        <div className="card card0">
          <div className="d-flex flex-lg-row flex-column-reverse">
            <div className="card card1">
              <div className="row justify-content-center my-auto">
                <div className="col-md-8 col-10 my-5">
                  <div className="row justify-content-center px-3 mb-3">
                    {" "}
                    <img id="logo" src={logo} />{" "}
                  </div>
                  <h3 className="mb-5 text-center heading">
                    Log into your account
                  </h3>
                  <h6 className="msg-info">{this.state.loginError}</h6>

                  <form
                    onSubmit={handleSubmit(this.handleLoginSubmit.bind(this))}
                  >
                    <FormGroup controlId="serverPortBox">
                      <Field
                        name="email"
                        component={this.renderTextField}
                        label="Email or Username"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Field
                        name="password"
                        type="password"
                        component={this.renderTextField}
                        label="Password"
                      />
                    </FormGroup>
                    <div className="row justify-content-center my-3 px-3">
                      {" "}
                      <Button
                        type="submit"
                        disabled={pristine || submitting}
                        className="btn-block btn-color"
                      >
                        Login
                      </Button>{" "}
                    </div>
                    <div className="row justify-content-center my-2">
                      {" "}
                      <a href="#">
                        <small className="text-muted">Forgot Password?</small>
                      </a>{" "}
                    </div>
                  </form>
                </div>
              </div>
              <div className="bottom text-center mb-5">
                <p href="#" className="sm-text mx-auto mb-3">
                  Don't have an account?
                  <Link to="/auth/signup" className="btn btn-white ml-2">
                    Create new
                  </Link>
                </p>
              </div>
            </div>
            <div className="card card2">
              <div className="my-auto mx-md-5 px-md-5 right">
                <h3 className="text-white">We are more than just a company</h3>{" "}
                <small className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.defaultProps = {
  onSubmit: () => {},
};
const mapStateToProps = (state) => {
  let loggingIn,
    auth = false;
  if (state) loggingIn = state.authentication;

  return {
    loggingIn,
    auth,
  };
};
Login.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  className: PropTypes.string,
  onSubmit: PropTypes.func,
};

Login.defaultProps = {
  onSubmit: () => {},
};

const connectedLoginPage = connect(mapStateToProps)(Login);
export default reduxForm({
  form: "Login",
  fields: ["email", "password"],
  validate: Login.validate,
  asyncLoginValidate,
})(connectedLoginPage);
