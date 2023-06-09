import React from "react";
import '../assets/styles/Header.css'

function Header() {
    return (
        <header id="inicio">
            <div className="">
                <h1 className="Logo">HikingHook</h1>
                <h3 className="Eslogan">Craft Your Unique Camping Moment</h3>
            </div>
            <video autoPlay="autoplay" loop="loop" muted className="Video">
                <source src="/video-index-720.mp4" type="video/mp4" />
            </video>
        </header>
    );
}

export default Header;

