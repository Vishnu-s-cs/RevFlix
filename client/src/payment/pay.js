import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
const Key= "pk_test_51KZGm7SEIuQNw8aUEIFDfD18RiooXsLAEvpyWzxcS5ppmRW4zul1yYEVtxCdZpquKDIOL9iaAtxLBqAF1ddjuILL00gkpVEx8G"
function Pay() {
    const onToken = (token)=>{console.log(token);}
return (
<div>
    <StripeCheckout name='Revflix' image='gs://revflix-af00d.appspot.com/RevFlix-logos.jpeg' description='The Subscription charge is ₹250' amount={2500} token={onToken}
    stripeKey={Key}>
        <button style={{border:"none",width:120,borderRadius:5,padding:"20px",
            backgroundColor:"black",color:"white",fontWeight:"600",cursor:"pointer"}}>Pay
        </button>
    </StripeCheckout>
</div>
)
}

export default Pay