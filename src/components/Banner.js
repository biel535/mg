import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,  faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Banner.css'; // Import your CSS file

function Banner() {
  return (
    <div className="banner-container">
      
      <a href="https://www.facebook.com/neurowyspa"><span className="fb-text"><FontAwesomeIcon icon={faFacebook} className="facebook-icon" /> Facebook</span></a>
      <div className="h2-container">
      <h2 className="h2-contentt">Złap mnie na social mediach!</h2>
      </div>
      <a href="https://www.instagram.com/neurowyspa/"><span className="ig-text"><FontAwesomeIcon icon={faInstagram} className="instagram-icon" />Instargram</span></a>
    </div>
    
  );
}

export default Banner;
