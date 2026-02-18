import React from "react";
import {useNavigate, useLocation} from "react-router-dom";
import "../styles/footer.css";
import {FaFacebookF, FaInstagram} from "react-icons/fa";

import rambLogo from "../assets/logo.png";
import smaertOmegaLogo from "../assets/smart.png";

const Footer =() =>{
  const navigate = useNavigate();
  const location = useLocation();

  //Logic to handle smooth scrolling to sections
    const scrollTold = (id) =>{
      const el = document.getElementById(id);
      if(!el) return;
      el.scrollIntoView({behavior: "smooth", block: "start"});
    };

    const goSection = (id) => {
      if(location.pathname === "/"){
        scrollTold(id);
      }else{
        //If not on home page, navigate home with state to trigger scroll
        navigate("/", {state: {targetId: id}});
      }
    };

  return(
  <footer className="footer">

    {/*Top SEECTION */}
    <div className="footer-top">

      {/*Left*/}
      <div className="footer-col">
        <img src={rambLogo} alt="RAMB" className="footer-logo"/>

        <h4>Office Address</h4>
        <p>
          <strong>United Kingdom</strong><br/>
          167-169 Great Portland Steet, 5th Floor,<br/>
          London,W1W 5PF
        </p>

        <p>
        <strong>Sri Lanka </strong><br />
            No 29, Muneeswaran Road,<br />
            40000, Jaffna.
        </p>
        
        <p><strong>Email</strong><br />info@ramb.lk</p>
        <p><strong>Phone</strong><br />021 222 4220 / 021 222 6990</p>
      </div>
      
      {/*Middel */}
      <div className="footer-col">
        <h4>Quick Links</h4>
        <ul>
            <li><button className="footer-link-btn" onClick={() => navigate("/")}>Home</button></li>
            <li><button className="footer-link-btn" onClick={() => goSection("about")}>About Us</button></li>
            <li><button className="footer-link-btn" onClick={() => navigate("/education-support")}>Education Support</button></li>
            <li><button className="footer-link-btn" onClick={() => navigate("/loans")}>Loans</button></li>
            <li><button className="footer-link-btn" onClick={() => navigate("/gold-plus")}>Gold Plus</button></li>
            <li><button className="footer-link-btn" onClick={() => goSection("contact")}>Contact Us</button></li>
        </ul>
      </div>
      
      {/* RIGHT */}
     <div className="footer-col">
          <h4>Information</h4>
          <ul>
            <li><button className="footer-link-btn" onClick={() => navigate("/terms")}>Terms & Conditions</button></li>
            <li><button className="footer-link-btn" onClick={() => navigate("/privacy")}>Privacy Policy</button></li>
            <li><button className="footer-link-btn" onClick={() => navigate("/topup")}>Cash Top Up</button></li>
            <li><button className="footer-link-btn" onClick={() => navigate("/gold-price")}>Live Gold Price</button></li>
          </ul>
        </div>
      </div>
    {/*DIVIDER */}
    <div className="footer-divider"></div>
    {/*BOTTOM */}
    <div className="footer-bottom">
    
    {/* SOCIAL */}
        <div className="social-icons">
          <a href="https://www.facebook.com/people/RAMB/61571434017921/"><FaFacebookF /></a>
          <a href="https://www.instagram.com/"><FaInstagram /></a>
        </div>
    
    {/*CENTER */}
    <div className="footer-center">
      <span>Designed by</span>
      <a href="https://www.smartomega.lk/" target="_black" rel="noreferrer">
        <img src={smaertOmegaLogo} alt="Smart Omega Group"/>
        Smart Omega Group (PVT) Ltd
      </a>
    </div>

    {/*RIGHT */}
    <div className="footer-right">
        © 2026 RAMB (PVT) Ltd
    </div>

    </div>
  </footer>
  );
};

export default Footer;