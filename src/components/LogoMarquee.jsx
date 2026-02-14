import React from "react";
import "../styles/LogoMarquee.css";

//Image 
import UNI1 from "../assets/Education/1UNI-ABE.png";
import UN2 from "../assets/Education/2UNI-CARDIFF.png";
import UN3 from "../assets/Education/3UNI-DURHAM.png";
import UN4 from "../assets/Education/4UNI-HUD.png";
import UN5 from "../assets/Education/5UNI-LON.png";
import UN6 from "../assets/Education/6UNI-kingston.png";
import UN7 from "../assets/Education/7UNI-LEEDS.png";
import UN8 from "../assets/Education/8UNI-BECKETT.png";
import UN9 from "../assets/Education/9UNI-LIVERPOOL.png";
import UN10 from "../assets/Education/10UNI-ROYAL.jpg";
import UN11 from "../assets/Education/11UNI-Sheffield.png";
import UN12 from "../assets/Education/12UNI-Glasgow.jpg";
import UN13 from "../assets/Education/13UNI-SURREY.png";
import UN14 from "../assets/Education/14UNI-SU.png";
import UN15 from "../assets/Education/15UNI-SAN.jpg";
import UN16 from "../assets/Education/16UNI-DEPAEL.png";
import UN17 from "../assets/Education/17UNI-FLORIDA.png";
import UN18 from "../assets/Education/18UNI-HARTFORD.png";
import UN19 from "../assets/Education/19UNI-JAMES.png";
import UN20 from "../assets/Education/20UNI-LONG.png";
import UN21 from "../assets/Education/21UNI-MERCE.png";
import UN22 from "../assets/Education/22UNI-OMAHA.png";
import UN23 from "../assets/Education/23UNI-NJIT.png";
import UN24 from "../assets/Education/24UNI-A&M.png";
import UN25 from "../assets/Education/25UNI-TOWSON.png";
import UN26 from "../assets/Education/26UNI-WESTERN.png";
import UN27 from "../assets/Education/27UNI-Dubli.png";

export default function LogoMarguee({
    title = "Trusted Education Support Partners",
    speed = 28, //lower= faster
}){
    const logos = [
        UNI1,
        UN2,
        UN3,
        UN4,
        UN5,
        UN6,
        UN7,
        UN8,
        UN9,
        UN10,
        UN11,
        UN12,
        UN13,
        UN14,
        UN15,
        UN16,
        UN17,
        UN18,
        UN19,
        UN20,
        UN21,
        UN22,
        UN23,
        UN24,
        UN25,
        UN26,
        UN27,
    ];

    const track = [...logos, ...logos];
    return(
        <section className="marqueeSection">
         <div className="marqueeInner">
            <div className="marqueeTop">
                <div className="lqKicker">EDUCATION SUPPORT</div>

                <h2 className="marqueeTitle">
                    {title}
                </h2>

                <p className="marqueeSub">
                     We collaborate with recognized institutions and trusted partners
                     to support your education journey with reliable guidance and
                     structured pathways.
                </p>
            </div>

            <div
          className="marqueeFrame"
          style={{ ["--marqueeDuration"]: `${speed}s` }}
        >
          <div className="marqueeTrack">
            {track.map((src, i) => (
              <div className="marqueeItem" key={i}>
                <img
                  className="marqueeLogo"
                  src={src}
                  alt={`Education Partner ${i + 1}`}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}