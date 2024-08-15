import React, { Component } from "react";
import { Row, Card, CardTitle, Form, Label, Input, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../../redux/actions";
import Axios from "axios";
import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx } from "../../../components/common/CustomBootstrap";
import { Toast, ToastHeader } from "reactstrap";
import './App.css';

class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: ""
    };
    this.onStudentRegister = this.onStudentRegister.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  toggle = () => this.setState({ show: !this.state.show });

  onStudentRegister = async(e) => {
    e.preventDefault();
    const data = new FormData();
    var cid = sessionStorage.getItem("collegeId")
    data.append("name", cid);
    data.append("file", this.state.file);
        try {
          var loginRes = await Axios.post("http://localhost:5000/users/xlstojson", data);
          window.alert("Student Added");
          this.props.history.push("/user/colleges/dashboard");
        } catch (err) {
          window.alert("Check whether your excel file goes with the constraints");
        }    
  }

  onFileLoaded = (e) => {
    this.setState({
      file: e.target.files[0],
    })
    var fileName = e. target. files[0]. name;
    document.getElementById("choose").innerHTML= fileName + ' has been selected.';
  }

  render() {
    return (
      <Row className="h-100">
        <Colxx xxs="12" md="10" className="mx-auto my-auto">
          <Card className="auth-card">
            <div className="position-relative image-side ">
              <p className="text-white h2">MAGIC IS IN THE DETAILS</p>
              <p className="white mb-0">
                Please use this form to add your Students via Excel sheet. <br />
                To add single data, please{" "}
                <NavLink to={`/user/colleges/addStudent`} className="white">
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
                  <IntlMessages id="Add Students via Excel Sheet" />
                </CardTitle>

                <CardTitle className="mb-4">
                  <p className="para">
                  <b>Constraints:</b><br/>
                  1. Your Excel sheet should only have 5 columns<br/>
                  2. Names of the columns should be:<br/>
                  a) reg_no<br/>
                  b) name<br/>
                  c) email<br/>
                  d) year<br/>
                  e) phone_number<br/><br/>
                  <b>Note:</b> Column names can be of any order. But they should be exactly same as mentioned (Case Sensitive).
                  </p>
                </CardTitle>

              <Label >
                    <Input
                      type="file"
                      accept=".xlsx"
                      className="form-group has-float-label mb-4"
                      id="file"
                      onChange={(e) => this.onFileLoaded(e) }
                    />
                    <label for="file">CHOOSE A FILE</label>
                    <p id="choose">No items selected</p>
              </Label>
                  
            <div className="d-flex justify-content-end align-items-center">

                  <Button
                    color="primary"
                    className="btn-shadow"
                    size="lg"
                    onClick={(e) => this.onStudentRegister(e)}
                  >
                    <IntlMessages id="Add Students" />
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
