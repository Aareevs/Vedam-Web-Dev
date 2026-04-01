import { useState } from "react";
import AddProduct from "./Components/AddProduct";
import CartTable from "./Components/CartTable";
import CartSummary from "./Components/CartSummary";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const addProduct = (product) => {
    setCart([...cart, { ...product, id: Date.now(), quantity: 1 }]);
  };

  const removeProduct = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQuantity = (id, type) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        const newQty = type === "inc"
          ? item.quantity + 1
          : item.quantity - 1;

        return { ...item, quantity: Math.max(1, newQty) };
      }
      return item;
    }));
  };

  return (
  <div className="container">
    <h1 className="title">Shopping Cart</h1>

    <div className="card">
      <AddProduct addProduct={addProduct} />
    </div>

    <div className="card">
      <CartTable
        cart={cart}
        removeProduct={removeProduct}
        updateQuantity={updateQuantity}
      />
    </div>

    <div className="card">
      <CartSummary cart={cart} />
    </div>
  </div>
);
}

export default App;