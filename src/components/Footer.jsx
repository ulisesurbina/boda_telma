import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-ornament">❦</div>
          
          <p className="footer-quote">
            "El amor no consiste en mirarse el uno al otro, 
            sino en mirar juntos en la misma dirección."
          </p>
          
          <p className="footer-author">— Antoine de Saint-Exupéry</p>
          
          <div className="footer-divider"></div>
          
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
              Hecho con amor y dedicación por <a className='lnProfile' href="https://github.com/ulisesurbina" target="_blank" rel="noopener noreferrer">U.U.M.</a> ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
