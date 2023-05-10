import React from "react";
import "./Products.css";

const Products = (props) => {
  const { img, name, seller, price, quantity, ratings } = props.products;
  const handleAddToCart = props.handleAddToCart;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6>{name}</h6>
        <p>Price : ${price}</p>
        <p>Manufacture : {seller}</p>
        <p>Ratings : {ratings} Star</p>
      </div>
      <button
        onClick={() => handleAddToCart(props.products)}
        className="btn-cart"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Products;
