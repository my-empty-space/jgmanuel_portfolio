# Componentes Reutilizables

Este documento describe la interfaz, el estado y el comportamiento de los componentes reutilizables alojados en `src/components/`.

---

## 1. Button

Ubicación: [Button.jsx](../src/components/Button/Button.jsx) | [Button.module.css](../src/components/Button/Button.module.css)

Componentes basados en el componente `<Link>` de Next.js. El archivo exporta dos variantes de botones con estilos visuales diferenciados:

### `Button` (Exportación por defecto)
Botón de acción principal con borde verde, texto en color principal y hover con fondo completo.
- **Props:**
  - `href` (string, obligatorio): Enlace de redirección.
  - `children` (ReactNode): Contenido textual o elemento dentro del botón.

### `Button2` (Exportación nombrada)
Botón secundario más compacto y minimalista, utilizado principalmente en las tarjetas de proyectos (`ProjectCard`).
- **Props:**
  - `href` (string, obligatorio): Enlace de redirección.
  - `children` (ReactNode): Contenido/Texto del botón.

---

## 2. Header

Ubicación: [Header.jsx](../src/components/Header/Header.jsx) | [Header.module.css](../src/components/Header/Header.module.css)

Componente de cliente (`'use client'`) que representa la barra de navegación superior.
- **Características:**
  - Detecta la página activa mediante el hook `usePathname` de Next.js para aplicar la clase active (`styles.linkActive`).
  - Implementa un menú hamburguesa móvil nativo utilizando un `<input type="checkbox" id="a" />` oculto y CSS (`:checked`).
  - *Nota:* Contiene el error ortográfico `#Curriculim` en el texto del enlace a `/cv` (Línea 38).

---

## 3. Footer

Ubicación: [Footer.jsx](../src/components/Footer/Footer.jsx) | [Footer.module.css](../src/components/Footer/Footer.module.css)

Componente estático que muestra la marca personal, el año de creación y enlaces directos a las redes sociales (GitHub y LinkedIn).

---

## 4. ProjectCard

Ubicación: [ProjectCard.jsx](../src/components/ProjectCard/ProjectCard.jsx) | [ProjectCard.module.css](../src/components/ProjectCard/ProjectCard.module.css)

Tarjeta de visualización preliminar para los proyectos individuales.
- **Props:**
  - `children` (ReactNode): Descripción corta del proyecto (se renderiza en un párrafo).
  - `title` (string, por defecto `'Titulo'`): Título del proyecto.
  - `imgUrl` (string, por defecto `'/project1.webp'`): URL de la imagen principal.
  - `technologies` (array de strings, por defecto `[]`): Lista de nombres clave de tecnologías.
  - `projectUrl` (string): Enlace a la página de detalle del proyecto en el portafolio.
  - `githubUrl` (string, opcional): Enlace al repositorio de GitHub (si se suministra, renderiza un icono SVG con enlace).

---

## 5. SkillSelector

Ubicación: [SkillSelector.jsx](../src/components/SkillSelector/SkillSelector.jsx) | [SkillSelector.module.css](../src/components/SkillSelector/SkillSelector.module.css)

Componente interactivo de cliente (`'use client'`) que permite ver las habilidades técnicas y muestra una imagen representativa para la seleccionada.
- **Props:**
  - `techs` (array de strings, por defecto `[]`): Lista de identificadores de tecnologías a mostrar en la sección.
- **Lógica Interna:**
  - Utiliza un `Map` llamado `techList` para asociar cada identificador corto con su nombre completo legible (ej. `'js' -> 'JavaScript'`).
  - Mantiene el estado `imgUrl` iniciado en `/tech-images/${techs[0]}.png`. Al hacer clic en un elemento de la lista, actualiza el estado para cambiar la imagen grande y destacar visualmente el item seleccionado.
  - Valida si `techs` está vacío y muestra un mensaje de error estilizado en rojo con la lista de tecnologías soportadas en el mapa.

---

## 6. Terminal

Ubicación: [Terminal.jsx](../src/components/Terminal/Terminal.jsx) | [Terminal.module.css](../src/components/Terminal/Terminal.module.css)

Componente interactivo de cliente (`'use client'`) que simula una terminal de comandos clásica (interfaz Unix) con botones de navegación tipo Slider vertical.
- **Lógica de Slider:**
  - Mantiene dos estados principales: `contentTranslate` (desplazamiento vertical en píxeles de la lista interna) y `currentItem` (índice del elemento activo).
  - Al hacer clic en **Next** u **Prev**, calcula el desplazamiento basándose en el `offsetHeight` (altura física) del elemento actual de forma dinámica, sumándole un offset constante de 400 píxeles.
  - *Nota:* Actualmente, los elementos del terminal (Twins Concrete y Animall) se encuentran codificados de forma estática en el JSX.

---

## 7. ImageGallery

Ubicación: [ImageGallery.jsx](../src/components/ImageGallery/ImageGallery.jsx) | [ImageGallery.module.css](../src/components/ImageGallery/ImageGallery.module.css)

Componente interactivo de cliente (`'use client'`) que renderiza una galería de capturas de pantalla para las páginas de detalles de los proyectos.
- **Props:**
  - `images` (array de objetos): Lista de objetos con la estructura `{ url, alt, description }`.
- **Lógica Interna:**
  - Al hacer clic en cualquiera de las imágenes de la grilla, se asigna el objeto seleccionado al estado `selectedImage` y se abre el elemento HTML nativo `<dialog>` mediante una referencia con el método `dialogRef.current.showModal()`.
  - El modal se cierra al hacer clic en el botón de cerrar (`<form method="dialog">`). Utiliza el atributo HTML `closedby="any"` para cerrar de manera nativa en navegadores modernos al hacer clic en el backdrop.
