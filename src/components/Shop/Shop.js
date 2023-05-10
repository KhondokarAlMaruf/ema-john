import React, { useEffect, useState } from "react";
import "./Shop.css";
import Products from "../Products/Products";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (products) => {
    const newCart = [...cart, products];
    setCart(newCart);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((products) => (
          <Products
            key={products.id}
            products={products}
            handleAddToCart={handleAddToCart}
          ></Products>
        ))}
      </div>
      <div className="cart-container">
        <h2>Order Summery</h2>
        <p>Selected Item : {cart.length}</p>
      </div>
    </div>
  );
};

export default Shop;
