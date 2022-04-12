// import React from "react";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// const Success = () => {
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card: elements.getElement(CardElement),
//     });

//     if (!error) {
//       console.log("Stripe 23 | token generated!", paymentMethod);
//       //send token to backend here
//     } else {
//       console.log(error.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
//       <CardElement />
//       <button>Pay</button>
//     </form>
//   );
  
// };export default Success;
import React from 'react'
import { Link } from 'react-router-dom'
function Success() {
  return (
    <div  style={{
      position: 'absolute', left: '50%', top: '50%',
      transform: 'translate(-50%, -50%)'
  }}><Link to="/login"><button style={{border:"none",width:120,borderRadius:5,padding:"20px",
    backgroundColor:"black",color:"white",fontWeight:"600",cursor:"pointer"}}>Start Watching</button></Link></div>
  )
}

export default Success