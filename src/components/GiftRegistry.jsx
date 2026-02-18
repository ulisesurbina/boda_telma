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
    <section className="gift-registry" id="regalos">
      <div className="container">
        <h2 className="section-title">Mesa de Regalos</h2>
        <p className="section-subtitle">Tu presencia es nuestro mejor regalo</p>

        <div className="registry-intro">
          <p className="registry-message">
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

        <div className="registry-alternative">
          <div className="alternative-icon">💝</div>
          <h3 className="alternative-title">Lluvia de Sobres</h3>
          <p className="alternative-text">
            Si prefieres hacernos un regalo en efectivo, habrá una lluvia de sobres 
            durante la recepción. Tu apoyo significa mucho para nosotros.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GiftRegistry;
