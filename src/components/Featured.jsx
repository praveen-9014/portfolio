import React from 'react';
import myImage from './images/praveen.jpg'

const Featured = () => {
    return (
        <section className="featured-box" id="home">
            <div className="featured-text">
                <div className="featured-text-card">
                    <span>Praveen J</span>
                </div>
                <div className="featured-name">
                    <p>I'm <span className="typedtext">Designer</span></p>
                </div>
                <div className="featured-text-info">
                    <p>Experienced frontend developer with the passion for creating visually stunning and user-friendly websites</p>
                </div>
                <div className="social-icons">
                    <a href="/instagram" style={{ color: '#C13584' }}><div className="icon"><i className="uil uil-instagram-alt"></i></div></a>
                    <a href="https://www.linkedin.com" style={{ color: '#0A66C2' }}><div className="icon"><i className="uil uil-linkedin-alt"></i></div></a>
                    <a href="https://github.com/praveen-9014"><div className="icon"><i className="uil uil-github" style={{ color: '#000000' }}></i></div></a>
                    <a href="/facebook"><div className="icon"><i className="uil uil-facebook"></i></div></a>
                </div>
            </div>
            <div className="featured-image">
                <div className="image">
                    <img src={myImage} alt="avatar" />
                </div>
            </div>
            <div className="scroll-icon-box">
                <a href="#about" className="scroll-btn">
                    <i className="uil uil-mouse-alt"></i>
                    <p>scroll down</p>
                </a>
            </div>
        </section>
    );
};

export default Featured;