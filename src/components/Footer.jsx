import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="d-flex justify-content-center">
      <a href="tel:+923343288223" className="text-white mx-3" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faPhone} size="2x" />
        </a>
      <a href="mailto:kashifnadeem898@gmail.com" className="text-white mx-3" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/kashif-nadeem-kayani-060ab1314" className="text-white mx-3" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
       
      <a href="https://wa.me/+923343288223" className="text-white mx-3" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} size="2x" />
        </a>
        <a href="https://www.instagram.com/kashif_kayani_?igsh=MXhnb2pweDc2eDNucQ==" className="text-white mx-3" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100069567382242&mibextid=ZbWKwL" className="text-white mx-3" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        
     
      </div>
    </footer>
  );
}

export default Footer;
