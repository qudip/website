import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import { CardDeck } from 'react-bootstrap';
import Section from './Section'
import NavBar from './Navbar.js';
import Footer from './Footer.js';

function Home() {
  const jumbostyle={
    backgroundImage: `url(${'header.jpg'})`,
    backgroundSize: 'cover',
    paddingTop: '20%',
    paddingBottom: '20%',
  }
  const jumboheader={
    color: '#f0f0f0',
    textShadow: "-1px -1px 0 #3d3d3d, 1px -1px 0 #3d3d3d, -1px 1px 0 #3d3d3d, 1px 1px 0 #3d3d3d",
    fontSize: '69px'
  }
  const text={
    fontSize: '18pt',
    textAlign: 'center',
    paddingLeft: '10%',
    paddingRight: '10%'
  }
  const cardstyle={
    paddingLeft: '2.5%', 
    paddingRight: '2.5%',
    width: '100%'
   
  }

  return (
    <div>
      <NavBar/>
      <Jumbotron style={jumbostyle} fluid>
        <Container>
          <h1 className="display-1 lead"
            style={jumboheader}>Hi, I'm Quinn</h1>
        </Container>
      </Jumbotron>
        <br />
      <blockquote className="blockquote" style={text}>
        Welcome to my website. Designed to give you a familiarity with who I am and my career as a software developer.
      </blockquote>
        <br />

      <CardDeck style={cardstyle}>
        <Section
          header="Portfolio"
          url="/portfolio"
          img="portfolio-2.jpg"
          desc="Take a look at my own personal projects."/>
        <Section
          header="Education"
          url="/education"
          img="education-image.jpg"
          desc="What I learned through my education."/>
        <Section
          header="About Me"
          url="/about"
          img="about-2.jpg"
          desc="My interests and skills."/>
      </CardDeck>
        <br />
        <Footer/>
    </div>
  );
}

export default Home;
