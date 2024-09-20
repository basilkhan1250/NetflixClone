import React from "react";
import netflix from "./asssets/netflix.png"


const SignIn = () => {

    return (
        <div className="container">
            <div className="navbar">
                <div className="right-side">
                    <img className="sign-logo" src={netflix} alt="Netflix Logo" />
                </div>
            </div>
            <div className="text-input">

                
                <form action="#" class="sign-container">
                    <h1>Sign In</h1>
                    <div class="form-element">
                        <input type="text" name="username" id="username" required />
                        <label class="floating-label" for="username">Email or Phone Number</label>
                    </div>
                    <div class="form-element">
                        <input type="password" name="password" id="password" required />
                        <label class="floating-label" for="password">Password</label>
                    </div>
                    <button class="sign-btn">Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default SignIn