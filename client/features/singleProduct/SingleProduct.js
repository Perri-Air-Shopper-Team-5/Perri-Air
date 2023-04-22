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
        <div className="single-product-container">
            <div className="single-product-card">
                <h1>{name}</h1>
                <div className="single-product-content">
                    <img src={imageUrl} alt={name} />
                    <p>{description}</p>
                </div>
                <div className="single-product-actions">
                    <div className="single-product-price">${price}.00 USD</div>
                    <div className="single-product-qty">
                        <label htmlFor={`qty-${productId}`}>Qty:</label>
                        <select id={`qty-${productId}`}>
                            {Array.from(
                                { length: quantity },
                                (_, i) => i + 1
                            ).map((qty) => (
                                <option key={qty} value={qty}>
                                    {qty}
                                </option>
                            ))}
                        </select>
                        <button>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
