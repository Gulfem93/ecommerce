import "../css/header.css";
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import { SlPhone } from "react-icons/sl";
import { BiCartAlt } from "react-icons/bi";
import { CiMail } from "react-icons/ci";
import { BiHeart } from "react-icons/bi";
import { SlUser } from "react-icons/sl";


function Header() {
  return (
    <header className="header">
      {/* Üst Koyu Bar */}
      
      {/* Alt Açık Renk Navbar */}
      <div className="navbar" >
        <div className="brand">BrandName</div>
        <nav className="main-nav">
          <a href="#">Home</a>

          {/* Dropdown Menü */}
          <div className="dropdown">
            <a href="#" className="dropbtn">
              Shop <SlArrowDown className="icon" />
            </a>
            <div className="dropdown-content">
              <a href="#shop">Full Width</a>
              <a href="#shop">Sidebar Right</a>
              <a href="#shop">Sidebar Left</a>
              <a href="#shop">List View</a>
              <a href="#shop">Checkout</a>
              <a href="#shop">Cart</a>
              <a href="#shop">Wishlist</a>
            </div>
          </div>

          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
          <a href="#">Pages</a>
        </nav>

        <div className="auth-cart">
          <SlUser />
          <a href="#" className="login">Login / Register</a>
          <a href="#">
            <BiCartAlt />
          </a>
          <a href="#"><BiHeart /></a>
        </div>
      </div>
    </header>
  );
}

export default Header;
