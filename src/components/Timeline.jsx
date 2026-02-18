import React from 'react';
import '../styles/Timeline.css';

const Timeline = () => {
  const events = [
    {
      time: '18:00',
      title: 'Ceremonia Religiosa',
      description: 'Nos unimos en matrimonio ante Dios y nuestros seres queridos',
      icon: '⛪'
    },
    {
      time: '19:30',
      title: 'Cocktail de Bienvenida',
      description: 'Disfrutemos juntos de bebidas y aperitivos mientras celebramos',
      icon: '🥂'
    },
    {
      time: '20:30',
      title: 'Recepción & Cena',
      description: 'Deliciosa cena y brindis por nuestro amor eterno',
      icon: '🍽️'
    },
    {
      time: '22:00',
      title: 'Primer Baile',
      description: 'Nuestro primer baile como esposos',
      icon: '💃'
    },
    {
      time: '22:30',
      title: '¡Fiesta!',
      description: 'Bailemos y celebremos hasta que la noche termine',
      icon: '🎉'
    },
    {
      time: '02:00',
      title: 'Despedida',
      description: 'Gracias por ser parte de nuestro día especial',
      icon: '✨'
    }
  ];

  return (
    <section className="timeline" id="itinerario">
      <div className="container">
        <h2 className="section-title">Itinerario</h2>
        <p className="section-subtitle">Momentos especiales del día</p>

        <div className="timeline-container">
          <div className="timeline-line"></div>

          {events.map((event, index) => (
            <div 
              key={index} 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-content">
                <div className="timeline-icon">{event.icon}</div>
                <div className="timeline-time">{event.time}</div>
                <h3 className="timeline-title">{event.title}</h3>
                <p className="timeline-description">{event.description}</p>
              </div>
              <div className="timeline-dot"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
