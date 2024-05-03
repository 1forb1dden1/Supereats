import { useState } from 'react'
import '../Cart/Cart.css'
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js"
const stripePromise = loadStripe("pk_test_51NQQB4JZsPRc9TeiWTLMyIWQUmdxUt8VHK7RO7Cuotu0nXLqT4nxQQRauPeDKvGkTucCfJYCbstsZV0t95DQmXpw00H60NyHcE")

function Cart() {
  const [clientSecret, setClientSecret] = useState("");

  return (
    <>
      {clientSecret && (
      <Elements options = {options} stripe ={stripePromise}>
          <CheckoutForm/>
      </Elements>)}
      <div className="cart">
        <p>Cart Page</p>
        <form action="http://localhost:4242/create-checkout-session" method="POST">
            <input type="hidden" name="amount" value={125} /> {/*Pass value 15 for pricing*/}
            <button type = "submit">Pay Now!</button>
        </form>
      </div>
    </>
  )
}

export default Cart
