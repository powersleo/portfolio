import React from 'react';
import './App.css';
import Navigation from './Navigation';
function App() {
  return (
    <div className="App">
    <Navigation /> {/* Include the Navigation component */}
    <About />
    <Projects />
    <Experience /> {/* Add an Experience section */}
    <Skills />
    <Contact />
  </div>
  );
}

const About = () => (
  <section className="about">
    <h2>About Me</h2>
    <p>Leo Powers is a dynamic and skilled software developer with a passion for both iOS and web development. With a robust foundation in computer science and hands-on experience in designing, developing, and implementing software solutions, Leo has successfully navigated the complexities of both front-end and back-end development environments. His enthusiasm for technology is matched by his dedication to creating user-centric, efficient applications.

</p>
  </section>
);

const Projects = () => (
  <section>
    <h2>Projects</h2>
    <div className="projects-grid">
      {/* Project items will go here */}
      <div className="project-item">Project 1</div>
      <div className="project-item">Project 2</div>
      {/* Add more as needed */}
    </div>
  </section>
);

const Skills = () => (
  <section>
    <h2>Skills</h2>
    <div className="skills-list">
      {/* Skills list will go here */}
      <div className="skill">HTML</div>
      <div className="skill">CSS</div>
      {/* Add more as needed */}
    </div>
  </section>
);

const Contact = () => (
  <section className="contact">
    <h2>Contact</h2>
    <p>Feel free to reach out via email: <a href="mailto:powersleo@gmail.com">powersleo@gmail.com</a></p>
  </section>
);


const Experience = () => (
  <section id="experience">
    <h2>Experience</h2>
    {/* Experience content goes here */}
  </section>
);


export default App;
