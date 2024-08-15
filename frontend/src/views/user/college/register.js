import React, { Component } from "react";
import { Row, Card, CardTitle, Form, Label, Input, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../../redux/actions";
import Axios from "axios";
import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx } from "../../../components/common/CustomBootstrap";
import { Toast, ToastHeader } from "reactstrap";
class CollegeRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      college_name: "",
      address: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      password: "",
      passwordCheck: ""
    };
    this.onUserRegister = this.onUserRegister.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  toggle = () => this.setState({ show: !this.state.show });

  onNext = () => {
    document.getElementById("reg1").style="display: none;"
    document.getElementById("reg2").style="display: block;"
  }

  prev = () => {
    document.getElementById("reg2").style="display: none;"
    document.getElementById("reg1").style="display: block;"
  }

  onUserRegister = async(e) => {
      e.preventDefault();
      console.log(this.state);
      
    try {
      const newUser = { 
        college_name: this.state.college_name,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        country: this.state.country,
        pincode: this.state.pincode,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        phone_number: this.state.phone_number,
        password: this.state.password,
        passwordCheck: this.state.passwordCheck
      };
      const regRes = await Axios.post("http://localhost:5000/users/register", newUser);
      window.alert("Successfully Registered!! Your College Id is: "+ regRes.data.college_id);
      console.log(regRes.data.college_id);
      this.props.history.push("/user/colleges/login");
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

              <div id="reg1" style={{display: "block"}}>  

              <CardTitle className="mb-4">
                  <IntlMessages id="college.college-details-title" />
                </CardTitle>

              <Label className="form-group has-float-label mb-4">
                    <Input
                      type="text"
                      onChange={(e) =>
                        this.setState({
                          college_name: e.target.value,
                        })
                      }
                    />
                    <IntlMessages id="College Name" />
                  </Label>

                  <Label className="form-group has-float-label mb-4">
                    <Input
                      type="textarea"
                      onChange={(e) =>
                        this.setState({
                          address: e.target.value,
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
                          pincode: e.target.value,
                        })
                      }
                    />
                    <IntlMessages id="Pincode" />
                  </Label>
                  
                  <div className="d-flex justify-content-end align-items-center">
                    <Button
                      color="primary"
                      className="btn-shadow"
                      size="lg"
                      onClick={() => this.onNext()}
                    >
                      <IntlMessages id="user.next" />
                    </Button>
                  </div>
              </div> 


          <div id="reg2" style={{display: "none"}}>    
          <CardTitle className="mb-4">
                <IntlMessages id="Authorised Representative" />
              </CardTitle>{" "}

                <Label className="form-group has-float-label mb-4">
                  <Input
                    type="text"
                    onChange={(e) =>
                      this.setState({
                        first_name: e.target.value,
                      })
                    }
                  />
                  <IntlMessages id="First Name" />
                </Label>

                <Label className="form-group has-float-label mb-4">
                  <Input
                    type="text"
                    onChange={(e) =>
                      this.setState({
                        last_name: e.target.value,
                      })
                    }
                  />
                  <IntlMessages id="Last Name" />
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
                    type="number"
                    onChange={(e) =>
                      this.setState({
                        phone_number: e.target.value,
                      })
                    }
                  />
                  <IntlMessages id="user.phone-number" />
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
                    onClick={() => this.prev()}
                  >
                    <IntlMessages id="Previous" />
                  </Button>
                  &nbsp;&nbsp;
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
        <div className="p-3 bg-success my-2 rounded">
          <Toast isOpen={this.state.show}>
            <ToastHeader toggle={this.toggle}>{this.state.msg}</ToastHeader>
          </Toast>
        </div>
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
