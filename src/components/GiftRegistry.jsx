import React from 'react';
import '../styles/GiftRegistry.css';

const GiftRegistry = () => {
  const registries = [
    {
      store: 'Liverpool',
      eventCode: '51937686',
      url: 'https://mesaderegalos.liverpool.com.mx/milistaderegalos/51937686',
      icon: '🎁'
    },
    {
      store: 'Amazon',
      eventCode: '2TBPOMCU0KIT',
      url: 'https://www.amazon.com.mx/wedding/guest-view/2TBPOMCU0KIT',
      icon: '📦'
    }
  ];

  const openRegistry = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section className="gift-registry floral-container" id="regalos">
      <div className="container margenRed">
        <h2 className="section-title">Mesa de Regalos</h2>
        <div className="registry-intro">
          <p className="registry-message">
            Tu presencia es nuestro mejor regalo. <br />
            Si deseas hacernos un obsequio, hemos creado mesas de regalos en las siguientes tiendas. 
            Tu generosidad nos ayudará a comenzar nuestra vida juntos con todo lo que necesitamos 
            para hacer de nuestra casa un hogar lleno de amor.
          </p>
        </div>

        <div className="registry-grid">
          {registries.map((registry, index) => (
            <div key={index} className="registry-card">
              <div className="registry-icon">{registry.icon}</div>
              <h3 className="registry-store">{registry.store}</h3>
              
              <div className="registry-info">
                <span className="registry-label">Código del evento:</span>
                <span className="registry-code">{registry.eventCode}</span>
              </div>

              <button 
                className="btn btn-primary registry-btn"
                onClick={() => openRegistry(registry.url)}
              >
                Ver Mesa de Regalos
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GiftRegistry;
