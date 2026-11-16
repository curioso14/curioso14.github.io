# Jorge Dimter — Portfolio

Portfolio personal (React) — visión por computador y NLP aplicados a medicina; astrónomo de formación.
Basado en la plantilla de [Soumyajit4419/Portfolio](https://github.com/soumyajit4419/Portfolio).

## Editar contenido

Todo el texto (ES/EN), proyectos, links y CV están en **`src/content.js`**.

- **Links** (LinkedIn, email, Scholar, ORCID): rellena `profile.links`. Los vacíos no se muestran.
- **CV en PDF**: copia tu archivo a `public/cv.pdf` y pon `cvFile: "cv.pdf"`.
- **Proyectos**: agrega un objeto al arreglo `projects` (imagen en `src/Assets/Projects/`).

## Correr en local

```bash
npm install
npm start          # http://localhost:3000
npm run build      # genera /build
```

## Publicar en GitHub Pages

El workflow `.github/workflows/deploy.yml` construye y publica el sitio en cada push a `main`.
En el repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
