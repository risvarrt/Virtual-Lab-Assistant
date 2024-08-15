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
      exam_title: "",
      class_name: "",
      class_code: "",
      proctored: false,
      date: "",
      startTime: "",
      endTime: "",
      questions: [],
      coding_questions: [],
      slots: [],
      classes: [],
      codes: [],
      nextSlot: "Slot-1",
      file: "",
      file1: "",
      onimpqn: 0
    };
  }

  componentDidMount = async () => {
    var player = await Axios.post("http://localhost:5000/users/classList",{ 
                college_id: sessionStorage.getItem("collegeId"),
                staff_id: sessionStorage.getItem("staffId")
                });
    var arr = [];
    var arr1 = [];
    for(var i=0; i<player.data.length; i++)
    {
      arr.push(player.data[i].class_name);
      arr1.push(player.data[i].class_code);
    }
    this.setState({
        classes: arr,
        codes: arr1
      })
}

renderQuestions = (questionn,index) =>{
  return(
    <div  key={index}>
    <div className="grid-container">
    <p className="grid-item item5">{`${questionn.id}. ${questionn.question}`}</p>
    <p className="grid-item item3">{`a. ${questionn.optionA}`}</p>
    <p className="grid-item item3">{`b. ${questionn.optionB}`}</p>  
    <p className="grid-item item3">{`c. ${questionn.optionC}`}</p>
    <p className="grid-item item3">{`d. ${questionn.optionD}`}</p>
  </div>
  <br/><br/>
  </div>
  )
}

  addqn = () => {
    document.getElementById("myModal").style.display = "block";
  }

  close = () => {
    document.getElementById("myModal").style.display = "none";
  }

  renderCodingQuestions = (questionn,index) =>{
    return(
      <div  key={index}>
      <p style={{fontSize: 18}}>{`${index+1}. ${questionn.question}`}</p>
      <p style={{fontSize: 18}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`${questionn.question_description}`}</p>
    </div>
    )
  }

  renderSlotQuestions2 = (questionn,index) =>{
    if(typeof questionn !== "object")
    {
      return(
        <div  key={index}>
          <br/>
          <u><p style={{fontSize: 20}}>{`${questionn}`}</p></u>
        </div>
      )
    }
    else
    {return(
      <div  key={index}>
      <p style={{fontSize: 18}}>{`${index}. ${questionn.question}`}</p>
      <p style={{fontSize: 18}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`${questionn.question_description}`}</p>
    </div>
    )}
  }

  renderSlotQuestions = (questionn,index) =>{
    return(questionn.map(this.renderSlotQuestions2));
  }

  addqn1 = () => {
    document.getElementById("myModal1").style.display = "block";
  }

  close1 = () => {
    document.getElementById("myModal1").style.display = "none";
  }

  close2 = () => {
    document.getElementById("myModal2").style.display = "none";
  }

  close3 = () => {
    document.getElementById("myModal3").style.display = "none";
  }

  onNext = () => {
    document.getElementById("reg1").style="display: none;"
    document.getElementById("reg2").style="display: block;"
    document.getElementById("reg3").style="display: none;"
    document.getElementById("2a").style="background-color: #000;"
    document.getElementById("1a").style="background-color: #922c88;"
    document.getElementById("3a").style="background-color: #922c88;"
  }

  onNext2 = () => {
    document.getElementById("reg1").style="display: none;"
    document.getElementById("reg2").style="display: none;"
    document.getElementById("reg3").style="display: block;"
    document.getElementById("3a").style="background-color: #000;"
    document.getElementById("1a").style="background-color: #922c88;"
    document.getElementById("2a").style="background-color: #922c88;"
  }

  prev = () => {
    document.getElementById("reg2").style="display: none;"
    document.getElementById("reg1").style="display: block;"
    document.getElementById("reg3").style="display: none;"
    document.getElementById("1a").style="background-color: #000;"
    document.getElementById("2a").style="background-color: #922c88;"
    document.getElementById("3a").style="background-color: #922c88;"
  }

  onAddQn = () => {
    let arr = this.state.questions;
    var elems = document.getElementById("add_solution").value;
    var answers = elems.split(" ");
    arr.push({
      id: arr.length+1,
      question: document.getElementById("add_question").value,
      optionA: document.getElementById("add_option1").value,
      optionB: document.getElementById("add_option2").value,
      optionC: document.getElementById("add_option3").value,
      optionD: document.getElementById("add_option4").value,
      hint: document.getElementById("add_hint").value,
      mark: document.getElementById("add_mark").value,
      answer: answers
    });
    this.setState({questions: arr});
    // console.log(this.state.questions);
    document.getElementById("add_question").value="";
    document.getElementById("add_option1").value="";
    document.getElementById("add_option2").value="";
    document.getElementById("add_option3").value="";
    document.getElementById("add_option4").value="";
    document.getElementById("add_hint").value="";
    document.getElementById("add_mark").value="";
    document.getElementById("add_solution").value="";
    this.close();
  }

  addslot1 = () => {
    let x = this.state.coding_questions.length+1;
    let arr = [];
    let arr1 = this.state.slots;
    var str = "Slot-"+x
    arr.push(str);
    for(var i=0; i<arr1.length; i++)
    {arr.push(arr1[i]);}
    this.state.coding_questions.push(arr);
    this.setState({slots: []});
    var y = this.state.coding_questions.length+1
    var str2 = "Slot-"+ y;
    this.setState({nextSlot: str2});
    console.log(this.state.coding_questions);
  }

  onAddCodingQn = () => {
    let arr = this.state.slots;
    arr.push({
      id: arr.length+1,
      question: document.getElementById("add_coding_question").value,
      question_description: document.getElementById("add_question_description").value,
      testcase1Inp: document.getElementById("inp1").value,
      testcase1Op: document.getElementById("op1").value,
      testcase2Inp: document.getElementById("inp2").value,
      testcase2Op: document.getElementById("op2").value,
      testcase3Inp: document.getElementById("inp3").value,
      testcase3Op: document.getElementById("op3").value,
      testcase4Inp: document.getElementById("inp4").value,
      testcase4Op: document.getElementById("op4").value,
      hint: document.getElementById("coding_hint").value,
      mark: document.getElementById("coding_mark").value,
      solution: document.getElementById("coding_solution").value
    });
    this.setState({slots: arr});
    document.getElementById("add_coding_question").value="";
    document.getElementById("add_question_description").value="";
    document.getElementById("inp1").value="";
    document.getElementById("op1").value="";
    document.getElementById("inp2").value="";
    document.getElementById("op2").value="";
    document.getElementById("inp3").value="";
    document.getElementById("op3").value="";
    document.getElementById("inp4").value="";
    document.getElementById("op4").value="";
    document.getElementById("coding_hint").value="";
    document.getElementById("coding_mark").value="";
    document.getElementById("coding_solution").value="";
    this.close1();
  }

  classCode = (e) => {
    this.setState({class_name: e.target.value});
    var arr = this.state.classes;
    var arr2 = this.state.codes;
    var i = arr.indexOf(e.target.value);
    this.setState({class_code: arr2[i]});
  }

// ontimeStore = (e) => {
//   var time = e.target.value;
//   var time1 = time.split(":");
//   if(time1[0] !== null && time1[1] !== null)
//   {this.setState({
//     exam_duration: {
//       hours: time1[0],
//       minutes:time1[1],
//       seconds:0
//     }
//   })}
// }

  onUserRegister = async(e) => {
    e.preventDefault();
    if(this.state.onimpqn == 0){
    let x = this.state.coding_questions.length+1;
    let arr = [];
    let arr1 = this.state.slots;
    var str = "Slot-"+x
    arr.push(str);
    for(var i=0; i<arr1.length; i++)
    {arr.push(arr1[i]);}
    this.state.coding_questions.push(arr);
    }
    this.setState({slots: []});
    this.setState({nextSlot: ""});

    var arr2 = this.state.coding_questions;
    var ans = [];
    
    for(var j=0; j<arr2.length; j++)
    {
      var slot = "";
      var qns = [];
      for(var k=0; k<arr2[j].length; k++)
      {
        if(typeof arr2[j][k] !== "object")
         { var num = j+1;
           slot = num;
          }
        else
        {qns.push(arr2[j][k]);}
      }
      ans.push({
        slot: slot,
        question: qns
      });
    }

    try {
      var loginRes = await Axios.post("http://localhost:5000/users/assessment",{ 
      college_id: sessionStorage.getItem("collegeId"),
      staff_id: sessionStorage.getItem("staffId"),
      class_code: this.state.class_code,
      exam_title: this.state.exam_title,
      class_name: this.state.class_name,
      proctored: this.state.proctored,
      startTime:this.state.startTime,
      endTime: this.state.endTime,
      date: this.state.date,
      questions: this.state.questions,
      coding_questions: ans
    });
      var str1 = loginRes.data.token; 
      var array = loginRes.data.students;
      console.log(loginRes.data);
      var lk = "http://localhost:3000/app/assessment/"+str1+"/test";
      window.alert("Exam Created!!!\nSend the below link to your students to attend this test:\n"+lk);
      for(var l=0; l<array.length; l++){
      var dataToSubmit={
        email:array[l].email,
        name:array[l].name,
        link:lk,
        staffname:sessionStorage.getItem("name"),
        date:this.state.date,
        start:this.state.startTime,
        end:this.state.endTime,
        testname:this.state.exam_title
      }
      Axios.post('http://localhost:5000/api/sendMail',dataToSubmit);
      console.log(dataToSubmit);
    }
      console.log(lk);
      this.props.history.push("/user/staff/dashboard");
    } catch (err) {
      window.alert(err.response.data.msg);
    } 
  }

  impqn = () => {
    document.getElementById("myModal2").style.display = "block";

  }

  onImpQn = async(e) => {
    e.preventDefault();
    const data = new FormData();
    var cid = sessionStorage.getItem("collegeId");
    console.log(cid)
    data.append("name", cid);
    data.append("file", this.state.file);
        try {
          var loginRes = await Axios.post("http://localhost:5000/users/codingxlsx", data);
          window.alert("Questions Added");
          this.setState({coding_questions: loginRes.data.coding_questions});
          console.log(loginRes.data.coding_questions);
          document.getElementById("addq").style.display = "none";
          document.getElementById("slt").style.display = "none";
          var num = loginRes.data.coding_questions.length + 1;
          this.setState({nextSlot: "Slot-"+num});
        } catch (err) {
          window.alert("Check whether your excel file goes with the constraints");
        }
    this.setState({onimpqn: 1});    
    this.close2();
  }

  onFileLoaded = (e) => {
    this.setState({
      file: e.target.files[0],
    })
    var fileName = e. target. files[0]. name;
    document.getElementById("choose").innerHTML= fileName + ' has been selected.';
  }



  impqn1 = () => {
    document.getElementById("myModal3").style.display = "block";
  }

  onImpQn1 = async(e) => {
    e.preventDefault();
    const data = new FormData();
    var cid = sessionStorage.getItem("collegeId");
    console.log(cid)
    data.append("name", cid);
    data.append("file", this.state.file1);
        try {
          var loginRes = await Axios.post("http://localhost:5000/users/vivaxlsx", data);
          window.alert("Questions Added");
          this.setState({questions: loginRes.data.questions});
          console.log(loginRes.data.questions);
        } catch (err) {
          window.alert("Check whether your excel file goes with the constraints");
        }    
    this.close3();
  }

  onFileLoaded1 = (e) => {
    this.setState({
      file1: e.target.files[0],
    })
    var fileName = e. target. files[0]. name;
    document.getElementById("choose1").innerHTML= fileName + ' has been selected.';
  }

renderClass = (player,index) => {
          return(
            <>
            <option id={"class-" +index} value={player}>{player}</option>
            </>
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
                <a href="#" id="2a" onClick={() => this.onNext()}><i class="fa fa-edit"></i></a> 
                <a href="#" id="3a" onClick={() => this.onNext2()}><i class="fa fa-comments-o"></i></a> 
                </div>
            </div>
            <div className="form-side"  style={{width: '100%'}}>
              <Form>

              <div id="reg1" style={{display: "block"}}>  

              <CardTitle className="mb-4">
                  <IntlMessages id="Exam Information" />
                </CardTitle>

                  <Label className="form-group has-float-label mb-4">
                    <Input
                      type="text"
                      onChange={(e) =>
                        this.setState({
                          exam_title: e.target.value,
                        })
                      }
                    />
                    <IntlMessages id="Exam Title" />
                  </Label>

                  <Label className="form-group has-float-label mb-4">
                  <select name="categories" 
                    className="form-control" 
                    onChange={(e) => this.classCode(e)}
                    >
                      <option value="" style={{display: 'none'}}></option>
                      {this.state.classes.map(this.renderClass)}
                    </select>
                    <IntlMessages id="Class" />
                  </Label>

                  <Label  className="lbl">Proctored</Label><br/>
                  <Label className="form-group mb-4 switch" style={{left: 5, marginBottom: 10}}>
                  <input 
                  type="checkbox"
                  onChange={(e) =>
                    this.setState({
                      proctored: e.target.checked,
                    })
                  }
                  />
                  <span class="slider round"></span>
                  </Label><br/><br/> 
                  <div className="time">
                  <Label className="form-group has-float-label mb-4" style={{width: '50%'}}>
                    <Input
                      type="date"
                      onChange = {(e)=>this.setState({date: e.target.value})}
                    />
                    <IntlMessages id="Exam Date" />
                  </Label>
                  &nbsp;&nbsp;&nbsp;
                  <Label className="form-group has-float-label mb-4">
                    <Input
                      type="time"
                      onChange = {(e)=>this.setState({startTime: e.target.value})}
                    />
                    <IntlMessages id="Start Time" />
                  </Label>
                  &nbsp;&nbsp;&nbsp;
                  <Label className="form-group has-float-label mb-4">
                    <Input
                      type="time"
                      onChange = {(e)=>this.setState({endTime: e.target.value})}
                    />
                    <IntlMessages id="End Time" />
                  </Label>
                  </div>
                  
                  <div className="d-flex justify-content-end align-items-center">
                    <Button
                      color="primary"
                      className="btn-shadow"
                      size="lg"
                      onClick={() => this.onNext()}
                    >
                      <IntlMessages id="user.next" />
                    </Button>
                  </div>
              </div> 

              <div id="reg2" style={{display: "none"}}>    
          <CardTitle className="mb-4">
                <u><IntlMessages id="Coding Questions" /></u>
              </CardTitle>{" "}
              <Button
                color="default"
                className="btn-shadow"
                size="lg"
                style={{borderRadius: 0}}
                onClick={(e) => this.impqn()}
              >
                <IntlMessages id="Import Coding Questions" />
              </Button>
                <br/>
              <div id="myModal2" class="modal">
              <div class="modal-content"> 
                <span class="close" onClick={() => this.close2()}>&times;</span>
                <br/><br/>
            
                <div id="impqns">
                  <CardTitle className="mb-4"><IntlMessages id="Add Questions via Excel Sheet" /></CardTitle>
                  <CardTitle className="mb-4">
                  <p className="para">
                  <b>Constraints:</b><br/>
                  1. Make sure you have followed all the constraints that have been mentioned.<br/>
                  2. The excel sheet which you upload, should have the columns 'slot', 'id', 'question', 'question_description', 'testcase1Inp', 'testcase1Op', 'testcase2Inp', 'testcase2Op', 'testcase3Inp', 'testcase3Op', 'testcase4Inp', 'testcase4Op', in it.<br/>
                  3. The column name should be exactly as mentioned. Else the questions won't be created.<br/><br/>
                  <b>Note:</b> Make sure that all the column names are Case Sensitive.
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
              <br/>



              <div>
              {
              this.state.coding_questions.length>0?  
              this.state.coding_questions.map(this.renderSlotQuestions)
              :(<></>)
              }
              <div id="slt">
              <br/>
              <u><p style={{fontSize: 20}}>{this.state.nextSlot}</p></u>
              {this.state.slots.map(this.renderCodingQuestions)}
              </div>
              </div>
              
              <br/><br/>

              <div className="d-flex justify-content-start align-items-center">
              
              {this.state.slots.length!==0?
              <>
              <Button
                color="default"
                className="btn-shadow"
                size="lg"
                style={{borderRadius: 0}} 
                id="myBtn"
                onClick={() => this.addslot1()}
              >
                <IntlMessages id="Add New Slot" />
              </Button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              </>
              :(<></>)
              }
              <Button
                color="default"
                className="btn-shadow"
                size="lg"
                id="addq"
                style={{borderRadius: 0}}
                onClick={(e) => this.addqn1()}
              >
                <IntlMessages id="Add Questions" />
              </Button>
              </div>

              <div id="myModal1" class="modal">
              <div class="modal-content"> 
                <span class="close" onClick={() => this.close1()}>&times;</span>
                <br/><br/>
            
              <div id="addqns1">        
                <CardTitle className="mb-4"><IntlMessages id="Add Question" /></CardTitle>
                <Label className="form-group has-float-label mb-4"><Input type="text" id="add_coding_question" /><IntlMessages id="Question Title" /></Label>
                <Label className="form-group has-float-label mb-4"><Input type="textarea" id="add_question_description"/><IntlMessages id="Question Description" /></Label>
                <Label  className="lbl">Test Case #1</Label><br/><br/>
                <Label className="form-group has-float-label mb-4"><Input type="text" id="inp1" /><IntlMessages id="Input" /></Label>
                <Label className="form-group has-float-label mb-4"><Input type="text" id="op1"/><IntlMessages id="Output" /></Label>
                <Label  className="lbl">Test Case #2</Label><br/><br/>
                <Label className="form-group has-float-label mb-4"><Input type="text" id="inp2" /><IntlMessages id="Input" /></Label>
                <Label className="form-group has-float-label mb-4"><Input type="text" id="op2"/><IntlMessages id="Output" /></Label>
                <Label  className="lbl">Test Case #3</Label><br/><br/>
                <Label className="form-group has-float-label mb-4"><Input type="text" id="inp3" /><IntlMessages id="Input" /></Label>
                <Label className="form-group has-float-label mb-4"><Input type="text" id="op3"/><IntlMessages id="Output" /></Label>
                <Label  className="lbl">Test Case #4</Label><br/><br/>
                <Label className="form-group has-float-label mb-4"><Input type="text" id="inp4" /><IntlMessages id="Input" /></Label>
                <Label className="form-group has-float-label mb-4"><Input type="text" id="op4"/><IntlMessages id="Output" /></Label><br/><br/>
                <Label className="form-group has-float-label mb-4"><Input type="text" id="coding_hint"/><IntlMessages id="Hint" /></Label>
                <Label className="form-group has-float-label mb-4"><Input type="number" id="coding_mark"/><IntlMessages id="Mark" /></Label>
                <Label className="form-group has-float-label mb-4"><Input type="textarea" id="coding_solution"/><IntlMessages id="Solution" /></Label>
                <div className="d-flex justify-content-end align-items-center"><Button color="primary" className="btn-shadow" size="lg" onClick={(e) => this.onAddCodingQn(e)}><IntlMessages id="Add Question" /></Button></div>
              </div>

              </div>
              </div>
              <br/><br/>


              <div className="d-flex justify-content-end align-items-center">

                  <Button
                    color="primary"
                    className="btn-shadow"
                    size="lg"
                    onClick={() => this.prev()}
                  >
                    <IntlMessages id="Previous" />
                  </Button>
                  &nbsp;&nbsp;
                  <Button
                    color="primary"
                    className="btn-shadow"
                    size="lg"
                    onClick={(e) => this.onNext2()}
                  >
                    <IntlMessages id="Next" />
                  </Button>

                </div>     
              </div>

              <div id="reg3" style={{display: "none"}}>    
          <CardTitle className="mb-4">
                <u><IntlMessages id="Viva Questions" /></u>
              </CardTitle>{" "}

              <Button
                color="default"
                className="btn-shadow"
                size="lg"
                style={{borderRadius: 0}}
                onClick={(e) => this.impqn1()}
              >
                <IntlMessages id="Import Viva Questions" />
              </Button>
                <br/>
              <div id="myModal3" class="modal">
              <div class="modal-content"> 
                <span class="close" onClick={() => this.close3()}>&times;</span>
                <br/><br/>
            
                <div id="impqns">
                  <CardTitle className="mb-4"><IntlMessages id="Add Questions via Excel Sheet" /></CardTitle>
                  <CardTitle className="mb-4">
                  <p className="para">
                  <b>Constraints:</b><br/>
                  1. Make sure you have followed all the constraints that have been mentioned.<br/>
                  2. The excel sheet which you upload, should have the columns 'id', 'question', 'optionA', 'optionB', 'optionC', 'optionD', 'hint', 'mark', 'answer' in it.<br/>
                  3. The column names should be exactly as mentioned. Else the questions won't be created.<br/><br/>
                  <b>Note:</b> Make sure that all the column names are Case Sensitive.
                  </p>
                  </CardTitle>
                  <Label >
                      <Input type="file" accept=".xlsx" className="form-group has-float-label mb-4" id="file1" onChange={(e) => this.onFileLoaded1(e) }/>
                      <label for="file1">CHOOSE A FILE</label>
                      <p id="choose1">No items selected</p>
                  </Label>
                  <div className="d-flex justify-content-end align-items-center"><Button color="primary" className="btn-shadow" size="lg" onClick={(e) => this.onImpQn1(e)}><IntlMessages id="Add Questions" /></Button></div>
                </div> 

              </div>
              </div>
              <br/>

              <div>
              {this.state.questions.map(this.renderQuestions)}
              </div>
              
              <br/><br/>

              <div className="d-flex justify-content-start align-items-center">
              
              <Button
                color="default"
                className="btn-shadow"
                size="lg"
                style={{borderRadius: 0}} 
                id="myBtn"
                onClick={() => this.addqn()}
              >
                <IntlMessages id="Add Questions" />
              </Button>
              </div>

              <div id="myModal" class="modal">
              <div class="modal-content"> 
                <span class="close" onClick={() => this.close()}>&times;</span>
                <br/><br/>
              <div id="addqns">        
                <CardTitle className="mb-4"><IntlMessages id="Add Question" /></CardTitle>
                <Label className="form-group has-float-label mb-4"><Input type="textarea" id="add_question"/><IntlMessages id="Question" /></Label>
                <Label className="form-group has-float-label mb-4"><Input type="text" id="add_option1" /><IntlMessages id="Option 1" /></Label>
                <Label className="form-group has-float-label mb-4"><Input type="text" id="add_option2"/><IntlMessages id="Option 2" /></Label>
                <Label className="form-group has-float-label mb-4"><Input type="text" id="add_option3"/><IntlMessages id="Option 3" /></Label>
                <Label className="form-group has-float-label mb-4"><Input type="text" id="add_option4"/><IntlMessages id="Option 4" /></Label>
                <Label className="form-group has-float-label mb-4"><Input type="text" id="add_hint"/><IntlMessages id="Hint" /></Label>
                <Label className="form-group has-float-label mb-4"><Input type="number" id="add_mark"/><IntlMessages id="Mark" /></Label>
                <Label className="form-group has-float-label mb-4"><Input type="textarea" id="add_solution"/><IntlMessages id="Solution (Choice in number)" /></Label>
                <div className="d-flex justify-content-end align-items-center"><Button color="primary" className="btn-shadow" size="lg" onClick={(e) => this.onAddQn(e)}><IntlMessages id="Add Question" /></Button></div>
              </div>

              </div>
              </div>
              <br/><br/>


              <div className="d-flex justify-content-end align-items-center">

                  <Button
                    color="primary"
                    className="btn-shadow"
                    size="lg"
                    onClick={() => this.onNext()}
                  >
                    <IntlMessages id="Previous" />
                  </Button>
                  &nbsp;&nbsp;
                  <Button
                    color="primary"
                    className="btn-shadow"
                    size="lg"
                    onClick={(e) => this.onUserRegister(e)}
                  >
                    <IntlMessages id="Finish" />
                  </Button>

                </div>     
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
})(CollegeRegister);
