import React, { Component } from "react";
import { Row, Card, CardTitle, Form, Label, Input, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../../redux/actions";
import Axios from "axios";
import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx } from "../../../components/common/CustomBootstrap";
class CollegeRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
        college_id: "",
        reg_no: "",
        name: "",
        email: "",
        password: "",
        passwordCheck: ""
    };
    this.onUserRegister = this.onUserRegister.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  toggle = () => this.setState({ show: !this.state.show });

  onUserRegister = async(e) => {
      e.preventDefault();
      console.log(this.state);
      
    try {
      const newUser = { 
        college_id: this.state.college_id,
        name: this.state.name,
        email: this.state.email,
        reg_no: this.state.reg_no,
        password: this.state.password,
        passwordCheck: this.state.passwordCheck
      };
      const regRes = await Axios.post("http://localhost:5000/users/registerStudent", newUser);
      console.log(regRes.data.college_id);
      this.props.history.push("/user/colleges/studentLogin");
    } catch (err) {
      alert(err.response.data.msg);
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
                <NavLink to={`/user/colleges/login`} className="white">
                  login
                </NavLink>
                .
              </p>
            </div>
            <div className="form-side">
              <NavLink to={`/`} className="white">
                <span className="logo-single" />
              </NavLink>
              <Form>

          <div id="reg2">    
          <CardTitle className="mb-4">
                <IntlMessages id="Student Register" />
              </CardTitle>{" "}

              <Label className="form-group has-float-label mb-4">
                  <Input
                    type="text"
                    onChange={(e) =>
                      this.setState({
                        college_id: e.target.value,
                      })
                    }
                  />
                  <IntlMessages id="College Id." />
                </Label>

                <Label className="form-group has-float-label mb-4">
                  <Input
                    type="text"
                    onChange={(e) =>
                      this.setState({
                        reg_no: e.target.value,
                      })
                    }
                  />
                  <IntlMessages id="Reg No." />
                </Label>

                <Label className="form-group has-float-label mb-4">
                  <Input
                    type="text"
                    onChange={(e) =>
                      this.setState({
                        name: e.target.value,
                      })
                    }
                  />
                  <IntlMessages id="Name" />
                </Label>

                <Label className="form-group has-float-label mb-4">
                  <Input
                    type="email"
                    onChange={(e) =>
                      this.setState({
                        email: e.target.value,
                      })
                    }
                  />
                  <IntlMessages id="college.mail" />
                </Label>

                <Label className="form-group has-float-label mb-4">
                  <Input
                    type="password"
                    onChange={(e) =>
                      this.setState({
                        password: e.target.value,
                      })
                    }
                  />
                  <IntlMessages id="user.password" />
                </Label>

                <Label className="form-group has-float-label mb-4">
                  <Input
                    type="password"
                    onChange={(e) =>
                      this.setState({
                        passwordCheck: e.target.value,
                      })
                    }
                  />
                  <IntlMessages id="Confirm Password" />
                </Label>

            <div className="d-flex justify-content-end align-items-center">

                  <Button
                    color="primary"
                    className="btn-shadow"
                    size="lg"
                    onClick={(e) => this.onUserRegister(e)}
                  >
                    <IntlMessages id="Register" />
                  </Button>
                </div>
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
})(CollegeRegister);
