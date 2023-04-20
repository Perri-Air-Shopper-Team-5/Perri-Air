import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, selectProducts } from "./productsSlice";

const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <img src={product.imgUrl} alt={product.name} />
                    <p>Price: ${product.price}</p>
                    <p>{product.description}</p>
                    <select>
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
            ))}
        </div>
    );
};

export default Products;
