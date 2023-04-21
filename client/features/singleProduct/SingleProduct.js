import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { singleProductAsync } from "./SingleProductSlice";
import { Link, useParams } from "react-router-dom";
import { singleProduct } from "./SingleProductSlice";
import Products from "../products/Products";

const SingleProduct = () => {
  const { productId } = useParams();

  const product = useSelector(singleProduct);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(singleProductAsync(productId));
  }, [dispatch]);

  const { name, price, imageUrl, description, quantity } = product;

  return (
    <div className="product-card">
      <h1>{name}</h1>
      <img src={imageUrl} />
      <br />
      <small>${price}.00 USD</small>
      <p>{description}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default SingleProduct;
