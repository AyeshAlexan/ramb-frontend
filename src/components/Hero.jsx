import {motion} from "framer-motion";
import hero from "../assets/hero.png";
import styles from "../styles/global.css";


export default function Hero(){
    return(
        <section id="home" className="hero">
            <div className="hero__bg" style={{background: `url(${hero})`}}/>
            <div className="hero__overlay"/>

            <div className="container hero__content">
                <motion.div 
                initial={{opacity: 0, y: 18}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.6}}
                className="hero__text"
            >
             <h1>Your Trusted Financial Partner</h1>
             <p className="hero__sub">Secure. Reliable. Supportive.</p>
             <p className="hero__small">Not a Bank. Supporting Your Dreams.</p>

             <motion.a
              whileHover={{scale: 1.03}}
              whileTap={{scale: 0.98}}
              className="btn btn--gold hero__btn"
              href="#apply"
              >
               Get Started
              </motion.a>
            </motion.div>

            </div>
        </section>
    );
}