function CartItem({ item, removeProduct, updateQuantity }) {
  return (
    <tr>
      <td>{item.name}</td>
      <td>₹{item.price}</td>

      <td>
  <button className="qty-btn" onClick={() => updateQuantity(item.id, "dec")}>-</button>
  {item.quantity}
  <button className="qty-btn" onClick={() => updateQuantity(item.id, "inc")}>+</button>
</td>

      <td>₹{item.price * item.quantity}</td>

      <td>
  <button className="remove-btn" onClick={() => removeProduct(item.id)}>
    Delete
  </button>
    </td>
    </tr>
  );
}

export default CartItem;