const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("../routes/auth");
const userRoute = require("../routes/users");
const movieRoute = require("../routes/movies");
const listRoute = require("../routes/lists");
const seatRoute = require('../routes/seats');
const subRoute = require("../routes/subs")
const bodyParser = require("body-parser");
const cookieParser =require('cookie-parser')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
dotenv.config();
const cors = require("cors")
app.use(cors())
app.options('*', cors());
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => console.log("Its connected baby!")).catch((err) => 
  
    console.error(err))
app.use(cookieParser())  
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);
app.use("/api/seats",seatRoute);
app.use("/api/subs",subRoute);
app.use("/",(req,res)=>{
  res.send("app started")
})
app.listen(process.env.PORT || 8800, () => {
  console.log("Backend server is running!");
});
