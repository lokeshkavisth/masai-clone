import React from "react";
import logo from "./images/masai-logo.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="one">
        <div>
          <h3>Connect with a growing</h3>
          <h3>communiry of learners</h3>
        </div>
        <a href="/">
          <i class="fa-brands fa-discord"></i> JOIN OUR DISCORD
        </a>
      </div>

      <div className="two">
        <div>
          <img src={logo} alt="footer-logo" />
        </div>

        <div>
          <span>Follow us - </span>
          <ul>
            <li>
              <a href="/">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i class="fa-brands fa-github"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i class="fa-brands fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="three">
        <section>
          <div>
            <ul>
              <li>
                <a href="/">Masai Alumani</a>
              </li>
              <li>
                <a href="/">Our Team</a>
              </li>
              <li>
                <a href="/">Careers</a>
              </li>
              <li>
                <a href="/">Referral Program</a>
              </li>
              <li>
                <a href="/">Masai Learn</a>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <li>
                <a href="/">Hire From Us</a>
              </li>
              <li>
                <a href="/">Our Investors</a>
              </li>
              <li>
                <a href="/">Testimonials</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Scholarship</a>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">FAQ</a>
              </li>
              <li>
                <a href="/">Newsroom</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
            </ul>
          </div>
        </section>

        <div className="last">
          <section>
            <h1>Get Started</h1>
            <h4>Join the Program</h4>
          </section>
          <div>
            <a href="/">Get started</a>
          </div>
        </div>
      </div>

      <div className="four">
        <div>
          <span>
            &#169; 2022 by Masai School | A Nolan Education Pvt Ltd Venture
          </span>
        </div>

        <div>
          <a href="/">Privacy Policy</a>
          <span>&</span>
          <a href="/">Terms and Conditions</a>
        </div>
      </div>
    </div>
  );
}
