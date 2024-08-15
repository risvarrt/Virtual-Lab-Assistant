import React, { Component } from "react";
import { Row, Card, CardTitle, Form, Label, Input, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../../redux/actions";
import Axios from "axios";
import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx } from "../../../components/common/CustomBootstrap";
import '../college/App1.css'

class AddStaff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class_name: "",
      class_code: "",
      non: [],
      students: [],
      file: ""
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle = () => this.setState({ show: !this.state.show });

  addqn = () => {
    this.setState({
      disp: 'addqn',
    });
    document.getElementById("myModal").style.display = "block";
    console.log(this.state); 
  }

  close = () => {
    document.getElementById("myModal").style.display = "none";
  }
  
  onImpQn = async(e) => {
    e.preventDefault();
    const data = new FormData();
    var cid = sessionStorage.getItem("collegeId");
    data.append("name", cid);
    data.append("file", this.state.file);
        try {
          var loginRes = await Axios.post("http://localhost:5000/users/classxlsx", data);
          window.alert("Students Added");
          this.setState({students: loginRes.data.std});
          this.setState({non: loginRes.data.non});
          console.log(this.state.students);
        } catch (err) {
          window.alert("Check whether your excel file goes with the constraints");
        }    
    this.close();
  }

  onFileLoaded = (e) => {
    this.setState({
      file: e.target.files[0],
    })
    var fileName = e. target. files[0]. name;
    document.getElementById("choose").innerHTML= fileName + ' has been selected.';
  }

  renderPlayer = (player,index) =>{
    return(
      index!==this.state.non.length-1?
      <p id={index} style={{display: 'inline-block', paddingBottom: 0}}>{player},</p>
      :(<p id={index} style={{display: 'inline-block', paddingBottom: 0}}>{player}.</p>)
    )
}

onUserRegister = async(e) => {
  e.preventDefault();
try {
  var loginRes = await Axios.post("http://localhost:5000/users/createClass",{ 
  college_id: sessionStorage.getItem("collegeId"),
  staff_id: sessionStorage.getItem("staffId"),
  class_name: this.state.class_name,
  class_code: this.state.class_code,
  students: this.state.students
});
  console.log(loginRes.data);
  window.alert("Class Created!");
  this.props.history.push("/user/staff/dashboard");
console.log(this.state)
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
                Please use this form to add your Staff via Excel sheet. <br />
                To add single data, please{" "}
                <NavLink to={`/user/colleges/addStaff`} className="white">
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
                  <IntlMessages id="Create Classroom" />
                </CardTitle>

                <Label className="form-group has-float-label mb-4">
                    <Input
                      type="text"
                      onChange={(e) =>
                        this.setState({
                          class_name: e.target.value,
                        })
                      }
                    />
                    <IntlMessages id="Class name" />
              </Label>

              <Label className="form-group has-float-label mb-4">
                    <Input
                      type="text"
                      onChange={(e) =>
                        this.setState({
                          class_code: e.target.value
                        })
                      }
                    />
                    <IntlMessages id="Class Code" />
              </Label>
              
              <div className="d-flex justify-content-start align-items-center">
              <Button
                color="default"
                className="btn-shadow"
                size="lg"
                style={{borderRadius: 0}} 
                id="myBtn"
                onClick={() => this.addqn()}
              >
                <IntlMessages id="Add Students" />
              </Button>
              </div>
              { this.state.non.length>0?
                <div>
                  <br/>
                    <p style={{display: 'inline-block', paddingBottom: 0}}>Students who have not registered are:</p> {this.state.non.map(this.renderPlayer)} 
                    <br/><p style={{display: 'inline-block', paddingBottom: 0}}>If you proceed further, these students will be missed.</p>
                </div>
                :(<p></p>)
              }      
              <div id="myModal" class="modal">
              <div class="modal-content"> 
                <span class="close" onClick={() => this.close()}>&times;</span>
                <br/><br/>
            
                <div id="impqns">
                  <CardTitle className="mb-4"><IntlMessages id="Add Questions via Excel Sheet" /></CardTitle>
                  <CardTitle className="mb-4">
                  <p className="para">
                  <b>Constraints:</b><br/>
                  1. Make sure all of your students have registered with the appropriate college id and register number. If not so, the student will be missed.<br/>
                  2. The excel sheet which you upload, can have any number of data and columns. But make sure, it has a column "Reg_no" in it.<br/>
                  3. The column name should be exactly be "Reg_no".<br/><br/>
                  <b>Note:</b> Confirm that any one of the column names should be exactly same as "Reg_no" (Case Sensitive).
                  </p>
                  </CardTitle>
                  <Label >
                      <Input type="file" accept=".xlsx" className="form-group has-float-label mb-4" id="file" onChange={(e) => this.onFileLoaded(e) }/>
                      <label for="file">CHOOSE A FILE</label>
                      <p id="choose">No items selected</p>
                  </Label>
                  <div className="d-flex justify-content-end align-items-center"><Button color="primary" className="btn-shadow" size="lg" onClick={(e) => this.onImpQn(e)}><IntlMessages id="Add Questions" /></Button></div>
                </div> 

              </div>
              </div>
                  
            <div className="d-flex justify-content-end align-items-center">

                  <Button
                    color="primary"
                    className="btn-shadow"
                    size="lg"
                    onClick={(e) => this.onUserRegister(e)}
                  >
                    <IntlMessages id="Create Class" />
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
})(AddStaff);
