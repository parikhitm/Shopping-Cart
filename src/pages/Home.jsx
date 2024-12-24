import { Link } from "react-router-dom";
import "../styles/Home.css";

export function Home() {
    return (
        <div className="home">
            <h1>Welcome to our Store</h1>
            <p>Browse our collection of amazing products.</p>
            <button><Link to="/shop">Shop Now</Link></button>
        </div>
    );
}