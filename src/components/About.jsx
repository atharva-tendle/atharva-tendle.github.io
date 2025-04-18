import React from "react";

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            I'm a Senior Research Engineer with a passion for AI
                            models and systems, specifically focusing on
                            generative AI and LLMs. With expertise in ML System
                            Design, I strive to build high-performance AI
                            systems that balance innovative research with
                            practical engineering applications.
                        </p>
                        <p>
                            I've worked on diverse AI projects including topic
                            classification, entity linking, summarization using
                            LLMs, generative AI search, and developing
                            frameworks for retrieval and agentic workflows. My
                            experience spans designing and building
                            production-ready systems that leverage advanced
                            technologies to solve real-world problems.
                        </p>
                        <p>
                            When I'm not coding, you'll find me tinkering with
                            my camera gear, experimenting with my home coffee
                            setup, or scouting new restaurants around NYC. I am
                            an avid traveler and I have a growing list of
                            destinations that I hope to check off soon.
                        </p>
                    </div>
                    <div className="about-details">
                        <div className="detail-item">
                            <h3>Education</h3>
                            <p>B.S.c in Computer Science and Economics.</p>
                            <p>M.S.c in Computer Science (AI).</p>
                        </div>
                        <div className="detail-item">
                            <h3>Experience</h3>
                            <p>4+ years in AI Research and Development</p>
                        </div>
                        <div className="detail-item">
                            <h3>Location</h3>
                            <p>New York City, NY</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
