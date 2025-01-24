import React, { useEffect } from 'react';
import Header from './components/Header';
import Featured from './components/Featured';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

import Footer from './components/Footer';
import './App.css';

import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal';

const App = () => {
    useEffect(() => {
        const options = {
            strings: ["Web Designer", "FullStack Developer"],
            loop: true,
            typeSpeed: 100,
            backSpeed: 80,
            backDelay: 2000,
        };
        const typed = new Typed('.typedtext', options);

        const sr = ScrollReveal({
            origin: 'top',
            distance: '80px',
            duration: 2000,
            reset: true,
        });

        sr.reveal('.featured-text-card', {});
        sr.reveal('.featured-name', { delay: 50 });
        sr.reveal('.featured-text-info', { delay: 100 });
        sr.reveal('.social-icons', { delay: 100 });
        sr.reveal('.featured-image', { delay: 200 });
        sr.reveal('.project-box', { interval: 100 });
        sr.reveal('.about-info', { delay: 50 });
        sr.reveal('.contact-info', { delay: 50 });
        sr.reveal('.skills-box', { delay: 50 });
        sr.reveal('.form-control', { delay: 50 });

        
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="container">
            <Header />
            <main className="wrapper">
                <Featured />
                <About />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;