import React, { useState } from 'react';

const Header = () => {
    const [activeLink, setActiveLink] = useState('home'); // Default active link

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    const myMenuFunction = () => {
        const menubtn = document.getElementById("mynavbar");
        menubtn.className = menubtn.className === "nav-menu" ? "nav-menu responsive" : "nav-menu";
    };

    return (
        <nav id="header">
            <div className="nav-logo">
                <p className="nav-name">portfo<span style={{ color: 'orangered' }}>lio</span></p>
                <span style={{position:'relative', top:"-87px", left:"130px"}}>.</span>
            </div>
            <div className="nav-menu" id="mynavbar">
                <ul className="nav-menu-list">
                    <li className="nav-list">
                        <a 
                            href="#home" 
                            className={`nav-link ${activeLink === 'home' ? 'active-link' : ''}`} 
                            onClick={() => handleLinkClick('home')}
                        >
                            Home
                        </a>
                    </li>
                    <li className="nav-list">
                        <a 
                            href="#about" 
                            className={`nav-link ${activeLink === 'about' ? 'active-link' : ''}`} 
                            onClick={() => handleLinkClick('about')}
                        >
                            About
                        </a>
                    </li>
                    <li className="nav-list">
                        <a 
                            href="#projects" 
                            className={`nav-link ${activeLink === 'projects' ? 'active-link' : ''}`} 
                            onClick={() => handleLinkClick('projects')}
                        >
                            Projects
                        </a>
                    </li>
                    <li className="nav-list">
                        <a 
                            href="#contact" 
                            className={`nav-link ${activeLink === 'contact' ? 'active-link' : ''}`} 
                            onClick={() => handleLinkClick('contact')}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
            <div className="nav-menu-btn">
                <i className="uil uil-bars" onClick={myMenuFunction}></i>
            </div>
        </nav>
    );
};

export default Header;