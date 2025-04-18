import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Vue.js",
        "Responsive Design",
      ],
    },
    {
      title: "Backend Development",
      skills: [
        "Node.js",
        "Express",
        "RESTful APIs",
        "GraphQL",
        "MongoDB",
        "SQL",
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        "Git",
        "Webpack",
        "Figma",
        "UI/UX Design",
        "Performance Optimization",
        "SEO",
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div className="skill-category" key={index}>
              <h3 className="category-title">{category.title}</h3>
              <ul className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <li className="skill-item" key={skillIndex}>
                    <span className="skill-name">{skill}</span>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${Math.random() * 40 + 60}%` }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
