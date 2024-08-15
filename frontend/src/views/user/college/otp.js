import React, { Component } from "react";
import {
  Row,
  Card,
  CardTitle,
  Label,
  FormGroup,
  Button,
  Input,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { Toast, ToastHeader } from "reactstrap";
import { NotificationManager } from "../../../components/common/react-notifications";
import { Formik, Form } from "formik";

import { loginUser } from "../../../redux/actions";
import { Colxx } from "../../../components/common/CustomBootstrap";
import IntlMessages from "../../../helpers/IntlMessages";
class CollegeOtp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: "",
      show: false,
      msg: "",
    };
    this.onOtpSubmit = this.onOtpSubmit.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  toggle = () => this.setState({ show: !this.state.show });
  componentDidMount() {
    fetch("/college/send-otp", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: sessionStorage.getItem("email"),
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.error) {
          this.setState({ msg: "OTP could not send" });
          return;
        }
        this.setState({ msg: result.message });
        this.toggle();
        console.log(result);
      })
      .catch((err) => console.log(err));
  }
  onOtpSubmit = (values) => {
    if (!this.props.loading) {
      fetch("/college/verify-otp", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: sessionStorage.getItem("email"),
          otp: this.state.otp,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.error) {
            console.log("Error", result.error);
            this.setState({ msg: "OTP verification failed" });
            return;
          } else {
            console.log(result);
            this.setState({ msg: result.message });
            this.toggle();
            console.log(result);
            setTimeout(() => {
              this.props.history.push("/app");
            }, 1000);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  validateEmail = (value) => {
    let error;
    if (!value) {
      error = "Please enter your email address";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  };

  validatePassword = (value) => {
    let error;
    if (!value) {
      error = "Please enter your password";
    } else if (value.length < 4) {
      error = "Value must be longer than 3 characters";
    }
    return error;
  };

  componentDidUpdate() {
    if (this.props.error) {
      NotificationManager.warning(
        this.props.error,
        "Login Error",
        3000,
        null,
        null,
        ""
      );
    }
  }

  render() {
    return (
      <Row className="h-100">
        <Colxx xxs="12" md="10" className="mx-auto my-auto">
          <Card className="auth-card">
            <div className="position-relative image-side ">
              <p className="text-white h2">MAGIC IS IN THE DETAILS</p>
              {/* <p className="white mb-0">
                Please use your credentials to login.
                <br />
                If you are not a member, please{" "}
                <NavLink to={`/user/register`} className="white">
                  register
                </NavLink>
                .
              </p> */}
            </div>
            <div className="form-side">
              <NavLink to={`/`} className="white">
                <span className="logo-single" />
              </NavLink>
              <CardTitle className="mb-4">
                <IntlMessages id="user.otp-title" />
              </CardTitle>

              <Formik onSubmit={this.onOtpSubmit}>
                {({ errors, touched }) => (
                  <Form className="av-tooltip tooltip-label-bottom">
                    <FormGroup className="form-group has-float-label">
                      <Label>
                        <IntlMessages id="user.enter-otp" />
                      </Label>
                      <Input
                        type="text"
                        className="form-control"
                        onChange={(e) => {
                          this.setState({
                            otp: e.target.value,
                          });
                        }}
                      />
                    </FormGroup>

                    <div className="d-flex justify-content-between align-items-center">
                      <NavLink to={`/user/forgot-password`}>
                        <IntlMessages id="user.forgot-password-question" />
                      </NavLink>
                      <Button
                        color="primary"
                        className={`btn-shadow btn-multiple-state ${
                          this.props.loading ? "show-spinner" : ""
                        }`}
                        size="lg"
                      >
                        <span className="spinner d-inline-block">
                          <span className="bounce1" />
                          <span className="bounce2" />
                          <span className="bounce3" />
                        </span>
                        <span className="label">
                          <IntlMessages id="user.verify" />
                        </span>
                      </Button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </Card>
        </Colxx>
      </Row>
    );
  }
}
const mapStateToProps = ({ authUser }) => {
  const { user, loading, error } = authUser;
  return { user, loading, error };
};

export default connect(mapStateToProps, {
  loginUser,
})(CollegeOtp);
