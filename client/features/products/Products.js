import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, selectProducts } from "./productsSlice";
import { singleProduct } from "../singleProduct/SingleProductSlice";
import { Link } from "react-router-dom";

const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div className="products-container">
            {products.map((product) => (
                <div key={product.id} className="product-card">
                    <Link to={`/products/${product.id}`}>
                        <h2>{product.name}</h2>
                    </Link>
                    <div className="product-content">
                        <img src={product.imageUrl} alt={product.name} />
                        <div className="product-details">
                            <p>Price: ${product.price}</p>
                            <p>{product.description}</p>
                            <div className="product-actions">
                                <label htmlFor={`qty-${product.id}`}>
                                    Qty:
                                </label>
                                <select id={`qty-${product.id}`}>
                                    {Array.from(
                                        { length: product.quantity },
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
            ))}
        </div>
    );
};

export default Products;
