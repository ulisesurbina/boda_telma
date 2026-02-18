import React from 'react';
import '../styles/OurStory.css';

const OurStory = () => {
  return (
    <section className="our-story" id="historia">
      <div className="container">
        <h2 className="section-title">Nuestra Historia</h2>
        <p className="section-subtitle">Cómo comenzó nuestro cuento de hadas</p>

        <div className="story-content">
          <div className="story-image-wrapper">
            <div className="story-image skeleton"></div>
            <div className="story-ornament">❦</div>
          </div>

          <div className="story-text">
            <div className="story-paragraph">
              <p>
                Nuestros caminos se cruzaron en una tarde de primavera, cuando el destino 
                decidió que era momento de escribir juntos la más hermosa de las historias. 
                Desde ese primer encuentro, supimos que algo mágico había comenzado.
              </p>
            </div>

            <div className="story-paragraph">
              <p>
                Cada día juntos ha sido un regalo, cada momento compartido un tesoro. 
                Hemos reído juntos bajo la lluvia, bailado bajo las estrellas, y soñado 
                con un futuro donde cada amanecer sea una nueva aventura a tu lado.
              </p>
            </div>

            <div className="story-paragraph">
              <p>
                Hoy, rodeados del amor de quienes más queremos, estamos listos para dar 
                el paso más importante de nuestras vidas: prometernos amor eterno y 
                comenzar esta nueva aventura como marido y mujer.
              </p>
            </div>

            <div className="story-quote">
              <p>"En todo el mundo no hay corazón para mí como el tuyo. 
              En todo el mundo no hay amor para ti como el mío."</p>
              <span className="quote-author">— Maya Angelou</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
