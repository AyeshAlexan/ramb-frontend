import { motion } from "framer-motion";
import styles from "../styles/global.css";
import goldplus from "../icons/goldplus.jpeg";
import allloans from "../icons/allloans.JPG";
import childrenedu from "../icons/childrenedu.JPG";
import overseasedu from "../icons/overseasedu.JPG";
import travel from "../icons/travel.png";
import jobbank from "../icons/jobbank.JPG";
import airtickets from "../icons/airtickets.JPG";
import accommodation from "../icons/accommodation.JPG";
import overseasacc from "../icons/overseasacc.JPG";

const services = [
  { title: "Gold Plus Accounts", desc: "Savings accounts under saikibe", img: goldplus },
  { title: "All Types of Loans", desc: "Flexible loan options for your needs.", img: allloans },
  { title: "Local Children’s Education", desc: "Education support & guidance.", img: childrenedu },
  { title: "Overseas Education Support", desc: "Advice & documentation support.", img: overseasedu },
  { title: "Travel & Transport", desc: "Transport assistance & arrangements.", img: travel },
  { title: "JobBank", desc: "Employment support & resources.", img: jobbank },
  { title: "Overseas Air Tickets", desc: "Ticket guidance & booking help.", img: airtickets },
  { title: "Overseas Accommodation", desc: "Accommodation planning support.", img: accommodation },
  { title: "Overseas Accommodation", desc: "More accommodation solutions.", img: overseasacc },
];

export default function Services() {
  return (
    <section className="services" id="loans">
      <div className="container">
        <div className="sectionTitle">
          <div className="line" />
          <h2>Our Services</h2>
          <div className="line" />
        </div>

        <div className="services__grid">
          {services.map((s, idx) => (
            <motion.article
              key={idx}
              className="serviceCard"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: (idx % 3) * 0.06 }}
            >
              <img className="serviceCard__icon" src={s.img} alt={s.title} />
              <div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
