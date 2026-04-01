import CartItem from "./CartItem";

function CartTable({ cart, removeProduct, updateQuantity }) {
  return (
    <div>
      <h2>Your Cart</h2>

      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {cart.map(item => (
            <CartItem
              key={item.id}
              item={item}
              removeProduct={removeProduct}
              updateQuantity={updateQuantity}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CartTable;