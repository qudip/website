import React, { Component } from "react";
import * as RBS from "react-bootstrap";

export class NavBar extends Component {
  render() {
    return (
      <RBS.Navbar collapseOnSelect className="color-nav" expand="sm" variant="dark">
        <RBS.Navbar.Brand href="home"> <p className="display-4" style={{fontSize: '28px', paddingTop: '5%' }}> Quinn Di Paolo </p> </RBS.Navbar.Brand>
        <RBS.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <RBS.Navbar.Collapse id="responsive-navbar-nav">
          <RBS.Nav className="link">
            <RBS.Nav.Link href="portfolio">Portfolio</RBS.Nav.Link>
            <RBS.Nav.Link href="education">Education</RBS.Nav.Link>
            <RBS.Nav.Link href="about">About</RBS.Nav.Link>
          </RBS.Nav>
        </RBS.Navbar.Collapse>
      </RBS.Navbar>
     );
  }
}
export default NavBar;