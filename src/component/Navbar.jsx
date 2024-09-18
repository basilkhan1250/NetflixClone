import React from "react";
import backimage from "./asssets/intro.jpg"
import netflix from "./asssets/netflix.png"
import "./custom.css"

const Navbar = () => {

    return (
        <div className="container">
            <div className="navbar">
                <div className="right-side">
                <img className="logo" src={netflix}></img>
                </div>
            </div>
            <div className="img" >
                <img className="back-image" src={backimage}></img>
            </div>
        </div>
    )
}

export default Navbar