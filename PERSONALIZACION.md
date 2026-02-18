# 📋 Guía de Personalización - Página de Boda

Esta guía te ayudará a personalizar todos los aspectos de tu página de boda.

## 🎯 Personalización Básica (Esencial)

### 1. Información de los Novios

**Archivo**: `src/components/Hero.jsx`

```javascript
// Líneas 6-9
const weddingDate = new Date('2026-12-25T18:00:00'); // ⬅️ TU FECHA AQUÍ
const brideName = 'Telma';  // ⬅️ NOMBRE DE LA NOVIA
const groomName = 'Mauricio';  // ⬅️ NOMBRE DEL NOVIO
```

**Archivo**: `src/components/CoupleDetails.jsx`

```javascript
// Líneas 5-14
const brideInfo = {
  name: 'Telma Lizeth Casas Tlatuani',  // ⬅️ NOMBRE COMPLETO
  bio: 'Tu biografía aquí...'  // ⬅️ BIOGRAFÍA DE LA NOVIA
};

const groomInfo = {
  name: 'Mauricio Andres Umaña Parrondo',  // ⬅️ NOMBRE COMPLETO
  bio: 'Tu biografía aquí...'  // ⬅️ BIOGRAFÍA DEL NOVIO
};
```

### 2. Nuestra Historia

**Archivo**: `src/components/OurStory.jsx`

Edita los párrafos entre las líneas 15-38 con tu historia personal.

### 3. Padrinos

**Archivo**: `src/components/Godparents.jsx`

```javascript
// Líneas 5-12
const godparents = [
  { name: 'Nombre Completo', relation: 'Madrina de...', side: 'bride' },
  { name: 'Nombre Completo', relation: 'Padrino de...', side: 'groom' },
  // Agrega o elimina según necesites
];
```

**Nota**: `side: 'bride'` para madrinas, `side: 'groom'` para padrinos

### 4. Ceremonia y Recepción

**Archivo**: `src/components/Venues.jsx`

```javascript
// Líneas 5-17
const ceremony = {
  title: 'Ceremonia Religiosa',
  venue: 'Nombre del lugar',  // ⬅️ TU LUGAR
  address: 'Dirección completa',  // ⬅️ TU DIRECCIÓN
  time: '18:00 hrs',  // ⬅️ TU HORA
  mapsUrl: 'https://maps.google.com/?q=...'  // ⬅️ TU URL DE MAPS
};

const reception = {
  // ... igual que arriba
};
```

**Cómo obtener la URL de Google Maps**:
1. Abre Google Maps
2. Busca tu ubicación
3. Haz clic en "Compartir"
4. Copia el enlace

### 5. Itinerario

**Archivo**: `src/components/Timeline.jsx`

```javascript
// Líneas 5-37
const events = [
  {
    time: '18:00',  // ⬅️ HORA
    title: 'Ceremonia Religiosa',  // ⬅️ TÍTULO
    description: 'Descripción...',  // ⬅️ DESCRIPCIÓN
    icon: '⛪'  // ⬅️ EMOJI OPCIONAL
  },
  // Agrega, edita o elimina eventos según tu programa
];
```

### 6. Mesa de Regalos

**Archivo**: `src/components/GiftRegistry.jsx`

```javascript
// Líneas 5-14
const registries = [
  {
    store: 'Liverpool',  // ⬅️ NOMBRE DE LA TIENDA
    eventCode: '123456789',  // ⬅️ TU CÓDIGO DE EVENTO
    url: 'https://...',  // ⬅️ URL DE TU MESA
    icon: '🎁'
  },
  // Agrega más tiendas si es necesario
];
```

### 7. Footer

**Archivo**: `src/components/Footer.jsx`

```javascript
// Líneas 28-31
<div className="footer-names">
  <span>Telma</span>  // ⬅️ NOMBRES
  <span className="footer-heart">♥</span>
  <span>Mauricio</span>
</div>

<p className="footer-date">16.05.2026</p>  // ⬅️ FECHA

// Línea 34
<span className="social-tag">#TelmayMauricioForever</span>  // ⬅️ HASHTAG
```

## 🎨 Personalización de Diseño

### Cambiar Colores

**Archivo**: `src/styles/global.css`

```css
:root {
  /* Colores Principales */
  --color-red-deep: #8B0000;    /* ⬅️ Color principal */
  --color-red-accent: #B22222;  /* ⬅️ Color de acento */
  --color-rose-light: #FFE4E8;  /* ⬅️ Fondo claro */
  --color-rose-medium: #FFD1DC; /* ⬅️ Fondo medio */
}
```

**Sugerencias de paletas**:
- Rojo y Blanco (actual): #8B0000, #FFFFFF
- Oro y Marfil: #D4AF37, #FFFFF0
- Rosa y Gris: #E5989B, #6D6875
- Azul y Plata: #2C3E50, #BDC3C7
- Verde Esmeralda: #50C878, #FFFFFF

### Cambiar Tipografía

**Archivo**: `index.html` (línea 8)

Cambia la URL de Google Fonts por las que prefieras:

```html
<link href="https://fonts.googleapis.com/css2?family=TuFuenteAqui&display=swap" rel="stylesheet">
```

**Archivo**: `src/styles/global.css`

```css
:root {
  --font-display: 'Italiana', serif;        /* ⬅️ Títulos grandes */
  --font-body: 'Cormorant Garamond', serif; /* ⬅️ Texto normal */
  --font-accent: 'Tenor Sans', sans-serif;  /* ⬅️ Acentos */
}
```

**Fuentes románticas sugeridas**:
- Display: Italiana, Pinyon Script, Great Vibes, Playfair Display
- Body: Cormorant, Crimson Text, Lora, EB Garamond
- Accent: Tenor Sans, Cinzel, Montserrat

## 🖼️ Agregar Imágenes

### 1. Preparar tus imágenes

**Tamaños recomendados**:
- Hero (principal): 1920x1280px
- Nuestra Historia: 1200x1600px
- Fotos de novios: 1200x1600px cada una
- Lugares (ceremonia/recepción): 1920x1080px
- Galería: 1200x900px o variadas

**Herramientas para optimizar**:
- [TinyPNG](https://tinypng.com/) - Compresión de imágenes
- [Squoosh](https://squoosh.app/) - Optimización online

### 2. Ubicar las imágenes

Crea la carpeta `public/images/` y organiza así:

```
public/
└── images/
    ├── hero-main.jpg
    ├── our-story.jpg
    ├── bride.jpg
    ├── groom.jpg
    ├── ceremony-venue.jpg
    ├── reception-venue.jpg
    └── gallery/
        ├── photo-1.jpg
        ├── photo-2.jpg
        └── ...
```

### 3. Actualizar los componentes

**Hero** (`src/components/Hero.jsx`):
```jsx
// Reemplazar línea 23-24
<img 
  src="/images/hero-main.jpg" 
  alt="Boda Telma y Mauricio" 
  className="hero-image" 
/>
```

**Nuestra Historia** (`src/components/OurStory.jsx`):
```jsx
// Reemplazar línea 40
<img 
  src="/images/our-story.jpg" 
  alt="Nuestra Historia" 
  className="story-image" 
/>
```

**Datos de Novios** (`src/components/CoupleDetails.jsx`):
```jsx
// Para la novia (línea 26)
<img 
  src="/images/bride.jpg" 
  alt="Telma" 
  className="couple-image" 
/>

// Para el novio (línea 45)
<img 
  src="/images/groom.jpg" 
  alt="Mauricio" 
  className="couple-image" 
/>
```

**Venues** (`src/components/Venues.jsx`):
```jsx
// Ceremonia (línea 38)
<img 
  src="/images/ceremony-venue.jpg" 
  alt="Lugar de ceremonia" 
  className="venue-image" 
/>

// Recepción (línea 69)
<img 
  src="/images/reception-venue.jpg" 
  alt="Lugar de recepción" 
  className="venue-image" 
/>
```

**Galería** (`src/components/Gallery.jsx`):
```jsx
// Reemplazar el map (líneas 15-25) por:
{images.map((image, index) => (
  <div key={index} className={`gallery-item item-${index + 1}`}>
    <img 
      src={`/images/gallery/photo-${index + 1}.jpg`} 
      alt={`Foto ${index + 1}`} 
      className="gallery-image" 
    />
    <div className="gallery-overlay">
      <div className="gallery-icon">📷</div>
    </div>
  </div>
))}
```

## 🎵 Configurar Música

### 1. Obtener el archivo de audio

**Importante**: Asegúrate de tener los derechos para usar la canción.

**Fuentes legales**:
- Compra en iTunes, Amazon Music, Google Play
- Servicios de música libre de derechos
- Música propia o con permiso del artista

### 2. Convertir a MP3 (si es necesario)

Usa herramientas como:
- [Online Audio Converter](https://online-audio-converter.com/)
- [CloudConvert](https://cloudconvert.com/mp3-converter)

### 3. Ubicar el archivo

```bash
wedding-page/
└── public/
    └── audio/
        └── paraiso-lunar.mp3  # ⬅️ Coloca tu archivo aquí
```

### 4. Cambiar la canción

Si quieres usar otra canción diferente a "Paraíso Lunar":

**Archivo**: `src/components/MusicPlayer.jsx`

```jsx
// Línea 39 - Cambia el nombre del archivo
<source src="/audio/tu-cancion.mp3" type="audio/mpeg" />

// Líneas 62-63 - Cambia la información
<div className="song-title">Nombre de tu Canción</div>
<div className="artist-name">Nombre del Artista</div>
```

## 🌍 Configuración de Google Maps

### Opción 1: Enlaces simples (actual)

Ya está configurado con enlaces básicos que abren Google Maps.

### Opción 2: Mapas embebidos (avanzado)

Si quieres mostrar mapas directamente en la página:

1. Obtén una API key de [Google Cloud Console](https://console.cloud.google.com/)
2. Activa la API de Maps JavaScript
3. Actualiza `Venues.jsx` para incluir un iframe o usar la biblioteca de React Google Maps

## 📱 Probar en Diferentes Dispositivos

### Navegadores para probar:
- ✅ Chrome (escritorio y móvil)
- ✅ Safari (iOS)
- ✅ Firefox
- ✅ Edge

### Herramientas de prueba:
- Chrome DevTools (F12 → Toggle device toolbar)
- [BrowserStack](https://www.browserstack.com/) (pruebas en dispositivos reales)
- [Responsively](https://responsively.app/) (app gratuita)

## 🚀 Checklist Final

Antes de desplegar, verifica:

- [ ] Todos los nombres están correctos
- [ ] La fecha y hora son correctas
- [ ] Las biografías están personalizadas
- [ ] La lista de padrinos está completa
- [ ] Las direcciones son correctas
- [ ] Los enlaces de Google Maps funcionan
- [ ] El itinerario refleja tu evento
- [ ] Los códigos de mesa de regalos son correctos
- [ ] Las imágenes están optimizadas y cargadas
- [ ] La música funciona correctamente
- [ ] El hashtag del footer es el tuyo
- [ ] Has probado en móvil y escritorio
- [ ] Todos los enlaces externos funcionan

## 💡 Consejos Adicionales

### Rendimiento
- Mantén las imágenes bajo 500KB cada una
- Usa formato WebP cuando sea posible
- Considera lazy loading para la galería

### SEO (opcional)
- Actualiza el `<title>` en `index.html`
- Agrega meta tags con descripción
- Incluye Open Graph tags para redes sociales

### Accesibilidad
- Todas las imágenes deben tener atributo `alt`
- Mantén el contraste de colores adecuado
- Asegúrate que la navegación funcione con teclado

### Seguridad
- No incluyas información sensible (direcciones privadas, teléfonos)
- Considera agregar una contraseña si es necesario
- Revisa la configuración de privacidad antes de compartir

## 🆘 Soporte

Si encuentras problemas:

1. Revisa la consola del navegador (F12)
2. Verifica que todos los archivos estén en las rutas correctas
3. Asegúrate de haber guardado todos los cambios
4. Reinicia el servidor de desarrollo (`npm run dev`)

---

**¡Disfruta personalizando tu página de boda! 💒✨**
