import React, { useEffect, useState } from "react";
import "./Shop.css";
import Products from "../Products/Products";
const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((products) => (
          <Products key={products.id} products={products}></Products>
        ))}
      </div>
      <div className="cart-container">
        <h2>product cart</h2>
      </div>
    </div>
  );
};

export default Shop;
