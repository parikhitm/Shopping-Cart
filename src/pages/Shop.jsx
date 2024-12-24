import "../styles/Shop.css";
import { useState, useEffect } from "react";
import { ProductCard } from "../components/ProductCard";

export function Shop() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiUrl = import.meta.env.PROD 
            ? 'https://dummyjson.com/products'
            : '/api/products';
        fetch(apiUrl)
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        })
        .then(data => {
            setProducts(data.products); // DummyJSON wraps products in products array
            setLoading(false);
        })
        .catch(err => {
            console.error("Fetch error:", err);
            setError(err.message);
            setLoading(false);
        });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="shop">
            <h2>Our Products</h2>
            <div className="products-grid">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}