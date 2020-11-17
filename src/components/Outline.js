import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

const Outline= (props) => {
  
  const jumbostyle = {
    color:'white',
    textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
  };
  const jumbotext = {
    color:'white',
    fontSize: '24px',
    textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
  };
  return (
    <div>
      <Jumbotron style={{
                        backgroundImage: `url(${props.image})`, 
                        backgroundSize: 'cover',
                        marginBottom: 0,
                        }} fluid>
        <Container>
          <h1 className="display-2 lead" 
              style={jumbostyle}>{props.header}
          </h1>
            <br/>
          <p style={jumbotext}>
             {props.subheader}
          </p>
        </Container>
      </Jumbotron>
    </div>
    
  );
}

export default Outline;
