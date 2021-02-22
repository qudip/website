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
        
      <blockquote className="blockquote" style={headertext}>BARTS A BITCH</blockquote>
      <blockquote className="blockquote" style={text}>
      I have always been obsessed with computers and how we interact with them. The evolution of technology fascinates me and I hope to someday contribute to it in some capacity. During my studies, I became extremely proficient in C as well as working on full-stack apps in an agile environment. Moreover,
my job experience allowed me to gain experience in testing and QA. As I am now independently learning I am focusing on mobile computing and game development.
      </blockquote><br/><br />
        
      <blockquote className="blockquote" style={headertext}>Skills</blockquote>
        <SkillBar />
    
      <Footer/>
    </div>
  );
}

export default About;
