import React from "react";

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Hi! I'm <span className="highlight">Atharva</span>
                    </h1>
                    <h2 className="hero-subtitle">Senior Research Engineer</h2>
                    <p className="hero-description">
                        I build intelligent AI systems that combine cutting-edge
                        research with practical engineering. My focus is on
                        developing Generative AI applications that are both
                        powerful and reliable.
                    </p>
                    <div className="hero-cta">
                        <a href="#publications" className="btn btn-primary">
                            View My Work
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            Get In Touch
                        </a>
                    </div>
                </div>
                <div className="hero-image">
                    <img
                        src="/assets/profile.JPG"
                        alt="Atharva Tendle profile"
                        className="profile-image"
                    />
                </div>
            </div>
            <div className="scroll-indicator">
                <a href="#about" aria-label="Scroll to About section">
                    <span className="scroll-arrow"></span>
                </a>
            </div>
        </section>
    );
};

export default Hero;
