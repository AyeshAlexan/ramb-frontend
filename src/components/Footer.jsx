export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer__grid">
        <div id="apply">
          <h4>APPLY NOW</h4>
          <p>Apply Online for any of our financial services.</p>
          <a className="btn btn--gold" href="#apply">Apply Online Now</a>
        </div>

        <div>
          <h4>Get in Touch</h4>
          <ul className="footer__list">
            <li>📞 021 222 4220 / 021 222 6990</li>
            <li>✉️ info@ramb.lk</li>
            <li>📍No 29, Muneeswaran Road, 40000, Jaffna.</li>
          </ul>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul className="footer__links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#faqs">FAQs</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottomInner">
          <span>© {new Date().getFullYear()} RAMB. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
