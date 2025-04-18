import React from "react";

const socialLinks = [
    {
        name: "GitHub",
        iconId: "icon-github",
        url: "https://github.com/atharva-tendle",
    },
    {
        name: "LinkedIn",
        iconId: "icon-linkedin",
        url: "https://linkedin.com/in/atharvatendle",
    },
    {
        name: "Twitter",
        iconId: "icon-twitter",
        url: "https://twitter.com/atharvatendle",
    },
    {
        name: "Email",
        iconId: "icon-mail",
        url: "mailto:atharvatendle@gmail.com",
    },
];

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <a href="#hero">AT</a>
                    </div>
                    <div className="footer-links">
                        <ul className="footer-nav">
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#publications">Publications</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="copyright">
                        &copy; {currentYear} Atharva Tendle. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
