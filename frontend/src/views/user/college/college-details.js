import React, { Component } from "react";
import { Row, Card, CardTitle, Form, Label, Input, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../../redux/actions";

import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx } from "../../../components/common/CustomBootstrap";

class CollegeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      founder: "",
      country: "",
      state: "",
      city: "",
      collegeAddress: "",
      collegeName: sessionStorage.getItem("collegeName"),
      collegeID: "",
    };
  }
  onUserRegister() {
    if (this.state.email !== "" && this.state.password !== "") {
      console.log(this.state);
      fetch("/college/details", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: sessionStorage.getItem("email"),
          collegeAddress: this.state.collegeAddress,
          City: this.state.city,
          State: this.state.state,
          Country: this.state.country,
          Founder: this.state.founder,
          CollegeID: this.state.collegeID,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            console.log(data.error);
          } else {
            console.log(data);
            this.props.history.push("/user/colleges/docs");
          }
        });
    }
  }

  render() {
    return (
      <Row className="h-100">
        <Colxx xxs="12" md="10" className="mx-auto my-auto">
          <Card className="auth-card">
            <div className="position-relative image-side ">
              <p className="text-white h2">MAGIC IS IN THE DETAILS</p>
              <p className="white mb-0">
                Please use this form to register. <br />
                If you are a member, please{" "}
                {/* <NavLink to={`/user/login`} className="white">
                  login
                </NavLink> */}
                .
              </p>
            </div>
            <div className="form-side">
              <NavLink to={`/`} className="white">
                <span className="logo-single" />
              </NavLink>
              <CardTitle className="mb-4">
                <IntlMessages id="college.college-details-title" />
              </CardTitle>
              <Form>
                <Label className="form-group has-float-label mb-4">
                  <Input type="text" value={this.state.collegeName} />
                  <IntlMessages id="college.college-name" />
                </Label>
                <Label className="form-group has-float-label mb-4">
                  <Input
                    type="textarea"
                    onChange={(e) =>
                      this.setState({
                        collegeAddress: e.target.value,
                      })
                    }
                  />
                  <IntlMessages id="college.college-address" />
                </Label>
                <Label className="form-group has-float-label mb-4">
                  <Input
                    type="text"
                    onChange={(e) =>
                      this.setState({
                        city: e.target.value,
                      })
                    }
                  />
                  <IntlMessages id="college.city" />
                </Label>
                <Label className="form-group has-float-label mb-4">
                  <Input
                    type="text"
                    onChange={(e) =>
                      this.setState({
                        state: e.target.value,
                      })
                    }
                  />
                  <IntlMessages id="college.state" />
                </Label>
                <Label className="form-group has-float-label mb-4">
                  <Input
                    type="text"
                    onChange={(e) =>
                      this.setState({
                        country: e.target.value,
                      })
                    }
                  />
                  <IntlMessages id="college.country" />
                </Label>
                <Label className="form-group has-float-label mb-4">
                  <Input
                    type="text"
                    onChange={(e) =>
                      this.setState({
                        founder: e.target.value,
                      })
                    }
                  />
                  <IntlMessages id="college.founder" />
                </Label>
                <Label className="form-group has-float-label mb-4">
                  <Input
                    type="text"
                    onChange={(e) =>
                      this.setState({
                        collegeID: e.target.value,
                      })
                    }
                  />
                  <IntlMessages id="college.college-id" />
                </Label>

                <div className="d-flex justify-content-end align-items-center">
                  <Button
                    color="primary"
                    className="btn-shadow"
                    size="lg"
                    onClick={() => this.onUserRegister()}
                  >
                    <IntlMessages id="user.next" />
                  </Button>
                </div>
              </Form>
            </div>
          </Card>
        </Colxx>
      </Row>
    );
  }
}
const mapStateToProps = ({ authUser }) => {
  const { user, loading } = authUser;
  return { user, loading };
};

export default connect(mapStateToProps, {
  registerUser,
})(CollegeDetails);
