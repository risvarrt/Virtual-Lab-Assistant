import React, { Component, Fragment } from "react";
import { Card, CardBody } from "reactstrap";
import Axios from "axios";
import './class.css';

export default class BlankPage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
         players: [] 
        };
    }

    componentDidMount = async () => {
        try{var player = await Axios.post("http://localhost:5000/users/classList",{ 
                    college_id: sessionStorage.getItem("collegeId"),
                    staff_id: sessionStorage.getItem("staffId")
                    });
                    this.setState({
                        players: player.data
                      })}
                    catch{
                        window.alert("Sorry, you are restricted");
                        this.props.history.push("/error");
                    }
        
    }

    onSt = (x,e) =>{
        e.preventDefault();
        const class_name= this.state.players[x].class_name;      
        const class_code = this.state.players[x].class_code;
        const players = this.state.players[x].students;
        const playerStats2 =[class_name, class_code, players]
        this.props.history.push('/app/class_details',playerStats2);
        }
        
    renderPlayer = (player,index) =>{
            return(
                <>
                <div class="product-card">
                    <div class="product-tumb" style={{cursor: 'pointer'}} onClick={(e)=> this.onSt(index,e)}>
                        <img src={"https://picsum.photos/id/" + (index+500) + "/300/300"} className="abc" alt=""/>
                    </div>
                    <div class="product-details">
                        <h4><p style={{cursor: 'pointer', marginBottom: 0}} onClick={(e)=> this.onSt(index,e)}>{player.class_name}</p></h4>
                        <span style={{marginBottom: 0}} class="product-catagory">{player.class_code}</span>                        
                    </div>
                </div>
                </>
            )
        }

    render() {
        
        return (
            <div className="thala">
                {this.state.players.map(this.renderPlayer)}
            </div>
        )
    }
}