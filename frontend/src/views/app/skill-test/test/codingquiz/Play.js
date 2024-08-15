import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import classnames from "classnames";
import Axios from "axios";
import { Row, Card, CardBody, CardTitle, Form, Label, Input, Button } from "reactstrap";
import { Link } from 'react-router-dom'
import ProgressBar from "./progress-bar";
import * as faceapi from 'face-api.js';
import * as canvas from 'canvas';
import isEmpty from "../../utils/is-empty";
import buttonSound from "../../assets/audio/button-sound.mp3";
import IntlMessages from "../../../../../helpers/IntlMessages";
import './play.css';
import Layout from "../../../../../components/Layout"
import ReactAce from 'react-ace-editor';


var selectedOpts = {};
const style = {
  height: '24rem',
  width: '15rem'
}

class Play extends Component {
  constructor(props) {
    super(props);

    this.state = {
      answers: {},
      languageId: "46",
      selects: {},
      selected: {},
      code: [],
      desc:[],//////////////////////
      testc: [],
      solvedTestc: [],///////////////
      save: [],
      questions: [],/////////////////
      setCompleted: 0,
      currentQuestion: {},
      nextQuestion: {},
      previousQuestion: {},
      answer: "",
      savestate :[],
      question_description: "",
      numberOfQuestions: 0,
      numberOfAnsweredQuestions: 0,
      currentQuestionIndex: 0,
      score: 0,
      save_score: [0],
      result: {},
      correctAnswers: 0,
      wrongAnswers: 0,
      nextButtonDisabled: false,
      previousButtonDisabled: true,
      time: {},
      viva: [],
      time: {
        hours: 0,
        minutes:0,
        seconds:0
      },
      initializing:false
    };
    this.videoref=React.createRef();
    this.canvasref=React.createRef();
    this.myRef1 = React.createRef();
    this.myRef2 = React.createRef();
    this.myRef3 = React.createRef();
    this.myRef4 = React.createRef();
    this.myRef5 = React.createRef();
    this.myRef6 = React.createRef();
    this.interval = null;
    this.endGame = this.endGame.bind(this);
  }

  componentDidMount = () => {
    const { state } = this.props.location;
    var stime,etime
    if (state) {
      this.state.questions=state[0]; 
      this.state.viva=state[2];
      stime=state[3]
      etime=state[4]
      this.state.time={hours: Number(etime.slice(3,5)) >= Number(stime.slice(3,5)) ? 
        ((Number(etime.slice(0,2))-Number(stime.slice(0,2))))
        :((Number(etime.slice(0,2))-Number(stime.slice(0,2))-1)),
minutes:Number(etime.slice(3,5)) >= Number(stime.slice(3,5)) ? 
        (Number(etime.slice(3,5))-Number(stime.slice(3,5)))
        :(60-(Number(stime.slice(3,5))-Number(etime.slice(3,5)))) ,
seconds:0}
    }
    
    const {
      questions,
      currentQuestion,
      nextQuestion,
      previousQuestion,
    } = this.state;
    this.state.savestate=new Array(questions.length).fill(0);
    this.state.result = Object.assign(
      {},
      ...questions.map((question) => ({ [question.id]: question.answer }))
    );
    
    Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
      faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
      faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
      faceapi.nets.faceExpressionNet.loadFromUri("/models"),
      faceapi.nets.ageGenderNet.loadFromUri("/models")
    ]).then(()=>{
    
      console.log("Models loaded")
      this.startVideo();
    });
    this.displayQuestions(
      questions,
      currentQuestion,
      nextQuestion,
      previousQuestion
    );
    var chr= new Date().getHours();
var cmin= new Date().getMinutes();
console.log(chr,cmin)
console.log(Number(etime.slice(0,2)))
console.log(Number(etime.slice(3,5)))
if(chr >= Number(stime.slice(0,2)) || cmin > Number(stime.slice(3,5)))
{
  console.log("hia")
  this.state.time= {
    hours: Number(etime.slice(3,5)) >= cmin ? 
        ((Number(etime.slice(0,2))-chr))
        :((Number(etime.slice(0,2))-chr-1)),
        minutes:Number(etime.slice(3,5)) >= cmin ? 
                      (Number(etime.slice(3,5))-cmin)
                      :(60-(Number(etime.slice(3,5))-cmin)) ,
        seconds:0}
  }
    this.startTimer();
  //   $(document).bind("contextmenu",function(e){
  //     e.preventDefault();
  //     window.alert( "You are restricted to right click" );
  //   });
  //   $(document).on('keydown', function ( e ) {
  //     if ((e.metaKey || e.ctrlKey) && ( String.fromCharCode(e.which).toLowerCase() === 'c') ) {
  //         e.preventDefault();
  //         window.alert( "You are restricted to use CTRL + C" );
  //     }
  //     if ((e.metaKey || e.ctrlKey) && ( String.fromCharCode(e.which).toLowerCase() === 't') ) {
  //       e.preventDefault();
  //       window.alert( "You are restricted to use CTRL + T" );
  //     }
  //     if ((e.metaKey || e.ctrlKey) && ( String.fromCharCode(e.which).toLowerCase() === 'n') ) {
  //       e.preventDefault();
  //       window.alert( "You are restricted to use CTRL + N" );
  //     }
  //     if ((e.metaKey || e.ctrlKey) && ( String.fromCharCode(e.which).toLowerCase() === 'v') ) {
  //       e.preventDefault();
  //       window.alert( "You are restricted to use CTRL + V" );
  //     }
  // });
  // document.addEventListener("visibilitychange", function() {
  //   window.alert('Sorry, Assessment has ended! You will redirected to homepage within 5 seconds');
  //   setTimeout(() => {
  //     window.location.href='/';
  // }, 5000);
  // }, false);
  };
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  startVideo() {
    navigator.getUserMedia(
      { video: {} },
      stream => (this.videoref.current.srcObject = stream),
      err => console.error(err)
    );
  }
  displayQuestions = (
    questions = this.state.questions,
    currentQuestion,
    previousQuestion,
    nextQuestion
  ) => {
    let { currentQuestionIndex } = this.state;
    if (!isEmpty(this.state.questions)) {
      questions = this.state.questions;
      currentQuestion = questions[currentQuestionIndex];
      nextQuestion = questions[currentQuestionIndex + 1];
      previousQuestion = questions[currentQuestionIndex - 1];
      const answer = currentQuestion.answer;
      const question_description = currentQuestion.question_description;
      this.setState(
        {
          currentQuestion,
          nextQuestion,
          previousQuestion,
          numberOfQuestions: questions.length,
          answer,
          question_description
        },
        () => {
          this.handleDisableButton();
        }
      );
    }
  };
  handleOptionClick = (e) => {
    console.log(this.state.selects);
    if (
      e.target.className
        .slice(e.target.className.length - 8, e.target.className.length)
        .localeCompare("selected") === -1
    ) {
      this.state.selects[
        e.target.className[e.target.className.length - 1]
      ] = e.target.innerHTML.toLowerCase();

      //this.state.selects.push(e.target.innerHTML);
      console.log(this.state.selects);
      var keys = Object.keys(this.state.selects);
      console.log(keys);
      selectedOpts[this.state.currentQuestionIndex + 1] = keys;
      // console.log(selectedOpts)
      this.state.answers[
        this.state.currentQuestionIndex + 1
      ] = this.state.selects;
    }
    // console.log(this.state.selects)
    console.log(this.state.answers);
    console.log(selectedOpts);
    for (var i = 1; i <= 6; i++) {
      console.log(this.state.currentQuestionIndex);
      console.log(Object.values(selectedOpts));
      console.log(Object.values(selectedOpts)[this.state.currentQuestionIndex]);
      console.log(
        Object.values(selectedOpts)[this.state.currentQuestionIndex].includes(
          i.toString()
        )
      );
      if (
        Object.values(selectedOpts)[this.state.currentQuestionIndex].includes(
          i.toString()
        )
      ) {
        console.log(
          e.target.className
            .slice(e.target.className.length - 8, e.target.className.length)
            .localeCompare("selected")
        );
        if (
          e.target.className
            .slice(e.target.className.length - 8, e.target.className.length)
            .localeCompare("selected") === -1
        ) {
          e.target.className = e.target.className + " selected";
          console.log(this.state.answers);
          console.log(e.target.className);
        } else {
          e.target.className = "option opt" + i;
          const index = Object.values(selectedOpts)[0].indexOf(i.toString());
          console.log(index);
          if (index > -1) {
            Object.values(selectedOpts)[0].splice(index, 1);
          }
          console.log(selectedOpts);
          console.log(this.state.currentQuestionIndex + 1);
          // console.log(this.state.answers[this.state.currentQuestionIndex+1][i])
          delete this.state.answers[this.state.currentQuestionIndex + 1];
          console.log(Object.values(selectedOpts)[0]);
          console.log(this.state.answers);
          console.log(e.target.className);
        }
        break;
      }
    }
  };
  handleNextButtonClick = () => {
    this.playButtonSound();
    let arr = this.state.code;
    let arr5 = this.state.desc;
    var text2 = arr[this.state.currentQuestionIndex];
    var text3 = arr5[this.state.currentQuestionIndex];
    if((text2 === undefined || text2 === "") && (text3 === undefined || text3 === ""))
    {var cid="leg"+(this.state.currentQuestionIndex+1);
    document.getElementById(cid).className="grid-item2 notAnswered"}
    console.log(this.state.currentQuestionIndex+1);
        let arr2 = this.state.save;
        if(arr2[this.state.currentQuestionIndex+1]===1)
        {
          document.getElementById("AlgBox").readOnly = true;
          document.getElementById("codeBox").readOnly = true;
          document.getElementById("save-button").innerHTML = "Unsave";
        }
        else
        {
          document.getElementById("AlgBox").readOnly = false;
          document.getElementById("codeBox").readOnly = false;
          document.getElementById("save-button").innerHTML = "Save";
        }

        
        var text = arr[this.state.currentQuestionIndex+1];
        var text1 = arr5[this.state.currentQuestionIndex+1];
        if(text === undefined )
          {document.getElementById("codeBox").value = "";}
        else
          {document.getElementById("codeBox").value = text;}

        if(text1 === undefined )
          {document.getElementById("AlgBox").value = "";}
        else
          {document.getElementById("AlgBox").value = text1;}  

        let arr1 = this.state.testc;
        var num = arr1[this.state.currentQuestionIndex+1];
        if(num === undefined)
          {document.getElementById("testc").innerText = "Test Cases Solved: 0/4";}
        else
          {document.getElementById("testc").innerText = "Test Cases Solved: " + num + "/4";}

    const select = this.state.answers[this.state.currentQuestionIndex + 2];
    // console.log(select)
    const news = typeof select === "undefined" ? {} : select;
    // console.log(news)
    if (this.state.nextQuestion !== undefined) {
      this.setState(
        (prevState) => ({
          selects: news,
          currentQuestionIndex: prevState.currentQuestionIndex + 1,
        }),
        () => {
          // console.log(this.state.selects)
          // console.log(this.state.currentQuestionIndex)
          this.displayQuestions(
            this.state.state,
            this.state.currentQuestion,
            this.state.nextQuestion,
            this.state.previousQuestion
          );
        }
      );
    }
  };
  handlePreviousButtonClick = () => {
    this.playButtonSound();
    console.log(this.state);
        let arr2 = this.state.save;
        if(arr2[this.state.currentQuestionIndex-1]===1)
        {
          document.getElementById("codeBox").readOnly = true;
          document.getElementById("save-button").innerHTML = "Unsave";
        }
        else
        {
          document.getElementById("codeBox").readOnly = false;
          document.getElementById("save-button").innerHTML = "Save";
        }

        let arr = this.state.code;
        var text = arr[this.state.currentQuestionIndex-1];
        if(text === undefined)
          {document.getElementById("codeBox").value = "";}
        else
          {document.getElementById("codeBox").value = text;}

        let arr5 = this.state.desc;
        var text2 = arr5[this.state.currentQuestionIndex-1];
        if(text2 === undefined)
          {document.getElementById("AlgBox").value = "";}
        else
          {document.getElementById("AlgBox").value = text2;}

        let arr1 = this.state.testc;
        var num = arr1[this.state.currentQuestionIndex-1];
        if(num === undefined)
          {document.getElementById("testc").innerText = "Test Cases Solved: 0/4";}
        else
          {document.getElementById("testc").innerText = "Test Cases Solved: " + num + "/4";}


    let select = this.state.answers[this.state.currentQuestionIndex];
    // console.log(select)
    const news = typeof select === "undefined" ? {} : select;
    // console.log(news)
    if (this.state.previousQuestion !== undefined) {
      this.setState(
        (prevState) => ({
          currentQuestionIndex: prevState.currentQuestionIndex - 1,
          selects: news,
          //selects:prevState.answers[prevState.currentQuestionIndex]
        }),
        () => {
          this.displayQuestions(
            this.state.state,
            this.state.currentQuestion,
            this.state.nextQuestion,
            this.state.previousQuestion
          );
        }
      );
    }
  };
  check = async (x) => {
    try
    {
      let z = await Axios({
    "method":"GET",
    "url":x,
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"judge0-ce.p.rapidapi.com",
    "x-rapidapi-key":"e24a5eed0fmshce4cf9d1da4972ap1c32d8jsn3486294ec01f",
    "useQueryString":true
    }
    })
    // .then((response)=>{
    //   var y = response.data.stdout;
    //   return y;
    // })
    .catch((error)=>{
      return error;
    })
     console.log(z)
    return z.data.stdout;  
    }
      catch (err) {
        return { error: err.message };
      }
    
  }
  checkCode = async (ans,lang_id,inp) => {
    try
    {
      let z = await Axios({
        "method":"POST",
        "url":"https://judge0-ce.p.rapidapi.com/submissions",
        "headers":{
        "content-type":"application/json",
        "x-rapidapi-host":"judge0-ce.p.rapidapi.com",
        "x-rapidapi-key":"e24a5eed0fmshce4cf9d1da4972ap1c32d8jsn3486294ec01f",
        "accept":"application/json",
        "useQueryString":true
        },"data":{
        "language_id":lang_id,"source_code":ans,
        "stdin":inp
        }
        })
        // .then( async (response)=>{
        //   var x = response.data.token;
        //   console.log("token"+x)
        //   var y = await this.check("https://judge0.p.rapidapi.com/submissions/"+x);
        //   console.log("y="+y)
        //   return y;
        // })

        .catch((error)=>{
          return error;
        })
          var x = z.data.token;
          console.log("token"+x)
         await new Promise((r)=>{
           setTimeout(r,1500)
         })
        var y = await this.check("https://judge0.p.rapidapi.com/submissions/"+x);
        console.log("y="+y+" x="+y);
      return y;
          
    }
      catch (err) {
        return err.msg;
      }
  };
  handleRunButtonClick = async () => {
    document.getElementById("load").style.display="inline-block";
    var evaluated = 0;
    var ans = document.getElementById("codeBox").value;
    var lang_id = this.state.languageId;
    var question = this.state.questions[this.state.currentQuestionIndex];
    var inp1 = question.testcase1Inp;
    var op1 = await this.checkCode(ans,lang_id,inp1);
    document.getElementById("testc").innerText = "Test Cases Solved: " + evaluated + "/4";
    if(op1===question.testcase1Op)
      {evaluated+=1;
        document.getElementById("testc").innerText = "Test Cases Solved: " + evaluated + "/4";
      }
    
    var inp2 = question.testcase2Inp;
    var op2 = await this.checkCode(ans,lang_id,inp2);
    if(op2===question.testcase2Op)
      {evaluated+=1;
        document.getElementById("testc").innerText = "Test Cases Solved: " + evaluated + "/4";}  

    var inp3 = question.testcase3Inp;
    var op3 = await this.checkCode(ans,lang_id,inp3);
    if(op3===question.testcase3Op)
      {evaluated+=1;
        document.getElementById("testc").innerText = "Test Cases Solved: " + evaluated + "/4";} 

    var inp4 = question.testcase4Inp;
    var op4 = await this.checkCode(ans,lang_id,inp4);
    if(op4===question.testcase4Op)
      {evaluated+=1;
        document.getElementById("testc").innerText = "Test Cases Solved: " + evaluated + "/4";} 
    let arr = this.state.testc;
    arr[this.state.currentQuestionIndex]=evaluated;
    this.setState({testc: arr});
    console.log(op1,op2,op3,op4);
    console.log(question.testcase1Op);
    document.getElementById("load").style.display="none";
    return evaluated;
  }
  handleSaveButtonClick = async () => {
    var cid="leg"+(this.state.currentQuestionIndex+1)
      if( document.getElementById("save-button").innerHTML.localeCompare("Save")===0 )
      {
      var num_evaluated = await this.handleRunButtonClick();
      document.getElementById(cid).className="grid-item2 marked";
      let questions = this.state.questions;
      let per_mark = Number(questions[this.state.currentQuestionIndex].mark)/4;
      let evaluated = Number(num_evaluated) * per_mark;
      let arr = this.state.save_score;
      let arr1 = this.state.save;
      let arr2 = this.state.solvedTestc;
      arr[this.state.currentQuestionIndex]=evaluated;
      arr1[this.state.currentQuestionIndex]=1;
      arr2[this.state.currentQuestionIndex]=num_evaluated;
      this.setState({solvedTestc: arr2});
      this.setState({save: arr1});
      this.setState({save_score: arr});      
      document.getElementById("save-button").innerHTML = "Unsave";
      document.getElementById("codeBox").readOnly = true;
    }
    else{
      let arr = this.state.save_score;
      let arr1 = this.state.save;
      arr[this.state.currentQuestionIndex]=0;
      arr1[this.state.currentQuestionIndex]=0;
      this.setState({save: arr1});
      document.getElementById("codeBox").readOnly = false;
      document.getElementById("save-button").innerHTML = "Save";
    }
  }
  handleButtonClick = (e) => {
    switch (e.target.id) {
      case "next-button":
        this.handleNextButtonClick();
        break;

      case "run-button":
        this.handleRunButtonClick();
        break;

      case "save-button":
        this.handleSaveButtonClick();
        break;  

      case "previous-button":
        this.handlePreviousButtonClick();
        break;

      case "quit-button":
        this.handleQuitButtonClick();
        break;

      default:
        break;
    }
  };
  handleQuitButtonClick = () => {
    this.playButtonSound();
    if (window.confirm("Are you sure you want to quit?")) {
      this.endGame();
    }
  };
  playButtonSound = () => {
    document.getElementById("button-sound").play();
  };
  startTimer = () => {
    const hrs= Number(this.state.time.hours)
    const mins= Number(this.state.time.minutes)
    const secs = hrs * 60  * 60 +mins*60 +Number(this.state.time.seconds)+"000"
     console.log(secs)
    const countDownTime = Date.now()+parseInt(secs)
    this.interval = setInterval(() => {
      const now = new Date();
      const distance = countDownTime - now;
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(this.interval);
        this.setState(
          {
            time: {
              hours:0,
              minutes: 0,
              seconds: 0,
            },
          },
          () => {
            this.endGame();
          }
        );
      } else {
        this.setState({
          time: {
            hours,
            minutes,
            seconds,
            distance,
          },
        });
      }
    }, 1000);
  };
  handleDisableButton = () => {
    if (
      this.state.currentQuestionIndex === !this.state.numberOfAnsweredQuestions
    ) {
      this.setState({
        nextButtonDisabled: true,
      });
    } else {
      this.setState({
        nextButtonDisabled: false,
      });
    }
    if (
      this.state.previousQuestion === undefined ||
      this.state.currentQuestionIndex === 0
    ) {
      this.setState({
        previousButtonDisabled: true,
      });
    } else {
      this.setState({
        previousButtonDisabled: false,
      });
    }
    if (
      this.state.nextQuestion === undefined ||
      this.state.currentQuestionIndex + 1 === this.state.numberOfQuestions
    ) {
      this.setState({
        nextButtonDisabled: true,
      });
    } else {
      this.setState({
        nextButtonDisabled: false,
      });
    }
  };
  endGame = async() => {
    alert('Assessment has ended!');
    var urlLink = window.location.pathname;
    var an = this.state.code;
    var des = this.state.desc;
    var qn = this.state.questions;
    var tc = this.state.solvedTestc;
    var ans = [];
    for(var k=0; k<qn.length; k++)
    {
      if(tc[k]!==undefined && an[k]!==undefined && des[k]!==undefined)
      ans.push({question: qn[k].question,  answer: an[k],explanation:des[k] ,  test_cases: tc[k]});
      else if(tc[k]===undefined && an[k]===undefined && des[k]===undefined)
      ans.push({question: qn[k].question,  answer: "", explanation:"", test_cases: 0});
      else{
            if(an[k]===undefined)
            ans.push({question: qn[k].question,  answer: "", explanation:des[k] , test_cases: tc[k]});
            else if(tc[k]===undefined)
            ans.push({question: qn[k].question,  answer: an[k],  explanation:des[k] , test_cases: 0});
            else if(des[k]===undefined)
            ans.push({question: qn[k].question,  answer: an[k], explanation:"", test_cases:  tc[k]});
      }
    }

    var res = urlLink.split("/"); 
     console.log({reg_no: sessionStorage.getItem("studentId"),
      token: res[res.length-3],
      ans: ans})
    try {
      var loginRes = await Axios.post("http://localhost:5000/users/storeAns",{ 
      reg_no: sessionStorage.getItem("studentId"),
      token: res[res.length-3],
      ans: ans
    });
    } catch (err) {
      window.alert(err.response.data.msg);
    } 

    var total = 0;
    var max =0;
    var arr = this.state.save_score;
    var arr1 = this.state.questions;
    for(var i=0; i<this.state.numberOfQuestions; i++)
    {
      if(arr[i]!==undefined)
      {total+= Number(arr[i]);}
      max+= Number(arr1[i].mark);
    }
    const playerStats = {
        score: total,
        max_score: max
    };
   
        const viva= this.state.viva;      
        const time = this.state.time
        const playerStats2 =[viva,time]
    setTimeout(() => {
        this.props.history.push(`${urlLink}/mcq`,playerStats2);
    }, 1000);
  };
  handlevideoplay = () =>{
    setInterval(async() => {
      if(this.state.initializing)
      {
        this.state.initializing=false
      }
      // window.location.reload();
      try{
      this.canvasref.current.innerHTML = faceapi.createCanvasFromMedia(this.videoref.current)
      }
      catch(e){
        window.location.reload();
      }
      const displaySize = {
        width:200,
        height:200
      }
      faceapi.matchDimensions(this.canvasref.current,displaySize)
      const detections = await faceapi.detectAllFaces(this.videoref.current,
        new faceapi.TinyFaceDetectorOptions())
        const resizedDetections = faceapi.resizeResults(detections, displaySize)
    this.canvasref.current.getContext('2d').clearRect(0, 0, this.canvasref.width, this.canvasref.height)
    faceapi.draw.drawDetections(this.canvasref.current, resizedDetections)
      if(detections.length > 1)
      {
        window.alert("Warning : More than two faces detected")
      }
    },100)
  }
  addqn1 = () => {
    document.getElementById("myModal1").style.display = "block";
  }
  close1 = () => {
    document.getElementById("myModal1").style.display = "none";
  }
  onCodeChange = (value) => {
    var cid="leg"+(this.state.currentQuestionIndex+1);
    document.getElementById(cid).className="grid-item2 answered"
    let arr = this.state.code;
    arr[this.state.currentQuestionIndex]=value;
    this.setState({code: arr});
    console.log(this.state.code);
  }
  ondescChange = (value,i) => {
    let arr = this.state.desc;
    arr[i]=value;
    this.setState({desc: arr});
    console.log(this.state.desc);
  }
  handleInput(input) {
    console.log(`${input.expression} is shown in the calculator, User clicked the ${input.key}`)
  }
  onResultChange(newResult) {
    console.log(newResult)
    console.log(`${newResult.expression} is validated as ${newResult.result} `)
  }
  onChange5(newValue) {
    // var cid="leg"+(this.state.currentQuestionIndex+1);
    // document.getElementById(cid).className="grid-item2 answered"
    // let arr = this.state.code;
    // arr[this.state.currentQuestionIndex]=newValue;
    // this.setState({code: arr});
    // console.log(this.state.code);
    console.log(newValue);
    this.onCodeChange(newValue);
  }
  render() {
    const { state } = this.props.location;
    let stats;
    const {
      currentQuestion,
      currentQuestionIndex,
      numberOfQuestions,
      time,
    } = this.state;
    const videoConstraints = {
      aspectRatio: 1
    }
    if (state !== undefined) {
      stats=(
        <div>
            <Fragment>
          <audio id="button-sound" src={buttonSound}></audio>
        </Fragment>
        <div className="rightEnd">
        <button className="calc" onClick={() => this.addqn1()}>
        <i class="fa fa-comment"></i>
          </button> {" "}
        <button className="redBtn" id="quit-button" onClick={this.handleButtonClick}>
            End Test
          </button>
        </div> 

        <div id="myModal1" class="modal1" style={{paddingTop: 150}}>
              <div class="modal-content2" style={{height: '34rem', width: '60rem'}}> 
                <span class="close1" onClick={() => this.close1()}>&times;</span>
                <div className='calculator-demo' style={{width: '100%', height: '100%', paddingBottom: 50}}>
                <Layout />
                </div>
                
              </div>
        </div>

        <div className="skill-questions">
          <h2>Beginner-Quiz 1</h2>

          <div>
            <p>
              <span className="mright">
                {currentQuestionIndex + 1} of {numberOfQuestions}
              </span>
              <span className="mleft">
                <span className="mdi mdi-clock-outline mdi-30px"></span>
                {time.hours}:{time.minutes}:{time.seconds}
              </span>
            </p>
          </div>
          
            <div  className="grid-containerz">

          
                  <div className="grid-itemz">
                  <div class="grid-container2 legend">
                      { 
                        Object.keys(this.state.questions).map((El, idx) => (
                        <div className="grid-item2 notVisited" id={"leg"+(parseInt(El)+1)}>{parseInt(El)+1}</div>))
                        }
                      </div>
                  </div>


                  <div className="grid-itemz legend2">
                        <h5 style={{textAlign: 'left'}}>{currentQuestion.question}</h5>
                        <h3 style={{textAlign: 'left'}}>{currentQuestion.question_description}</h3>
                        
                        <div className="skill-options-container"> 
                        <Label className="form-group has-float-label mb-4" style={{backgroundColor: '#f8f8f8'}}>
                              <Input
                                type="textarea"
                                style={{backgroundColor: '#f8f8f8', height: 200}}
                                id="AlgBox"
                                onChange={(e) => this.ondescChange(e.target.value,currentQuestionIndex)}
                              />
                              <IntlMessages id="Write the Algorithm and Pseudocode" />
                              
                        </Label>
                          <Label className="form-group has-float-label mb-4">
                          <select name="categories" 
                          style={{backgroundColor: '#f8f8f8'}}
                          className="form-control" 
                          onChange={(e) =>
                            this.setState({
                              languageId: e.target.value
                            })
                          }
                          >
                            <option value="46">Bash (5.0.0)</option>
                            <option value="50">C (GCC 9.2.0)</option>
                            <option value="54">C++ (GCC 9.2.0)</option>
                            <option value="51">C# (Mono 6.6.0.161)</option>
                            <option value="62">Java (OpenJDK 13.0.1)</option>
                            <option value="63">JavaScript (Node.js 12.14.0)</option>
                            <option value="78">Kotlin (1.3.70)</option>
                            <option value="66">Octave (5.1.0)</option>
                            <option value="68">PHP (7.4.1)</option>
                            <option value="71">Python (3.8.1)</option>
                            <option value="80">R (4.0.0)</option>
                            <option value="82">SQL (SQLite 3.27.2)</option>
                            <option value="83">Swift (5.2.3)</option>
                            <option value="74">TypeScript (3.7.4)</option>
                          </select>
                          <IntlMessages id="Select Language" />
                        </Label>             

                        <Label className="form-group has-float-label mb-4" style={{backgroundColor: '#f8f8f8'}}>
                              <Input
                                type="textarea"
                                style={{backgroundColor: '#f8f8f8', height: 400}}
                                id="codeBox"
                                onChange={(e) => this.onCodeChange(e.target.value,currentQuestionIndex)}
                              />
                              <IntlMessages id="Enter your code" />
                              
                        </Label>
                        
                        {/* <ReactAce
                        mode="java"
                        theme="solarized_dark"
                        setReadOnly= {false}
                        id="codeBox"
                        onChange={this.onChange5}
                        style={{ height: '400px', marginBottom: 20 }}
                        ref={instance => { this.ace = instance; }} // Let's put things into scope
                        setOptions={{
                          enableBasicAutocompletion: false,
                          enableLiveAutocompletion: false,
                          enableSnippets: false,
                          showLineNumbers: true,
                          tabSize: 2,
                          }}
                      /> */}

                        <div className="btm">
                        <button
                          id="run-button"
                          onClick={this.handleButtonClick}
                        >Run</button> {" "}
                        <img id="load" alt="Loading" style={{display: 'none'}}/>
                        <h4 style={{textAlign: 'left', fontSize: 15}} id="testc">Test Cases Solved: 0/4</h4>
                        </div>
                        </div>
                        
                </div>
                <div className="grid-itemz1 facedet">
                     {/* <Webcam 
                      style={{width: 200, paddingTop: 30}}
                      ref={this.videoref}
                      onPlay={this.handlevideoplay}
                    />  */}
                    <video ref={this.videoref} height="200" width="200" onPlay={this.handlevideoplay} autoPlay muted />
                    <canvas className="posi" ref={this.canvasref} height="200" width="200"/>
                </div>
              <div style={{paddingBottom: 100}}></div>
          </div>
        </div>
        <div className="skill-button-container">
          <button
            id="previous-button"
            onClick={this.handleButtonClick}
            className={classnames("", {
              disable: this.state.previousButtonDisabled,
            })}
          >
            <i class="fa fa-arrow-left"></i>
          </button>
          <ProgressBar
            bgcolor={"#1520BF"}
            completed={currentQuestionIndex}
            questions={numberOfQuestions}
          />
          <button
          id="save-button"
          onClick={this.handleButtonClick}
          >
            Save
          </button>
          <button
            id="next-button"
            onClick={this.handleButtonClick}
            className={classnames("", {
              disable: this.state.nextButtonDisabled,
            })}
          >
            Next &nbsp;<i class="fa fa-arrow-right"></i>{" "}
          </button>
        </div>
        </div>
      );
    }
    else{
      stats=(
        <Card>
        <CardBody>
      <h1 className="skill-no-stats">Read Instructions first before attending quiz</h1>
      <li>
        <Link to="/"><button  className="redBtn">Back to Home</button></Link>
      </li>
      </CardBody>
      </Card>
      );
    }

    return (
      <Fragment style={{backgroundColor: 'white'}}>
        <Helmet>
          <title>Test</title>
        </Helmet>
        {stats}
      </Fragment>
    );  
  }
}

export default Play;
