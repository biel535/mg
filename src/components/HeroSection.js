import React from 'react';
import { Link } from "react-router-dom";
import { Button } from '../components/Button';
import '../components/HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
    <h1>Wyrusz w podróż po zdrowie: </h1>
    <p>Nie czekaj</p>
    <div className="hero-btns">
    <Link to="/appointments">
      <Button className="btns"
      buttonStyle="btn--outline"
      buttonSize="btn--large">
        UMÓW SIĘ NA WIZYTĘ
      </Button>
      </Link>
      <Link to="/opinions">
      <Button className="btns"
      buttonStyle="btn--primary"
      buttonSize="btn--large">
        SPRAWDZ OPINIE
      </Button>
      </Link>
    </div>
  </div>

  )
}

export default HeroSection
