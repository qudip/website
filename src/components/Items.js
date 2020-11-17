import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Divider from '@material-ui/core/Divider';
import '../App.css';

const Items = (props) => {
  var skills = []
  skills = props.skills

  return (
    <div>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey={props.eventkey}>
          <blockquote className="blockquote">{props.title}</blockquote>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={props.eventkey}>
          <Card.Body>
            Overview
            <br /><Divider /><br />
            {props.description}<br />
            <br /><Divider /><br />
              Skills
              <br /><Divider /><br />
            {skills.map((skills, index) => (
              <li key={index}>{skills}</li>
            ))}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </div>
  );
}

export default Items;
