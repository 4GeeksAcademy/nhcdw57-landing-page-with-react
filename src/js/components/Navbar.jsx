import React from "react";

export const Navbar = (props) => {
    let small = (
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <div className="navbar-nav">
                <a className="nav-link active text-light text-start" aria-current="page" href="#">Home</a>
                <a className="nav-link text-secondary text-start" href="#">About</a>
                <a className="nav-link text-secondary text-start" href="#">Services</a>
                <a className="nav-link text-secondary text-start" href="#">Contact</a>
            </div>
        </div>
    );
    let big = (
        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavDropdown">
            <div className="navbar-nav">
                <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                <a className="nav-link text-secondary" href="#">About</a>
                <a className="nav-link text-secondary" href="#">Services</a>
                <a className="nav-link text-secondary" href="#">Contact</a>
            </div>
        </div>
    );


    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container p-0">
                <a className="navbar-brand text-light px-4" href="#">Start Bootstrap</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
                    <i class="bi bi-list text-light"></i>
                </button>
                {(props.output==="big")?big:small}
            </div>


        </nav>
    );
};