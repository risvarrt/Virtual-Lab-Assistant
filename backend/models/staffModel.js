const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  college_id: {type: String, required: true},
  staff_id: {type: String, required: true},
  name: {type: String, required: true}, 
  email: {type: String, required: true}, 
  password: {type: String, required: true},
  class : 
  [{
    class_name: {type: String, required: true},
    class_code: {type: String, required: true},
    students: [{reg_no: {type: String}, name: {type: String}, email: {type: String}}]
  }]
});

module.exports = Staff = mongoose.model("staff", userSchema);
