import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import './Map.css';

function Map() {
  return (
    <div>
      <section id="kontakt">
        <div className="map-container">
          <div className="row">
            <div className="col">
              <iframe              
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10020.93293801291!2d17.0242952!3d51.1041568!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc35bc29bbd5b%3A0x6bc102a93f921cd9!2sNeurowyspa!5e0!3m2!1spl!2spl!4v1701297537281!5m2!1spl!2spl"
                width="100%"
                height="400px"
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col">
              <h2>Znajdziesz mnie:</h2>
              
              <p className="kontak-txt"> <FontAwesomeIcon icon={faMapMarkerAlt} className="map-icon" />
              przy placu Muzealnym 7/2, 50-035 Wrocław</p>
              <p className="kontak-txt"><FontAwesomeIcon icon={faPhone} className="map-icon" />
              Numer kontaktowy: +48 533 257 658</p>
              <p className="kontak-txt"><FontAwesomeIcon icon={faEnvelope} className="map-icon" />
              Adres e-mail: Neurowyspa@gmail.com</p>
              <p className="kontak-txt"><FontAwesomeIcon icon={faGoogle} className="map-icon" />Google Maps</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Map;
