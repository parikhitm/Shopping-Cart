# Shopping Cart Application

A modern e-commerce shopping cart built with React and Vite, featuring dynamic product listings, cart management, and checkout functionality.

## Features
 - 🛍️ Browse product catalog
 - 🔍 View detailed product information
 - 🛒 Add/remove items to cart
 - 📱 Responsive design
 - 💳 Checkout process
 - ⭐ Product ratings and reviews
 - 🔄 Real-time cart updates

## Technologies Used
 - React 18
 - React Router v7
 - Vite
 - Context API for state management
 - dummyjson.com API
 - CSS Modules

## Installation
```
# Clone the repository
git clone [your-repo-url]

# Navigate to project directory
cd shopping-cart

# Install dependencies
npm install

# Start development server
npm run dev
```

## Project Structure
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   └── CheckoutModal.jsx
├── pages/
│   ├── Home.jsx
│   ├── Shop.jsx
│   ├── Cart.jsx
│   ├── About.jsx
│   └── ProductDetails.jsx
├── context/
│   └── CartContext.jsx
├── styles/
│   ├── Cart.css
│   ├── Shop.css
│   └── ProductDetails.css
└── App.jsx
```

## Usage
1. Browse products on the Shop page
2. Click on products to view details
3. Adjust quantity and add items to cart
4. View cart contents and adjust quantities
5. Proceed to checkout

## API Integration
The application uses the dummyjson.com API to fetch product data:

 - Product listings: GET /products
 - Product details: GET /products/:id

## State Management
Uses React Context API for global cart state management:

 - Add to cart
 - Remove from cart
 - Update quantities
 - Calculate totals

---
Made with React and Curiosity...