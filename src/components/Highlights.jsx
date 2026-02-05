import { motion } from "framer-motion";

import personal from "../icons/peraonal.jpeg";
import sme from "../icons/sme.png";
import pawn from "../icons/pawn.jpg";

const items =[
  { title: "Personal Loans", desc: "Flexible personal loans for any need.", img: personal },
  { title: "SME Loans", desc: "Funding solutions for businesses.", img: sme },
  { title: "Pawn Loans", desc: "Instant cash for your gold & valuables.", img: pawn },
];

export default function Highlights(){
    return(
        <section className="highlights">
            <div className="container hightlights__grid">
                {items.map((it, idx)=>(
                    <motion.article
                    key={it.title}
                    className="card card--shadow"
                    initial={{opacity: 0, y: 16}}
                    whileInView={{opacity:1, y:0}}
                    viewport={{once: true, amount: 0.3}}
                    transition={{duration: 0.45, delay: idx*0.06}}
                    >
                        <img className="card__icon" src={it.img} alt={it.title}/>
                        <div>
                            <h3>{it.title}</h3>
                            <p>{it.desc}</p>
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    );
}