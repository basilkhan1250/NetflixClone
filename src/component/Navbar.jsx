import React from "react";
import backimage from "./asssets/intro.jpg"
import netflix from "./asssets/netflix.png"
import "./custom.css"

const Navbar = () => {

    return (
        <div className="container">
            <div className="navbar">
                <div className="right-side">
                    <img className="logo" src={netflix} alt="Netflix Logo" />
                </div>
                <div className="left-side">
                    <button className="sign-in">Sign in</button>
                </div>
            </div>
            <div className="text-input">
                <div className="text">
                    <h1>Unlimited movies, TV shows, and more</h1>
                </div>
            </div>
        </div>

    )
}

export default Navbar