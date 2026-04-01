import { useState } from "react";
import "./CartSummary.css";

function CartSummary({ cart }) {
  const [ordered, setOrdered] = useState(false);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    setOrdered(true);
    setTimeout(() => {
  setOrdered(false);
    }, 3000);
  };

  if (ordered) {
    return (
      <div className="success-container">
        <div className="checkmark-circle">
          <div className="checkmark"></div>
        </div>
        <h2>Order Placed Successfully</h2>
      </div>
    );
  }

  return (
    <div className="summary">
      <h3>Subtotal: ₹{total}</h3>
      <button className="checkout-btn" onClick={handleCheckout}>
        Proceed to Buy
      </button>
    </div>
  );
}

export default CartSummary;