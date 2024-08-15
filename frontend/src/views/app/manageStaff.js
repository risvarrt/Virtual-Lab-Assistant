import React, { Component, Fragment } from "react";
import { Card, CardBody } from "reactstrap";
import Axios from "axios";
import '../user/college/App.css';

export default class BlankPage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
         players: [],
         bool: 0
        };
    }

    componentDidMount = async () => {
        var player = await Axios.post("http://localhost:5000/users/staffList",{ 
                    college_id: sessionStorage.getItem("collegeId")
                    });
        this.setState({
            players: player.data
          })
    }

    onEdit = (x,e) =>{
        e.preventDefault();
        document.getElementById(x).classList.toggle("show");
        document.getElementById(x + "-edit").classList.toggle("hide");
        document.getElementById(x + "-save").classList.toggle("show");

        document.getElementById(x + "stid").style.display='none';
        document.getElementById(x + "stmail").style.display='none';
        document.getElementById(x + "stnam").style.display='none';

        document.getElementById(x + "stid1").style.display='block';
        document.getElementById(x + "stmail1").style.display='block';
        document.getElementById(x + "stnam1").style.display='block';

        var stid = document.getElementById(x + "stid").innerHTML;
        var stmail = document.getElementById(x + "stmail").innerHTML;
        
        var stnam = document.getElementById(x + "stnam").innerHTML;

        document.getElementById(x + "stid1").value = stid;
        document.getElementById(x + "stmail1").value = stmail;
        
        document.getElementById(x + "stnam1").value = stnam;

        }
    
    onSave = async (x,e) =>{
        e.preventDefault();
        document.getElementById(x + "-edit").classList.toggle("hide");
        document.getElementById(x + "-save").classList.toggle("show");

        var stid = document.getElementById(x + "stid1").value;
        var stmail = document.getElementById(x + "stmail1").value;
        var stphn = ""
        var stnam = document.getElementById(x + "stnam1").value;

        try {
            var player_new = await Axios.post("http://localhost:5000/users/editStaff",{ 
                    college_id: sessionStorage.getItem("collegeId"),
                    staff_id: stid,
                    name: stnam,
                    email: stmail,
                    phone_number: stphn
                    });   
            window.location.reload();
          } catch (err) {
            window.alert(err.response.data.msg);
          }  
        }

    onDelete = async (x,e) =>{
        e.preventDefault();
        var stid = document.getElementById(x + "stid").innerHTML;
        try {
            var player_new = await Axios.post("http://localhost:5000/users/removeStaff",{ 
                    college_id: sessionStorage.getItem("collegeId"),
                    staff_id: stid
                    });   
            window.location.reload();
          } catch (err) {
            window.alert(err.response.data.msg);
          } 
    }

    onSt = (x,e) =>{
        e.preventDefault();
        document.getElementById(x).classList.toggle("show");
        }
        
    renderPlayer = (player,index) =>{
            return(
                <tr key={index}>
                    <td>
                        <p id={index + "srno"} className="para">{index+1}</p>
                        <input id={index + "srno1"} className="hide" type="text" size="1"/>
                    </td>
                    <td>
                        <p id={index + "stid"} className="para">{player.staff_id}</p>
                        <input id={index + "stid1"} className="hide" type="text" size="7"/>
                    </td>
                    <td>
                        <p id={index + "stmail"} className="para">{player.email}</p>
                        <input id={index + "stmail1"} className="hide" type="text" size="25"/>
                    </td>
                    <td>
                        <p id={index + "stnam"} className="para">{player.name}</p>
                        <input id={index + "stnam1"} className="hide" type="text" size="20"/>
                    </td>
                    <td style={{cursor: 'pointer', border: 'none', color: 'blue', width: '10%'}} >
                        
                        <p id={index + "-edit"} onClick={(e)=> this.onSt(index,e)} >&nbsp;&nbsp;[Edit]</p>
                        <p id={index + "-save"} onClick={(e)=> this.onSave(index,e)} class="sav">&nbsp;&nbsp;[Save]</p>

                        <span id={index} class="dropdown-content">
                            <p onClick={(e) => this.onEdit(index,e)}>Edit</p>
                            <p onClick={(e) => this.onDelete(index,e)}>Delete</p>
                        </span>
                        </td>
                </tr>
            )
        }

    render() {
        
        return (
            <div>
            <Card>
            <CardBody className="justify-content-end d-flex flex-column">
              { this.state.players.length>0?
    
            <table>
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>Staff ID </th>
                        <th>Email Address</th>
                        <th>Name</th>
                    </tr> 
                </thead>
                
                <tbody>
                    {this.state.players.map(this.renderPlayer)}
                </tbody>
            </table>

            :(
                <h3>No Staffs have been added</h3>
            )
    }
            </CardBody>      
            </Card>
            </div>
        )
    }
}