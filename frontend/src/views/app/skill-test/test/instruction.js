import React, { Component, Fragment } from "react";
import { Card, CardBody } from "reactstrap";
import Axios from "axios";
import Layout from "../../../../components/Layout";
export default class Instructions extends Component {
  constructor(props) {
      super(props);
      this.state = {
       questions: [],
       startTime: "",
       endTime: "",
       date:  new Date().getFullYear().toString()+"-" + new Date().getMonth().toString()+ "-"+new Date().getDate().toString() ,
       viva: []
      };
    }
    starttest = ()=>{
      var urlLink = window.location.pathname;
      const testquestions=this.state.questions;
      const viva= this.state.viva;
      const startTime= this.state.startTime;
      const endTime= this.state.endTime;
      const date= this.state.date;        
      const time = {hours: "02",minutes: "30", seconds: "00"};
      var chr= new Date().getHours();
      var cmin= new Date().getMinutes();
      var ctime
      cmin.toString().length==1 ? ctime=Number(chr + ".0"+cmin):(ctime=Number(chr + "."+cmin))
      console.log(ctime)
      const sstime=startTime.replace(":",".")
      const eetime=endTime.replace(":",".")
      console.log(this.state.date)
      console.log(date)
  if(date !== this.state.date)
  {
      window.alert("Test is not to be held today")
  }
  else if(ctime<sstime){
    window.alert("Test is yet to be started")
  }
  else if(ctime>eetime){
    window.alert("Test Duration is over")
  }
  else
  {
      const send =[testquestions,time,viva,startTime,endTime,date]
      {setTimeout(() => {
          this.props.history.push(`${urlLink}/coding`,send);
      }, 1000);}
    }
  }



  componentDidMount = async() => {
    try{var urlLink = window.location.href;
    var res = urlLink.split("/"); 
  console.log(res[res.length-2]);
  if(sessionStorage.getItem("role")!=="staff")
  {var player = await Axios.post("http://localhost:5000/users/getAssessmentQn",{ 
    token: res[res.length-2],
    reg_no: sessionStorage.getItem("studentId")
    });
  this.setState({
    questions: player.data.questions,
    startTime: player.data.startTime,
    endTime: player.data.endTime,
    date: player.data.date,
    viva: player.data.viva
  })}
}
    catch (err) {
      window.alert(err.response.data.msg);
      window.location.href="/";
    } 
    console.log(this.state);
  }

  render() {
      
    return (
      <div>
        {
        sessionStorage.getItem("role")!=="staff"?
        <div>
      <Card>
      <CardBody className="justify-content-end d-flex flex-column">
        <h1>Instructions</h1>
        <h5 style={{fontSize: 14}}>
        The quizzes consists of questions carefully designed to help you self-assess your comprehension of the information presented on the topics covered in the module. No data will be collected on the website regarding your responses or how many times you take the quiz.
        <br/><br/>
        Each question in the quiz is of multiple-choice or "true or false" format. Read each question carefully, and click on the button next to your response that is based on the information covered on the topic in the module. Each correct or incorrect response will result in appropriate feedback immediately at the bottom of the screen.
        <br/><br/>
        After responding to a question, click on the "Next Question" button at the bottom to go to the next questino. After responding to the 8th question, click on "Close" on the top of the window to exit the quiz.
        <br/><br/>
        If you select an incorrect response for a question, you can try again until you get the correct response. If you retake the quiz, the questions and their respective responses will be randomized.
        <br/><br/>
        The total score for the quiz is based on your responses to all questions. If you respond incorrectly to a question or retake a question again and get the correct response, your quiz score will reflect it appropriately. However, your quiz will not be graded, if you skip a question or exit before responding to all the questions.
        </h5><br/><br/>
        <center><button className="redBtn" id="start-button" style={{width: '30%'}} onClick={this.starttest}>
      Take Test
    </button></center>
      </CardBody>      
      </Card>
      </div>
      :(
        <div style={{height: 600}}>
          <Layout />
        </div>
      )
      }
      </div>
  )
}
}
