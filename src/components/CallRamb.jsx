import { motion } from "framer-motion";
import car from "../assets/car.png";
import styles from "../styles/global.css";

export default function CallRamb() {
  return (
    <section className="callRamb">
      <div className="container callRamb__inner">
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Call Ramb for Safe Travels!
          </motion.h3>
          <p>Reliable Local Transport & Traveling Assistance</p>

          <div className="callRamb__row">
            <div className="callRamb__phone">
              <span className="callRamb__phoneIcon">📞</span>
              <span>021 222 4220</span>
            </div>

            <a className="btn btn--dark" href="#apply">Apply Online Now</a>
          </div>
        </div>

        <motion.img
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="callRamb__car"
          src={car}
          alt="Car"
        />
      </div>
    </section>
  );
}
