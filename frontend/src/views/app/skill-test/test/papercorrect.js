import React, { Component, Fragment } from "react";
import { Card, CardBody,Button } from "reactstrap";
import Axios from "axios";
import { NavLink } from "react-router-dom";

export default class BlankPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [] 
           };
    }

    componentDidMount = async() => {
        console.log("hi")
        var urlLink = window.location.href;
        var res = urlLink.split("/"); 
        var player=await Axios.post("http://localhost:5000/users/studentans",{ 
            test_id: res[res.length-3],
            reg_no:this.props.location.state
            });
            if(player.data.score===undefined)
            {
                player.data.score = "0";
                this.setState({
                    players: player.data
                  })
            }
          this.setState({
              players: player.data
            })
            // console.log(this.props.location.state)
            console.log(this.state.players)
            console.log(window.location.pathname.slice(0,-13))
    }
    renderPlayer = (player,index) =>{
        return(
            <div className="progz">
                <h3><b><u>Question {index+1}:</u></b></h3>
                <h2>{player.question}</h2>
                <br />
                <div style={{paddingLeft: 50}}>
                <h3><b>Algorithm:</b></h3>
                {player.explanation.split("\n").map(item =>
                    {return <h3>{item}</h3>}
                )}
                <br />
                <h3><b>Mark for Algorithm: </b></h3>
                <input type="number" id={"al"+(index+1)}  min="0" placeholder="Mark" style={{padding: '5px 10px 5px 10px' }} required/>
                <br /><br/>
                <h3><b>Code:</b></h3>
                {player.answer.split("\n").map(item =>{return <h3>{item}</h3>})}
                <br/>
                <h3><b>Test Cases Solved</b> : {player.test_cases}/4</h3>
                <br />
                <h3><b>Mark for program:</b></h3>
                <input type="number" id={"pr"+(index+1)} min="0" placeholder="Mark" style={{padding: '5px 10px 5px 10px' }} required/>
                <br /><br/><br/>
                </div>
            </div>
        )
    }
    updatemarks= async()=>{
        var urlLink = window.location.href;
        var res = urlLink.split("/"); 
        var marks=0
        for(var i=0;i<this.state.players.ans.length;i++)
        {
            var pid="pr"+(i+1)
            var aid="al"+(i+1)
            marks=marks + Number(document.getElementById(pid).value)+Number(document.getElementById(aid).value)
        }
        marks=marks+ this.state.players.score
        console.log(marks)
        
        await Axios.post("http://localhost:5000/users/updmark",{ 
            test_id: res[res.length-3],
            reg_no:this.props.location.state,
            mark:marks
            }).then((response)=>{
                window.alert("Marks Updated for"+response.data.reg_no)
                this.props.history.push(`${window.location.pathname.slice(0,-13)}`)
            },(error) => {
                console.log(this.state)
              console.log(error.response.data.msg)
              window.alert(error.response.data.msg)
            });
    }
    render() {
       const {players}=this.state
       console.log(players)
        return (
            <div>
            <Card>
            <CardBody className="justify-content-end d-flex flex-column">
            <h1><b><u>Evaluation</u></b></h1>
            <br />
            <h3><b>Name</b> : </h3>
            <h3>{this.state.players.name}</h3>
            <br/>
            <h3><b>Register Number</b> :</h3>
            <h3> {this.state.players.reg_no}</h3>
            <br/>
            <h3><b><u>Programming Questions</u></b></h3>
            <br />
            { this.state.players.ans !==undefined ?
            <div className="labtest">
            <div className="program">
            {
            this.state.players.ans.length !==0 ?
            this.state.players.ans.map(this.renderPlayer)
            :(<><h3>Not Answered</h3><br/></>)
            }
            </div>
            <div className="viva">
                <h2><b>Score for Viva:</b> {this.state.players.score}</h2>
            </div>
            </div>
                
                :(
            <div>
            </div>
                )
        }
        <div className={{display:'flex',padding:20}}>
                    <br/>
                <Button
                    color="primary"
                    className="btn-shadow"
                    size="lg"
                    style={{borderRadius: 0}}
                    onClick={()=>{this.updatemarks()}}
                  >
                      Update Marks
                  </Button>
                  </div>
            </CardBody>      
            </Card>
            </div>
        )
    }
}