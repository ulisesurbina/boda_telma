import React, { useState, useRef, useEffect } from 'react';
import '../styles/MusicPlayer.css';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const audioRef = useRef(null);

  // ▶️ Intentar autoplay al cargar
  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      audio.muted = true; // necesario para autoplay en móviles

      const playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // El navegador bloqueó autoplay (normal)
          });
      }
    }
  }, []);

  // 👆 Primera interacción → activar sonido
  useEffect(() => {
    const enableSound = () => {
      const audio = audioRef.current;

      if (audio) {
        audio.muted = false;
        setIsMuted(false);

        audio.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {});
      }

      document.removeEventListener('click', enableSound);
      document.removeEventListener('touchstart', enableSound);
    };

    document.addEventListener('click', enableSound);
    document.addEventListener('touchstart', enableSound);

    return () => {
      document.removeEventListener('click', enableSound);
      document.removeEventListener('touchstart', enableSound);
    };
  }, []);

  // 🎵 Play / Pause manual
  const togglePlay = () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.muted = false;
      audio.play();
      setIsMuted(false);
      setIsPlaying(true);
    }
  };

  return (
    <div className={`music-player ${isVisible ? 'visible' : 'hidden'}`}>
      
      <audio
        ref={audioRef}
        loop
        preload="auto"
        playsInline
      >
        <source src="/audio/paraiso-lunar.mp3" type="audio/mpeg" />
        Tu navegador no soporta el audio.
      </audio>

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

        {isPlaying && (
          <div className="sound-waves">
            <span className="wave"></span>
            <span className="wave"></span>
            <span className="wave"></span>
          </div>
        )}
      </button>

      <div className="music-info">
        <div className="song-title">Paraíso Lunar</div>
        <div className="artist-name">Siddhartha</div>
        {isMuted && <div className="muted-label">Tap para activar sonido 🔊</div>}
      </div>
    </div>
  );
};

export default MusicPlayer;