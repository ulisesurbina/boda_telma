import React from 'react';
import '../styles/Godparents.css';
import dresscode from '../assets/moda.png';

const Dresscode = () => {

  return (
    <section className="godparents floral-container" id="padrinos">
      <div className="container margenRed">
        <h2 className="section-title">Código de Vestimenta</h2>
        <p className="section-subtitle">Se sugiere vestimenta formal</p>
        <p className="section-subtitle">Mujeres no usar color blanco o rojo (Únicamente damas)</p>
        <div className="dresscode-image-wrapper">
          <img src={dresscode} alt="Código de vestimenta" />
        </div>
      </div>
    </section>
  );
};

export default Dresscode;
