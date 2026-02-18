import React, { useState, useRef, useEffect } from 'react';
import '../styles/MusicPlayer.css';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const audioRef = useRef(null);

  // Toggle reproducción
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => {
          console.log('Autoplay prevented:', err);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Intentar reproducir automáticamente después de interacción del usuario
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          // Silenciosamente fallar si autoplay no está permitido
        });
      }
      // Remover listener después de primera interacción
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);

  return (
    <div className={`music-player ${isVisible ? 'visible' : 'hidden'}`}>
      {/* Audio element - el src debe apuntar a un archivo local */}
      <audio
        ref={audioRef}
        loop
        preload="metadata"
      >
        {/* Colocar aquí la ruta al archivo de audio local */}
        <source src="/audio/paraiso-lunar.mp3" type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio.
      </audio>

      {/* Botón flotante de reproducción */}
      <button 
        className={`music-toggle ${isPlaying ? 'playing' : ''}`}
        onClick={togglePlay}
        aria-label={isPlaying ? 'Pausar música' : 'Reproducir música'}
      >
        <div className="music-icon">
          {isPlaying ? (
            <>
              <span className="pause-bar"></span>
              <span className="pause-bar"></span>
            </>
          ) : (
            <div className="play-triangle"></div>
          )}
        </div>
        
        {/* Ondas de sonido animadas */}
        {isPlaying && (
          <div className="sound-waves">
            <span className="wave"></span>
            <span className="wave"></span>
            <span className="wave"></span>
          </div>
        )}
      </button>

      {/* Información de la canción (opcional, mostrar al hacer hover) */}
      <div className="music-info">
        <div className="song-title">Paraíso Lunar</div>
        <div className="artist-name">Siddhartha</div>
      </div>
    </div>
  );
};

export default MusicPlayer;
