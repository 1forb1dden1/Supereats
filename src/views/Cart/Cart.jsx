import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import '../Cart/Cart.css'
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js"
const stripePromise = loadStripe("pk_test_51NQQB4JZsPRc9TeiWTLMyIWQUmdxUt8VHK7RO7Cuotu0nXLqT4nxQQRauPeDKvGkTucCfJYCbstsZV0t95DQmXpw00H60NyHcE")

function Cart() {
  const [clientSecret, setClientSecret] = useState("");

  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Pizza", price: 10, quantity: 2 },
    { id: 2, name: "Burger", price: 5, quantity: 1 },
    { id: 3, name: "Salad", price: 7, quantity: 3 },
  ]);

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
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
                  <button onClick={() => removeFromCart(index)}>Remove</button>
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
            <input type="hidden" name="amount" value={125} /> {/*Pass value 15 for pricing*/}
            <button type = "checkout-btn">Pay Now!</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Cart
