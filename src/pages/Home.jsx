// src/pages/Home.jsx
import React, { useEffect, useRef, useState } from "react";
import "../styles/global.css";

import heroImg from "../assets/hero.png";

// ✅ About images
import aboutImg1 from "../assets/about-circle.png";
import aboutImg2 from "../assets/about-2.png.jpg";

// ✅ Our Team Images
import founder from "../assets/our team/Founder & Principal Investor.jpeg";
import director from "../assets/our team/Director.jpeg";
import Chief from "../assets/our team/Chief Operating Officer.jpeg";
import ABF from "../assets/our team/Adivsory Board Finance.jpeg";
import ABE from "../assets/our team/Advisory Board Education .jpeg";
import ABP from "../assets/our team/Advisory Board Premises.jpeg";
import ABM from "../assets/our team/Advisory Board Management.jpeg";
import Finance from "../assets/our team/Finance and compliance  officer.jpeg";
import FManger from "../assets/our team/Former manager.jpeg";
import Manager from "../assets/our team/Manager.jpeg";
import AM1 from "../assets/our team/Assistant Manager1.jpeg";
import AM2 from "../assets/our team/Assistant Manager2.jpeg";
import EX1 from "../assets/our team/Executive Trainer1.jpeg";
import Manager1 from "../assets/our team/Manager1.jpeg";
import AM3 from "../assets/our team/Assistant Manager3.jpeg";
import EX2 from "../assets/our team/Executive trainer2.jpeg";
import EX3 from "../assets/our team/Executive trainer3.jpeg";

// ✅ Loans images
import personalImg from "../assets/personal.jpg";
import businessImg from "../assets/business.jpg";
import educationImg from "../assets/education.jpeg";

// ✅ GOLD PLUS IMAGE (THIS FIXES YOUR ISSUE)
import goldPlusImg from "../assets/gold-plus.jpg"; // <-- make sure this file exists with this exact name

export default function Home() {
  const [open, setOpen] = useState(false);

  // ✅ reveal animation for loans
  useEffect(() => {
    const els = document.querySelectorAll(".loanReveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("show");
        });
      },
      { threshold: 0.18 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // ✅ reveal animation for service strip + gold plus (uses svcReveal)
  useEffect(() => {
    const els = document.querySelectorAll(".svcReveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("show");
        });
      },
      { threshold: 0.2 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main>
      {/* HERO */}
      <section id="home" className="lpHeroFull">
        <div className="heroFullImgWrap">
          <img className="heroFullImg" src={heroImg} alt="Hero" />

          <div className="heroFadeLeft" />
          <div className="heroDiagLight" />
          <div className="heroDiagShade" />

          <div className="heroFullContent">
            <span className="lpPill">Trusted &amp; Professional Support</span>

            <h1 className="lpTitle heroTitleFull">
              Your path to <span className="lpAccent">your goals</span> starts
              here.
            </h1>

            <p className="lpSub heroSubFull">
              We provide support for loans, education guidance, travel &amp;
              transport services, and premium packages — with a smooth process
              and friendly assistance.
            </p>

            <div className="lpBtns">
              <a className="lpBtnPrimary" href="#contact">
                Explore Services →
              </a>
              <a className="lpBtnGhost" href="#about">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES STRIP */}
      <section className="svcStrip">
        <div className="svcStripInner">
          <div className="svcStripHeader svcReveal">
            <span className="svcLine" />
            <h3 className="svcStripTitle">
              Not a Bank: Supporting Your Dreams.
            </h3>
            <span className="svcLine" />
          </div>

          <div className="svcCards">
            <div className="svcCard svcReveal" style={{ transitionDelay: "0ms" }}>
              <div className="svcIcon">🤝</div>
              <div className="svcText">
                <div className="svcCardTitle">Personal Loans</div>
                <div className="svcCardDesc">
                  Our professional personal loan solutions offer strategic capital required to manage life’s diverse
                  financial requirements. Whether you are consolidating debt or funding a major investment,
                  we provide bespoke repayment terms and competitive rates designed to support your long-term
                  fiscal health.
                </div>
              </div>
            </div>

            <div className="svcCard svcReveal" style={{ transitionDelay: "90ms" }}>
              <div className="svcIcon">🏪</div>
              <div className="svcText">
                <div className="svcCardTitle">SME Loans</div>
                <div className="svcCardDesc">
                  Our comprehensive suite of funding solutions provides the strategic capital necessary to drive business growth and operational excellence. From scaling infrastructure to
                  managing short-term liquidity, we offer tailored financial instruments designed to align with
                  your organization’s long-term objectives and vision.
                </div>
              </div>
            </div>

            <div className="svcCard svcReveal" style={{ transitionDelay: "180ms" }}>
              <div className="svcIcon">💰</div>
              <div className="svcText">
                <div className="svcCardTitle">Pawn Loans</div>
                <div className="svcCardDesc">
                  Access immediate capital by leveraging the inherent value of your precious metals and high-end
                  collectibles. Our firm offers a discreet, expert appraisal process designed to provide
                  competitive market rates and instantaneous settlement, ensuring your liquidity
                  needs are met with professionalism.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="lpSection">
        <div className="lpSectionInner">
          <div className="lpTopCenter">
            <div className="lpKicker">ABOUT US</div>
            <h2 className="lpH2">Why you should choose us</h2>
            <p className="lpCenterText">
              Clear guidance, professional support, and a smooth experience
              designed for people who want confidence and simplicity.
            </p>
          </div>

          <div className="aboutGrid">
            <AboutReveal>
              <div className="aboutLeft">
                <div className={`aboutCircleGroup ${open ? "open" : ""}`}>
                  <div className="aboutCircleWrap sm">
                    <img src={aboutImg1} alt="About 1" className="aboutCircleImg" />
                  </div>

                  <div className="aboutCircleWrap sm">
                    <img src={aboutImg2} alt="About 2" className="aboutCircleImg" />
                  </div>
                </div>
              </div>
            </AboutReveal>

            <div className="aboutRight">
              <h3 className="aboutTitle">About RAMB</h3>

              <div className="aboutOutlineCard">
                <p className="aboutText">
                  Reliable Asset Management &amp; Business (RAMB) represents a
                  strong and trustworthy image. We focus on protecting valuable
                  assets and helping people plan for the future with clear
                  guidance and ethical practices. Our team supports individuals
                  and businesses with organized documentation, transparent
                  steps, and long-term planning.
                </p>
              </div>

              {!open && (
                <button
                  className="lpBtnPrimary aboutToggleBtn"
                  onClick={() => setOpen(true)}
                  aria-expanded="false"
                  aria-controls="about-more"
                >
                  View More
                </button>
              )}

              <div id="about-more" className={`aboutMore ${open ? "open" : ""}`}>
                <div className="aboutMoreInner">
                  <div className="aboutMoreCard">
                    <p className="aboutMoreText">
                      We are committed to helping clients build a secure future
                      through trust, expertise, and professionalism. We
                      specialize in managing valuable assets, including gold and
                      long-term plans, with a goal to provide tailored solutions
                      that support stability, growth, and lasting security.
                    </p>

                    <p className="aboutMoreText">
                      Whether you are looking for strategic opportunities,
                      reliable asset support, or quick access to value through
                      secure services, RAMB is a trusted partner. We believe in
                      transparency, ethical practices, and customer-focused
                      solutions that empower individuals and businesses.
                    </p>

                    <p className="aboutMoreText">
                      At RAMB, we don’t just manage assets — we nurture
                      prosperity with a commitment to excellence. Let us be the
                      key to unlocking your potential, ensuring security and
                      success at every step.
                    </p>
                  </div>

                  <div className="aboutMoreActions">
                    <a className="lpBtnPrimary" href="#contact">Contact</a>
                    <button className="lpBtnGhost" onClick={() => setOpen(false)}>
                      Show Less
                    </button>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 14 }}>
                <a className="lpBtnGhost" href="#team">Meet Our Team →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOANS DETAILS */}
      <section id="loan-details" className="loanDetails">
        <div className="loanDetailsInner">
          <div className="lpTopCenter">
            <div className="lpKicker">LOANS</div>
            <h2 className="lpH2">Loan Details</h2>
            <p className="lpCenterText">
              Simple, transparent options designed to match your needs — personal goals,
              business growth, and education support.
            </p>
          </div>

          <div className="loanRow loanReveal">
            <div className="loanMedia">
              <img src={personalImg} alt="Personal Loan" className="loanImg" />
            </div>
            <div className="loanContent">
              <h3 className="loanTitle">Personal Loans</h3>
              <p className="loanText">
                Flexible personal loans for urgent needs, life events, or planned expenses.
                Clear documentation, friendly guidance, and a smooth approval process.
              </p>
              <ul className="loanList">
                <li>Fast processing with clear steps</li>
                <li>Flexible repayment options</li>
                <li>Supportive customer guidance</li>
              </ul>
              <div className="loanActions">
                <a className="lpBtnPrimary" href="/loans">Learn More →</a>
                <a className="lpBtnGhost" href="#contact">Contact</a>
              </div>
            </div>
          </div>

          <div className="loanRow reverse loanReveal">
            <div className="loanMedia">
              <img src={businessImg} alt="Business Loan" className="loanImg" />
            </div>
            <div className="loanContent">
              <h3 className="loanTitle">Business Loans</h3>
              <p className="loanText">
                Funding solutions for small and medium businesses — to expand operations,
                manage cash flow, or invest in growth with confidence.
              </p>
              <ul className="loanList">
                <li>Business-friendly plans</li>
                <li>Guidance for documentation</li>
                <li>Support for growth & stability</li>
              </ul>
              <div className="loanActions">
                <a className="lpBtnPrimary" href="/loans">Learn More →</a>
                <a className="lpBtnGhost" href="#contact">Contact</a>
              </div>
            </div>
          </div>

          <div className="loanRow loanReveal">
            <div className="loanMedia">
              <img src={educationImg} alt="Education Loan" className="loanImg" />
            </div>
            <div className="loanContent">
              <h3 className="loanTitle">Education Loans</h3>
              <p className="loanText">
                Support for education-related costs — courses, training, and professional
                development. Build your future with structured and reliable assistance.
              </p>
              <ul className="loanList">
                <li>Student & professional pathways</li>
                <li>Clear and supportive process</li>
                <li>Focused on long-term value</li>
              </ul>
              <div className="loanActions">
                <a className="lpBtnPrimary" href="/loans">Learn More →</a>
                <a className="lpBtnGhost" href="#contact">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ GOLD PLUS SECTION (FIXED IMAGE) */}
      <section className="goldPlus">
        <div className="goldPlusGrid">
          <div className="goldPlusImgWrap svcReveal">
            <img src={goldPlusImg} alt="Gold Plus" className="goldPlusImg" />
          </div>

          <div className="goldPlusContent svcReveal">
            <div className="goldPlusKicker">GOLD PLUS</div>

            <h2 className="goldPlusTitle">
              Premium Gold-Backed <span className="lpAccent">Support</span>
            </h2>

            <p className="goldPlusText">
              Gold Plus is our enhanced gold-backed support program designed for
              customers who need fast access to funds with secure asset handling and
              premium service care. We provide fair valuation, quick processing,
              transparent terms, and flexible settlement options — all with trusted
              professional guidance.
            </p>

            <div className="goldPlusBtns">
              <a href="/gold-plus" className="lpBtnPrimary">Explore Gold Plus</a>
              <a href="#contact" className="lpBtnGhost">Speak to Advisor</a>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM (TREE DIAGRAM) */}
      <section id="team" className="lpSection lpSectionAlt">
        <div className="lpSectionInner">
          <div className="lpTopCenter">
            <div className="lpKicker">OUR TEAM</div>
            <h2 className="lpH2">Corporate Organizational Structure</h2>
            <p className="lpCenterText">
              A modern view of the RAMB structure — leadership, advisory boards,
              and operations.
            </p>
          </div>

          <OrgChart />

          <div className="aboutMoreActions" style={{ marginTop: 20 }}>
            <a className="lpBtnPrimary" href="#contact">Contact</a>
            <a className="lpBtnGhost" href="#home">Back to Top</a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="lpSection">
        <div className="lpSectionInner">
          <div className="lpTopCenter">
            <div className="lpKicker">CONTACT</div>
            <h2 className="lpH2">Get in touch with us</h2>
            <p className="lpCenterText">
              Have a question or ready to get started? Send a message and we’ll
              respond soon.
            </p>
          </div>

          <div className="contactGrid">
            <div className="contactLeft">
              <div className="infoCard">
                <div className="infoIcon">📞</div>
                <div>
                  <div className="infoLabel">Phone</div>
                  <div className="infoValue">021 222 4220 / 021 222 6990</div>
                </div>
              </div>

              <div className="infoCard">
                <div className="infoIcon">✉️</div>
                <div>
                  <div className="infoLabel">Email</div>
                  <div className="infoValue">info@ramb.lk</div>
                </div>
              </div>

              <div className="infoCard">
                <div className="infoIcon">📍</div>
                <div>
                  <div className="infoLabel">Address</div>
                  <div className="infoValue">
                    No 29, Muneeswaran Road, 40000, Jaffna.
                  </div>
                </div>
              </div>
            </div>

            <form className="contactForm" onSubmit={(e) => e.preventDefault()}>
              <div className="formRow">
                <input className="inp" placeholder="First Name" />
                <input className="inp" placeholder="Last Name" />
              </div>
              <input className="inp" placeholder="Email Address" />
              <input className="inp" placeholder="Phone Number" />
              <textarea className="inp ta" placeholder="Your Message" />

              <button className="lpBtnPrimary" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------------------------
   Helpers
---------------------------- */

function AboutReveal({ children }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(true);
      },
      { threshold: 0.18 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${show ? "show" : ""}`}>
      {children}
    </div>
  );
}

/* ---------------------------
   Org Chart
---------------------------- */

function OrgChart() {
  const data = {
    leadership: [
      { name: "Mrs. M. Abreame", role: "Founder & Principal Investor", img: founder },
      { name: "Mr. V. Thillainadarajah", role: "Chief Executive Officer (CEO)", img: director },
      { name: "Mrs. T. Thillainadarajah", role: "Chief Operating Officer (COO)", img: Chief },
    ],
    advisory: [
      { name: "Ms. Amirthini", role: "Advisory Board – Finance", img: ABF },
      { name: "Mr. Baskaran", role: "Advisory Board – Education", img: ABE },
      { name: "Mr. Janagan", role: "Advisory Board – Premises", img: ABP },
      { name: "Mr. Anoshan", role: "Advisory Board – Management", img: ABM },
    ],
    finance: [{ name: "Ms. Keerthika", role: "Finance & Compliance Officer", img: Finance }],
    operationsLabel: "Operations Team: Admin | Field | Support Staff",
    operations: [
      { name: "Mr. Sethukanan (Former)", role: "Manager", img: FManger },
      { name: "Ms. Subasihin", role: "Manager (Associate Principal)" },
      { name: "Ms. Kema", role: "Teacher" },
      { name: "Ms. Selvasri Questalla", role: "Manager", img: Manager },
      { name: "Mr. Kirujan", role: "Assistant Manager", img: AM1 },
      { name: "Ms. Kamsika", role: "Executive Trainer", img: EX1 },
      { name: "Ms. Kajeni", role: "Manager", img: Manager1 },
      { name: "Ms. Prinsiya", role: "Assistant Manager", img: AM2 },
      { name: "Mr. Nilavan (Former)", role: "Assistant Manager", img: AM3 },
      { name: "Mr. Theesikan", role: "Executive Trainer", img: EX2 },
      { name: "Ms. A Arunya", role: "Executive Trainer", img: EX3 },
    ],
  };

  useEffect(() => {
    const els = document.querySelectorAll(".orgReveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("show")),
      { threshold: 0.18 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="orgWrap">
      <div className="orgRow orgTop">
        {data.leadership.map((p, i) => <OrgNode key={i} person={p} delay={i * 80} />)}
      </div>

      <div className="orgBranch orgReveal">
        <span className="orgStem" />
        <span className="orgBar" />
      </div>

      <div className="orgSectionTitle orgReveal">Advisory Boards</div>
      <div className="orgRow">
        {data.advisory.map((p, i) => <OrgNode key={i} person={p} delay={i * 80} />)}
      </div>

      <div className="orgBranch sm orgReveal">
        <span className="orgStem" />
      </div>

      <div className="orgSectionTitle orgReveal">Finance &amp; Compliance</div>
      <div className="orgRow orgCenter">
        {data.finance.map((p, i) => <OrgNode key={i} person={p} delay={i * 80} />)}
      </div>

      <div className="orgBranch orgReveal">
        <span className="orgStem" />
        <span className="orgBar wide" />
      </div>

      <div className="orgOpsLabel orgReveal">{data.operationsLabel}</div>
      <div className="orgRow orgOps">
        {data.operations.map((p, i) => (
          <OrgNode key={i} person={p} delay={i * 45} compact />
        ))}
      </div>
    </div>
  );
}

function OrgNode({ person, delay = 0, compact = false }) {
  const { name, role, img } = person;

  return (
    <div
      className={`orgNode orgReveal ${compact ? "compact" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="orgAvatar">
        {img ? <img src={img} alt={name} /> : <div className="orgAvatarPlaceholder" />}
      </div>
      <div className="orgName">{name}</div>
      <div className="orgRole">{role}</div>
    </div>
  );
}