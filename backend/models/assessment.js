const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  college_id: {type: String, required: true},
  staff_id: {type: String, required: true},
  class_code: {type: String, required: true},
  exam_title: {type: String, required: true},
  class_name: {type: String, required: true},
  proctored: {type: String, required: true},
  startTime:{type: String, required: true},
  endTime: {type: String, required: true},
  date: {type: String, required: true},
  slot_stud: {type: Number, required: true},
  students: [{ reg_no: {type: String},
               name: String, 
               email: {type: String}, 
               password: {type: String}, 
               slot: Number,
               ans: [{
                 question: String,
                 answer: String,
                 explanation:String,
                 test_cases: String
               }],
               score: Number,
               total: Number
              }],
  attended: [{type: String}],
  questions: [{
            id: {type: Number, required: true},
            question: {type: String, required: true},
            optionA: {type: String, required: true},
            optionB: {type: String, required: true},
            optionC: {type: String, required: true},
            optionD: {type: String, required: true},
            hint: {type: String, required: true},
            mark: {type: Number, required: true},
            answer: [Number]
          }],
  coding_questions: [
    {
    slot: {type: String, required: true},
    question: [{
              id: {type: Number, required: true},
              question: {type: String, required: true},
              question_description: {type: String, required: true},
              testcase1Inp: {type: String, required: true},
              testcase1Op: {type: String, required: true},
              testcase2Inp: {type: String, required: true},
              testcase2Op: {type: String, required: true},
              testcase3Inp: {type: String, required: true},
              testcase3Op: {type: String, required: true},
              testcase4Inp:{type: String, required: true},
              testcase4Op: {type: String, required: true},
              hint: {type: String, required: true},
              mark: {type: Number, required: true},
              solution: {type: String, required: true}
            }]
    }]
});

module.exports = Assessment = mongoose.model("assessment", userSchema);
