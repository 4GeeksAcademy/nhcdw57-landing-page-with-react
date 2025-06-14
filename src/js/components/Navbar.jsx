import React from "react";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container">
                <a className="navbar-brand text-light" href="#">Start Bootstrap</a>

                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                        <a className="nav-link text-secondary" href="#">About</a>
                        <a className="nav-link text-secondary" href="#">Services</a>
                        <a className="nav-link text-secondary" href="#">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};