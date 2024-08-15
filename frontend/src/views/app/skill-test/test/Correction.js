import React, { Component, Fragment } from "react";
import { Card, CardBody } from "reactstrap";
import Axios from "axios";
import '../../../user/college/App.css';
    

export default class BlankPage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
         players: [] 
        };
    }

    componentDidMount = async () => {
        var urlLink = window.location.href;
      var res = urlLink.split("/"); 
    console.log(res[res.length-2]);
        var player = await Axios.post("http://localhost:5000/users/studentmarkList",{ 
                    test_id: res[res.length-2]
                    });
        this.setState({
            players: player.data
          })
    }

    onSt = (x,e) =>{
        e.preventDefault();
        document.getElementById(x).classList.toggle("show");
        var sid=document.getElementById("reg"+x).innerHTML
        this.props.history.push(`${window.location.pathname}/papercorrect`,sid)
        }
        
    renderPlayer = (player,index) =>{
            return(
                <tr key={index}>
                    <td >{index+1}</td>
                    <td>{player.name}</td>
                    <td id ={"reg" + index}>{player.reg_no}</td>
                    <td>{player.slot}</td>
                    <td>{player.email}</td>
                    {
                        player.slot ===undefined ? (
                            <td>Absent</td>
                        )
                        :(
                            player.total ===undefined ? (
                            <td>Not Corrected</td>
                        ):(
                            <td>{player.total}</td>
                        )
                        )
                       
                        
                    }
                    <td style={{cursor: 'pointer', border: 'none', color: 'blue', width: '10%'}} >
                        
                        <p id={index} onClick={(e)=> this.onSt(index,e)}>&nbsp;&nbsp;[View]</p>
                        {/* <span id={index} class="dropdown-content">
                       <NavLink to={`/app/assessment/${window.location.href.split("/")[window.location.href.split("/").length-2]}/correction/papercorrect`} className="white1">
                        View Answer Paper
                        </NavLink>
                        <p onClick={()=>this.correctp(index)} className="white1">View Answer Paper</p>
                        </span> */}
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
                        <th>Name</th>
                        <th>Register Number/ID </th>
                        <th>Slot</th>
                        <th>Email Address</th>
                        <th>Marks Scored</th>
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