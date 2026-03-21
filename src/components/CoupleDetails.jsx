import React from 'react';
import '../styles/CoupleDetails.css';

const CoupleDetails = () => {
  return (
    <section className="couple-details" id="novios">
      <div className="container">
        <h2 className="section-title">Nosotros</h2>
        <p className="section-subtitle">
          Quienes se unen en matrimonio
        </p>

        <div className="couple-unified-card">

          <div className="card-ornament top">❦</div>

          <div className="couple-content">

            {/* FOTO */}
            <div className="couple-photo-wrapper">
              <img 
                src="../../public/imgs/test1.webp"
                alt="Telma y Mauricio"
                className="couple-photo"
              />
            </div>

            {/* TEXTO */}
            <div className="couple-text">
              <h3 className="bride-name">
                Telma Lizeth Casas Tlatuani
              </h3>

              <div className="heart-divider">♥</div>

              <h3 className="groom-name">
                Mauricio Andres Umaña Parrondo
              </h3>

              <p className="couple-message">
                Unidos por el amor, la complicidad y el deseo de construir 
                una vida llena de momentos extraordinarios.
              </p>
            </div>

          </div>

          <div className="card-ornament bottom">❦</div>

        </div>
      </div>
    </section>
  );
};

export default CoupleDetails;