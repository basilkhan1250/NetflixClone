import React from "react";
import backimage from "./asssets/intro.jpg"
import netflix from "./asssets/netflix.png"
import "./custom.css"
import { Link, Navigate } from "react-router-dom";
import Trendings from "./Trendings";

const Navbar = () => {

    return (
        <div>
            <div className="container">
                <div className="navbar">
                    <div className="right-side">
                        <img className="logo" src={netflix} alt="Netflix Logo" />
                    </div>
                    <div className="left-side">
                        <Link to={"/SignIn"}>
                            <button className="sign-in">Sign in</button>
                        </Link>
                    </div>
                </div>
                <div className="text-input">
                    <div className="text">
                        <h1 className="home-heading">Unlimited movies, <br /> TV   shows, and more</h1>
                        <h3>Starts at Rs 250. Cancel anytime.</h3>
                        <p>Ready to watch? Enter your email to create or restart your membership.</p>
                        <div className="input-fill">
                            <input className="home-input" id="input" type="text" placeholder="" />
                            <label class="floating-label" for="username">Email Address</label>
                            <button className="btn">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            <Trendings></Trendings>
        </div>
    )
}
export default Navbar