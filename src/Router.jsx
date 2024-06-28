import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Cart from './components/Cart';
import Shop from './components/Shop';
import ProductPage from './components/ProductPage';
import Navbar from './components/NavBar';

const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/shop/:id" element={<ProductPage />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
