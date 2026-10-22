# Ilustre Municipalidad de Retiro — Angular

Sitio web institucional de la Ilustre Municipalidad de Retiro (Región del Maule, Chile).
Esta es la versión **Angular** del proyecto `Evaluacion_1_MuniRetiro` (que se conserva en la
raíz como referencia de la versión estática en HTML/CSS/JS).

## Stack

- Angular 22 (standalone components, signals, `@for` control flow)
- Bootstrap 5.3.3 + Bootstrap Icons 1.11.3 (instalados por npm, no CDN)
- Reactive Forms para el formulario OIRS
- Vitest (test runner por defecto del CLI)

## Estructura

```
src/
├── index.html                  # index.html raíz de Angular (lang="es")
├── main.ts                     # bootstrapApplication
├── styles.css                  # estilos globales (migrados de css/styles.css)
└── app/
    ├── app.ts / app.html       # shell de la aplicación
    ├── app.config.ts           # providers (router)
    ├── app.routes.ts
    ├── data/                   # modelos + datos estáticos extraídos del HTML original
    │   ├── navegacion.ts       # menú, redes sociales y enlaces de transparencia
    │   ├── servicios.ts        # categorías de trámites y servicios
    │   ├── destacados.ts       # carrusel de destacados
    │   ├── noticias.ts         # noticias destacadas
    │   └── autoridades.ts      # alcalde, concejales y funciones
    └── components/
        ├── header/             # navbar + video hero
        ├── transparencia/      # redes sociales + enlaces de transparencia
        ├── servicios/          # trámites por categoría
        ├── destacados/         # carrusel
        ├── noticias/           # tarjetas de noticias
        ├── autoridades/        # concejo municipal
        ├── mapa/               # mapa de ubicación
        ├── contacto/           # formulario OIRS (Reactive Forms + validación)
        └── footer/
```

Las imágenes estáticas se sirven desde `public/img/` (copia de `Evaluacion_1_MuniRetiro/img/`).

## Comandos

```bash
npm start          # servidor de desarrollo en http://localhost:4200/
npm run build      # build de producción en dist/
npm test           # tests unitarios (Vitest)
```

## Migración desde la versión estática

| Estático (`Evaluacion_1_MuniRetiro`) | Angular |
| --- | --- |
| `index.html` | `src/app/app.html` + componentes en `src/app/components/` |
| `css/styles.css` | `src/styles.css` |
| `js/script.js` (validación del form) | `src/app/components/contacto/contacto.ts` (Reactive Forms) |
| `img/` | `public/img/` |
| CDN de Bootstrap | `npm install bootstrap bootstrap-icons` + `angular.json` |

### Notas

- El carrusel de **Destacados** y el menú colapsable usan el bundle JS de Bootstrap, registrado
  en `angular.json` → `scripts`.
- El enlace de navegación **SALUD** apunta a la sección `#salud`, que corresponde al bloque de
  **Solicitud de información / OIRS** (incluye el teléfono de Salud). En la versión estática ese
  ancla no existía.
- Los datos variables (trámites, noticias, autoridades, carrusel) están centralizados en
  `src/app/data/` para poder actualizarlos sin tocar las plantillas.
