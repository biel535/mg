import React from 'react'
import Footer from '../components/Footer';
import './About.css';
import { Link } from "react-router-dom";
import Gallery from '../components/Gallery';

function About() {
  return (
    <>
  <div className="about" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/gabinet4.jpg)`,
    backgroundSize: 'cover',  
    backgroundPosition: 'center',  
    backgroundRepeat: 'no-repeat'}}>
    <h1 >Majka Gutsche</h1>
    <h2>Terapia Manualna</h2>
    <div className="omnie-img">
    <img  src={process.env.PUBLIC_URL + '/images/majka1.jpeg'}
          alt="omnie"
          className="omnie-image"
        />
    </div>
    <div className='text-containter'>
      <p>Oferuję Ci całą swoją wiedzę i doświadczenie w podróży do zdrowia,
      którą zaczynasz szukając swojego fizjoterapeuty. Moja przygoda z pracą z ciałem
      rozpoczęła się na Uniwersytecie Medycznym we Wrocławiu, gdzie uzyskałam tytuł magistra
      fizjoterapii, by następnie na licznych szkoleniach znaleźć swoją drogę do pomagania
      osobom takim jak Ty, które nie chcą dłużej akceptować bólu czy ograniczeń w codziennym
      życiu. Specjalizuję się w terapii bólu niespecyficznego oraz objawów psychosomatycznych.
      W trakcie terapii określimy dysfunkcje, jakie sprowadzają Cię do mnie, przeprowadzimy
      diagnostykę i znajdziemy przyczynę Twoich dolegliwości zamiast jedynie zwalczać objaw.
      Zależy mi na tym, żebyś opuścił gabinet nie tylko czując się lepiej, ale też z narzędziami do
      radzenia sobie ze swoimi dolegliwościami na co dzień. 
      </p>
      <div className="button-but">
      <Link to="/appointments"><button className="omnie-button">Umów się na wizytę</button></Link>
      </div>
      </div>
      </div>
      <Gallery />
    <Footer /></>
   
  )
}

export default About
