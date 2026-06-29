# Portafolio Profesional de José Manuel García Díaz

Este repositorio contiene el código fuente del portafolio web personal de José Manuel García Díaz, Ingeniero en Informática y Desarrollador Full Stack. El sitio web está diseñado con un enfoque moderno, rápido y modular utilizando **Next.js** y **React**.

---

## 🚀 Inicio Rápido

### Requisitos Previos
* Node.js v18.0 o superior
* Administrador de paquetes `pnpm` (recomendado) o `npm`

### Instalación
1. Clona este repositorio en tu máquina local.
2. Instala las dependencias del proyecto:
   ```bash
   pnpm install
   ```

3. Crea un archivo `.env.local` en la raíz del proyecto tomando como referencia el archivo `.env.example` y rellena las variables de configuración de Resend:
   ```bash
   cp .env.example .env.local
   ```

4. Inicia el servidor de desarrollo:
   ```bash
   pnpm dev
   ```

5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para visualizar el sitio.

---

## 🛠️ Tecnologías y Dependencias

El portafolio está construido sobre las siguientes tecnologías principales:

* **Framework:** [Next.js (v16.2.9)](https://nextjs.org/) utilizando la estructura de App Router para un rendimiento y SEO optimizados.
* **Biblioteca UI:** [React (v19.2.7)](https://react.dev/) y React DOM.
* **Gestión de Contenido:** [next-mdx-remote (v6.0.0)](https://github.com/hashicorp/next-mdx-remote) para cargar y renderizar archivos de proyectos en formato `.mdx` dinámicamente.
* **Envío de Correos:** [SDK de Resend (v6.15.0)](https://resend.com) para integrarse con la API de contacto.
* **Herramientas de Desarrollo:**
  * ESLint (v9.39.4) con la configuración de Next.js (`eslint-config-next`).
  * Prettier (v3.8.5) para el formateo de código automatizado.
  * pnpm como package manager.

---

## 📦 Scripts Disponibles

En el archivo `package.json` se definen los siguientes scripts:

* `pnpm dev`: Arranca el servidor de desarrollo local con recarga en tiempo real.
* `pnpm build`: Compila la aplicación Next.js y genera la compilación de producción optimizada.
* `pnpm start`: Inicia el servidor de producción de Next.js (requiere haber ejecutado `build` antes).
* `pnpm lint`: Ejecuta el análisis de calidad de código con ESLint en todo el proyecto.

---

## ⚙️ Configuración (Variables de Entorno)

Para habilitar el envío de correos desde el formulario de contacto, crea un archivo `.env.local` en la raíz (puedes basarte en `.env.example`) y configura las siguientes variables de **Resend**:

* `RESEND_API_KEY`: Clave de la API provista por Resend.
* `SENDER_CONTACT_MAIL`: Correo remitente (ej. `onboarding@resend.dev` o uno asociado a un dominio verificado en Resend).
* `RECIPIENT_CONTACT_MAIL`: Correo de destino donde recibirás los mensajes.

---

## ✉️ API de Contacto

El formulario envía peticiones a una API Route de Next.js:

* **Endpoint:** `/api/send` (`POST`)
* **Controlador:** [route.js](../src/app/api/send/route.js)
* **Payload:** Objeto JSON con `name`, `email` y `message`.
* **Respuestas:** `200 OK` (retorna el `id` del correo de Resend) o `500 Internal Server Error` (detalles del error).
* **Plantilla de Correo:** 
  * *Activa:* Plantillas preconfiguradas en el panel de Resend (`portfolio-contact-email`).
  * *Alternativa:* Componente React Email en [EmailTemplate.jsx](../src/utils/EmailTemplate.jsx) (comentado en el controlador).


---

## 🏗️ Arquitectura del Proyecto

El portafolio está desarrollado sobre **Next.js** (App Router) y **React**, combinando componentes de servidor (RSC) y cliente (RCC).

### Estructura de Directorios Principal
* `src/app/`: Define las rutas de la aplicación (páginas y endpoints de API).
* `src/components/`: Componentes UI reutilizables e interactivos.
* `src/sections/`: Secciones estructuradas para las vistas (principalmente de la Landing Page).
* `src/projects-entries/`: Archivos `.mdx` con la información y contenido de los proyectos.
* `public/`: Assets estáticos (iconos, imágenes de proyectos, etc.).

### Servidor vs. Cliente (App Router)
* **Server Components (SC):** Por defecto, la mayoría de páginas (`/`, `/projects`, `/cv`) se ejecutan en el servidor para optimizar el rendimiento y cargar datos directamente del sistema de archivos (como los archivos MDX).
* **Client Components (CC):** Utilizan la directiva `'use client'` para manejar interactividad del navegador (como el terminal interactivo `Terminal.jsx`, `SkillSelector.jsx` o el formulario `Contact.jsx`).

### Mapa de Rutas
| Ruta | Archivo | Tipo | Descripción |
| :--- | :--- | :--- | :--- |
| `/` | `src/app/page.jsx` | Server Page | Página de inicio (Landing Page) que compone todas las secciones. |
| `/cv` | `src/app/cv/page.jsx` | Server Page | Vista completa del Currículum. |
| `/projects` | `src/app/projects/page.jsx` | Server Page | Listado total de proyectos desde archivos MDX. |
| `/projects/[projectSlug]` | `src/app/projects/[projectSlug]/page.jsx` | Server Page (Dina.) | Detalle individual del proyecto compilando dinámicamente MDX. |
| `/contact` | `src/app/contact/page.jsx` | Server Page | Página de contacto dedicada. |
| `/api/send` | `src/app/api/send/route.js` | API Route (POST) | Endpoint para envío de correos mediante Resend. |

---

## 📂 Estructura del Código y Guías Técnicas

Para facilitar el desarrollo y mantenimiento del proyecto, la documentación se ha modularizado y dividido en la carpeta `docs/`. Haz clic en cualquiera de los enlaces a continuación para ver las especificaciones técnicas completas:

1. 🧩 [Componentes Reutilizables (docs/components.md)](docs/components.md)
   * Propiedades (props), estados, estilos encapsulados y lógica interactiva de cada componente UI (`Button`, `Header`, `Footer`, `ProjectCard`, `SkillSelector`, `Terminal` e `ImageGallery`).
   
2. 📝 [Guía de Proyectos MDX (docs/projects-guide.md)](docs/projects-guide.md)
   * Cómo añadir nuevos proyectos editando archivos `.mdx`.
   * Campos requeridos en el metadato Frontmatter (`title`, `technologies`, `featuredImage`, `exerpt`, `images`, etc.) y rutas de assets.

3. 🎨 [Estilo de Código y Buenas Prácticas (docs/code-guidelines.md)](docs/code-guidelines.md)
   * Configuración de Prettier y ESLint.
   * Convención de nombres de archivos, módulos CSS y uso de alias `@/*` en importaciones.

---

## ⚠️ Detalles Conocidos / Mejoras Pendientes

Durante la auditoría del código, se han identificado las siguientes observaciones que pueden requerir atención o refactorización:

1. **Sección de Experiencia Desactivada:** En el componente [Experience.jsx](src/sections/Experience.jsx#L8) hay una validación temprana `if (true) return <></>` que oculta temporalmente la sección "Experiencia destacada" y su Terminal interactivo en la página principal.
2. **Typo en Cabecera:** En el menú del componente [Header.jsx](src/components/Header/Header.jsx#L38) el texto del enlace del currículum contiene un error tipográfico (`#Curriculim` en lugar de `#Curriculum`).
3. **Sección Curriculum con Título Erróneo:** En el componente [Resume.jsx](src/sections/Resume.jsx#L129), la sección de experiencia laboral tiene como cabecera `<h3>Educación</h3>` en lugar de `<h3>Experiencia</h3>` (a pesar de cargar el icono `/icons/experience.svg`).
4. ~~**Validación de Email en Formulario:** En [Contact.jsx](src/sections/Contact.jsx#L113) el campo para introducir el email tiene el atributo `type="text"`. Cambiarlo a `type="email"` mejoraría la validación nativa del navegador.~~ *(Solucionado)*
5. **Falta de Feedback en Formulario:** El formulario de contacto limpia los campos tras el envío, pero no muestra un mensaje de éxito/error al usuario en pantalla.
