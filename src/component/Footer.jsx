import React from "react";

const Footer = () => {
    return (
        <div className="footer">
            <div className="contact">
                <p>Question? Contact us.</p>
            </div>
            <div className="headings">
                <p>FAQ</p>
                <p>Help Center</p>
                <p>Terms of Use</p>
                <p>Privacy</p>
                <p>Cookie Preferences</p>
                <p>Corporate Information</p>
            </div>
            <select className="drop-down" id="cars" name="cars">
                <option value="saab">English</option>
            </select>
        </div>
    )
}

export default Footer