import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/Navbarphone.css";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [pendingScrollId, setPendingScrollId] = useState(null);
  const [homeOpen, setHomeOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuPos, setMenuPos] = useState({ top: 0, left: 0, width: 180 });

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goSection = (id) => {
    if (location.pathname === "/") {
      scrollToId(id);
    } else {
      setPendingScrollId(id);
      navigate("/");
    }
  };

  useEffect(() => {
    if (location.pathname === "/" && pendingScrollId) {
      const t = setTimeout(() => scrollToId(pendingScrollId), 120);
      setPendingScrollId(null);
      return () => clearTimeout(t);
    }
  }, [location.pathname, pendingScrollId]);

  useEffect(() => {
    const onDocClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setHomeOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  useEffect(() => {
    setHomeOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className="navWrap">
      <div className="navInner">
        
        {/* DESKTOP LOGO */}
        <div className="brand" onClick={() => goSection("home")}>
          <img src={logo} alt="RAMB" className="brandLogo" />
        </div>

        {/* MOBILE TOP BAR (Phone/Apply now added to middle) */}
        <div className="mobileTopBar">
          <img src={logo} alt="RAMB" className="mobileLogo" onClick={() => goSection("home")} />
          
          <div className="mobileMiddleActions">
             <a className="mobileNavPhone" href="tel:0212224220">📞 021-222-4220</a>
             <button className="mobileNavBtn" onClick={() => goSection("contact")}>Apply Now</button>
          </div>
          
          <div className={`hamburger ${mobileOpen ? "open" : ""}`} onClick={() => setMobileOpen(!mobileOpen)}>
            <span /><span /><span />
          </div>
        </div>

        {/* DESKTOP LINKS */}
        <nav className="navLinks">
          <div className={`navDrop ${homeOpen ? "open" : ""}`} ref={dropdownRef}>
            <button className="navLink navLinkDrop" onClick={() => setHomeOpen(!homeOpen)}>
              Home <span className="caret">▾</span>
            </button>
            <div className="navMenu" style={{ top: menuPos.top, left: menuPos.left, width: menuPos.width }}>
              <button className="navMenuItem" onClick={() => { setHomeOpen(false); goSection("about"); }}>About Us</button>
              <button className="navMenuItem" onClick={() => { setHomeOpen(false); goSection("contact"); }}>Contact Us</button>
            </div>
          </div>
          <button className="navLink" onClick={() => navigate("/loans")}>Loans</button>
          <button className="navLink" onClick={() => navigate("/education-support")}>Education Support</button>
          <button className="navLink" onClick={() => navigate("/travel-transport")}>Travel & Transport</button>
          <button className="navLink" onClick={() => navigate("/gold-plus")}>Gold Plus</button>
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="navActions">
          <a className="navPhone" href="tel:0212224220">📞 021-222-4220</a>
          <button className="navBtn" onClick={() => goSection("contact")}>Apply Now</button>
        </div>

        {/* MOBILE DRAWER */}
        <div className={`mobileDrawer ${mobileOpen ? "show" : ""}`}>
          <p onClick={() => { goSection("home"); setMobileOpen(false); }}>Home</p>
          <p onClick={() => { goSection("about"); setMobileOpen(false); }}>About Us</p>
          <p onClick={() => { navigate("/education-support"); setMobileOpen(false); }}>Education Support</p>
          <p onClick={() => { navigate("/travel-transport"); setMobileOpen(false); }}>Travel & Transport</p>
          <p onClick={() => { navigate("/gold-plus"); setMobileOpen(false); }}>Gold Plus</p>
          <p onClick={() => { goSection("contact"); setMobileOpen(false); }}>Contact</p>
        </div>
      </div>
    </header>
  );
}