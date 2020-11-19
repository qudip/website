import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Outline from './Outline'
import Items from './Items'
import NavBar from './Navbar.js';
import Footer from './Footer.js';
import '../App.css';

function Portfolio() {
  const webSkills = ["React", "Bootstrap", "Rest APIs", "Javascript"];
  const apiSkills = ["C", "Data Structures"]
  const prsSkills = ["C", "Dynamic Memory Management", "Makefiles"]
  const mobSkills = ["ReactNative", "Firebase"]

  return (
    <div>
      <NavBar/>
      <Outline image='./portfolio-image.jpg'
        header='Portfolio'
        subheader="My personal programming projects
              completed outside of my education. Feel free to checkout the code on my GitHub"
      />
      <Accordion>
        <Items eventkey="0"
          title="Website"
          description="I made this website using React JS. There is currently no back end,
                however I plan on adding one once I figure out what one can be used for"
          skills={webSkills}
        />
        <Items eventkey="1"
          title="Data Structure APIs"
          description="Implemented various data structures in C"
          skills={apiSkills}
        />
        <Items eventkey="2"
          title="VCard Parser"
          description="An effient parser"
          skills={prsSkills}
        />
        <Items eventkey="3"
          title="Mobile App (In Progress)"
          description="Top down golf game I am currently implementing the back end for"
          skills={mobSkills}
        />
      </Accordion>
      <br /><br /><br /><br /><br /><br /><br />
      <Footer/>
    </div>

  );
}
export default Portfolio;
