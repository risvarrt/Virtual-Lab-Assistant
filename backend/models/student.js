const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  college_id: {type: String},
  reg_no: {type: String},
  name: {type: String}, 
  email: {type: String}, 
  password: {type: String},
  class: 
  [{
    class_name: {type: String},
    class_code: {type: String},
    staff_id:{type:String}
  }]
});

module.exports = Staff = mongoose.model("student", userSchema);
