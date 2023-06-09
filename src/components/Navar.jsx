import React, { useState } from 'react';
import '../assets/styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="d-flex justify-content-between align-items-center jh">
                    <a className="navbar-brand" href="#">HikingHook</a>
                    <div className="d-flex">
                        <a className="nav-link d-lg-none me-3" href="#">Cart</a>
                        <button className={`navbar-toggler ${isOpen ? 'open' : ''}`} type="button" onClick={toggleMenu} aria-label="Toggle navigation">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
                <div className={`collapse navbar-collapse justify-content-center ${isOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Camping</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Hiking</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Gear</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Clothing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sale</a>
                        </li>
                    </ul>
                </div>
                <div className="d-none d-lg-flex justify-content-end">
                    <a className="nav-link" href="#">Cart</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
