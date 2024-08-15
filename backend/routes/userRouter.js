const router = require("express").Router();
const User = require("../models/userModel");
const Staff = require("../models/staffModel");
const Assessment = require("../models/assessment");
const Student =  require("../models/student");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const bcrypt = require("bcryptjs");
const { deleteOne } = require("../models/userModel");
const xlsxtojson = require("xlsx-to-json");
const multer = require("multer");
const upload = multer();
const fs = require("fs");
const { promisify } = require("util");
const { join } = require("path");
const pipeline = promisify(require("stream").pipeline);
const axios = require("axios");
var mongoose = require('mongoose');
const internal = require("assert");

router.post("/getAssessmentQn", async (req, res) => {
    try {
      let { token, reg_no } = req.body;
      const user1 = await Assessment.findById(token);
      
      const isStudent = await Assessment.findOne({ _id: token, 'students.reg_no': reg_no });
        if (!isStudent)
            return res.status(400).json({ msg: "You need to be a student of this class, to attend this test" });
      
      var slot;
      const j = user1.students.map(function(e) { return e.reg_no; }).indexOf(reg_no);
      
      if(!user1.attended.includes(reg_no))   
      {
      var now = user1.attended.length; 
      user1.attended.push(reg_no);
      var max = user1.slot_stud; //6
      var ch = Math.floor(now/max);
      slot = ch+1;
      user1.students[j].slot = slot;
     }
      else
      {
      slot = user1.students[j].slot;
      }
      await user1.save();
      const i = user1.coding_questions.map(function(e) { return e.slot; }).indexOf(slot);
       return res.json({
         questions: user1.coding_questions[i].question,
         startTime: user1.startTime,
         endTime: user1.endTime,
         date: user1.date,
         viva: user1.questions
        });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
 
router.post("/studentmarkList", async (req, res) => {
    try{
      let { test_id} = req.body;
      const userStudentList = await Assessment.findOne({ '_id': test_id});
      res.json(userStudentList.students);
    }
    catch{
      res.status(500).json({ error: err.message });
    }
  })
  
router.post("/studentans", async (req, res) => {
    try{
      let { reg_no,test_id } = req.body;
      const curStudent= await Assessment.findOne({ '_id': test_id,'students.reg_no':reg_no});
      if (!curStudent)
          return res
          .status(400)
          .json({ msg: "This student did Not take the test" });
      res.json(curStudent.students.find(o => o.reg_no === reg_no));
    }
    catch{
      res.status(500).json({ error: err.message });
    }
  })

  router.post("/updmark", async (req, res) => {
    try{
      let { mark ,reg_no,test_id} = req.body;
      const curStudent= await Assessment.findOne({ '_id': test_id,'students.reg_no':reg_no});
      if (!curStudent)
          return res
          .status(400)
          .json({ msg: "This student did Not take the test" });
      const stud=curStudent.students.find(o => o.reg_no === reg_no)
      stud.total=mark
      curStudent.save();
      res.json(stud);
    }
    catch{
      res.status(500).json({ error: err.message });
    }
  })

  router.post("/storeAns", async (req, res) => {
    try {
      let { reg_no, token, ans } = req.body;
      const user1 = await Assessment.findById(token);
      const j = user1.students.map(function(e) { return e.reg_no; }).indexOf(reg_no);
      user1.students[j].ans = ans;
      await user1.save();
      res.json(user1);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  router.post("/storeScore", async (req, res) => {
    try {
      let { reg_no, token, score } = req.body;
      const user1 = await Assessment.findById(token);
      const j = user1.students.map(function(e) { return e.reg_no; }).indexOf(reg_no);
      user1.students[j].score = score;
      await user1.save();
      res.json(user1);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
router.post("/register", async (req, res) => {
try{
        let { college_name, address, city, state, country, pincode, first_name, last_name, email, phone_number, password, passwordCheck } = req.body;
  
    // validate
    if (!email || !password || !passwordCheck || !college_name || !address || !city || !state || !country || !pincode || !first_name || !last_name || !phone_number)
        return res.status(400).json({ msg: "Not all fields have been entered." });
    if (email.includes("@gmail")||email.includes("@yahoo")||email.includes("@outlook")||email.includes("@hotmail"))
        return res
          .status(400)
          .json({ msg: "Please enter your college id" });   
    if (password.length < 5)
        return res
          .status(400)
          .json({ msg: "The password needs to be at least 5 characters long." });
    if (password !== passwordCheck)
          return res
            .status(400)
            .json({ msg: "Enter the same password twice for verification." });

    const existingUser = await User.findOne({ 'auth_person.email': email });
    if (existingUser)
        return res
        .status(400)
        .json({ msg: "An account with this email already exists." });

    const existingUser1 = await User.findOne({ 'auth_person.phone_number':phone_number });
    if (existingUser1)
        return res
        .status(400)
        .json({ msg: "An account with this phone number already exists." });    

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    // const lastUser = await User.findOne();
    // const newId = lastUser._id + 10 ;
    
    const newUser = new User({
      college_id: 0,
      college_name,
      address,
      city,
      state,
      country,
      pincode,
      auth_person : 
      {
        first_name,
        last_name,
        email,
        phone_number,
        password: passwordHash
      },

      });
    const savedUser = await newUser.save();
    const filter = { 'auth_person.email': email };
    const currUser = await User.findOne({ 'auth_person.email': email });
    var x = currUser._id;
    var y;
    if(x.toString().length === 1)
    { y = 'HLA000'; }
    else if(x.toString().length === 2)
    { y = 'HLA00'; }
    else if(x.toString().length === 3)
    { y = 'HLA0' ; }
    else { y = 'HLA'; }
    const update = {  college_id: y + x };
    let doc = await User.findOneAndUpdate(filter, update, {
      new: true
    });
    res.json(doc);
}       
catch (err) {
        res.status(500).json({ error: err.message });
      }

});

router.post("/staffList", async (req, res) => {
  try{
    let { college_id } = req.body;
    const userStaffList = await User.findOne({ 'college_id': college_id });
    res.json(userStaffList.staff);
  }
  catch{
    res.status(500).json({ error: err.message });
  }
})

router.post("/studentList", async (req, res) => {
  try{
    let { college_id } = req.body;
    const userStudentList = await User.findOne({ 'college_id': college_id });
    res.json(userStudentList.students);
  }
  catch{
    res.status(500).json({ error: err.message });
  }
})

router.post("/registerStaff", async (req, res) => {
  try{
       let { college_id, name, email, staff_id, password, passwordCheck } = req.body;
    
      // validate
      if (!email || !name || !staff_id || !password || !passwordCheck)
          return res.status(400).json({ msg: "Not all fields have been entered." });

      if (email.includes("@gmail")||email.includes("@yahoo")||email.includes("@outlook")||email.includes("@hotmail"))
        return res
          .status(400)
          .json({ msg: "Please enter your college id" });   
      if (password.length < 5)
          return res
            .status(400)
            .json({ msg: "The password needs to be at least 5 characters long." });
      if (password !== passwordCheck)
            return res
              .status(400)
              .json({ msg: "Enter the same password twice for verification." });

      const newUser = await User.findOne({ 'college_id': college_id });

      const existingUser2 = await User.findOne({ 'college_id': college_id, 'staff.email': email });
      if (existingUser2)
      return res
        .status(400)
        .json({ msg: "Staff already exists with such email id" }); 

      const existingUser3 = await User.findOne({ 'college_id': college_id, 'staff.staff_id': staff_id });
      if (existingUser3)
      return res
        .status(400)
        .json({ msg: "Staff already exists with such user id" }); 

      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);

      newUser.staff.push({ staff_id: staff_id, name: name, email: email, password: passwordHash });
      await newUser.save();

      const newUser2 = new Staff({
        college_id: college_id,
        staff_id: staff_id,
        name: name, 
        email: email, 
        password: passwordHash
        });

      await newUser2.save();
      res.json(newUser2);
  }       
  catch (err) {
          res.status(500).json({ error: err.message });
        }
  });

router.post('/xlstojsonStaff', upload.single("file"), async (req, res, next) =>  {
try
  {
    const {
    file,
    body: { name }
  } = req;

  if (file.detectedFileExtension != ".xlsx") next(new Error("Invalid file type"));

  const fileName = name + "-staff" + file.detectedFileExtension;
  await pipeline(
    file.stream,
    fs.createWriteStream(`${__dirname}/../${fileName}`)
  );
var y=1;
  const newUser1 = await User.findOne({ 'college_id': name });
	xlsxtojson({
	  	input: `${fileName}`,  // input xls 
	    output: "output2.json", // output json 
	    lowerCaseHeaders:true
	}, async function(err, result) {
	    if(err) {
	      res.json(err);
	    } else {
        for(var i=0; i<result.length; i++)
        {
          if(!result[i].staff_id || !result[i].name || !result[i].email || !result[i].phone_number)
          { y=0;}
         await newUser1.staff.push(result[i]);
        }
        if(y===0)
        {throw "invalid"}
        newUser1.save();
        res.json(newUser1);
	    }
  });
}

  catch(err) {
    res.status(500).json({ error: err.message });
  }
  
});

router.post("/registerStudent", async (req, res) => {
  try{
      let { college_id, name, email, reg_no, password, passwordCheck } = req.body;
    
      // validate
      if (!email || !name || !reg_no || !password || !passwordCheck)
          return res.status(400).json({ msg: "Not all fields have been entered." });
      
      if (email.includes("@gmail")||email.includes("@yahoo")||email.includes("@outlook")||email.includes("@hotmail"))
          return res
            .status(400)
            .json({ msg: "Please enter your college id" });   
      if (password.length < 5)
          return res
            .status(400)
            .json({ msg: "The password needs to be at least 5 characters long." });
      if (password !== passwordCheck)
            return res
              .status(400)
              .json({ msg: "Enter the same password twice for verification." });
      
      const newUser = await User.findOne({ 'college_id': college_id });

      const existingUser2 = await User.findOne({ 'college_id': college_id, 'students.email': email });
      if (existingUser2)
      return res
        .status(400)
        .json({ msg: "Student already exists with such email id" }); 

      const existingUser3 = await User.findOne({ 'college_id': college_id, 'students.reg_no': reg_no });
      if (existingUser3)
      return res
        .status(400)
        .json({ msg: "Student already exists with such register number" }); 

      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);

      newUser.students.push({ reg_no: reg_no, name: name, email: email, password: passwordHash });
      await newUser.save();


      const newStudent = new Student({
        college_id:college_id,
        reg_no:reg_no,
        name:name,
        email:email,
        password:passwordHash
      })

      
     
      await newStudent.save();
      res.json(newStudent);
  }       
  catch (err) {
          res.status(500).json({ error: err.message });
        }
  
  });

router.post('/xlstojson', upload.single("file"), async (req, res, next) =>  {
try
  {
    const {
    file,
    body: { name }
  } = req;

  if (file.detectedFileExtension != ".xlsx") next(new Error("Invalid file type"));

  const fileName = name + file.detectedFileExtension;
  await pipeline(
    file.stream,
    fs.createWriteStream(`${__dirname}/../${fileName}`)
  );
var y=1;
  const newUser1 = await User.findOne({ 'college_id': name });
	xlsxtojson({
	  	input: `${fileName}`,  // input xls 
	    output: "output.json", // output json 
	    lowerCaseHeaders:true
	}, async function(err, result) {
	    if(err) {
	      res.json(err);
	    } else {
        for(var i=0; i<result.length; i++)
        {
          if(!result[i].reg_no || !result[i].name ||!result[i].email ||!result[i].phone_number ||!result[i].year )
          { y=0;}
         await newUser1.students.push(result[i]);
        }
        if(y===0)
        {throw "invalid"}
        newUser1.save();
        res.json(newUser1);
	    }
  });
}

  catch(err) {
    res.status(500).json({ error: err.message });
  }
  
});

router.post('/classxlsx', upload.single("file"), async (req, res, next) =>  {
  try
    {
      const {
      file,
      body: { name }
    } = req;
  
    if (file.detectedFileExtension != ".xlsx") next(new Error("Invalid file type"));
  
    const fileName = name + file.detectedFileExtension;
    await pipeline(
      file.stream,
      fs.createWriteStream(`${__dirname}/../${fileName}`)
    );
    const newUser1 = await User.findOne({ 'college_id': name });
    
    xlsxtojson({
        input: `${fileName}`,  // input xls 
        output: "output.json", // output json 
        lowerCaseHeaders:true
    }, async function(err, result) {
        if(err) {
          res.json(err);
        } else {
          var arr=[];
          var arr1=[];
          if(!result[0].Reg_no)
            { throw "invalid" }

          for(var i=0; i<result.length; i++)
          {  
            var reg_no = result[i].Reg_no;
            var j = newUser1.students.map(function(e) { return e.reg_no; }).indexOf(reg_no);
            var x = newUser1.students[j];
            if(x!==undefined)
            {
              arr.push(x);
            }
            else{
              arr1.push(reg_no);
            }
          }
          console.log(arr);
          console.log(arr1);
          res.json({std: arr, non: arr1});
        }
    });
  }
  
    catch(err) {
      res.status(500).json({ error: err.message });
    }
    
  });

  router.post("/createClass", async (req, res) => {
    try {
      const { college_id, staff_id, class_name, class_code, students } = req.body;
  
      // validate
      if (students.length===0 || !class_code || !class_name)
        return res.status(400).json({ msg: "Not all data have been entered." });

      const staff_clg = await Staff.findOne({ 'college_id': college_id, 'staff_id': staff_id });
      // const student_class= await Student.find({'college_id':college_id,'reg_no':students.reg_no});
      
      staff_clg.class.push({
        class_name: class_name,
        class_code: class_code,
        students: students
      });

      for(var i=0; i<students.length; i++)
      {
        let student_class= await Student.findOne({'college_id':college_id,'reg_no':students[i].reg_no});
        student_class.class.push({class_name:class_name,class_code:class_code,staff_id:staff_id});
        student_class.save();
      }
      
      // student_class.class.push({
      //   class_name:class_name,
      //   class_code:class_code
      // });
      
      staff_clg.save();
      
      res.json(staff_clg.class);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  router.post("/studAssessment", async (req, res) => {
    try {
      const { college_id, reg_no, class_code,staff_id} = req.body;

      const staff_clg = await Assessment.find({ 'college_id': college_id,'class_code':class_code, 'attended': reg_no });
      var arr=[];
      for(var i=0;i<staff_clg.length;i++){
          var j = staff_clg[i].students.map(function(e) { return e.reg_no }).indexOf(reg_no);
          arr.push({
            'ass_name': staff_clg[i].exam_title,
            'date': staff_clg[i].date,
            'total': staff_clg[i].students[j].total,
          });
      }
      const student=await Staff.findOne({'college_id':college_id,'class.class_code':class_code,'staff_id':staff_id});
      var k = student.class.map(function(e) { return e.class_code }).indexOf(class_code);
      

      res.json({ass:arr,stud:student.class[k].students});
      
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  router.post("/studentclassList", async (req, res) => {
    try{
      let { college_id, reg_no } = req.body;
      const userStudentList = await Student.findOne({ 'college_id': college_id, 'reg_no': reg_no  });
      res.json(userStudentList.class);
    }
    catch{
      res.status(500).json({ error: err.message });
    }
  })

  router.post("/classList", async (req, res) => {
    try{
      let { college_id, staff_id } = req.body;
      const userStaffList = await Staff.findOne({ 'college_id': college_id, 'staff_id': staff_id  });
      res.json(userStaffList.class);
    }
    catch{
      res.status(500).json({ error: err.message });
    }
  })

  router.post("/assessmentList", async (req, res) => {
    try{
      let { college_id, staff_id, class_code } = req.body;
      const userClassList = await Assessment.find({ 'college_id': college_id, 'staff_id': staff_id, 'class_code': class_code  });
      res.json(userClassList);
    }
    catch{
      res.status(500).json({ error: err.message });
    }
  })

router.post("/editStaff", async (req, res) => {
  try {
    const { college_id, staff_id, name, email, phone_number } = req.body;

    const user_clg1 = await User.findOne({ 'college_id': college_id, 'staff.staff_id': staff_id });
    const i = user_clg1.staff.map(function(e) { return e.staff_id; }).indexOf(staff_id);
    user_clg1.staff.set(i,{staff_id: staff_id, name: name, email: email, phone_number: phone_number});
    user_clg1.save();
    res.json(user_clg1);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/removeStaff", async (req, res) => {
  try {
    const { college_id, staff_id } = req.body;

    const user_clg1 = await User.findOne({ 'college_id': college_id, 'staff.staff_id': staff_id });
    const i = user_clg1.staff.map(function(e) { return e.staff_id; }).indexOf(staff_id);
    user_clg1.staff.pull({staff_id: staff_id});
    user_clg1.save();
    res.json(user_clg1);
    
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/loginEmail", async (req, res) => {
    try {
      const { college_id, email, password } = req.body;
  
      // validate
      if (!college_id || !email || !password)
        return res.status(400).json({ msg: "Not all fields have been entered." });

      const user_clg = await User.findOne({ 'college_id': college_id });
      if (!user_clg)
        return res
          .status(400)
          .json({ msg: "No account with this college has been registered." });  
      
      var n = email.localeCompare(user_clg.auth_person.email);
      if(n!==0)
        return res
            .status(400)
            .json({ msg: "No account with this email has been registered." });
      var name = user_clg.auth_person.first_name + ' ' + user_clg.auth_person.last_name;
      const isMatch = await bcrypt.compare(password, user_clg.auth_person.password);
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials." });
  
      const token = jwt.sign({ id: user_clg._id }, process.env.JWT_SECRET);
      res.json({
        token,
        user: {
          id: user_clg.college_id,
          name: user_clg.college_name,
          email: user_clg.auth_person.email
        },
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  router.post("/loginStaff", async (req, res) => {
    try {
      const { college_id, email, password } = req.body;
  
      // validate
      if (!college_id || !email || !password)
        return res.status(400).json({ msg: "Not all fields have been entered." });

      const staff_clg = await Staff.findOne({ 'college_id': college_id, 'email': email });
      if (!staff_clg)
        return res
          .status(400)
          .json({ msg: "No such account has been registered." });  
      
      const isMatch = await bcrypt.compare(password, staff_clg.password);
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials." });
      
      res.json(staff_clg);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  router.post("/loginStudent", async (req, res) => {
    try {
      const { college_id, email, password } = req.body;
  
      // validate
      if (!college_id || !email || !password)
        return res.status(400).json({ msg: "Not all fields have been entered." });

      const stud_clg = await User.findOne({ 'college_id': college_id, 'students.email': email });
      if (!stud_clg)
        return res
          .status(400)
          .json({ msg: "No such account has been registered." });  

      const i = stud_clg.students.map(function(e) { return e.email; }).indexOf(email);
      
      const isMatch = await bcrypt.compare(password, stud_clg.students[i].password);
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials." });
      
      res.json(stud_clg.students[i]);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  router.post("/code", async (req, res) => {
    try
    {
      axios({
        "method":"POST",
        "url":"https://judge0.p.rapidapi.com/submissions",
        "headers":{
        "content-type":"application/json",
        "x-rapidapi-host":"judge0.p.rapidapi.com",
        "x-rapidapi-key":"1043d720cfmsh6db34c49f1eae6dp16a070jsn29b495fc385e",
        "accept":"application/json",
        "useQueryString":true
        },"data":{
        "language_id":50,
        "source_code":"#include <stdio.h>\n\nint main(void)\n{\n int x;\nscanf(\"%d\",&x);\nprintf(\"Hello %d world\",x);\n return 0;\n}\n",
        "stdin":"4"
        }
        })
        .then((response)=>{
          var x = response.data.token;
          check("https://judge0.p.rapidapi.com/submissions/"+x);
        })
        .catch((error)=>{
          console.log(error)
        })
    }
      catch (err) {
        res.status(500).json({ error: err.message });
      }
  });

  const check = async (x) => {
    try
    {
  axios({
    "method":"GET",
    "url":x,
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"judge0.p.rapidapi.com",
    "x-rapidapi-key":"1043d720cfmsh6db34c49f1eae6dp16a070jsn29b495fc385e",
    "useQueryString":true
    }
    })
    .then((response)=>{
      console.log(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
    }
      catch (err) {
        res.status(500).json({ error: err.message });
      }
  }
  router.post("/assessment", async (req, res) => {
    try {
      const { college_id,staff_id,class_code,exam_title,class_name,proctored,startTime,endTime,date,questions,coding_questions } = req.body;
      const staff_clg = await Staff.findOne({ 'college_id': college_id, 'staff_id': staff_id });
      const i = staff_clg.class.map(function(e) { return e.class_code; }).indexOf(class_code);
      var num = staff_clg.class[i].students.length;
      var tot = coding_questions.length;
      console.log(tot)
      console.log(coding_questions)
      if(tot>num)
          return res.status(400).json({ msg: "You have more than one slot for each students." });
      var pos = Math.ceil(num/tot);

      const newUser = new Assessment({
          college_id: college_id,
          staff_id: staff_id,
          class_code: class_code,
          exam_title: exam_title,
          class_name: class_name,
          proctored: proctored,
          startTime:startTime,
          endTime: endTime,
          date: date,
          slot_stud: pos,
          students: staff_clg.class[i].students,
          attended: [],
          questions: questions,
          coding_questions: coding_questions
          });
        const savedUser = await newUser.save();
        const token = savedUser._id;
        res.json({token: token,students: staff_clg.class[i].students});     
    }
    catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  router.post('/xlstojsonAssessment', upload.single("file"), async (req, res, next) =>  {
    try
      {
        const {
        file,
        body: { name }
      } = req;
    
      if (file.detectedFileExtension != ".xlsx") next(new Error("Invalid file type"));
    
      const fileName = name + '- assessment questions' + file.detectedFileExtension;
      await pipeline(
        file.stream,
        fs.createWriteStream(`${__dirname}/../${fileName}`)
      );

      xlsxtojson({
          input: `${fileName}`,  // input xls 
          output: "output.json", // output json 
          lowerCaseHeaders:true
      }, async function(err, result) {
          if(err) {
            res.json(err);
          } else {
            console.log(result);
            res.json(result);
          }
      });
    }
      catch(err) {
        res.status(500).json({ error: err.message });
      }
      
    });

  router.delete("/delete", auth, async (req, res) => {
    try {
      const deletedUser = await User.findByIdAndDelete(req.user);
      res.json(deletedUser);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  router.post("/tokenIsValid", async (req, res) => {
    try {
      const token = req.header("x-auth-token");
      if (!token) return res.json(false);
  
      const verified = jwt.verify(token, process.env.JWT_SECRET);
      if (!verified) return res.json(false);
  
      const user = await User.findById(verified.id);
      if (!user) return res.json(false);
  
      return res.json(true);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });



  router.post('/codingxlsx', upload.single("file"), async (req, res, next) =>  {
    try
      {
        const {
        file,
        body: { name }
      } = req;
    
      if (file.detectedFileExtension != ".xlsx") next(new Error("Invalid file type"));
    
      const fileName = name + "_cqn_" + file.detectedFileExtension;
      await pipeline(
        file.stream,
        fs.createWriteStream(`${__dirname}/../${fileName}`)
      );
      // const newUser1 = await User.findOne({ 'college_id': name });
      
      xlsxtojson({
          input: `${fileName}`,  // input xls 
          output: "output3.json", // output json 
          lowerCaseHeaders:true
      }, async function(err, result) {
          if(err) {
            res.json(err);
          } else {
            var coding_questions = [];
            if(!result[0].slot || !result[0].id || !result[0].question || !result[0].question_description || 
              !result[0].testcase1Inp || !result[0].testcase1Op || !result[0].testcase2Inp || 
              !result[0].testcase2Op || !result[0].testcase3Inp || !result[0].testcase3Op || 
              !result[0].testcase4Inp || !result[0].testcase4Op || !result[0].hint || !result[0].mark || !result[0].solution)
              { throw "invalid" }

            slot = "1"
            questions = ["Slot-1"]
            coding_questions = []
            for(var i=0; i<result.length; i++)
            {  
              if(result[i].slot != slot)
              {
                coding_questions.push(questions)
                slot = result[i].slot;
                stri = "Slot-"+slot
                questions = []
                questions.push(stri)
              }
              
              questions.push({
                id: parseInt(result[i].id),
                question: result[i].question,
                question_description: result[i].question_description,
                testcase1Inp: result[i].testcase1Inp,
                testcase1Op: result[i].testcase1Op,
                testcase2Inp: result[i].testcase2Inp,
                testcase2Op: result[i].testcase2Op,
                testcase3Inp: result[i].testcase3Inp,
                testcase3Op: result[i].testcase3Op,
                testcase4Inp: result[i].testcase4Inp,
                testcase4Op: result[i].testcase4Op,
                hint: result[i].hint,
                mark: result[i].mark,
                solution: result[i].solution
              })
            }
            coding_questions.push(questions)
            console.log(coding_questions);
            res.json({coding_questions: coding_questions});
          }
      });
    }
    
      catch(err) {
        res.status(500).json({ error: err.message });
      }
      
    });

  router.post('/vivaxlsx', upload.single("file"), async (req, res, next) =>  {
      try
        {
          const {
          file,
          body: { name }
        } = req;
      
        if (file.detectedFileExtension != ".xlsx") next(new Error("Invalid file type"));
      
        const fileName = name + "_vqn_" + file.detectedFileExtension;
        await pipeline(
          file.stream,
          fs.createWriteStream(`${__dirname}/../${fileName}`)
        );
        
        xlsxtojson({
            input: `${fileName}`,  // input xls 
            output: "output4.json", // output json 
            lowerCaseHeaders:true
        }, async function(err, result) {
            if(err) {
              res.json(err);
            } else {
              var coding_questions = [];
              if(!result[0].id || !result[0].question || !result[0].optionA || !result[0].optionB || 
                !result[0].optionC || !result[0].optionD || !result[0].hint || !result[0].mark )
                { throw "invalid" }
  
              questions = []

              for(var i=0; i<result.length; i++)
              {                  
                answers = result[i].answer.split(" ")
                questions.push({
                  id: parseInt(result[i].id),
                  question: result[i].question,
                  optionA: result[i].optionA,
                  optionB: result[i].optionB,
                  optionC: result[i].optionC,
                  optionD: result[i].optionD,
                  hint: result[i].hint,
                  mark: result[i].mark,
                  answer: answers
                })
              }
              res.json({questions: questions});
            }
        });
      }
      
        catch(err) {
          res.status(500).json({ error: err.message });
        }
        
      });







  
  router.get("/", auth, async (req, res) => {
    const user = await User.findById(req.user);
    res.json({
      displayName: user.displayName,
      id: user._id,
    });
  });

module.exports = router;

// 5f5bf3f94049ca17786c94d9

// 5f5da82820237346d4754a08

//5f60e5d72fe3384e9cf53dba

// 5f677d6a5c65e7208fbdfd48