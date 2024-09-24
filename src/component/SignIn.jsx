import React, { useState } from "react";
import netflix from "./asssets/netflix.png"
import Footer from "./Footer";
import { Link } from "react-router-dom";


const SignIn = () => {
    const [showInput, setShowInput] = useState(true)
    const toggleInput = () => {
        setShowInput(prevState => !prevState)
    }

    return (
        <div>
            <div className="container">
                <div className="navbar">
                    <div className="right-side">
                        <img className="sign-logo" src={netflix} alt="Netflix Logo" />
                    </div>
                </div>
                <div className="text-input">

                    <form action="#" class="sign-container">
                        <h1 className="signin-heading">Sign In</h1>
                        <div class="form-element">
                            <input type="text" className="signin-input" name="username" id="username" required />
                            <label class="signin-floating-label" for="username">Email or Phone Number</label>
                        </div>
                        <div class="form-element">
                            {showInput && <input type="password" className="signin-input" name="password" id="password" required />}
                            {showInput && <label class="signin-floating-label" for="password">Password</label>}
                        </div>
                        <button class="sign-btn">Sign In</button>
                        <p className="or">OR</p>
                        <button className="sign-in-code" onClick={toggleInput}>
                            {showInput ? "Use a Sign-In Code" : "Use Password"}
                        </button>
                        <p className="password-forgot">Forgot password?</p>
                        <div className="check-box">
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Remember-me" className="custom-checkbox" />
                            <label for="vehicle1">Remember me</label>
                        </div>
                        <div className="back-to-the-page">
                            <p className="new-netflix">New to Netflix?</p>
                            <Link className="back-to-page" to='/'>
                                <p className="back-page">Sign up now.</p>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default SignIn