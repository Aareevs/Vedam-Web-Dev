// Task: Implement a search functionality where users can search for products. Validate that the input is not empty or invalid
// • Example: *Create a search bar to allow users to search for products by name.
// Ensure the search field cannot be empty"

import React, { useState, useEffect, useMemo } from "react";

const ProductSearch = () => {
    const [input, setInput] = useState("");
    const [products, setProducts] = useState([]);
    const [sortOrder, setSortOrder] = useState("ascending");

    const sortedProducts = useMemo(() => {
        const sorted = [...products].sort((firstProduct, secondProduct) => {
            return String(firstProduct.title).localeCompare(String(secondProduct.title));
        });

        return sortOrder === "descending" ? sorted.reverse() : sorted;
    }, [products, sortOrder]);

    async function apiData() {
        if (input.trim() === "") {
            alert("Search field cannot be empty");
            return;
        }

        let res = await fetch(`https://dummyjson.com/products/search?q=${input}`);
        let data = await res.json();
        setProducts(data.products);
    }

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data.products));
    }, []);

    return (
        <div>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>

            <button onClick={apiData}>Search</button>
            <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                <option value="ascending">ascending</option>
                <option value="descending">descending</option>
            </select>

            <div>
                {sortedProducts.map((product) => (
                    <div key={product.id}>
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            width="150"
                        />

                        <h3>{product.title}</h3>

                        <p>Price: ${product.price}</p>

                        <p>Rating: ⭐{product.rating}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductSearch;