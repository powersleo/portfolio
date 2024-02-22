import React from 'react';

const Navigation = () => {
  // Function to scroll to a section. The `id` is the HTML id attribute of the target section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div> 
         <header>
    <h1>Leo Powers</h1>
  </header>
    <nav>
      <ul className="nav-links">
        <li onClick={() => scrollToSection('about')}>About</li>
        <li onClick={() => scrollToSection('projects')}>Projects</li>
        <li onClick={() => scrollToSection('experience')}>Experience</li>
        <li onClick={() => scrollToSection('contact')}>Contact</li>
      </ul>
    </nav>
    </div>
 
  );
};

export default Navigation;
