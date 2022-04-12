// import React from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";

// import  Success from "./success";

// const PUBLIC_KEY = "YOUR_PUBLIC_TEST";

// const stripeTestPromise = loadStripe(PUBLIC_KEY);

// const Pay = () => {
//   return (
//     <Elements stripe={stripeTestPromise}>
//       <Success />
//     </Elements>
//   );
// };

// export default Pay;
// import axios from 'axios'
// import React from 'react'
// import { useState,useEffect } from 'react'
// import StripeCheckout from 'react-stripe-checkout'
// const yrPlan="price_1KZZI3SEIuQNw8aUY5njN6Lf"
// const mtPlan="price_1KZZFtSEIuQNw8aUYXKyMkQ7"
// const Key= "pk_test_51KZGm7SEIuQNw8aUEIFDfD18RiooXsLAEvpyWzxcS5ppmRW4zul1yYEVtxCdZpquKDIOL9iaAtxLBqAF1ddjuILL00gkpVEx8G"
// const Pay=()=> {
    
// //     const[stripeToken,setStripeToken]=useState(null)
// // const onToken=(token)=> {setStripeToken(token)
// //     ;};
// // useEffect(() => {
// const makeRequest=async()=>{
//     try
//     {
//         const res = await axios.post("stripe/pay",
//         {
//         plan:yrPlan
//         });
//      console.log(res.data);}
//     catch(err)
//     {console.log(err);}
    
//     }

// //  stripeToken && makeRequest()
// // }, [stripeToken])

// return (
// <div style={{
//       position: 'absolute', left: '50%', top: '50%',
//       transform: 'translate(-50%, -50%)'
//   }}>
//     {/* <StripeCheckout name='Revflix' image='https://firebasestorage.googleapis.com/v0/b/revflix-af00d.appspot.com/o/RevFlix-logos.jpeg?alt=media&token=dd5fcf80-1c70-4887-b863-29f90a2f23ad' description='The Subscription charge is ₹250' amount={25000} token={onToken}
//     stripeKey={Key} currency="INR"> */}
//         <button style={{border:"none",width:120,borderRadius:5,padding:"20px",
//             backgroundColor:"black",color:"white",fontWeight:"600",cursor:"pointer"}}onClick={makeRequest}>Pay
//         </button>
        
//     {/* </StripeCheckout> */}
// </div>
// )
// }

// export default Pay