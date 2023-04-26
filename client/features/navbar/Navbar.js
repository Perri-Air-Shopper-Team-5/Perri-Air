import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../app/store";

const Navbar = () => {
    const isLoggedIn = useSelector((state) => !!state.auth.me.id);
    const isAdmin =useSelector((state) => !!state.auth.me.adminStatus);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logoutAndRedirectHome = () => {
        dispatch(logout());
        navigate("/login");
    };

    return (
        <div>
            <nav className="navbar">
                <Link to="/home" className="navbar-logo">
                    <h1>Perri-Air</h1>
                </Link>
                <div className="navbar-links">
                    {isLoggedIn ? (
                        <>
                            {/* The navbar will show these links after you log in */}
                            <Link to="/home">Home</Link>
                            <Link to="/cart">Cart</Link>
                            { isAdmin ?
                            (<Link to="/users">Users</Link>)
                              : (null)
                            }

                            <Link
                                to="#"
                                className="nav-link"
                                onClick={logoutAndRedirectHome}
                            >
                                Logout
                            </Link>
                        </>
                    ) : (
                        <>
                            {/* The navbar will show these links before you log in */}
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Sign Up</Link>
                            <Link to="/cart">Cart</Link>
                        </>
                    )}
                </div>
            </nav>
            <hr />
        </div>
    );
};

export default Navbar;
