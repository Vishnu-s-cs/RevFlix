const router = require("express").Router();
const User = require("../models/User");
const Movie = require("../models/Movie")
const verify = require("../verifyToken");
const Stripe = require("stripe")
const dotenv = require("dotenv");
dotenv.config();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY,{
    apiVersion:"2020-08-27"
})
router.get("/prices",async (req,res)=>{try{
 
     const prices = await stripe.prices.list({
     apiKey:process.env.STRIPE_SECRET_KEY
 }) 
 res.json(prices);
}catch(err){
    console.log(err);
}})
//subscriptions
router.post("/session",async(req,res)=>{try{
    const customer = await User.findOne({ email: req.body.email });
   
    const session= await stripe.checkout.sessions.create({
        mode:"subscription",
        payment_method_types:["card"],
        line_items:[
            {
                price: req.body.priceId,
                quantity:1,
                
            }
        ],
        success_url:"http://localhost:3000/login",
        cancel_url:"http://localhost:3000/subscriptions",
        customer: customer.customerId,
    });
    res.json(session);}catch(err){
        res.status(401).json("pls register")
    }
})
router.post("/ticketSession",async(req,res)=>{try{
    const customer = await User.findOne({ email: req.body.email });
   
    const session= await stripe.checkout.sessions.create({
        mode:"payment",
        payment_method_types:["card"],
        line_items:[
            {
                price: req.body.priceId,
                quantity:req.body.quantity,
                
            }
        ],
        success_url:"http://localhost:3000/Book",
        cancel_url:"http://localhost:3000/",
        customer: customer.customerId,
    });
    res.json(session);}catch(err){
        res.status(401).json(err)
    }
})
module.exports = router;