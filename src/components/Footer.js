import React from "react";
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import '../App.css';

function Footer() {
  const style={
    fontSize: 60, 
    color: 'grey', 
    paddingRight: '20px'
  }
  return (

    <nav className="footer-nav text-center">
      <ul className="footerlink">
        <li>
          <a href="https://twitter.com/QuinnDipaolo">
            <TwitterIcon style={style} />
          </a>
          <a href="https://www.instagram.com/quinndipp/?hl=en">
            <InstagramIcon style={style} />
          </a>
          <a href="https://github.com/qudip">
            <GitHubIcon style={style} />
          </a>
          <a href="https://www.linkedin.com/in/quinn-dipaolo-32b18b150">
            <LinkedInIcon style={style} />
          </a>
          <a href="mailto: quinn.dipaolo@gmail.com">
            <MailOutlineIcon style={style} />
          </a>
        </li>
      </ul>
    </nav>      
  );
}

export default Footer;
