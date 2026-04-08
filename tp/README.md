# ✈️ Boeing Fleet Catalog

Catálogo interactivo de aviones comerciales Boeing desde el **707** (1958) hasta el **787 Dreamliner** (2011).

## Vista previa

> Trabajo Práctico Diagnóstico — Frontend · Astro

## Funcionalidades

- Catálogo con 12 modelos Boeing con especificaciones técnicas
- Filtros por era: Clásico / Moderno / Widebody
- Buscador en tiempo real
- Modal de detalle al hacer click en cada avión
- Sección de estadísticas con línea de tiempo
- Dark mode / Light mode con persistencia en localStorage
- Diseño responsive (mobile, tablet, desktop)
- Componentes reutilizables: `NavBar`, `AircraftCard`, `Modal`

## Stack utilizado

| Herramienta | Uso |
|---|---|
| [Astro](https://astro.build/) | Framework principal |
| HTML semántico | Estructura (header, main, section, article, footer, dl) |
| CSS Grid + Flexbox | Layout responsive |
| CSS Variables | Theming dark/light mode |
| JavaScript vanilla | DOM, eventos, filtros, modal |
| Google Fonts | Rajdhani, Share Tech Mono, Barlow |

## Estructura del proyecto

```
boeing-catalog/
├── src/
│   ├── pages/
│   │   └── index.astro        ← página principal
│   ├── components/
│   │   ├── NavBar.astro       ← navegación
│   │   ├── AircraftCard.astro ← tarjeta de cada avión
│   │   └── Modal.astro        ← modal de detalle
│   ├── styles/
│   │   └── global.css         ← variables CSS y estilos base
│   └── data/
│       └── planes.js          ← datos de los 12 aviones
├── public/
│   └── favicon.svg
├── README.md
└── astro.config.mjs
```

## Cómo ejecutarlo localmente

**Requisitos:** Node.js 18 o superior

```bash
# 1. Clonar el repositorio
git clone https://github.com/TU_USUARIO/TU_REPO.git
cd boeing-catalog

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
```

Abrir [http://localhost:4321](http://localhost:4321) en el navegador.

```bash
# Build para producción
npm run build

# Preview del build
npm run preview
```

## Deploy

Este proyecto está desplegado en Vercel:  
🔗 [https://TU-URL.vercel.app](https://TU-URL.vercel.app)

Para deployar tu propia versión:
1. Importar el repo en [vercel.com](https://vercel.com)
2. Vercel detecta Astro automáticamente
3. Click en **Deploy** — sin configuración extra

## Conceptos del TP aplicados

- ✅ HTML semántico (`header`, `main`, `section`, `article`, `footer`, `dl`, `dt`, `dd`)
- ✅ CSS Grid para el catálogo responsive
- ✅ JavaScript: eventos `click`, `input`, `keydown`, manipulación del DOM
- ✅ Componentes reutilizables con Astro
- ✅ Dark mode con `data-theme` y `localStorage`
- ✅ Estructura de archivos organizada
- ✅ Commits progresivos por feature
