import React from 'react';
import '../styles/Venues.css';
import iglesia from '../assets/iglesia.png'
import recepcion from '../assets/recepcion.png'

const Venues = () => {
  const ceremony = {
    title: 'Ceremonia Religiosa',
    venue: 'Iglesia de San Bartolome',
    address: 'Ignacio Zaragoza 78P, San Bartolo, 54784 San Bartolo, EDOMEX',
    time: '14:00 hrs',
    mapsUrl: 'https://maps.app.goo.gl/VpPBcVwxrZyjtfpF8'
  };

  const reception = {
    title: 'Recepción',
    venue: 'Jardin de Eventos Mauro Casas',
    address: 'Calle Pino S/N San Bartolo Teoloyucan, EDOMEX',
    time: '15:00 hrs',
    mapsUrl: 'https://maps.app.goo.gl/w2zjxtgDN1revLKj8'
  };

  const openMaps = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section className="venues floral-container" id="ubicacion">
      <div className="container margenRed">
        <h2 className="section-title">Ceremonia & Recepción</h2>
        <p className="section-subtitle">Dónde celebraremos nuestro amor</p>

        <div className="venues-grid">
          {/* Ceremonia */}
          <div className="venue-card">
            <div className="venue-image-wrapper">
              <div className="venue-image skeleton"></div>
              <div className="venue-overlay">
                <div className="venue-icon">
                  <img src={iglesia} alt="Iglesia" />
                </div>
              </div>
            </div>

            <div className="venue-content">
              <h3 className="venue-title">{ceremony.title}</h3>
              <div className="venue-divider"></div>
              
              <div className="venue-details">
                <div className="venue-detail">
                  <span className="detail-icon">📍</span>
                  <div className="detail-text">
                    <strong>{ceremony.venue}</strong>
                    <p>{ceremony.address}</p>
                  </div>
                </div>

                <div className="venue-detail">
                  <span className="detail-icon">🕐</span>
                  <div className="detail-text">
                    <strong>Hora</strong>
                    <p>{ceremony.time}</p>
                  </div>
                </div>
              </div>

              <button 
                className="btn btn-primary venue-btn"
                onClick={() => openMaps(ceremony.mapsUrl)}
              >
                Ver en Google Maps
              </button>
            </div>
          </div>

          {/* Recepción */}
          <div className="venue-card">
            <div className="venue-image-wrapper">
              <div className="venue-image skeleton"></div>
              <div className="venue-overlay">
                <div className="venue-icon">
                   <img src={recepcion} alt="Recepción" />
                </div>
              </div>
            </div>

            <div className="venue-content">
              <h3 className="venue-title">{reception.title}</h3>
              <div className="venue-divider"></div>
              
              <div className="venue-details">
                <div className="venue-detail">
                  <span className="detail-icon">📍</span>
                  <div className="detail-text">
                    <strong>{reception.venue}</strong>
                    <p>{reception.address}</p>
                  </div>
                </div>

                <div className="venue-detail">
                  <span className="detail-icon">🕐</span>
                  <div className="detail-text">
                    <strong>Hora</strong>
                    <p>{reception.time}</p>
                  </div>
                </div>
              </div>

              <button 
                className="btn btn-primary venue-btn"
                onClick={() => openMaps(reception.mapsUrl)}
              >
                Ver en Google Maps
              </button>
            </div>
          </div>
        </div>

        {/* Información adicional */}
        <div className="venue-info">
          <p className="venue-note">
            💒 Por favor, llega 15 minutos antes de la ceremonia
          </p>
        </div>
      </div>
    </section>
  );
};

export default Venues;
