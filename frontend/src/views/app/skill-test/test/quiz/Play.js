import React, { Component, Fragment } from "react";
import { Card, CardBody } from "reactstrap";
import { Helmet } from "react-helmet";
import classnames from "classnames";
import Axios from "axios";
import { Link } from 'react-router-dom'
import ProgressBar from "./progress-bar";
import * as faceapi from 'face-api.js';
import * as canvas from 'canvas';
import Webcam from "react-webcam";
import isEmpty from "../../utils/is-empty";
import buttonSound from "../../assets/audio/button-sound.mp3";
import Calculator from "awesome-react-calculator";
import $ from "jquery";
import './play.css';
import { object } from "prop-types";
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
      selects: {},
      saved: {},
      savestate :[],
      questions: [],
      setCompleted: 0,
      currentQuestion: {},
      nextQuestion: {},
      previousQuestion: {},
      answer: "",
      numberOfQuestions: 0,
      numberOfAnsweredQuestions: 0,
      currentQuestionIndex: 0,
      score: 0,
      result: {},
      correctAnswers: 0,
      wrongAnswers: 0,
      nextButtonDisabled: false,
      previousButtonDisabled: true,
      saveButtonDisabled:true,
      time: {
        hours: 0,
        minutes:0,
        seconds:0
      }, initializing:false
    };
    this.videoref=React.createRef();
    this.canvasref=React.createRef();
    this.myRef1 = React.createRef();
    this.myRef2 = React.createRef();
    this.myRef3 = React.createRef();
    this.myRef4 = React.createRef();
    this.interval = null;
    this.endGame = this.endGame.bind(this);
  }

  componentDidMount = () => {
    const { state } = this.props.location;
    if (state) {
      this.state.questions=state[0]; 
      this.state.time=state[1];
    }
    
    const {
      questions,
      currentQuestion,
      nextQuestion,
      previousQuestion,
    } = this.state;
    this.state.savestate=new Array(questions.length).fill(0);
    // console.log(this.state.savestate)
    this.state.result = Object.assign(
      {},
      ...questions.map((question) => ({ [question.id]: question.answer }))
    );
    console.log(this.state.result);
    // Promise.all([
    //   faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
    //   faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
    //   faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
    //   faceapi.nets.faceExpressionNet.loadFromUri("/models"),
    //   faceapi.nets.ageGenderNet.loadFromUri("/models")
    // ]).then(()=>{
    
    //   console.log("Models loaded")
    //   this.startVideo();
    // });
    this.displayQuestions(
      questions,
      currentQuestion,
      nextQuestion,
      previousQuestion
    );
    
    this.startTimer();
    $(document).bind("contextmenu",function(e){
      e.preventDefault();
      window.alert( "You are restricted to right click" );
    });
    $(document).on('keydown', function ( e ) {
      if ((e.metaKey || e.ctrlKey) && ( String.fromCharCode(e.which).toLowerCase() === 'c') ) {
          e.preventDefault();
          window.alert( "You are restricted to use CTRL + C" );
      }
      if ((e.metaKey || e.ctrlKey) && ( String.fromCharCode(e.which).toLowerCase() === 't') ) {
        e.preventDefault();
        window.alert( "You are restricted to use CTRL + T" );
      }
      if ((e.metaKey || e.ctrlKey) && ( String.fromCharCode(e.which).toLowerCase() === 'n') ) {
        e.preventDefault();
        window.alert( "You are restricted to use CTRL + N" );
      }
      if ((e.metaKey || e.ctrlKey) && ( String.fromCharCode(e.which).toLowerCase() === 'v') ) {
        e.preventDefault();
        window.alert( "You are restricted to use CTRL + V" );
      }
  });
  document.addEventListener("visibilitychange", function() {
    window.alert('Sorry, Assessment has ended! You will redirected to homepage within 2 seconds');
    setTimeout(() => {
      window.location.href='/';
  }, 2000);
  }, false);
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
      this.setState(
        {
          currentQuestion,
          nextQuestion,
          previousQuestion,
          numberOfQuestions: questions.length,
          answer,
        },
        () => {
          this.handleDisableButton();
        }
      );
    }
  };
  handleSaveButtonClick = (e) =>{
    var cid="leg"+(this.state.currentQuestionIndex+1)
    if(this.state.savestate[this.state.currentQuestionIndex]==0)
    {
      document.getElementById(cid).className="grid-item2 marked"
      this.state.savestate[this.state.currentQuestionIndex]=1
      this.state.saved[this.state.currentQuestionIndex + 1]=this.state.answers[
        this.state.currentQuestionIndex + 1
      ] 
      console.log(this.state.saved)
    }
    else if(this.state.savestate[this.state.currentQuestionIndex]==1){
      this.state.savestate[this.state.currentQuestionIndex]=0
      delete this.state.saved[this.state.currentQuestionIndex + 1]
      document.getElementById(cid).className="grid-item2 notVisited"
    }
  }

  handleOptionClick = (e) => {
     console.log(this.state.selects);
    // console.log(this.state.answers);
    // console.log(selectedOpts)
    var cid="leg"+(this.state.currentQuestionIndex+1)
    if(this.state.savestate[this.state.currentQuestionIndex]==0)
    {
    if (
      e.target.className
        .slice(e.target.className.length - 8, e.target.className.length)
        .localeCompare("selected") === -1
    ) {
      
      this.state.selects[
        e.target.className[e.target.className.length - 1]
      ] = e.target.innerHTML.toLowerCase();
      var keys = Object.keys(this.state.selects);
      var nkeys=[]
      keys.forEach(function(element) { 
        nkeys.push(parseInt(element))
        });
      // var keys = Object.keys(this.state.selects);
      selectedOpts[this.state.currentQuestionIndex + 1] = nkeys;
      this.state.answers[
        this.state.currentQuestionIndex + 1
      ] = nkeys;
    
      // console.log(Object.values(selectedOpts)[this.state.currentQuestionIndex])
    }
      if (
        Object.values(selectedOpts)[this.state.currentQuestionIndex].includes(
          parseInt(e.target.id)
        )
      ) {
        if (
          e.target.className
            .slice(e.target.className.length - 8, e.target.className.length)
            .localeCompare("selected") === -1
        ) {
          e.target.className = e.target.className + " selected";
          document.getElementById(cid).className="grid-item2 answered"
        } else {
          const index = Object.values(selectedOpts)[this.state.currentQuestionIndex].indexOf(parseInt(e.target.id));
          if (index > -1) {
            Object.values(selectedOpts)[this.state.currentQuestionIndex].splice(index, 1);
          }
          const index1 = Object.values(this.state.answers)[this.state.currentQuestionIndex].indexOf(parseInt(e.target.id));
          if (index1 > -1) {
            Object.values(this.state.answers)[this.state.currentQuestionIndex].splice(index1, 1);
          }
           e.target.className = "option opt" + e.target.id;
          if(Object.values(selectedOpts)[this.state.currentQuestionIndex].length===0)
          {
            document.getElementById(cid).className="grid-item2 notVisited"
          }
        }
    }
    if(selectedOpts[this.state.currentQuestionIndex + 1].length ==0 || selectedOpts[this.state.currentQuestionIndex + 1]===undefined)
    {
      this.setState({
        saveButtonDisabled:true
      })
    }
    else{
      this.setState({
        saveButtonDisabled:false
      })
    }
    console.log(this.state.answers)
    console.log(selectedOpts)
  }
  else{
    window.alert("Unsave to make changes")
  }
    // console.log(this.state.selects);
    console.log(this.state.answers);
    // console.log(selectedOpts)
    console.log("**END***")
  };

  handleNextButtonClick = () => {
    // console.log(selectedOpts);
    // console.log(this.state.answers)
    this.playButtonSound();
    if(selectedOpts[this.state.currentQuestionIndex + 2]===undefined || selectedOpts[this.state.currentQuestionIndex + 2].length==0)
    {
      this.setState({
        saveButtonDisabled:true
      })
    }
    else{
      this.setState({
        saveButtonDisabled:false
      })
    }
    var cid="leg"+(this.state.currentQuestionIndex+1)
    if (!(this.state.currentQuestionIndex + 1 in selectedOpts)) {
      document.getElementById(cid).className="grid-item2 notAnswered" 
      selectedOpts[this.state.currentQuestionIndex + 1] = [];
    }
    if(selectedOpts[this.state.currentQuestionIndex + 1].length==0)
    {
      document.getElementById(cid).className="grid-item2 notAnswered" 
    }
    if (!selectedOpts[this.state.currentQuestionIndex + 2]) {
      this.myRef2.current.className = "option opt2";
    } else {
      var s = selectedOpts[this.state.currentQuestionIndex + 2];
      if (s.includes(2)) {
        var bool =
          this.myRef2.current.className
            .slice(
              this.myRef2.current.className.length - 8,
              this.myRef2.current.className.length
            )
            .localeCompare("selected") === -1;
        if (bool) {
          this.myRef2.current.className =
            this.myRef2.current.className + " selected";
        }
      } else {
        var bool =
          this.myRef2.current.className
            .slice(
              this.myRef2.current.className.length - 8,
              this.myRef2.current.className.length
            )
            .localeCompare("selected") === -1;
        if (!bool) {
          this.myRef2.current.className = "option opt2";
        }
      }
    }
    if (!selectedOpts[this.state.currentQuestionIndex + 2]) {
      this.myRef3.current.className = "option opt3";
    } else {
      var s = selectedOpts[this.state.currentQuestionIndex + 2];
      if (s.includes(3)) {
        var bool =
          this.myRef3.current.className
            .slice(
              this.myRef3.current.className.length - 8,
              this.myRef3.current.className.length
            )
            .localeCompare("selected") === -1;
        if (bool) {
          this.myRef3.current.className =
            this.myRef3.current.className + " selected";
        }
      } else {
        var bool =
          this.myRef3.current.className
            .slice(
              this.myRef3.current.className.length - 8,
              this.myRef3.current.className.length
            )
            .localeCompare("selected") === -1;
        if (!bool) {
          this.myRef3.current.className = "option opt3";
        }
      }
    }
    if (!selectedOpts[this.state.currentQuestionIndex + 2]) {
      this.myRef1.current.className = "option opt1";
    } else {
      var s = selectedOpts[this.state.currentQuestionIndex + 2];
      if (s.includes(1)) {
        var bool =
          this.myRef1.current.className
            .slice(
              this.myRef1.current.className.length - 8,
              this.myRef1.current.className.length
            )
            .localeCompare("selected") === -1;
        if (bool) {
          this.myRef1.current.className =
            this.myRef1.current.className + " selected";
        }
      } else {
        var bool =
          this.myRef1.current.className
            .slice(
              this.myRef1.current.className.length - 8,
              this.myRef1.current.className.length
            )
            .localeCompare("selected") === -1;
        if (!bool) {
          this.myRef1.current.className = "option opt1";
        }
      }
    }
    if (!selectedOpts[this.state.currentQuestionIndex + 2]) {
      this.myRef4.current.className = "option opt4";
    } else {
      var s = selectedOpts[this.state.currentQuestionIndex + 2];
      if (s.includes(4)) {
        var bool =
          this.myRef4.current.className
            .slice(
              this.myRef4.current.className.length - 8,
              this.myRef4.current.className.length
            )
            .localeCompare("selected") === -1;
        if (bool) {
          this.myRef4.current.className =
            this.myRef4.current.className + " selected";
        }
      } else {
        var bool =
          this.myRef4.current.className
            .slice(
              this.myRef4.current.className.length - 8,
              this.myRef4.current.className.length
            )
            .localeCompare("selected") === -1;
        
        if (!bool) {
          
          this.myRef4.current.className = "option opt4";
        }
      }
    }
    const select = this.state.answers[this.state.currentQuestionIndex + 2];
    const news = typeof select === "undefined" ? {} : select;
    if (this.state.nextQuestion !== undefined) {
      this.setState(
        (prevState) => ({
          selects: news,
          currentQuestionIndex: prevState.currentQuestionIndex + 1,
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
  handlePreviousButtonClick = () => {
    this.playButtonSound();
    if(selectedOpts[this.state.currentQuestionIndex].length ==0 )
    {
      this.setState({
        saveButtonDisabled:true
      })
    }
    else{
      this.setState({
        saveButtonDisabled:false
      })
    }
    var s = selectedOpts[this.state.currentQuestionIndex];
    if (s.includes(2)) {
      var bool =
        this.myRef2.current.className
          .slice(
            this.myRef2.current.className.length - 8,
            this.myRef2.current.className.length
          )
          .localeCompare("selected") === -1;
      if (bool) {
        this.myRef2.current.className =
          this.myRef2.current.className + " selected";
      }
    } else {
      var bool =
        this.myRef2.current.className
          .slice(
            this.myRef2.current.className.length - 8,
            this.myRef2.current.className.length
          )
          .localeCompare("selected") === -1;
      if (!bool) {
        this.myRef2.current.className = "option opt2";
      }
    }
    if (s.includes(3)) {
      var bool =
        this.myRef3.current.className
          .slice(
            this.myRef3.current.className.length - 8,
            this.myRef3.current.className.length
          )
          .localeCompare("selected") === -1;
      if (bool) {
        this.myRef3.current.className =
          this.myRef3.current.className + " selected";
      }
    } else {
      var bool =
        this.myRef3.current.className
          .slice(
            this.myRef3.current.className.length - 8,
            this.myRef3.current.className.length
          )
          .localeCompare("selected") === -1;
      
      if (!bool) {
               this.myRef3.current.className = "option opt3";
      }
    }
    if (s.includes(1)) {
      var bool =
        this.myRef1.current.className
          .slice(
            this.myRef1.current.className.length - 8,
            this.myRef1.current.className.length
          )
          .localeCompare("selected") === -1;
      if (bool) {
        this.myRef1.current.className =
          this.myRef1.current.className + " selected";
      }
    } else {
      var bool =
        this.myRef1.current.className
          .slice(
            this.myRef1.current.className.length - 8,
            this.myRef1.current.className.length
          )
          .localeCompare("selected") === -1;
      if (!bool) {
        this.myRef1.current.className = "option opt1";
      }
    }
    if (s.includes(4)) {
      var bool =
        this.myRef4.current.className
          .slice(
            this.myRef4.current.className.length - 8,
            this.myRef4.current.className.length
          )
          .localeCompare("selected") === -1;
      if (bool) {
        this.myRef4.current.className =
          this.myRef4.current.className + " selected";
      }
    } else {
      var bool =
        this.myRef4.current.className
          .slice(
            this.myRef4.current.className.length - 8,
            this.myRef4.current.className.length
          )
          .localeCompare("selected") === -1;
      if (!bool) {
        this.myRef4.current.className = "option opt4";
      }
    }

    let select = this.state.answers[this.state.currentQuestionIndex];
    const news = typeof select === "undefined" ? {} : select;
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

  handleButtonClick = (e) => {
    switch (e.target.id) {
      case "next-button":
        this.handleNextButtonClick();
        
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
  validate = () => {
    var { score, correctAnswers, wrongAnswers } = this.state;
    var correct = Object.keys(this.state.result);
    var entered = Object.keys(this.state.saved);
    for (var i = 0; i < correct.length; i++) {
      if (entered.includes(correct[i])) {
        console.log(JSON.stringify(this.state.saved[correct[i]].sort((a, b) => a - b)));
        console.log(
          JSON.stringify(this.state.result[correct[i]].sort((a, b) => a - b)).toLowerCase()
        );
        if (
          JSON.stringify(this.state.saved[correct[i]].sort((a, b) => a - b)) ===
          JSON.stringify(this.state.result[correct[i]].sort((a, b) => a - b)).toLowerCase()
        ) {
          score = score + 1;
          correctAnswers = correctAnswers + 1;
          //numberOfAnsweredQuestions=numberOfAnsweredQuestions+1;
        } else {
          wrongAnswers = wrongAnswers + 1;
          //numberOfAnsweredQuestions=numberOfAnsweredQuestions+1;
        }
      }
    }

    console.log(wrongAnswers);
    console.log(correctAnswers);
    console.log(score);
    this.state.score = score;
    this.state.correctAnswers = correctAnswers;
    this.state.wrongAnswers = wrongAnswers;
  };
  endGame = async() => {
    this.validate();
    alert('Assessment has ended!');
    // const { state } = this;
    var urlLink = window.location.pathname;
    var res = urlLink.split("/"); 
    try {
      var loginRes = await Axios.post("http://localhost:5000/users/storeScore",{ 
      reg_no: sessionStorage.getItem("studentId"),
      token: res[res.length-4],
      score: this.state.score
    });
    } catch (err) {
      window.alert(err.response.data.msg);
    } 
    const playerStats = {
        score: this.state.score,
        numberOfQuestions: this.state.numberOfQuestions,
        numberOfAnsweredQuestions: this.state.correctAnswers + this.state.wrongAnswers,
        correctAnswers: this.state.correctAnswers,
        wrongAnswers: this.state.wrongAnswers,
    };
    console.log(this.state.answers)
    console.log(playerStats)
    setTimeout(() => {
        this.props.history.push(`${urlLink}/summary`,playerStats);
    }, 1000);
  };
  handlevideoplay = () =>{
    setInterval(async() => {
      if(this.state.initializing)
      {
        this.state.initializing=false
      }
      this.canvasref.current.innerHTML = faceapi.createCanvasFromMedia(this.videoref.current)
      const displaySize = {
        width:200,
        height:200
      }
      faceapi.matchDimensions(this.canvasref.current,displaySize)
      const detections = await faceapi.detectAllFaces(this.videoref.current,
        new faceapi.TinyFaceDetectorOptions())
        const resizedDetections = faceapi.resizeResults(detections, displaySize)
        try{
          this.canvasref.current.getContext('2d').clearRect(0, 0, this.canvasref.width, this.canvasref.height)
        }
    catch(e){
      window.location.reload();
    }
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
  
  handleInput(input) {
    console.log(`${input.expression} is shown in the calculator, User clicked the ${input.key}`)
  }
 
  onResultChange(newResult) {
    console.log(newResult)
    console.log(`${newResult.expression} is validated as ${newResult.result} `)
  }

  render() {
    const { state } = this.props.location;
    let stats;
    const {
      currentQuestion,
      currentQuestionIndex,
      numberOfQuestions,
      time,
      savestate
    } = this.state;
    const videoConstraints = {
      aspectRatio: 1
    }
    // const disableopts = savestate[currentQuestionIndex]===0 ? true : (window.alert("First unsave to make changes"))
    if (state !== undefined) {
      stats=(
        <Fragment>
    <Fragment>
          <audio id="button-sound" src={buttonSound}></audio>
        </Fragment>
        <div className="rightEnd">
        <button className="calc" onClick={() => this.addqn1()}>
        <i class="fa fa-calculator"></i>
          </button> {" "}
        <button className="redBtn" id="quit-button" onClick={this.handleButtonClick}>
            End Test
          </button>
        </div> 

        <div id="myModal1" class="modal1">
              <div class="modal-content1"> 
                <span class="close1" onClick={() => this.close1()}>&times;</span>
                <div className='calculator-demo' style={style}>
                  <Calculator
                    onNewInput={this.handleInput}
                    onResultChange={this.onResultChange}/>
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
                        <center>
                        <div className="skill-options-container">
                          <p
                            onClick={this.handleOptionClick}
                            ref={this.myRef1}
                            className="option opt1"
                            id="1"
                          >
                            {currentQuestion.optionA}
                          </p>
                          <p
                            onClick={this.handleOptionClick}
                            ref={this.myRef2}
                            className="option opt2"
                            id="2"
                          >
                            {currentQuestion.optionB}
                          </p>
                        </div>

                        <div className="skill-options-container">
                          <p
                            onClick={this.handleOptionClick}
                            ref={this.myRef3}
                            className="option opt3"
                            id="3"
                          >
                            {currentQuestion.optionC}
                          </p>
                          <p
                            onClick={this.handleOptionClick}
                            ref={this.myRef4}
                            className="option opt4"
                            id="4"
                          >
                            {currentQuestion.optionD}
                          </p>
                          </div>
                          </center>
                </div>
                <div className="grid-itemz1 facedet">
                    {/* <Webcam 
                      style={{width: 200, paddingTop: 30}}
                      ref={this.videoref}
                      onPlay={this.handlevideoplay}
                    /> */}
                    {/* <video ref={this.videoref} height="200" width="200" onPlay={this.handlevideoplay} autoPlay muted />
                    <canvas className="posi" ref={this.canvasref} height="200" width="200"/> */}
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
          <button id="save-button" onClick={this.handleSaveButtonClick} className={classnames("", {
              disable: this.state.saveButtonDisabled,
            })}>
            {savestate[currentQuestionIndex] == 0 ? ("Save"): ("Unsave")}
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
        </Fragment>
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
      
      )
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