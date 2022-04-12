const router = require("express").Router();
const User = require("../models/User");
const CryptoJS=require('crypto-js')
const jwt = require("jsonwebtoken");
const Stripe = require("stripe")
const dotenv = require("dotenv");
dotenv.config();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY,{
    apiVersion:"2020-08-27"
})
//REGISTER
router.post("/register", async (req, res) => {
  
  const customer = await stripe.customers.create({
    email: req.body.email,
  });
  const payee=await customer;
  const newUser =await new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password,process.env.SECRET_KEY).toString(),
    customerId:payee.id,
    });
    
  try {
    const user = await newUser.save();
    res.status(201).json([user,payee.id]);
  } catch (err) {
    console.log(err);
    // res.status(500).json(err);
  }
  // console.log(customer);
  
  // if(err){next([err])}next();
  
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    
    const subscriptions = await stripe.subscriptions.list(
      {
        customer: user.customerId,
        status: "all",
        expand: ["data.default_payment_method"],
      },{
        apiKey: process.env.STRIPE_SECRET_KEY,
      }
    );
    // res.json(subscriptions);
    if(!user || !subscriptions.data.length )
    {
   res.status(401).json("Wrong password or username!");
  }
    
    const bytes =CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalPassword =bytes.toString(CryptoJS.enc.Utf8);
    originalPassword !== req.body.password &&
      res.status(401).json("invalid password!");
      

    const accessToken =jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.SECRET_KEY,
      { expiresIn: "5d" }
    );

    const {password,...info } = user._doc;

     res.status(200).json({ ...info, accessToken, subscriptions});
    
  } catch(err){
    // res.status(500).json(err);
    console.log("login failed/invalid credentials");
  }
  
});

module.exports = router;
