import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useCart } from '../../utils/CartContext';
import '../Cart/Cart.css'
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js"
const stripePromise = loadStripe("pk_test_51NQQB4JZsPRc9TeiWTLMyIWQUmdxUt8VHK7RO7Cuotu0nXLqT4nxQQRauPeDKvGkTucCfJYCbstsZV0t95DQmXpw00H60NyHcE")

function Cart() {
  const [clientSecret, setClientSecret] = useState("");
  const { removeFromCart } = useCart();

 const {cartItems} = useCart();


  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,0
    );
  };

  const navigate = useNavigate();

  const goToOrderHistory = () => {
    navigate("/order-history");
  };

  const goToOrderTracker = () => {
    navigate("/order-tracker");
  }

  return (
    <>
      {clientSecret && (
      <Elements options = {options} stripe ={stripePromise}>
          <CheckoutForm/>
      </Elements>)}
      <div className="cart-container">
      <div className="order-history-container">
        <button className="order-history-btn" onClick={goToOrderHistory}>
          Order History
        </button>
        <button className="order-tracker-btn" onClick={goToOrderTracker}>
          Order Tracker
        </button>
      </div>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map((item, index) => (
              <div className="cart-item" key={index}>
                <div className="item-details">
                  <p className="item-name">{item.name}</p>
                  <p className="item-price">${item.price}</p>
                  <p className="item-quantity">Quantity: {item.quantity}</p>
                  <img src={item.imageUri} alt={item.name} style={{ maxWidth: "100px" }} />
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="cart-summary">
        <h2 className="pacifico-regular">Cart Summary</h2>
        <p className="total">Total: ${calculateTotal()}</p>
        <form action="http://localhost:4242/create-checkout-session" method="POST">
            <input type="hidden" name="amount" value={ `${calculateTotal()}` } />
            <button type = "checkout-btn">Pay Now!</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Cart
