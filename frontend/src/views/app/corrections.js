import React, { Component, Fragment } from "react";
import { Card, CardBody } from "reactstrap";
import Axios from "axios";
import '../user/college/App.css';

export default class BlankPage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
         players: [] 
        };
    }

    componentDidMount = async () => {
        var player = await Axios.post("http://localhost:5000/users/studentList",{ 
                    college_id: sessionStorage.getItem("collegeId")
                    });
        this.setState({
            players: player.data
          })
    }

    onSt = (x,e) =>{
        e.preventDefault();
        document.getElementById(x).classList.toggle("show");
        }
        
    renderPlayer = (player,index) =>{
            return(
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{player.reg_no}</td>
                    <td>{player.email}</td>
                    <td>{player.name}</td>
                    <td style={{cursor: 'pointer', border: 'none', color: 'blue', width: '10%'}} >
                        
                        <p onClick={(e)=> this.onSt(index,e)}>&nbsp;&nbsp;[View]</p>
                        <span id={index} class="dropdown-content">
                            <a href="#">Approve Profile</a>
                            <a href="#">Lock Profile</a>
                            <a href="#">Verify Profile</a>
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
              { this.state.players.length>0 ?
    
            <table>
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>Register Number/ID </th>
                        <th>Email Address</th>
                        <th>Name</th>
                    </tr> 
                </thead>
                <tbody>
                    {this.state.players.map(this.renderPlayer)}
                </tbody>
            </table>

            :(
                <h3>No Students have been added</h3>
            )
    }
            </CardBody>      
            </Card>
            </div>
        )
    }
}