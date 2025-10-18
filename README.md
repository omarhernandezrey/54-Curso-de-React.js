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

Remoto: git@github.com:omarhernandezrey/54-Curso-de-React.js.git

Mantén las entradas cortas: 3–5 líneas por vídeo. Esta entrada ya está completa para el vídeo 1.

## 2 — ¿Qué es un componente? (documentación breve)
- Commit: "2 ¿Qué es un componente?"
- Fecha: 2025-10-06
- Archivos mencionados: `src/App.js` (contiene ejemplos: `TodoItem`, `Omar`), `src/App.css`, `src/index.js`
- Explicación (breve y completa):
  Un componente en React es una función o clase que recibe entradas (props) y devuelve elementos React (JSX) para renderizar UI. Los componentes permiten dividir la interfaz en piezas reutilizables y manejar su propio estado y eventos. En `src/App.js` se muestran componentes simples: `TodoItem` (lista de tareas) y `Omar` (sección con nombre y rol). Estos sirven para entender la creación básica de componentes, el retorno de JSX y cómo componer componentes dentro de `App`.

---

## 3 — Componentes de TODO Machine
- Commit: "3 Componentes de TODO Machine"
- Fecha: 2025-10-07
- Archivos: `src/TodoList.js`, `src/TodoItem.js`, `src/TodoCounter.js`
- Resumen: Implementación y explicación de los componentes que forman la TODO Machine: contador, lista y elementos (TodoCounter, TodoList, TodoItem). Entrada breve y directa.

---

## 4 — ¿Cómo se comunican los componentes? Props y atributos
- Commit: "4 ¿Cómo se comunican los componentes? Props y atributos"
- Fecha: 2025-10-07
- Archivos: `src/TodoItem.js`, `src/TodoList.js`, `src/App.js`
- Resumen: Explicación breve sobre cómo los componentes se comunican mediante props y atributos: pasar datos desde padre a hijo a través de props, uso de atributos JSX, y ejemplo práctico con `TodoItem` recibiendo texto o estado desde el componente padre.

---

## 5 — Estilos CSS en React

## 6 — Eventos en React: onClick, onChange
 - Commit: "6 Eventos en React: onClick, onChange"
 - Fecha: 2025-10-08
 - Archivos: `src/TodoSearch.js`, `src/CreateTodoButton.js`, `README.md`
 - Resumen: Se demostraron los eventos básicos en React. En `TodoSearch.js` se captura el evento `onChange` del input y, además de los logs para fines didácticos, ahora se invoca una prop opcional `onSearchChange(value)` si el componente padre la proporciona. En `CreateTodoButton.js` el evento `onClick` del botón hace logging y, si se pasa desde el padre, llama a `props.onClick(event)` o alternativamente a `props.onCreateTodo()` — esto mantiene el cambio no invasivo y compatible con la estructura existente.

---

## 7 — ¿Qué es el estado?
 - Commit: "7 ¿Qué es el estado?"
 - Fecha: 2025-10-18
 - Archivos modificados: `src/TodoSearch.js`
 - Resumen: Esta entrada muestra qué es el estado en React y documenta la modificación práctica en `TodoSearch.js`. El componente ahora mantiene un estado interno `searchValue` usando `React.useState` y vincula el input al estado con `value` y `onChange`. Además se añadió un `console.log` para visualizar los cambios en tiempo real mientras se escribe.
 - Explicación breve: El estado (state) en React es un valor que un componente puede mantener entre renders. Cuando se actualiza el estado con la función retornada por `useState`, React vuelve a renderizar el componente para reflejar los nuevos datos. En formularios, usar un input controlado (value + onChange) es la forma recomendada para sincronizar UI y estado.

Notas:
 - El cambio en `src/TodoSearch.js` fue realizado para que coincida con el ejemplo del material del curso (código literal). Si se requiere, se puede elevar el estado al componente padre para que otras partes de la aplicación (p. ej. la lista de tareas) puedan consumir el valor del search.


