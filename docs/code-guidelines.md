# Guía de Estilo y Buenas Prácticas de Código

Este documento describe los estándares de desarrollo, reglas de estilo y herramientas de formateo configuradas en el proyecto para asegurar la consistencia del código fuente.

---

## 1. Configuración de Formateo (Prettier)

El formateo del código está automatizado mediante **Prettier**. Las reglas de formato se encuentran en el archivo [.prettierrc](../.prettierrc):

* **Comillas Simples:** Habilitadas para strings en Javascript (`"singleQuote": true`).
* **Comillas en JSX:** Se usan comillas dobles para los atributos de JSX (`"jsxSingleQuote": false`).
* **Punto y coma:** Obligatorio al final de cada declaración (`"semi": true`).
* **Sangría (Tabulación):** Ancho de tabulador configurado en **2 espacios** (`"tabWidth": 2`).
* **Comas Finales:** Se aplican comas finales donde sea válido en ES5 (objetos, arreglos, etc.) (`"trailingComma": "es5"`).
* **Paréntesis en funciones flecha:** Siempre se colocan paréntesis en los argumentos de funciones flecha (`"arrowParens": "always"`).
* **Longitud de línea:** Límite máximo de **80 caracteres** por línea (`"printWidth": 80`).
* **Fin de línea:** Retorno de línea Unix (`LF`) obligatorio (`"endOfLine": "lf"`).
* **Espacios en llaves:** Espacio entre llaves en importaciones/declaraciones (`"bracketSpacing": true`).

---

## 2. Configuración de Calidad de Código (ESLint)

El análisis estático de código se gestiona a través de **ESLint**. La configuración Flat Config se encuentra en [eslint.config.mjs](../eslint.config.mjs):

- Extiende el conjunto de reglas recomendadas para optimizar el rendimiento web de Next.js: `next/core-web-vitals`.
- Integra `eslint-config-prettier` para desactivar cualquier regla de ESLint que entre en conflicto directo con las reglas de formato de Prettier.

---

## 3. Metodología de Estilos (CSS Vanilla + CSS Modules)

El portafolio no utiliza frameworks CSS pesados (como Tailwind o Bootstrap). En su lugar, se apoya en **Vanilla CSS** nativo y **CSS Modules** para mantener los estilos limpios y modulares.

### CSS Modules (`*.module.css`)
Cada componente o sección tiene su propio archivo de estilos encapsulado.
- Evita colisiones de nombres globales en los selectores.
- Se importa en los componentes JSX como un objeto `styles` (ej. `import styles from './Component.module.css'`).
- Los nombres de clases dentro del CSS Module se acceden como propiedades (ej. `className={styles.container}`).

### Variables Globales
Los tokens de diseño (colores principales, fuentes, backgrounds) están centralizados en [:root de globals.css](../src/app/globals.css#L1):

```css
:root {
  --c-primary: #78dda0;      /* Verde principal */
  --c-error: #e06b74;        /* Rojo de error */
  --c-white: #ffffff;        /* Blanco */
  --c-gray: #abb2bf;         /* Gris secundario para textos */
  --c-yellow: #e5c07a;       /* Amarillo secundario */
  --c-background: #1e1f23;   /* Fondo oscuro principal */
}
```

---

## 4. Convenciones de Nombres y Estructura

* **Componentes Generales:** Ubicados en `src/components/[NombreComponente]/`.
  * El componente principal debe llamarse `[NombreComponente].jsx` (PascalCase).
  * Los estilos del componente deben llamarse `[NombreComponente].module.css` (PascalCase).
* **Secciones de Página:** Ubicadas en `src/sections/`.
  * Se declaran con PascalCase, por ejemplo: `Hero.jsx`, `Projects.jsx`.
  * Los estilos correspondientes se declaran en el mismo nivel: `Hero.module.css`, `Projects.module.css`.
* **Rutas / Páginas:** Carpetas en minúsculas bajo `src/app/` siguiendo la convención de Next.js App Router (ej. `projects/[projectSlug]/page.jsx`).

---

## 5. Prácticas de Desarrollo en React

* **Server vs Client Components:**
  * Siempre prefiere componentes de servidor (Server Components) por defecto.
  * Añade la directiva `'use client'` únicamente si necesitas hooks React (`useState`, `useEffect`, `useRef`, `useContext`) o manejadores de eventos interactivos (`onClick`, `onSubmit`).
* **Imports Relativos con Alias:**
  * Se utiliza el alias `@/` configurado en `jsconfig.json` para evitar rutas relativas complejas como `../../`.
  * **Correcto:** `import Button from '@/components/Button/Button';`
  * **Evitar:** `import Button from '../../../components/Button/Button';`
