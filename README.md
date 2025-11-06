# 54 - Curso de React.js (Platzi)

Breve: código y registro del curso "Introducción a React.js". Aquí se documenta cada vídeo en este mismo archivo (entrada corta por vídeo).

## Sobre el curso (breve)
- Curso: "Introducción a React.js" (Platzi)
- Objetivo: aprender a crear interfaces con React, dividir la UI en componentes reutilizables, manejar estado, eventos y consumo de APIs.
- Metodología: ejercicios prácticos por vídeo, con commits que reflejan cada paso (titulado con el nombre exacto del vídeo).

---

## 1 — ¿Qué necesitas para aprender React.js?
- Commit: "1 ¿Qué necesitas para aprender React.js?"
- Fecha: 2025-10-06
- Archivos: `README.md`, `package.json`, `src/`, `public/`
- Resumen: Inicialización del proyecto con Create React App; estructura base lista para empezar a crear componentes (App, index, estilos y recursos).

---

Cómo ejecutar (rápido):
1. npm install
2. npm start (http://localhost:3000)

# 54 - Curso de React.js (resumen implementado)

Este README describe, por lección (1..27), qué está implementado realmente en este repositorio. El objetivo es tener una referencia clara y sin duplicados para el material del curso y cómo quedó aplicado en código.

Cómo correr el proyecto
- npm install
- npm start

Estructura relevante (resumen):
- public/
  - index.html (contiene div#root y div#modal)
- src/
  - App/ (AppUI.js, index.js)
  - TodoContext/ (index.js, useLocalStorage.js)
  - TodoList/, TodoItem/, TodoSearch/, TodoForm/, TodoCounter/, CreateTodoButton/, TodoIcon/, Modal/, TodosLoading/, TodosError/, EmptyTodos/

Indice y descripción por lección (1..27)

1) ¿Qué necesitas para aprender React.js?
- Qué hay en el repo: proyecto inicializado (Create React App). Archivos clave: `package.json`, `public/index.html`, `src/index.js`.

2) ¿Qué es un componente?
- Implementación: múltiples componentes funcionales (por ejemplo `App`, `AppUI`, `TodoItem`, `TodoList`). Ver `src/App`, `src/TodoItem`, `src/TodoList`.

3) Componentes de TODO Machine
- Implementación: `TodoCounter` (`src/TodoCounter`), `TodoList` (`src/TodoList`), `TodoItem` (`src/TodoItem`). Cada componente tiene su CSS (`*.css`).

4) ¿Cómo se comunican los componentes? Props y atributos
- Implementación: los callbacks y datos se pasan por props y por Context. Ejemplos: `TodoItem` recibe `text`, `completed`, `onComplete`, `onDelete` desde `AppUI`/`TodoContext`.

5) Estilos CSS en React
- Implementación: estilos por componente (archivos `*.css` en cada carpeta). Ver `src/TodoItem/TodoItem.css`, `src/TodoForm/TodoForm.css`, `src/Modal/Modal.css`.

6) Eventos en React: onClick, onChange
- Implementación: `onClick` en botones (check, delete, +), `onChange` en `TodoSearch` y `textarea` del `TodoForm`.

7) ¿Qué es el estado?
- Implementación: `useState` usado en context y en componentes locales (por ejemplo `searchValue`, `openModal`, `newTodoValue` en `TodoForm`).

8) Contando TODOs
- Implementación: `TodoContext` calcula `totalTodos` y `completedTodos`; `TodoCounter` los muestra.

9) Buscando TODOs
- Implementación: `TodoSearch` actualiza `searchValue`; `TodoContext` expone `searchedTodos` filtrados y `AppUI` renderiza la lista filtrada.

10) Completando y eliminando TODOs
- Implementación: `completeTodo` y `deleteTodo` en `TodoContext` (consumen `saveTodos` del hook) y son llamados desde `TodoItem`.

11) Iconos en React: librerías y SVG
- Implementación: `src/TodoIcon/` contiene componentes `TodoIcon`, `CompleteIcon`, `DeleteIcon` y SVGs localmente (`*.svg`). Los iconos se envuelven en botones accesibles.

12) Iconos con colores dinámicos
- Implementación: CSS usa `currentColor` para que los SVG hereden el color del contenedor; existen clases helper (`Icon-check--active`, `Icon-delete--danger`) y reglas hover/preview en `TodoItem.css`.

13) Local Storage con React.js
- Implementación: `src/TodoContext/useLocalStorage.js` — hook que simula carga, lee `TODOS_V1`, devuelve `item`, `saveItem`, `loading`, `error`.

14) Custom Hooks
- Implementación: `useLocalStorage` es un custom hook que centraliza la persistencia y el estado de carga/error.

15) Organización de archivos y carpetas
- Implementación: componente por carpeta; README sugiere Feature-First como mejora, pero el repo mantiene la estructura por componente.

16) Feature-First Directories en React
- Implementación: documentado en README como recomendación; no se hizo reorganización automática.

17) Tips para naming y abstracción de componentes React
- Implementación: convenciones aplicadas (nombres descriptivos, carpetas por componente). Ver `src/`.

18) ¿Qué son los efectos en React?
- Implementación: `useEffect` usado dentro de `useLocalStorage` para simular carga y sincronizar con localStorage.

19) Estados de carga y error
- Implementación: `TodosLoading`, `TodosError`, `EmptyTodos` y uso condicional en `AppUI` (render por `loading`, `error` y lista vacía).

20) Actualizando estados desde useEffect
- Implementación: patrón documentado y usado por `useLocalStorage` para inicializar `todos`.

21) Reto: loading skeletons
- Estado actual: propuesto en README y explicado; puede implementarse como componente adicional (`src/Skeleton/`), actualmente no existe un skeleton component completo en el repo.

22) ¿Qué es React Context?
- Implementación: `src/TodoContext/index.js` exporta `TodoContext` y `TodoProvider` que envuelven `App` (`src/App/index.js`) y exponen estado y acciones.

23) useContext
- Implementación: consumo de `TodoContext` en `AppUI`, `TodoForm`, `TodoCounter`, `TodoItem`, etc. para evitar prop-drilling.

24) ¿Qué son los React Portals?
- Implementación: `src/Modal/index.js` usa `ReactDOM.createPortal` para montar contenido en `public/index.html` (`div#modal`).

25) Reto: estados para abrir y cerrar un modal
- Implementación: `openModal` y `setOpenModal` en `TodoContext`; `CreateTodoButton` alterna el estado; `Modal` maneja `onClose` y cierre por fondo/X.

26) Maquetando formularios en React
- Implementación: `src/TodoForm/index.js` y `src/TodoForm/TodoForm.css` — formulario con `textarea`, validación mínima (no vacíos recomendado), botones Cancelar/Añadir, integrado con `addTodo`.

27) Crear TODOs: React Context dentro de React Portals
- Implementación: `TodoForm` (dentro de portal) llama `addTodo` de `TodoContext` y cierra el modal; demuestra que Context funciona dentro del Portal.

Tareas sugeridas / mejoras (opcional)
- Añadir IDs únicos a los todos (usar `Date.now()` o `uuid`).
- Extraer `useLocalStorage` a `src/hooks/` y añadir tests unitarios.
- Implementar skeletons reales (`src/Skeleton/`), añadir trap-focus en el modal, y mejorar accesibilidad del formulario.



