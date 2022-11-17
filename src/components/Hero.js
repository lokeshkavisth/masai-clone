import React from "react";
import studimg from "./images/stud_image_desktop_upload_793ed2b430.png";
export default function Hero() {
  return (
    <div className="hero">
      <div className="heading">
        <h1>Driven by Outcomes, Fuelled by Ambitions.</h1>
        <p>Launch your dream career</p>
        <span>at 0 upfront fee.</span>
        <a href="/">apply now for free</a>
      </div>

      <div className="stu-anim">
        <img src={studimg} alt="students" loading="lazy" />
        <img src={studimg} alt="students" loading="lazy" />
        <img src={studimg} alt="students" loading="lazy" />
        <img src={studimg} alt="students" loading="lazy" />
        <img src={studimg} alt="students" loading="lazy" />
      </div>
    </div>
  );
}
