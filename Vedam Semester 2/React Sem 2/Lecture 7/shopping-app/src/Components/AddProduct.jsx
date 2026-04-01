import { useState } from "react";

function AddProduct({ addProduct }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = () => {
    if (!name || !price) return;

    addProduct({
      name,
      price: Number(price)
    });

    setName("");
    setPrice("");
  };

  return (
    <div>
      <h2>Add Products</h2>

      <input
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      

      <input
        placeholder="Price"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={handleSubmit}>Add to Cart</button>
    </div>
  );
}

export default AddProduct;