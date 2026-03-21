import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';
import boda3 from '../assets/boda3.jpg';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  // Configuración de la boda
  const weddingDate = new Date('2026-05-16T15:00:00');
  const brideName = 'Telma';
  const groomName = 'Mauricio';
  
  // Estado para cuenta regresiva
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Actualizar cuenta regresiva
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = weddingDate - new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      <div className="hero-pattern"></div>
      
      <div className="hero-content container">
        <div className="hero-image-wrapper fade-in delay-1">
          <img 
            src={boda3}
            alt="Telma y Mauricio"
            className={`hero-image ${loaded ? 'loaded' : 'skeleton'}`}
            onLoad={() => setLoaded(true)}
          />
          <div className="hero-image-overlay"></div>
        </div>

        <div className="hero-text">
          <div className="hero-ornament fade-in-up delay-2">❦</div>
          
          <h1 className="hero-names fade-in-up delay-3">
            <span className="bride-name">{brideName}</span>
            <span className="ampersand">&</span>
            <span className="groom-name">{groomName}</span>
          </h1>

          <p className="hero-date fade-in-up delay-4">
            16 de Mayo, 2026
          </p>

          <div className="hero-divider fade-in delay-5"></div>

          <div className="countdown fade-in-up delay-6">
            <div className="countdown-item">
              <span className="countdown-number">{timeLeft.days}</span>
              <span className="countdown-label">Días</span>
            </div>
            <div className="countdown-separator">:</div>
            <div className="countdown-item">
              <span className="countdown-number">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="countdown-label">Horas</span>
            </div>
            <div className="countdown-separator">:</div>
            <div className="countdown-item">
              <span className="countdown-number">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="countdown-label">Min</span>
            </div>
            <div className="countdown-separator">:</div>
            <div className="countdown-item">
              <span className="countdown-number">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="countdown-label">Seg</span>
            </div>
          </div>

          <p className="hero-subtitle fade-in-up delay-7">
            Nos casamos y queremos celebrarlo contigo
          </p>
        </div>
      </div>

      <div className="scroll-indicator fade-in delay-8">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;
