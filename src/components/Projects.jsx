import React from 'react';

const Projects = () => {
    return (
        <section className="section" id="projects">
            <div className="top-header">
                <h1>Projects</h1>
            </div>
            <div className="project-container">
                <div className="project-box">
                    <i className="uil uil-check-circle"></i>
                    <h3>E-Commerce Website</h3>
                    <label>Clone of Amazon</label>
                </div>

                <div className="project-box">
                    <i className="uil uil-check-circle"></i>
                    <h3>Gen AI</h3>
                    <label>Med Bot</label>
                </div>

                <div className="project-box">
                    <i className="uil uil-award"></i>
                    <h3>Achievements</h3>
                    <label><a href="#" style={{ textDecoration: 'none', color: '#000000' }}>Leetcode 150+ Problems</a></label>
                    <label><a href="#" style={{ textDecoration: 'none', color: '#000000' }}>HackerRank 50+ Problems</a></label>
                    <label><a href="#" style={{ textDecoration: 'none', color: '#000000' }}>CodeChef 30+ Problems</a></label>
                </div>
            </div>
        </section>
    );
};

export default Projects;