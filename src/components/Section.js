import React from 'react';
import { Card } from 'react-bootstrap';


const Section = (props) => {
  const height = {
    maxHeight: '200px',
  }
  const color = {
    color: 'black'
  }
  return (

    <Card>
      <Card.Img variant="top" src={props.img} style={height} />
      <Card.Body>
        <Card.Title>{props.header}</Card.Title>
        <a href={props.url} className="stretched-link">
          <Card.Text style={color}>
            {props.desc}
          </Card.Text>
        </a>
      </Card.Body>
    </Card>

  );
}

export default Section;