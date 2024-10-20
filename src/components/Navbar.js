import React from 'react';
import { Link } from 'react-router-dom';
import '../blogs.css'; // Use your existing CSS

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navigation">
                    <div className="logo">
                        <Link to="/">Nicky uz</Link>
                    </div>
                    <div className="navbar-nav">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;