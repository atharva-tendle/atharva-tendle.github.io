import React from "react";

const Projects = () => {
    const projects = [
        // {
        //   id: 1,
        //   title: "E-Commerce Website",
        //   description:
        //     "A fully responsive e-commerce platform with product filtering, cart functionality, and secure checkout.",
        //   technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
        //   image: "project-placeholder.jpg",
        //   liveLink: "#",
        //   codeLink: "#",
        // },
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div className="project-card" key={project.id}>
                            <div className="project-image">
                                <div className="image-placeholder">
                                    <span>Project Image</span>
                                </div>
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">
                                    {project.title}
                                </h3>
                                <p className="project-description">
                                    {project.description}
                                </p>
                                <div className="project-tech">
                                    {project.technologies.map((tech, index) => (
                                        <span className="tech-tag" key={index}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a
                                        href={project.liveLink}
                                        className="btn btn-sm"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.codeLink}
                                        className="btn btn-sm btn-outline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
