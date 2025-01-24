import React from 'react';

const Contact = () => {
    return (
        <section className="section" id="contact">
            <div className="top-header">
                <h1>Get in Touch</h1>
                <span>Do you have a project in your mind? Contact me here</span>
            </div>
            <div className="row">
                <div className="col">
                    <div className="contact-info">
                        <h2>Find me <i className="uil uil-corner-right-down"></i></h2>
                        <p><i className="uil uil-envelope-alt"></i> Email: praveen901471@gmail.com</p>
                        <p><i className="uil uil-phone-alt"></i> Tel: 9014718812</p>
                    </div>
                </div>
                <div className="col">
                    <div className="form-control">
                        <div className="form-inputs">
                            <input type="text" className="input-field" placeholder="Name" />
                            <input type="text" className="input-field" placeholder="Email" />
                        </div>
                        <div className="text-area">
                            <textarea placeholder="Message"></textarea>
                        </div>
                        <div className="form-button">
                            <button className="btn" style={{padding:"4px 6px", border:"none", borderRadius:"5px", cursor:"pointer"}}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;