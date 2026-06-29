# Guía de Creación y Edición de Proyectos (MDX)

El portafolio utiliza archivos **MDX** (.mdx) para almacenar la información de los proyectos de manera dinámica. Estos archivos combinan metadatos (Frontmatter) y contenido enriquecido en formato Markdown.

---

## 1. Flujo de Carga y Compilación

El sistema lee las entradas de proyectos desde la carpeta `src/projects-entries/`.
- Las utilidades en `src/utils/projects.js` utilizan `compileMDX` del paquete `next-mdx-remote/rsc` para analizar el contenido en tiempo de compilación.
- El frontmatter se extrae como un objeto de metadatos de configuración, y el cuerpo del Markdown se procesa como un componente React.

---

## 2. Estructura de un Archivo MDX

Cada proyecto debe crearse dentro de [src/projects-entries/](../src/projects-entries/) con extensión `.mdx` (por ejemplo, `nuevo-proyecto.mdx`). La estructura base es la siguiente:

```markdown
---
title: "Nombre del Proyecto"
description: "Breve descripción de una línea para tarjetas"
technologies: ["html", "css", "js", "react"]
featuredImage: "/project-images/nuevo-proyecto/featured.png"
exerpt: |
  "Extracto corto o introducción de párrafo para secciones promocionales"
images:
  - url: "/project-images/nuevo-proyecto/1.png"
    alt: "Vista principal de la aplicación"
    description: "Captura de pantalla mostrando el Dashboard"
  - url: "/project-images/nuevo-proyecto/2.png"
    alt: "Formulario de configuración"
    description: "Sección de ajustes avanzados de usuario"
---

Aquí va el cuerpo del proyecto utilizando formato Markdown estándar. 
Puedes usar títulos, listas y texto enriquecido.

## Desarrollo del Proyecto

Detalles técnicos sobre el desarrollo...

## Resultados Obtenidos

- Punto de logro 1
- Punto de logro 2
```

---

## 3. Detalle de Campos del Frontmatter

| Campo | Tipo | ¿Obligatorio? | Descripción |
| :--- | :--- | :--- | :--- |
| `title` | `string` | Sí | Nombre del proyecto que se mostrará en títulos y cabeceras. |
| `description` | `string` | Sí | Descripción simple utilizada como subtítulo y en el listado de tarjetas. |
| `technologies` | `array[string]` | Sí | Lista de identificadores de tecnologías (deben coincidir con las claves registradas en `SkillSelector.jsx` para mostrar los iconos correctamente). Claves soportadas: `html`, `css`, `js`, `node`, `react`, `nextjs`, `wordpress`, `bash`, `sql`, `git`, `figma`, `mysql`, `mongodb`. |
| `featuredImage` | `string` | Sí | Ruta relativa de la imagen de portada (almacenada en la carpeta `/public`). Recomendado: `/project-images/[slug]/featured.png`. |
| `exerpt` | `string` | Sí | *Nota sobre la ortografía:* Se escribe exactamente **`exerpt`** (sin la "c") debido a la configuración de lectura. Permite un extracto textual multilínea. |
| `images` | `array[object]` | Sí | Listado de capturas de pantalla para el visor de la galería de imágenes (`ImageGallery`). Cada objeto debe contener `url` (ruta en public), `alt` (texto descriptivo para accesibilidad) y `description` (pie de imagen en el visor ampliado). |

---

## 4. Ubicación de Recursos Estáticos (Assets)

Para que las imágenes y los iconos carguen correctamente, deben estar ubicados en la carpeta [public/](../public/):

- **Imágenes del Proyecto:** Crea una carpeta con el mismo slug del archivo en `public/project-images/[projectSlug]/`.
  - Coloca allí la imagen destacada `featured.png` (ancho recomendado: 1200px, alto: 660px).
  - Agrega las capturas consecutivas: `1.png`, `2.png`, etc.
- **Iconos Tecnológicos:** Si añades una nueva tecnología al arreglo `technologies`, asegúrate de:
  - Agregar el icono correspondiente en formato SVG dentro de `public/icons/[tech-name].svg`.
  - Añadir la clave correspondiente y el nombre formal en el mapeo `techList` dentro de `SkillSelector.jsx`.
  - Agregar la imagen de previsualización en `public/tech-images/[tech-name].png`.
