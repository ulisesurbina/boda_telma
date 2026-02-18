# 💒 Página Web de Boda - Telma & Mauricio

Una elegante página web de una sola página (SPA) desarrollada con React + Vite para celebrar una boda con estilo sofisticado y romántico.

## 🎨 Características

### Diseño
- **Paleta de colores**: Blanco (#FFFFFF) y Rojo profundo (#8B0000, #B22222)
- **Tipografía elegante**: Italiana, Cormorant Garamond, Tenor Sans
- **Diseño responsive**: Mobile-first approach
- **Animaciones suaves**: Fade-in, scroll reveal, shimmer effects

### Secciones
1. **Hero Section**: Nombres, fecha, cuenta regresiva funcional
2. **Nuestra Historia**: Narrativa romántica de la pareja
3. **Datos de los Novios**: Información personal y biografías
4. **Padrinos**: Lista elegante de padrinos y madrinas
5. **Ceremonia & Recepción**: Ubicaciones con integración a Google Maps
6. **Itinerario**: Timeline vertical con eventos del día
7. **Galería**: Grid responsive con skeletons animados
8. **Mesa de Regalos**: Enlaces a registros de regalos
9. **Footer**: Frase romántica y créditos

### Funcionalidades Especiales
- 🎵 **Reproductor de música**: Botón flotante para "Paraíso Lunar" de Siddhartha
- ⏱️ **Cuenta regresiva**: Actualización en tiempo real
- 🗺️ **Google Maps**: Integración directa a ubicaciones
- 📱 **Responsive**: Optimizado para todos los dispositivos
- ✨ **Animaciones**: Intersection Observer para animaciones al scroll
- 🎨 **Skeletons**: Placeholders animados para imágenes

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js v18+ 
- npm o yarn

### Instalación

```bash
# Navegar a la carpeta del proyecto
cd wedding-page

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview
```

## 📁 Estructura del Proyecto

```
wedding-page/
├── public/
│   └── audio/
│       └── paraiso-lunar.mp3  (Agregar archivo aquí)
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── MusicPlayer.jsx
│   │   ├── OurStory.jsx
│   │   ├── CoupleDetails.jsx
│   │   ├── Godparents.jsx
│   │   ├── Venues.jsx
│   │   ├── Timeline.jsx
│   │   ├── Gallery.jsx
│   │   ├── GiftRegistry.jsx
│   │   └── Footer.jsx
│   ├── styles/
│   │   ├── global.css
│   │   ├── Hero.css
│   │   ├── MusicPlayer.css
│   │   ├── OurStory.css
│   │   ├── CoupleDetails.css
│   │   ├── Godparents.css
│   │   ├── Venues.css
│   │   ├── Timeline.css
│   │   ├── Gallery.css
│   │   ├── GiftRegistry.css
│   │   └── Footer.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎵 Configuración de Música

Para agregar la canción "Paraíso Lunar" de Siddhartha:

1. Descarga el archivo MP3 (asegúrate de tener los derechos de uso)
2. Crea la carpeta `public/audio/` si no existe
3. Coloca el archivo como `public/audio/paraiso-lunar.mp3`
4. El reproductor detectará automáticamente el archivo

**Nota**: El proyecto está configurado para reproducir la música automáticamente después de la primera interacción del usuario (requerimiento de navegadores modernos).

## 🖼️ Agregar Imágenes Reales

Actualmente, todas las imágenes usan skeletons animados. Para agregar imágenes reales:

1. **Coloca las imágenes en**: `public/images/`
2. **Actualiza los componentes**:

```jsx
// Ejemplo en Hero.jsx
// Cambiar esto:
<div className="hero-image skeleton"></div>

// Por esto:
<img src="/images/hero-image.jpg" alt="Boda" className="hero-image" />
```

### Imágenes Recomendadas
- **Hero**: 1920x1280px (paisaje)
- **Nuestra Historia**: 1200x1600px (retrato)
- **Novios**: 1200x1600px cada uno (retrato)
- **Lugares**: 1920x1080px (paisaje)
- **Galería**: 1200x900px (paisaje) o variadas

## 🎨 Personalización

### Cambiar Colores

Edita las variables en `src/styles/global.css`:

```css
:root {
  --color-red-deep: #8B0000;
  --color-red-accent: #B22222;
  /* ... otros colores */
}
```

### Cambiar Información de los Novios

Edita los componentes correspondientes:
- **Nombres y fecha**: `src/components/Hero.jsx`
- **Historia**: `src/components/OurStory.jsx`
- **Biografías**: `src/components/CoupleDetails.jsx`
- **Padrinos**: `src/components/Godparents.jsx`
- **Ubicaciones**: `src/components/Venues.jsx`
- **Mesa de regalos**: `src/components/GiftRegistry.jsx`

### Cambiar Tipografía

Actualiza los enlaces de Google Fonts en `index.html` y las variables en `global.css`.

## 🌐 Despliegue en Netlify

### Opción 1: Desde la interfaz de Netlify

1. Construye el proyecto: `npm run build`
2. Arrastra la carpeta `dist/` a Netlify Drop
3. ¡Listo!

### Opción 2: Conectar repositorio Git

1. Sube el proyecto a GitHub
2. Conecta tu repositorio en Netlify
3. Configuración de build:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Deploy automático en cada push

### Variables de entorno (si es necesario)

Crea un archivo `.env` en la raíz:

```env
VITE_MAPS_API_KEY=tu_api_key_aqui
```

## 📱 Compatibilidad

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🛠️ Tecnologías Utilizadas

- **React 18**: Framework UI
- **Vite**: Build tool y dev server
- **CSS3**: Estilos y animaciones
- **Google Fonts**: Tipografías elegantes
- **Intersection Observer API**: Animaciones al scroll

## ⚡ Optimización

El proyecto incluye:
- Lazy loading preparado para imágenes
- Skeletons para mejor UX durante carga
- CSS optimizado con variables
- Componentes modulares y reutilizables
- Code splitting automático con Vite
- Build optimizado para producción

## 📝 Notas Importantes

1. **Música**: El autoplay de audio está limitado por las políticas de navegadores. La música se reproducirá después de la primera interacción del usuario.

2. **Imágenes**: Los skeletons están listos para ser reemplazados por imágenes reales manteniendo las proporciones.

3. **Google Maps**: Actualiza las URLs en `Venues.jsx` con las ubicaciones reales.

4. **Mesa de Regalos**: Actualiza los códigos de evento y URLs en `GiftRegistry.jsx`.

5. **Cuenta Regresiva**: Cambia la fecha en `Hero.jsx` para tu evento real.

## 🎯 Próximos Pasos Sugeridos

- [ ] Agregar imágenes reales
- [ ] Configurar archivo de audio
- [ ] Personalizar todos los textos
- [ ] Actualizar enlaces de Google Maps
- [ ] Configurar códigos de mesa de regalos
- [ ] Probar en diferentes dispositivos
- [ ] Desplegar en Netlify
- [ ] Compartir con invitados

## 📄 Licencia

Este proyecto fue creado para uso personal. 

## 💝 Créditos

Desarrollado con amor y dedicación para Telma & Mauricio.

---

**¡Felicidades por su boda! 💒❤️**
