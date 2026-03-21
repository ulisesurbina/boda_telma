import React, { useState } from 'react';
import '../styles/Gallery.css';

import boda1 from '../assets/boda1.jpg';
import boda2 from '../assets/boda2.jpg';
import boda4 from '../assets/boda4.jpg';
import boda6 from '../assets/boda6.jpg';
import boda7 from '../assets/boda7.jpg';
import boda8 from '../assets/boda8.jpg';
import boda9 from '../assets/boda9.jpg';
import boda10 from '../assets/boda10.jpg';
import boda11 from '../assets/boda11.jpg';
import boda12 from '../assets/boda12.jpg';
import boda13 from '../assets/boda13.jpg';
import boda14 from '../assets/boda14.jpg';
import boda15 from '../assets/boda15.jpg';
import boda16 from '../assets/boda16.jpg';
import boda17 from '../assets/boda17.jpg';
import boda18 from '../assets/boda18.jpg';
import boda19 from '../assets/boda19.jpg';
import boda20 from '../assets/boda20.jpg';
import boda21 from '../assets/boda21.jpg';
import boda22 from '../assets/boda22.png';

const Gallery = () => {
  // Array de placeholders para las imágenes
  const images = [
    boda1, boda2, boda4, boda6, boda7, boda8,
    boda9, boda10, boda11, boda12, boda13, boda14,
    boda15, boda16, boda17, boda18, boda19, boda20,
    boda21, boda22
  ];

  const [loaded, setLoaded] = useState({});

  const handleImageLoad = (index) => {
    setLoaded(prev => ({ ...prev, [index]: true }));
  };

  return (
    <section className="gallery" id="galeria">
      <div className="container">
        <h2 className="section-title">Galería</h2>
        <p className="section-subtitle">Momentos que atesoramos</p>

        <div className="gallery-grid">
          {images.map((img, index) => (
            <div 
              key={index} 
              className={`gallery-item item-${index + 1}`}
            >
              {!loaded[index] && <div className="gallery-skeleton"></div>}

              <img 
                src={img}
                alt={`Foto boda ${index + 1}`}
                className={`gallery-image ${loaded[index] ? 'loaded' : ''}`}
                onLoad={() => handleImageLoad(index)}
                loading="lazy"
              />

              <div className="gallery-overlay"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
