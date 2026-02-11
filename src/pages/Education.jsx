import React from "react";
import styles from "../styles/EducationSupport.css";

import heroImg from "../assets/education-support.png";

export default function EducationSupport() {
  return (
    <div className="eduPage">
      <div className="eduHeader">
        <h1>Education Support Services</h1>
      </div>

      <section className="eduHero">
        <div className="eduHeroImg">
          <img src={heroImg} alt="Education Support" />
          <div className="eduImgOverlay" />
        </div>

        <div className="eduHeroContent">
          <h2>Guidance for Your Study Journey</h2>
          <p>
            We help students plan their next steps with clear guidance and smooth
            support from start to finish. Get help with choosing programs,
            preparing documents, completing forms, and staying organized for key
            deadlines. Whether you’re applying locally or overseas, our team
            supports you with practical advice, friendly communication, and
            step-by-step assistance. You’ll receive updates, checklist support,
            and tips to reduce stress while you focus on your goals. Start today
            and move forward with confidence.
          </p>

          <div className="eduActions">
            <button className="eduBtn">Apply Now</button>
            <button className="eduBtnOutline">Learn More</button>
          </div>
        </div>
      </section>
    </div>
  );
}
