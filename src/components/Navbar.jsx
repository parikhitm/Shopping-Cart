import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/Navbar.css";

export function Navbar() {
    const { cartItems } = useContext(CartContext);
    const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <nav className="nav-bar">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/cart">
                Cart ({itemCount})
            </Link>
            <Link to="/about">About</Link>
        </nav>
    );
}