import React from 'react';
import '../styles/Footer.css';
import boda6 from "../assets/boda6.webp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-ornament">❦</div>
          
          <p className="footer-quote">
            "Todos nacemos ciegos, hasta que conocemos a alguien que le da sentido a nuestra vista"
          </p>
          
          <img 
            src={boda6} 
            alt="Decoración" 
            className="footer-divider-img"
          />
          
          <div className="footer-names">
            <span>Telma</span>
            <span className="footer-heart">♥</span>
            <span>Mauricio</span>
          </div>
          
          <p className="footer-date">16.05.2026</p>
          
          <div className="footer-social">
            <span className="social-tag">#TelmayMauricioForever</span>
          </div>
          
          <div className="footer-bottom">
            <p className="footer-copyright">
              © {currentYear} Telma & Mauricio. Todos los derechos reservados.
            </p>
            <p className="footer-credits">
              Hecho con amor y dedicación por <a className='lnProfile' href="https://wa.me/5554369655?text=Hola%20quiero%20contactarte%20por%20la%20invitacion%20de%20la%20boda%20de%20Telma" target="_blank" rel="noopener noreferrer">U.U.M.</a> ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
