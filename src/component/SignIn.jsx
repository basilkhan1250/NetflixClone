import React from "react";
import netflix from "./asssets/netflix.png"
import Footer from "./Footer";


const SignIn = () => {

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
                            <input type="password" className="signin-input" name="password" id="password" required />
                            <label class="signin-floating-label" for="password">Password</label>
                        </div>
                        <button class="sign-btn">Sign In</button>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>

    )
}

export default SignIn