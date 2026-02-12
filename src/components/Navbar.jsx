// src/components/Navbar.jsx
import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [pendingScrollId, setPendingScrollId] = useState(null);

  // dropdown
  const [homeOpen, setHomeOpen] = useState(false);
  const dropdownRef = useRef(null);

  // dropdown position (fix for overflow clipping)
  const [menuPos, setMenuPos] = useState({ top: 0, left: 0, width: 180 });

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goSection = (id) => {
    if (location.pathname === "/") {
      scrollToId(id);
      return;
    }
    setPendingScrollId(id);
    navigate("/");
  };

  useEffect(() => {
    if (location.pathname === "/" && pendingScrollId) {
      const t = setTimeout(() => scrollToId(pendingScrollId), 120);
      setPendingScrollId(null);
      return () => clearTimeout(t);
    }
  }, [location.pathname, pendingScrollId]);

  // close dropdown on outside click
  useEffect(() => {
    const onDocClick = (e) => {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(e.target)) setHomeOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // close dropdown on route change
  useEffect(() => {
    setHomeOpen(false);
  }, [location.pathname]);

  // compute dropdown menu position (keep it under the Home button)
  const updateMenuPos = () => {
    if (!dropdownRef.current) return;
    const btn = dropdownRef.current.querySelector(".navLinkDrop");
    if (!btn) return;

    const r = btn.getBoundingClientRect();
    // prefer a wider menu so long labels don't wrap; clamp to viewport
    const preferred = Math.max(r.width, 120);
    const maxAllowed = Math.max(200, window.innerWidth - 24);
    const width = Math.min(preferred, maxAllowed);

    // keep menu inside viewport horizontally
    let left = r.left;
    if (left + width + 12 > window.innerWidth) left = window.innerWidth - width - 5;
    if (left < 12) left = 12;

    setMenuPos({
      top: r.bottom + 10,
      left,
      width,
    });
  };

  useEffect(() => {
    if (!homeOpen) return;

    updateMenuPos();

    const onResize = () => updateMenuPos();
    const onScroll = () => updateMenuPos();

    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, true);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll, true);
    };
  }, [homeOpen]);

  const openHomeAndMaybeGo = () => {
    setHomeOpen((v) => !v);

    if (location.pathname !== "/") {
      navigate("/");
    } else {
      scrollToId("home");
    }
  };

  const homeItem = (sectionId) => {
    setHomeOpen(false);
    goSection(sectionId);
  };

  return (
    <header className="navWrap">
      <div className="navInner">
        <div className="brand" onClick={() => goSection("home")} role="button" tabIndex={0}>
          <img src={logo} alt="RAMB" className="brandLogo" />
        </div>

        <nav className="navLinks" aria-label="Primary">
          {/* HOME DROPDOWN */}
          <div className={`navDrop ${homeOpen ? "open" : ""}`} ref={dropdownRef}>
            <button
              className="navLink navLinkDrop"
              onClick={openHomeAndMaybeGo}
              aria-haspopup="menu"
              aria-expanded={homeOpen}
              type="button"
            >
              Home <span className="caret">▾</span>
            </button>

            <div
              className="navMenu"
              role="menu"
              style={{ top: menuPos.top, left: menuPos.left, width: menuPos.width }}
            >
              <button className="navMenuItem" type="button" onClick={() => homeItem("about")} role="menuitem">
                About Us
              </button>
              <button className="navMenuItem" type="button" onClick={() => homeItem("contact")} role="menuitem">
                Contact Us
              </button>
            </div>
          </div>

          {/* OTHER PAGES */}
          <button className="navLink" onClick={() => navigate("/loans")} type="button">Loans</button>
          <button className="navLink" onClick={() => navigate("/education-support")} type="button">Education Support</button>
          <button className="navLink" onClick={() => navigate("/travel-transport")} type="button">Travel &amp; Transport</button>
          <button className="navLink" onClick={() => navigate("/gold-plus")} type="button">Gold Plus</button>
        </nav>

        <div className="navActions">
          <a className="navPhone" href="tel:0212224220">📞 021-222-4220</a>
          <button className="navBtn" onClick={() => goSection("contact")} type="button">Apply Now</button>
        </div>
      </div>
    </header>
  );
}
