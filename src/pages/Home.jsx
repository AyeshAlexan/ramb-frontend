// src/pages/Home.jsx
import React, { useEffect, useRef, useState } from "react";
import "../styles/global.css";

import heroImg from "../assets/hero.png";

// ✅ use your 3 different images here
import aboutImg1 from "../assets/about-circle.png";
import aboutImg2 from "../assets/about-2.png.jpg";
import aboutImg3 from "../assets/about-3.jpg";

export default function Home() {
  const [open, setOpen] = useState(false);

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
            {/* ✅ LEFT: 3 Circle Images with layout switch + fade-in */}
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

                  <div className="aboutCircleWrap sm">
                    <img
                      src={aboutImg3}
                      alt="About 3"
                      className="aboutCircleImg"
                    />
                  </div>
                </div>
              </div>
            </AboutReveal>

            {/* RIGHT */}
            <div className="aboutRight">
              <h3 className="aboutTitle">About RAMB</h3>

              {/* ✅ Top paragraph now has same outline card */}
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

              {/* ✅ When closed, show View More here */}
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

              {/* ✅ Slide-down expandable content (no modal) */}
              <div
                id="about-more"
                className={`aboutMore ${open ? "open" : ""}`}
              >
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

                  <h4 className="teamMainTitle">Our Team</h4>

                  <TeamGroup
                    title="Board of Directors"
                    members={[
                      {
                        name: "John Smith",
                        role: "Chairman",
                        desc: "Financial services, 25+ years, former Director at UK banks.",
                      },
                      {
                        name: "Hiroshi Tanaka",
                        role: "Director of Finance",
                        desc: "Chartered Accountant, treasury management, and financial planning.",
                      },
                      {
                        name: "Maria Lopez",
                        role: "Director of Operations",
                        desc: "Logistics and operations management in global corporates.",
                      },
                      {
                        name: "Chen Wei",
                        role: "Director of Marketing",
                        desc: "Digital marketing, brand development, and relationship strategies.",
                      },
                    ]}
                  />

                  <TeamGroup
                    title="Executive Management"
                    members={[
                      {
                        name: "I.A.T.N. Rajah",
                        role: "Chief Executive Officer (CEO)",
                        desc: "Strategic leadership, finance, and business advisory.",
                      },
                      {
                        name: "Alex Johnson",
                        role: "Chief Technology Officer (CTO)",
                        desc: "Software development, cybersecurity, and ethical solutions.",
                      },
                      {
                        name: "Priya Kumar",
                        role: "Chief Compliance Officer (CCO)",
                        desc: "Regulatory compliance and risk management in banking and finance.",
                      },
                    ]}
                  />

                  <TeamGroup
                    title="Operational Heads"
                    members={[
                      {
                        name: "Anil Sharma",
                        role: "Head of Customer Service",
                        desc: "CRM tools, customer experience management, and process improvement.",
                      },
                      {
                        name: "James Brown",
                        role: "Head of Legal Affairs",
                        desc: "Corporate law, international regulations, and compliance for planning.",
                      },
                    ]}
                  />

                  <TeamGroup
                    title="Branch Management"
                    members={[
                      {
                        name: "R. Jayasekaran",
                        role: "Operations Executive",
                        desc: "Branch operations, customer relations, and team leadership.",
                      },
                      {
                        name: "Various – Sri Lankan",
                        role: "Executive Staff",
                        desc: "Day-to-day operations, client servicing, and administrative tasks.",
                      },
                      {
                        name: "Various – Sri Lankan",
                        role: "Interns (INT)",
                        desc: "Supporting sales & operations, customer service, and project management.",
                      },
                    ]}
                  />

                  {/* ✅ Bottom actions */}
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

              {/* ✅ When open, hide the top button and still allow closing at bottom */}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="lpSection lpSectionAlt">
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
                  <div className="infoValue">021-222-4220</div>
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
                  <div className="infoValue">Colombo, Sri Lanka</div>
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

function TeamGroup({ title, members }) {
  return (
    <div className="teamGroup">
      <div className="teamGroupTitle">{title}</div>

      <div className="teamGrid2">
        {members.map((m, i) => (
          <TeamCard key={i} index={i} {...m} />
        ))}
      </div>
    </div>
  );
}

function TeamCard({ name, role, desc, index }) {
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
    <div
      ref={ref}
      className={`teamCard2 reveal ${show ? "show" : ""}`}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <div className="teamAvatar2" />
      <div className="teamName2">{name}</div>
      <div className="teamRole2">{role}</div>
      <div className="teamDesc2">{desc}</div>
    </div>
  );
}
