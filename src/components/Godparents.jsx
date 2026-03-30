import React from 'react';
import '../styles/Godparents.css';
import margen from '../assets/margen.png';

const Godparents = () => {
  const godparents = [
    { 
      names: ['Remedios Tlatuani Gómez', 'Felipe Francisco Hernández Suárez'], 
      relation: 'Padrinos de Velación', 
      side: 'groom' 
    }
  ];

  const parents = [
    { 
      names: ['Mónica Tlatuani Gómez', 'Juan Manuel Casas Sánchez'], 
      relation: 'Padres de la Novia', 
      side: 'bride' 
    },
    { 
      names: ['Soraya Andrea Parrondo Rodríguez'], 
      relation: 'Madre del Novio', 
      side: 'groom' 
    },
  ];

  return (
    <section className="godparents floral-container" id="padrinos">
      <div className="container">

        <div className="godparents-box">

          <h2 className="section-title">Padres</h2>
          <p className="section-subtitle">Quienes nos acompañan en este día especial</p>

          <div className="godparents-grid">
            {parents.map((parent, index) => (
              <div key={index} className={`godparent-card ${parent.side}`}>
                <div className="godparent-content">
                  <div className="godparent-icon">❦</div>

                  <h3 className="godparent-name">
                    {parent.names.map((name, i) => (
                      <div key={i}>{name}</div>
                    ))}
                  </h3>

                  <p className="godparent-relation">{parent.relation}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="section-title">Padrinos</h2>
          <p className="section-subtitle">Quienes nos acompañan en este día especial</p>

          <div className="godparents-grid">
            {godparents.map((godparent, index) => (
              <div key={index} className={`godparent-card ${godparent.side}`}>
                <div className="godparent-content">
                  <div className="godparent-icon">❦</div>

                  <h3 className="godparent-name">
                    {godparent.names.map((name, i) => (
                      <div key={i}>{name}</div>
                    ))}
                  </h3>

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