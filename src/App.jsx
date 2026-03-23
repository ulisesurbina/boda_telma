import React, { useEffect } from 'react';
import Hero from './components/Hero';
import MusicPlayer from './components/MusicPlayer';
import OurStory from './components/OurStory';
import CoupleDetails from './components/CoupleDetails';
import Godparents from './components/Godparents';
import DressCode from './components/Dresscode';
import Venues from './components/Venues';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import GiftRegistry from './components/GiftRegistry';
import Register from './components/Register';
import Footer from './components/Footer';
import './styles/global.css';

function App() {
  // Intersection Observer para animaciones al hacer scroll
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Agregar animaciones a los hijos
          const children = entry.target.querySelectorAll('.fade-in-up, .fade-in, .scale-in');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.style.animationPlayState = 'running';
            }, index * 100);
          });
        }
      });
    }, observerOptions);

    // Observar todas las secciones
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  // Smooth scroll para los enlaces internos
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const id = target.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="App">
      <MusicPlayer />
      
      <Hero />
      <OurStory />
      <CoupleDetails />
      <Godparents />
      <DressCode />
      <Venues />
      {/* <Timeline /> */}
      <Gallery />
      <GiftRegistry />
      <Register />
      <Footer />
    </div>
  );
}

export default App;
