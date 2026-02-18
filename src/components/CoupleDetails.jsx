import React from 'react';
import '../styles/CoupleDetails.css';

const CoupleDetails = () => {
  const brideInfo = {
    name: 'Telma Lizeth Casas Tlatuani',
    bio: 'Amante del arte, los atardeceres y las pequeñas cosas que hacen la vida extraordinaria. Mi corazón late por la fotografía, los viajes y, sobre todo, por construir una vida llena de amor junto a ti.'
  };

  const groomInfo = {
    name: 'Mauricio Andres Umaña Parrondo',
    bio: 'Soñador incansable, apasionado por la música, la naturaleza y las aventuras. Cada día a tu lado es un regalo que atesoro, y no puedo esperar para comenzar esta nueva aventura juntos, para siempre.'
  };

  return (
    <section className="couple-details" id="novios">
      <div className="container">
        <h2 className="section-title">Los Novios</h2>
        <p className="section-subtitle">Quienes se unen en matrimonio</p>

        <div className="couple-grid">
          {/* La Novia */}
          <div className="couple-card bride-card">
            <div className="card-ornament top">❦</div>
            <div className="couple-image-wrapper">
              <div className="couple-image skeleton"></div>
            </div>
            <div className="couple-info">
              <h3 className="couple-name">{brideInfo.name}</h3>
              <span className="couple-role">La Novia</span>
              <p className="couple-bio">{brideInfo.bio}</p>
            </div>
            <div className="card-ornament bottom">❦</div>
          </div>

          {/* Corazón central */}
          <div className="couple-divider">
            <div className="heart-icon">♥</div>
          </div>

          {/* El Novio */}
          <div className="couple-card groom-card">
            <div className="card-ornament top">❦</div>
            <div className="couple-image-wrapper">
              <div className="couple-image skeleton"></div>
            </div>
            <div className="couple-info">
              <h3 className="couple-name">{groomInfo.name}</h3>
              <span className="couple-role">El Novio</span>
              <p className="couple-bio">{groomInfo.bio}</p>
            </div>
            <div className="card-ornament bottom">❦</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoupleDetails;
