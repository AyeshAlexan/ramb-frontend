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

export default function Home() {
  const [open, setOpen] = useState(false);

  // ✅ reveal animation for service strip
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

          {/* overlays */}
          <div className="heroFadeLeft" />
          <div className="heroDiagLight" />
          <div className="heroDiagShade" />

          {/* text on top */}
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
          <div className="svcStripHeader reveal svcReveal">
            <span className="svcLine" />
            <h3 className="svcStripTitle">Not a Bank: Supporting Your Dreams.</h3>
            <span className="svcLine" />
          </div>

          <div className="svcCards">
            <div
              className="svcCard reveal svcReveal"
              style={{ transitionDelay: "0ms" }}
            >
              <div className="svcIcon">🤝</div>
              <div className="svcText">
                <div className="svcCardTitle">Personal Loans</div>
                <div className="svcCardDesc">
                  Flexible personal loans for any need.
                </div>
              </div>
            </div>

            <div
              className="svcCard reveal svcReveal"
              style={{ transitionDelay: "90ms" }}
            >
              <div className="svcIcon">🏪</div>
              <div className="svcText">
                <div className="svcCardTitle">SME Loans</div>
                <div className="svcCardDesc">
                  Funding solutions for businesses.
                </div>
              </div>
            </div>

            <div
              className="svcCard reveal svcReveal"
              style={{ transitionDelay: "180ms" }}
            >
              <div className="svcIcon">💰</div>
              <div className="svcText">
                <div className="svcCardTitle">Pawn Loans</div>
                <div className="svcCardDesc">
                  Instant cash for your gold &amp; valuables.
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
            {/* LEFT: Circle Images + fade in */}
            <AboutReveal>
              <div className="aboutLeft">
                <div className={`aboutCircleGroup ${open ? "open" : ""}`}>
                  <div className="aboutCircleWrap sm">
                    <img
                      src={aboutImg1}
                      alt="About 1"
                      className="aboutCircleImg"
                    />
                  </div>

                  <div className="aboutCircleWrap sm">
                    <img
                      src={aboutImg2}
                      alt="About 2"
                      className="aboutCircleImg"
                    />
                  </div>
                </div>
              </div>
            </AboutReveal>

            {/* RIGHT */}
            <div className="aboutRight">
              <h3 className="aboutTitle">About RAMB</h3>

              {/* Top paragraph card */}
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

              {/* View More button only when closed */}
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

              {/* Slide-down content (About ONLY) */}
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

                  {/* Bottom actions */}
                  <div className="aboutMoreActions">
                    <a className="lpBtnPrimary" href="#contact">
                      Contact
                    </a>
                    <button
                      className="lpBtnGhost"
                      onClick={() => setOpen(false)}
                    >
                      Show Less
                    </button>
                  </div>
                </div>
              </div>

              {/* Link to team */}
              <div style={{ marginTop: 14 }}>
                <a className="lpBtnGhost" href="#team">
                  Meet Our Team →
                </a>
              </div>
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
            <a className="lpBtnPrimary" href="#contact">
              Contact
            </a>
            <a className="lpBtnGhost" href="#home">
              Back to Top
            </a>
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
   Helpers (same file)
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
   Org Chart (Tree Diagram)
---------------------------- */

function OrgChart() {
  const data = {
    leadership: [
      {
        name: "Mrs. M. Abreame",
        role: "Founder & Principal Investor",
        img: founder,
      },
      {
        name: "Mr. V. Thillainadarajah",
        role: "Chief Executive Officer (CEO)",
        img: director,
      },
      {
        name: "Mrs. T. Thillainadarajah",
        role: "Chief Operating Officer (COO)",
        img: Chief,
      },
    ],
    advisory: [
      { name: "Ms. Amirthini", role: "Advisory Board – Finance", img: ABF },
      { name: "Mr. Baskaran", role: "Advisory Board – Education", img: ABE },
      { name: "Mr. Janagan", role: "Advisory Board – Premises", img: ABP },
      { name: "Mr. Anoshan", role: "Advisory Board – Management", img: ABM },
    ],
    finance: [
      {
        name: "Ms. Keerthika",
        role: "Finance & Compliance Officer",
        img: Finance,
      },
    ],
    operationsLabel: "Operations Team: Admin | Field | Support Staff",
    operations: [
      { name: "Mr. Sethukanan (Former)", role: "Manager", img: FManger },
      { name: "Ms. Subasihin", role: "Manager (Associate Principal)" },
      { name: "Ms. Kema", role: "Teacher" },
      {
        name: "Ms. Selvasri Questalla",
        role: "Manager",
        img: Manager,
      },
      { name: "Mr. Kirujan", role: "Assistant Manager", img: AM1 },
      { name: "Ms. Kamsika", role: "Executive Trainer", img: EX1 },
      { name: "Ms. Kajeni", role: "Manager", img: Manager1 },
      { name: "Ms. Prinsiya", role: "Assistant Manager", img: AM2 },
      { name: "Mr. Nilavan (Former)", role: "Assistant Manager", img: AM3 },
      { name: "Mr. Theesikan", role: "Executive Trainer", img: EX2 },
      { name: "Ms. A Arunya", role: "Executive Trainer", img: EX3 },
    ],
  };

  // ✅ reveal animation on scroll
  useEffect(() => {
    const els = document.querySelectorAll(".orgReveal");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("show")
        ),
      { threshold: 0.18 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="orgWrap">
      {/* TOP: Leadership */}
      <div className="orgRow orgTop">
        {data.leadership.map((p, i) => (
          <OrgNode key={i} person={p} delay={i * 80} />
        ))}
      </div>

      {/* Tree branch */}
      <div className="orgBranch orgReveal">
        <span className="orgStem" />
        <span className="orgBar" />
      </div>

      {/* Advisory boards */}
      <div className="orgSectionTitle orgReveal">Advisory Boards</div>
      <div className="orgRow">
        {data.advisory.map((p, i) => (
          <OrgNode key={i} person={p} delay={i * 80} />
        ))}
      </div>

      {/* Tree stem */}
      <div className="orgBranch sm orgReveal">
        <span className="orgStem" />
      </div>

      {/* Finance & Compliance */}
      <div className="orgSectionTitle orgReveal">Finance &amp; Compliance</div>
      <div className="orgRow orgCenter">
        {data.finance.map((p, i) => (
          <OrgNode key={i} person={p} delay={i * 80} />
        ))}
      </div>

      {/* Tree branch wide */}
      <div className="orgBranch orgReveal">
        <span className="orgStem" />
        <span className="orgBar wide" />
      </div>

      {/* Operations */}
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
        {img ? (
          <img src={img} alt={name} />
        ) : (
          <div className="orgAvatarPlaceholder" />
        )}
      </div>

      <div className="orgName">{name}</div>
      <div className="orgRole">{role}</div>
    </div>
  );
}