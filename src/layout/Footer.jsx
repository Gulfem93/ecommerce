import React from "react";
import "../css/footer.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      {/* Üst kısım */}
      <div className="footer-top">
        <div className="footer-top-container">
          <div className="footer-top-row">
            <div className="footer-brand">
              <span className="footer-logo">Bandage</span>
            </div>
            <div className="footer-socials">
              <a href="#" className="facebook"><FaFacebookF /></a>
              <a href="#" className="instagram"><FaInstagram /></a>
              <a href="#" className="twitter"><FaTwitter /></a>
            </div>
          </div>
        </div>

        {/* Link kolonları */}
        <div className="footer-links">
          <div className="footer-link-container">
            <div className="footer-link-row">
              <div className="footer-link-company">
                <h4>Company Info</h4>
                <a href="#">About Us</a>
                <a href="#">Carrier</a>
                <a href="#">We are hiring</a>
                <a href="#">Blog</a>
              </div>
              <div className="footer-link-legal">
                <h4>Legal</h4>
                <a href="#">About Us</a>
                <a href="#">Carrier</a>
                <a href="#">We are hiring</a>
                <a href="#">Blog</a>
              </div>
              <div className="footer-link-features">
                <h4>Features</h4>
                <a href="#">Business Marketing</a>
                <a href="#">User Analytic</a>
                <a href="#">Live Chat</a>
                <a href="#">Unlimited Support</a>
              </div>
              <div className="footer-link-resources">
                <h4>Resources</h4>
                <a href="#">IOS & Android</a>
                <a href="#">Watch a Demo</a>
                <a href="#">Customers</a>
                <a href="#">API</a>
              </div>
              <div className="footer-subscribe">
                <h4>Get In Touch</h4>
                <div className="subscribe-box">
                  <input type="email" placeholder="Your Email" />
                  <button>Subscribe</button>
                </div>
                <p>Lorem imp sum dolor Amit</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />

      {/* Alt kısım */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <div className="footer-bottom-row">
            <div className="footer-bottom-col-md-7">
              <p className="footer-bottom-p">
                Made With Love By Finland All Right Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
