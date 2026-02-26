import React from 'react';
import '../styles/Godparents.css';

const Godparents = () => {
  const godparents = [
    { name: 'Remedios Tlatuani Gómez', relation: 'Padrino de XXXXXXX', side: 'groom' },
    { name: 'Felipe Francisco Hernández Suárez', relation: 'Padrino de XXXXXX', side: 'groom' },
  ];
  const parents = [
    { name: 'Mónica Tlatuani Gómez', relation: 'Madre de la Novia', side: 'bride' },
    { name: 'Juan Manuel Casas Sánchez', relation: 'Padre de la novia', side: 'groom' },
    { name: 'Soraya Andrea Parrondo Rodríguez', relation: 'Madre del Novio', side: 'bride' },
  ];

  return (
    <section className="godparents" id="padrinos">
      <div className="container">
        <h2 className="section-title">Padres</h2>
        <p className="section-subtitle">Quienes nos acompañan en este día especial</p>
        <div className="godparents-grid">
          {parents.map((parent, index) => (
            <div 
              key={index} 
              className={`godparent-card ${parent.side}`}
            >
              <div className="godparent-content">
                <div className="godparent-icon">❦</div>
                <h3 className="godparent-name">{parent.name}</h3>
                <p className="godparent-relation">{parent.relation}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="container">
          <h2 className="section-title">Padrinos</h2>
          <p className="section-subtitle">Quienes nos acompañan en este día especial</p>
          <div className="godparents-grid">
            {godparents.map((godparent, index) => (
              <div 
                key={index} 
                className={`godparent-card ${godparent.side}`}
              >
                <div className="godparent-content">
                  <div className="godparent-icon">❦</div>
                  <h3 className="godparent-name">{godparent.name}</h3>
                  <p className="godparent-relation">{godparent.relation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Godparents;
