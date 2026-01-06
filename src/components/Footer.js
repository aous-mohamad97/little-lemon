import React from "react";
import { Link } from "react-router-dom";
import small_logo from "../images/Logo .svg";

const SiteFooter = () => {
    const quickLinks = [
        { path: "/", label: "Home" },
        { path: "/#about", label: "About" },
        { path: "/#menu", label: "Menu" },
        { path: "/booking", label: "Reservations" },
        { path: "/booking", label: "Order Online" },
        { path: "/#login", label: "Login" }
    ];

    const socialMediaLinks = [
        { platform: "Facebook", url: "https://facebook.com" },
        { platform: "Instagram", url: "https://instagram.com" },
        { platform: "Twitter", url: "https://twitter.com" }
    ];

    return(
        <footer className="site-footer">
            <section className="footer-content">
                <div className="company-info">
                    <img src={small_logo} alt="Little Lemon Restaurant Logo"/>
                    <p>
                        We are a family owned Mediterranean restaurant, focused on 
                        traditional recipes served with a modern twist.
                    </p>
                </div>
                <div className="footer-section">
                    <h3>Important Links</h3>
                    <ul>
                        {quickLinks.map((link, index) => (
                            <li key={index}>
                                {link.path.startsWith("/#") ? (
                                    <a href={link.path}>{link.label}</a>
                                ) : (
                                    <Link to={link.path}>{link.label}</Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Contact</h3>
                    <ul>
                        <li>
                            <strong>Address:</strong><br/> 
                            123 Town Street, Chicago
                        </li>
                        <li>
                            <strong>Phone:</strong><br/> 
                            +00 123 456 789
                        </li>
                        <li>
                            <strong>Email:</strong><br/> 
                            little@lemon.com
                        </li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Social Media Links</h3>
                    <ul>
                        {socialMediaLinks.map((social, index) => (
                            <li key={index}>
                                <a href={social.url} target="_blank" rel="noopener noreferrer">
                                    {social.platform}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </footer>
    );
}

export default SiteFooter;