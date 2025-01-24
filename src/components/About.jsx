import React from 'react';

const About = () => {
    return (
        <section className="section" id="about">
            <div className="top-header">
                <h1>About Me</h1>
            </div>
            <div className="row">
            <div className="col">
                <div className="about-info">
                    <h3>My Introduction</h3>
                    <p>
                        I am well-versed in HTML, CSS, JavaScript, and other cutting-edge frameworks and libraries, which allows me to implement interactive features. Additionally, I have experience working with content management systems like WordPress.
                    </p>
                </div>
            </div>
            <div className="col">
                <div className="skills-box">
                    <div className="skills-header">
                        <h3>Frontend</h3>
                    </div>
                    <div className="skills-list">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                        <span>Bootstrap</span>
                    </div>
                </div>

                <div className="skills-box">
                    <div className="skills-header">
                        <h3>Backend</h3>
                    </div>
                    <div className="skills-list">
                        <span>Node.js</span>
                        <span>Express.js</span>
                        <span>Embedded.js</span>
                    </div>
                </div>

                <div className="skills-box">
                    <div className="skills-header">
                        <h3>Database</h3>
                    </div>
                    <div className="skills-list">
                        <span>MySQL</span>
                        <span>PostgreSQL</span>
                        <span>MongoDB</span>
                    </div>
                </div>

                <div className="skills-box">
                    <div className="skills-header">
                        <h3>Programming Languages</h3>
                    </div>
                    <div className="skills-list">
                        <span>Python</span>
                        <span>C/C++</span>
                        <span>Java</span>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
};

export default About;