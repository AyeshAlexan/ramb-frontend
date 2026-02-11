import {motion,} from "framer-motion";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";


export default function Navbar(){
    return(
        <header className="topbar">
            <div className="container topbar__inner">
                <div className="brand">
                    <img className="brand__logo" src={logo} alt="RAMB"/>
                    <span className="brand__name"></span>
                </div>

                <div className="topbar__right">
                    <div className="phone">
                        <span className="phone__icon">📞</span>
                        <span className="phone__text">021-222-4220</span>
                    </div>
                    
                    <motion.a
                       whiteHover={{scale: 1.05}}
                       whiteTap={{scale: 0.98}}
                       className="btn btn--gold"
                       href="#apply"
                    >
                        Apply Now 
                    </motion.a>
                </div>
            </div>

           <nav className="nav">
  <div className="container nav__inner">
    <NavLink to="/" className="nav__link">Home</NavLink>
    <NavLink to="/loans" className="nav__link">Loans</NavLink>
    <NavLink to="/education" className="nav__link">Education Support</NavLink>
    <NavLink to="/travel" className="nav__link">Travel & Transport</NavLink>
    <NavLink to="/gold-plus" className="nav__link">Gold plus</NavLink>
    <NavLink to="/contact" className="nav__link">Contact</NavLink>
  </div>
</nav>

        </header>
    );
}