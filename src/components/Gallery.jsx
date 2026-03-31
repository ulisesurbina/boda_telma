import React, { useState } from "react";
import "../styles/Gallery.css";

import boda1 from "../assets/boda19.webp";
import boda2 from "../assets/boda4.webp";
import boda4 from "../assets/boda10.webp";
import boda7 from "../assets/boda7.webp";
import boda8 from "../assets/boda8.webp";
import boda9 from "../assets/boda2.webp";
import boda10 from "../assets/boda9.webp";
import boda11 from "../assets/boda11.webp";
import boda13 from "../assets/boda13.webp";
import boda14 from "../assets/boda14.webp";
import boda15 from "../assets/boda1.webp";
import boda16 from "../assets/boda16.webp";
import boda17 from "../assets/boda17.webp";
import boda18 from "../assets/boda18.webp";
import boda19 from "../assets/boda21.webp";
import boda20 from "../assets/boda20.webp";
import boda21 from "../assets/boda15.webp";

const Gallery = () => {
  const images = [
    boda1,
    boda2,
    boda4,
    boda7,
    boda8,
    boda9,
    boda10,
    boda11,
    boda13,
    boda14,
    boda15,
    boda16,
    boda17,
    boda18,
    boda19,
    boda20,
    boda21
  ];

  const [loaded, setLoaded] = useState({});
  const [showAll, setShowAll] = useState(false);

  const initialVisible = 4;
  const isMobile = window.innerWidth <= 600;
  const visibleImages =
    isMobile && !showAll ? images.slice(0, initialVisible) : images;

  const handleImageLoad = (index) => {
    setLoaded((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section className="gallery floral-container" id="galeria">
      <div className="container margenRed">
        <h2 className="section-title">Galería</h2>
        <p className="section-subtitle">Momentos que atesoramos</p>

        <div className="gallery-grid">
          {visibleImages.map((img, realIndex) => (
            <div
              key={realIndex}
              className={`gallery-item item${realIndex + 1}`}
            >
              {!loaded[realIndex] && <div className="gallery-skeleton"></div>}

              <img
                src={img}
                alt={`Foto boda ${realIndex + 1}`}
                className={`gallery-image ${loaded[realIndex] ? "loaded" : ""}`}
                onLoad={() => handleImageLoad(realIndex)}
                loading="lazy"
              />

              <div className="gallery-overlay"></div>
            </div>
          ))}
        </div>
        {isMobile && (
          <div className="gallery-button-container">
            <button 
              className="btn btn-primary"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Ocultar' : 'Ver más'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
