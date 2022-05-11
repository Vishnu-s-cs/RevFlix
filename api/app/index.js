const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("../routes/auth");
const userRoute = require("../routes/users");
const movieRoute = require("../routes/movies");
const listRoute = require("../routes/lists");
const subRoute = require("../routes/subs");
const theatreRoute = require("../routes/theatres")
const seatRoute = require("../routes/seats")
const bodyParser = require("body-parser");
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
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);
app.use("/api/subs",subRoute);
app.use("/api/theatre",theatreRoute);
app.use("/api/seat",seatRoute);
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});
app.use("/",(req,res)=>{
  res.send("app started")
})
app.listen(process.env.PORT || 8800, () => {
  console.log("Backend server is running!");
});
