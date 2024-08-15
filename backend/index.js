const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require("dotenv").config();

// set up express

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
const { sendEmail } = require('./mail');


app.post("/api/sendMail", (req, res) => {

  console.log(req.body)
  sendEmail(req.body.email, req.body.name, req.body.link,req.body.staffname,req.body.date,req.body.start,req.body.end,req.body.testname, "hello")
  res.json("?")

})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));

// set up mongoose

mongoose.connect(
    process.env.MONGODB_CONNECTION_STRING,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    },
    (err) => {
      if (err) throw err;
      console.log("MongoDB connection established");
    }
  );

// set up routes
app.use("/users", require("./routes/userRouter"));