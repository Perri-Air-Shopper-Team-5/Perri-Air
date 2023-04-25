import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, selectProducts } from "./productsSlice";
import { singleProduct } from "../singleProduct/SingleProductSlice";
import { Link } from "react-router-dom";

import ProductsFormsAdmin from "../productsAdmin/ProductsFormsAdmin";

const Products = () => {

    //for when you want to refresh state when form updates
    const [trigger, setTrigger] = useState(false);

    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <Link to={`/products/${product.id}`}>
                        <h3>{product.name}</h3>
                    </Link>
                    <div className="product-content">
                        <img src={product.imageUrl} alt={product.name} />
                        <div className="product-details">
                            <p className="product-price">
                                Price: ${product.price}
                            </p>
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
