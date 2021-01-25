import React from 'react'
import { Button } from './Button'
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the CRICKZZ newsletter to receive latest news for cricket
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your Email" className="footer-input" />
                        <Button buttonStyle="btn--outline">Subscribe</Button>
                    </form>
                </div>
            </section>
            <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Vote Video</Link>
          </div>
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
        <section class="social-media">
            <div class="social-media-wrap">
                <div class="footer-logo">
                    <Link to="/" className="social-logo">
                    <i class="fab fa-cuttlefish"></i>RICKZZ
                    </Link>
                </div>
                    <small class="website-rights">
                        <i class="fab fa-cuttlefish"></i>RICKZZ © 2021
                    </small>
                    <div class="social-icons">
                        <Link to="/" class="social-icon-link facebook" target="_blank" aria-label="Facebook">
                            <i className="fab fa-facebook-f" />
                        </Link>
                        <Link to="/" class="social-icon-link instagram" target="_blank" aria-label="Instagram">
                            <i className="fab fa-instagram" />
                        </Link>
                        <Link to="/" class="social-icon-link twitter" target="_blank" aria-label="Twitter">
                            <i class="fab fa-twitter" />
                        </Link>

                    </div>
            </div>

        </section>
    </div>
    )
}

export default Footer;
