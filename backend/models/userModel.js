const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
mongoose.set('useFindAndModify', false);

const userSchema = new mongoose.Schema({
  _id: Number,
  college_id: {type: String, required: true},
  college_name: {type: String, required: true},
  address: {type: String, required: true},
  city: {type: String, required: true},
  state: {type: String, required: true},
  country: {type: String, required: true},
  pincode: {type: Number, required: true},
  auth_person : 
  {
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email: { type: String, required: true },
    phone_number: {type: Number, required: true},
    password: { type: String, required: true, minlength: 5 }
  },
  staff: [{ _id: Number, staff_id: {type: String}, name: String, email: {type: String}, password: {type: String} }],
  students: [{ _id: Number, reg_no: {type: String}, name: String, email: {type: String}, password: {type: String} }],
}, { _id: false });
userSchema.plugin(AutoIncrement);

module.exports = User = mongoose.model("college", userSchema);
