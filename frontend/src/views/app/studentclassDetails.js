import React, { Component } from "react";
import { Row, Card, CardTitle, Form, Label, Input, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../redux/actions";
import Axios from "axios";
import IntlMessages from "../../helpers/IntlMessages";
import { Colxx } from "../../components/common/CustomBootstrap";
import "../user/college/App1.css"
class CollegeRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      students: [],
      class_code: "",
      staff_id: ""
    };
  }

  componentDidMount = async () => {
    const { state } = this.props.location;
    if (state) {
      this.state.class_code=state[1]; 
      this.state.staff_id=state[2];
    }
    try{
        var player = await Axios.post("http://localhost:5000/users/studAssessment",{ 
        college_id: sessionStorage.getItem("collegeId"),
        reg_no: sessionStorage.getItem("studentId"),
        // college_id:"HLA001",
        // reg_no:"18C097",
        class_code: this.state.class_code,
        staff_id:this.state.staff_id
        });
        this.setState({players: player.data.ass});
        this.setState({students: player.data.stud});
        console.log(this.state)
    }
    catch{
            window.alert("Sorry, you are restricted");
            this.props.history.push("/error");
        }
}

  onNext = () => {
    document.getElementById("reg1").style="display: none;"
    document.getElementById("reg2").style="display: block;"
    document.getElementById("2a").style="background-color: #000;"
    document.getElementById("1a").style="background-color: #922c88;"
  }

  prev = () => {
    document.getElementById("reg2").style="display: none;"
    document.getElementById("reg1").style="display: block;"
    document.getElementById("1a").style="background-color: #000;"
    document.getElementById("2a").style="background-color: #922c88;"
  }

  onSt = (id) =>{
    var x = "/app/assessment/"+id+"/correction";
    this.props.history.push(x);
  }
  renderPlayer = (player,index) =>{
    return(
        <tr key={index}>
            <td>{index+1}</td>
            <td>{player.ass_name}</td>
            <td>{player.date}</td>
            {/* <td>{player.students.length - player.attended.length}</td>
            <td style={{cursor: 'pointer', border: 'none', color: 'blue', width: '10%'}} >
                
                <p onClick={(e)=> this.onSt(player._id)}>&nbsp;&nbsp;[Validate]</p>
                </td> */}
        </tr>
    )
}

renderStudent = (player,index) =>{
    return(
        <tr key={index}>
            <td>{index+1}</td>
            <td>{player.reg_no}</td>
            <td>{player.name}</td>
            {/* <td>{player.email}</td> */}
        </tr>
    )
}

  render() {
    return (
      <Row className="h-100">
        <Colxx xxs="12" md="10" className="mx-auto my-auto">
          <Card className="auth-card">
          <div className="position-relative image-side1">
            <div class="icon-bar">
                <a href="#" id="1a" onClick={() => this.prev()}><i class="fa fa-file-text-o"></i></a> 
                <a href="#" id="2a" onClick={() => this.onNext()}><i class="fa fa-user"></i></a> 
                </div>
            </div>
            <div className="form-side"  style={{width: '100%'}}>
            <div id="reg1">
            { this.state.players.length>0 ?
            <table>
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>Assessment Name</th>
                        <th>Date of Examination</th>
                        {/* <th>Absentees</th> */}
                    </tr> 
                </thead>
                <tbody>
                    {this.state.players.map(this.renderPlayer)}
                </tbody>
            </table>
            :(<h3>No Assessments have been conducted</h3>)
            }
            </div>

            <div id="reg2" style={{display: 'none'}}>
            { this.state.students.length>0 ?
            <table>
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>Reg.No</th>
                        <th>Name</th>
                        {/* <th>E-mail</th> */}
                    </tr> 
                </thead>
                <tbody>
                    {this.state.students.map(this.renderStudent)}
                </tbody>
            </table>
            :(<h3>No Students have been registered</h3>)
            }
            </div>

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
