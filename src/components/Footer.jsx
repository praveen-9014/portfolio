import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="middle-footer">
                <ul className="footer-menu">
                    <li className="footer-menu-list"><a href="#home">Home</a></li>
                    <li className="footer-menu-list"><a href="#about">About</a></li>
                    <li className="footer-menu-list"><a href="#projects">Projects</a></li>
                    <li className="footer-menu-list"><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div className="footer-social-icons">
                <div className="icon"><i className="uil uil-instagram-alt"></i></div>
                <div className="icon"><i className="uil uil-linkedin-alt"></i></div>
                <div className="icon"><i className="uil uil-github"></i></div>
                <div className="icon"><i className="uil uil-facebook"></i></div>
            </div>
            <div className="bottom-footer">
                <p>Copyright &copy; <a href="#home" style={{ textDecoration: 'none' }}>Praveen</a> - All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;