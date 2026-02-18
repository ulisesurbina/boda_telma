import React from 'react';
import '../styles/Gallery.css';

const Gallery = () => {
  // Array de placeholders para las imágenes
  const images = Array(12).fill(null);

  return (
    <section className="gallery" id="galeria">
      <div className="container">
        <h2 className="section-title">Galería</h2>
        <p className="section-subtitle">Momentos que atesoramos</p>

        <div className="gallery-grid">
          {images.map((_, index) => (
            <div 
              key={index} 
              className={`gallery-item item-${index + 1}`}
            >
              <div className="gallery-image skeleton"></div>
              <div className="gallery-overlay">
                <div className="gallery-icon">📷</div>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-note">
          <p>✨ Las fotografías de nuestra boda estarán disponibles próximamente</p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
