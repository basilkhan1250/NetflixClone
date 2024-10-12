import React from "react";

const MainFooter = () => {

    return (
        <div>
            <div className="MainFooter">
                <div className="text-mainfooter">
                    <p className="para-mainfooter">Ready to watch? Enter your email to create or restart your membership.</p>
                    <div className="input-fill-mainfooter">
                        <input className="home-input-mainfooter" id="input" type="text" placeholder="" />
                        <label class="floating-label-mainfooter" for="username">Email Address</label>
                        <button className="btn-mainfooter">Get Started</button>
                    </div>
                </div>
            </div>
            <div className="mainfooter-footer">
                <div className="footer-footer">
                    <div className="contact-footer">
                        <p>Question? Contact us.</p>
                    </div>
                    <div className="headings-footer">
                        <p>FAQ</p>
                        <p>Help Center</p>
                        <p>Account</p>
                        <p>Media Center</p>
                        <p>Investor Relations</p>
                        <p>Jobs</p>
                        <p>Ways To Watch</p>
                        <p>Terms of Use</p>
                        <p>Privacy</p>
                        <p>Cookie Preferences</p>
                        <p>Corporate Information</p>
                        <p>Contact Us</p>
                        <p>Speed Test</p>
                        <p>Legal Notices</p>
                        <p>Only On Netflix</p>
                    </div>
                    <select className="drop-down" id="cars" name="cars">
                        <option value="saab">English</option>
                    </select>
                    <p className="last">Netflix Pakistan</p>
                </div>
            </div>
        </div>
    )
}
export default MainFooter;