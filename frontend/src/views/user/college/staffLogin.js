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
      college_id: "",
      email: "",
      password: ""
    };
    this.onUserRegister = this.onUserRegister.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  toggle = () => this.setState({ show: !this.state.show });

  onUserRegister = async(e) => {
      e.preventDefault();
    try {
      var loginRes = await Axios.post("http://localhost:5000/users/loginStaff",{ 
      college_id: this.state.college_id,
      email: this.state.email,
      password: this.state.password 
    });
      sessionStorage.setItem("collegeId", this.state.college_id);
      sessionStorage.setItem("staffId", loginRes.data.staff_id);
      sessionStorage.setItem("name", loginRes.data.name);
      sessionStorage.setItem("role", "staff");
      console.log(loginRes.data);
      this.props.history.push("/user/staff/dashboard");
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
                Please use this form to login. <br />
                If you are a new member, please{" "}
                <NavLink to={`/user/colleges/staffRegister`} className="white">
                  register
                </NavLink>
                .
              </p>
            </div>
            <div className="form-side">
              <NavLink to={`/`} className="white">
                <span className="logo-single" />
              </NavLink>
              
              <Form>

              <CardTitle className="mb-4">
                  <IntlMessages id="Staff Login" />
                </CardTitle>

              <Label className="form-group has-float-label mb-4">
                    <Input
                      type="text"
                      onChange={(e) =>
                        this.setState({
                          college_id: e.target.value,
                        })
                      }
                    />
                    <IntlMessages id="College Id" />
              </Label>

              <Label className="form-group has-float-label mb-4">
                    <Input
                      type="text"
                      onChange={(e) =>
                        this.setState({
                          email: e.target.value
                        })
                      }
                    />
                    <IntlMessages id="Email" />
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
                    <IntlMessages id="Password" />
              </Label>
                  
            <div className="d-flex justify-content-end align-items-center">

                  <Button
                    color="primary"
                    className="btn-shadow"
                    size="lg"
                    onClick={(e) => this.onUserRegister(e)}
                  >
                    <IntlMessages id="Login" />
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
})(CollegeRegister);