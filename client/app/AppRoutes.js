import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AuthForm from "../features/auth/AuthForm";
import Home from "../features/home/Home";
import { me } from "./store";
import Cart from "../features/cart/Cart";
import Products from "../features/products/Products";
import SingleProduct from "../features/singleProduct/SingleProduct";
import UsersList from "../features/users/UsersList";

/**
 * COMPONENT
 */

const AppRoutes = () => {
    const isLoggedIn = useSelector((state) => !!state.auth.me.id);
    const isAdmin = useSelector((state) => !!state.auth.me.adminStatus);
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.auth.me);

    useEffect(() => {
        dispatch(me());
    }, []);

    console.log(userData);

    return (
        <div>
            {isLoggedIn ? (
                <Routes>
                    <Route path="/*" element={<Home />} />
                    <Route to="/home" element={<Home />} />
                </Routes>
            ) : (
                <Routes>
                    <Route
                        path="/*"
                        element={<AuthForm name="login" displayName="Login" />}
                    />
                    <Route
                        path="/login"
                        element={<AuthForm name="login" displayName="Login" />}
                    />
                    <Route
                        path="/signup"
                        element={
                            <AuthForm name="signup" displayName="Sign Up" />
                        }
                    />
                </Routes>
            )}
            <Routes>
                <Route path="/cart" element={<Cart />} />
                <Route path="/*" element={<Products />} />
                <Route
                    path="/products/:productId"
                    element={<SingleProduct />} />

                { isAdmin ? (
                <Route path='/users' element={<UsersList />} /> )
                 : (null) }
            </Routes>
        </div>
    );
};

export default AppRoutes;
