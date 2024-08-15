import React, { Component } from "react";
import { Row, Card, CardTitle, Form, Label, Input, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../../redux/actions";
import Axios from "axios";
import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx } from "../../../components/common/CustomBootstrap";
import { Toast, ToastHeader } from "reactstrap";
class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      reg_no: "",
      year: "",
      phone_number: ""
    };
    this.onStudentRegister = this.onStudentRegister.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  toggle = () => this.setState({ show: !this.state.show });

  onBulk = async(e) => {
    e.preventDefault();
    this.props.history.push("/user/colleges/addStudentExcel");
  }

  onStudentRegister = async(e) => {
    e.preventDefault();
    try {
      var loginRes = await Axios.post("http://localhost:5000/users/registerStudent",{ 
      college_id: sessionStorage.getItem("collegeId"),
      name: this.state.name,
      email: this.state.email,
      reg_no: this.state.reg_no,
      year: this.state.year,
      phone_number: this.state.phone_number
    });
      window.alert("Student Added");
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
                Please use this form to add your Students. <br />
                To add bulk data via excel file, please{" "}
                <NavLink to={`/user/colleges/addStudentExcel`} className="white">
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
                  <IntlMessages id="Add Students" />
                </CardTitle>

                <Label className="form-group has-float-label mb-4">
                    <Input
                      type="text"
                      onChange={(e) =>
                        this.setState({
                          reg_no: e.target.value
                        })
                      }
                    />
                    <IntlMessages id="Register No" />
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
                    <IntlMessages id="Student Name" />
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
                    <IntlMessages id="Student Email" />
              </Label>

              <Label className="form-group has-float-label mb-4">
                    <Input
                      type="number"
                      onChange={(e) =>
                        this.setState({
                          year: e.target.value
                        })
                      }
                    />
                    <IntlMessages id="Joined Year" />
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
                    onClick={(e) => this.onStudentRegister(e)}
                  >
                    <IntlMessages id="Add Student" />
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
})(AddStudent);
