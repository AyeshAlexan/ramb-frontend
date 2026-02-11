import React from "react";
import styles from "../styles/LoansPage.css";

// change these paths to your real images
import personalImg from "../assets/personal.jpg";
import businessImg from "../assets/business.jpg";
import educationImg from "../assets/education.jpeg";

const loanCards = [
  {
    id: "personal",
    title: "PERSONAL LOAN",
    desc: "Quick approval, flexible installments, and friendly support for your personal needs.",
    btn: "Apply Now",
    img: personalImg,
    accent: "blue",
  },
  {
    id: "business",
    title: "BUSINESS LOAN",
    desc: "Grow your business with tailored financing, smooth documentation, and expert guidance.",
    btn: "Apply Now",
    img: businessImg,
    accent: "teal",
  },
  {
    id: "education",
    title: "EDUCATION LOAN",
    desc: "Support your studies with affordable plans, easy processing, and trusted assistance.",
    btn: "Apply Now",
    img: educationImg,
    accent: "purple",
  },
];

export default function LoansPage() {
  return (
    <div className="loansPage">
      {/* Page title area like your screenshot */}
      <div className="loansHeader">
        <h1>Explore Our Loan Options</h1>
      </div>

      <div className="loansWrap">
        {loanCards.map((card, idx) => (
          <article
            key={card.id}
            className={`loanCard accent-${card.accent}`}
            style={{ animationDelay: `${idx * 120}ms` }}
          >
            {/* TOP STRIP (2nd-image vibe) */}
            <div className="loanTopStrip">
              <div className="stripCol">
                <img src={card.img} alt={card.title} className="stripImg" />
              </div>

              {/* 3 color panels to mimic the multi-panel look */}
              <div className="stripPanels">
                <div className="panel p1" />
                <div className="panel p2" />
                <div className="panel p3" />
              </div>

              {/* round icon chip */}
              <div className="stripChip" aria-hidden="true">
                {card.title.split(" ")[0].slice(0, 2)}
              </div>
            </div>

            {/* BODY */}
            <div className="loanBody">
              <h2>{card.title}</h2>
              <p>{card.desc}</p>

              <div className="loanActions">
                <button className="loanBtn">{card.btn}</button>
                <button className="loanBtnOutline">View Details</button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* You can keep your footer component below if you already have it */}
      {/* <Footer /> */}
    </div>
  );
}
