import React, { Component } from "react";
import { Row, Card, CardTitle, Form, Label, Input, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../../redux/actions";
import Axios from "axios";
import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx } from "../../../components/common/CustomBootstrap";
import { Toast, ToastHeader } from "reactstrap";
class AddStaff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      staff_id: "",
      phone_number: ""
    };
    this.onStaffRegister = this.onStaffRegister.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  toggle = () => this.setState({ show: !this.state.show });

  onBulk = async(e) => {
    e.preventDefault();
    this.props.history.push("/user/colleges/addStaffExcel");
  }

  onStaffRegister = async(e) => {
    e.preventDefault();
    try {
      const newUser = { 
        college_id: sessionStorage.getItem("collegeId"),
        name: this.state.name,
        email: this.state.email,
        staff_id: this.state.staff_id,
        phone_number: this.state.phone_number
      };
      console.log(newUser)
      var loginRes = await Axios.post("http://localhost:5000/users/registerStaff",{ 
      college_id: sessionStorage.getItem("collegeId"),
      name: this.state.name,
      email: this.state.email,
      staff_id: this.state.staff_id,
      phone_number: this.state.phone_number
    });
      window.alert("Staff Added");
      this.props.history.push("/user/colleges/dashboard");
    } catch (err) {
      window.alert(err.response.data.msg);
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
                Please use this form to add your Staff. <br />
                To add bulk data via excel file, please{" "}
                <NavLink to={`/user/colleges/addStaffExcel`} className="white">
                  <b>CLICK HERE</b>
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
                  <IntlMessages id="Add Staff" />
                </CardTitle>

                <Label className="form-group has-float-label mb-4">
                    <Input
                      type="text"
                      onChange={(e) =>
                        this.setState({
                          staff_id: e.target.value
                        })
                      }
                    />
                    <IntlMessages id="Staff Id" />
              </Label>

              <Label className="form-group has-float-label mb-4">
                    <Input
                      type="text"
                      onChange={(e) =>
                        this.setState({
                          name: e.target.value
                        })
                      }
                    />
                    <IntlMessages id="Staff Name" />
              </Label>

              <Label className="form-group has-float-label mb-4">
                    <Input
                      type="email"
                      onChange={(e) =>
                        this.setState({
                          email: e.target.value
                        })
                      }
                    />
                    <IntlMessages id="Staff Email" />
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
                    <IntlMessages id="Phone Number" />
              </Label>
                  
            <div className="d-flex justify-content-end align-items-center">

                  <Button
                    color="primary"
                    className="btn-shadow"
                    size="lg"
                    onClick={(e) => this.onBulk(e)}
                  >
                    <IntlMessages id="Import Excel Sheet " />
                  </Button>
                    &nbsp;&nbsp;
                  <Button
                    color="primary"
                    className="btn-shadow"
                    size="lg"
                    onClick={(e) => this.onStaffRegister(e)}
                  >
                    <IntlMessages id="Add Staff" />
                  </Button>
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
})(AddStaff);
