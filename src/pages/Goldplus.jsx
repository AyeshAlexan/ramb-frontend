import React from "react";
import "./../styles/GoldPlus.css";

import heroImg from "../assets/gold-plus.jpg";

export default function GoldPlus() {
  return (
    <div className="gpPage">
      <div className="gpHeader">
        <h1>Gold Plus Premium Support</h1>
      </div>

      <section className="gpHero">
        <div className="gpHeroImg">
          <img src={heroImg} alt="Gold Plus" />
          <div className="gpImgOverlay" />
        </div>

        <div className="gpHeroContent">
          <h2>Premium Support Package</h2>
          <p>
            Gold Plus is a premium support package designed to give you faster
            service, clear guidance, and a smoother experience from start to
            finish. Get priority response, personal assistance, and step-by-step
            support for your requests. You’ll receive updates, reminders, and a
            simple checklist so nothing is missed. Our team helps you prepare
            required documents, review details, and keep everything organized.
            Gold Plus is ideal for people who want a professional, stress-free
            process with friendly support and quick follow-ups.
          </p>

          <div className="gpActions">
            <button className="gpBtn">Apply Now</button>
            <button className="gpBtnOutline">View Details</button>
          </div>
        </div>
      </section>
    </div>
  );
}
