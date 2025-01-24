import React, { useEffect } from "react";
import Typed from "typed.js";

function Home() {
  useEffect(() => {
    new Typed(".typedtext", {
      strings: ["Web Designer", "FullStack Developer"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000,
    });
  }, []);

  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-text-card">
          <span>Praveen J</span>
        </div>
        <div className="featured-name">
          <p>
            I'm <span className="typedtext"></span>
          </p>
        </div>
        <p className="featured-text-info">
          Experienced frontend developer with the passion for creating visually
          stunning and user-friendly websites.
        </p>
        <div className="social-icons">
          <a href="/instagram" style={{ color: "#C13584" }}>
            <i className="uil uil-instagram-alt"></i>
          </a>
          <a href="https://www.linkedin.com" style={{ color: "#0A66C2" }}>
            <i className="uil uil-linkedin-alt"></i>
          </a>
          <a href="https://github.com/praveen-9014" style={{ color: "#000" }}>
            <i className="uil uil-github"></i>
          </a>
          <a href="/facebook">
            <i className="uil uil-facebook"></i>
          </a>
        </div>
      </div>
      <div className="featured-image">
        <img src="images/thalapathy.webp" alt="avatar" />
      </div>
      <div className="scroll-icon-box">
        <a href="#about" className="scroll-btn">
          <i className="uil uil-mouse-alt"></i>
          <p>Scroll Down</p>
        </a>
      </div>
    </section>
  );
}

export default Home;
