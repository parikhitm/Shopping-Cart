// src/pages/ProductDetails.jsx
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import "../styles/ProductDetails.css";

export function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        const apiUrl = import.meta.env.PROD 
            ? `https://dummyjson.com/products/${id}`
            : `/api/products/${id}`;
        fetch(apiUrl)
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        })
        .then(data => {
            setProduct({
                ...data,
                rating: {
                    rate: data.rating,
                    count: data.stock // DummyJSON uses stock instead of count
                }
            });
            setLoading(false);
        })
        .catch(err => {
            console.error("Fetch error:", err);
            setError(err.message);
            setLoading(false);
        });
    }, [id]);

    const handleIncrement = () => setQuantity(prev => prev + 1);
    const handleDecrement = () => setQuantity(prev => Math.max(1, prev - 1));

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!product) return <div>Product not found</div>;

    return (
        <div className="product-details">
            <div className="product-image">
                <img src={product.thumbnail || product.images[0]} 
                    alt={product.title}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/600';
                    }} />
            </div>
            <div className="product-info">
                <h1>{product.title}</h1>
                <div className="rating">
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < Math.round(product.rating.rate) ? 'star filled' : 'star'}>
                            ★
                        </span>
                    ))}
                    <span className="rating-count">({product.rating.count} reviews)</span>
                </div>
                <p className="price">${product.price}</p>
                <p className="description">{product.description}</p>
                <div className="quantity-controls">
                    <button onClick={handleDecrement}>-</button>
                    <input 
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                        min="1"
                    />
                    <button onClick={handleIncrement}>+</button>
                </div>
                <button 
                    className="add-to-cart"
                    onClick={() => addToCart(product, quantity)}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}