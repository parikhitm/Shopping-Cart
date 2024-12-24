// src/components/ProductCard.jsx
import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

export function ProductCard({ product }) {
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useContext(CartContext);

    const handleIncrement = () => setQuantity(prev => prev + 1);
    const handleDecrement = () => setQuantity(prev => Math.max(1, prev - 1));

    // Prevent event bubbling for controls
    const handleControlClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const imageUrl = product.thumbnail || product.images[0] || 'https://via.placeholder.com/300';

    return (
        <div className="product-card">
            <Link to={`/product/${product.id}`}>
                <img src={imageUrl} alt={product.title} 
                onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = 'https://via.placeholder.com/300';
                }} />
                <h3>{product.title}</h3>
                <p>${product.price}</p>
            </Link>
            {/* Controls outside of Link */}
            <div className="quantity-controls" onClick={handleControlClick}>
                <button onClick={handleDecrement}>-</button>
                <input 
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    min="1"
                />
                <button onClick={handleIncrement}>+</button>
            </div>
            <button className='add-to-cart-button' onClick={(e) => {
                e.preventDefault();
                addToCart(product, quantity);
            }}>
                Add to Cart
            </button>
        </div>
    );
}