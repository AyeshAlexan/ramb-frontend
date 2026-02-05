import {motion, scale} from "framer-motion";
import logo from "../assets/logo.png";

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
                    <a className="nav__link active" href="#home">Home</a>
                    <a className="nav__link" href="#loans">Loans</a>
                    <a className="nav__link" href="#travel">Travel & Transport</a>
                    <a className="nav__link" href="#jobbank">JobBank</a>
                    <a className="nav__link" href="#contact">Contact</a>
                </div>
            </nav>
        </header>
    );
}