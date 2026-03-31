import React, { useState, useEffect, useRef } from "react";
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
  const [visibleCount, setVisibleCount] = useState(4);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const [showAll, setShowAll] = useState(false);

  const observer = useRef();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const lastImageRef = (node) => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisibleCount((prev) => {
          if (prev >= images.length) return prev;
          return prev + 4;
        });
      }
    });

    if (node) observer.current.observe(node);
  };

  const visibleImages = images.slice(0, visibleCount);

  const handleImageLoad = (index) => {
    setLoaded((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section className="gallery floral-container" id="galeria">
      <div className="container margenRed">
        <h2 className="section-title">Galería</h2>
        <p className="section-subtitle">Momentos que atesoramos</p>

        <div className="gallery-grid">
          {visibleImages.map((img, index) => {
            const isLast = index === visibleImages.length - 1;

            return (
              <div
                ref={isLast ? lastImageRef : null}
                key={index}
                className={`gallery-item item${index + 1}`}
              >
                {!loaded[index] && (
                  <div className="gallery-skeleton"></div>
                )}

                <img
                  src={img}
                  alt={`Foto boda ${index + 1}`}
                  className={`gallery-image ${
                    loaded[index] ? "loaded" : ""
                  }`}
                  onLoad={() => handleImageLoad(index)}
                  loading="lazy"
                  width="300"
                  height="400"
                />

                <div className="gallery-overlay"></div>
              </div>
            );
          })}
        </div>
        {isMobile && visibleCount < images.length && (
          <div className="gallery-button-container">
            <button
              className="btn btn-primary"
              onClick={() => setVisibleCount((prev) => prev + 4)}
            >
              Ver más
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
