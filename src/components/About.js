import React from 'react';
import Outline from './Outline'
import SkillBar from './SkillBar'
import NavBar from './Navbar.js';
import Footer from './Footer.js';
import '../App.css'

function About() {

  const fuck=<a  className="a" href="/eggone">A collection of my interests and skills. 
                                  You can also find the first step of my 
                                  easter egg here</a>
  const headertext = {
    fontSize: '36pt',
    textAlign: 'center',
  };

  const text = {
    fontSize: '18pt',
    textAlign: 'center',
    paddingLeft: 15,
    paddingRight: 15
  };

  return (
    <div>
      <NavBar/>
      <Outline image='./about-image.jpg'
               header="About"
               subheader={fuck}
      /><br/>
        
      <blockquote className="blockquote" style={headertext}>Who I am</blockquote>
      <blockquote className="blockquote" style={text}>
        I have always been obessed with computers and how we interact with them. I am constantly
        excited about the evolution of technology, and hope to someday develop a product that can help humans in some
        capacity. During my studies, I became exteremly proficient in C as well as working on full stack apps in an agile environment. Moreover,
        my job experience at The University of Guelph allowed me to understand the imporytance of testing and QA. As I am now independantly learning I am
        focusing on mobile computing and game development. In the future I hope to work on more compicated somejects that interest me, like machine learning
        and cryptography.
      </blockquote><br/><br />
        
      <blockquote className="blockquote" style={headertext}>Skills</blockquote>
        <SkillBar />
    
      <Footer/>
    </div>
  );
}

export default About;
