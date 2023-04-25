import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const products = useSelector((state) => state.products);

    return (
        <div>
            <h1>Your Cart</h1>
            <ul>
                {/* {cart.map((item) => {
                    const product = products.find(
                        (product) => product.id === item.productId
                    );

                    return (
                        <li key={item.id}>
                            <div className="product-info">
                                <img src={product.imageUrl} />
                                <div className="product-details">
                                    <h4>{product.name}</h4>
                                    <h4>Price: ${product.price}</h4>
                                </div>
                                <div className="amount-selector">
                                    <label htmlFor={`qty-${item.productId}`}>
                                        Qty:
                                    </label>
                                    <select
                                        id={`qty-${product.id}`}
                                        defaultValue={item.amount}
                                    >
                                        {Array.from(
                                            { length: product.quantity },
                                            (_, i) => i + 1
                                        ).map((qty) => (
                                            <option key={qty} value={qty}>
                                                {qty}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="buttons">
                                    <button>Edit Item</button>
                                    <button>Delete Item</button>
                                </div>
                            </div>
                        </li>
                    );
                })} */}
            </ul>
        </div>
    );
};

export default Cart;
