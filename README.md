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

---

## 8 — Contando TODOs (cursor e interacción)
 - Commit: "8 Contando TODOs"
 - Fecha: 2025-10-20
 - Archivos modificados: `src/App.js`, `src/TodoItem.js`, `src/TodoSearch.js`, `src/CreateTodoButton.js`, `src/TodoList.css`, `src/TodoItem.js`
 - Resumen: En este vídeo se mostró cómo mejorar la interacción de la TODO Machine agregando comportamiento al cursor y al clic en los controles de cada tarea. Se implementó la posibilidad de completar y eliminar tareas, y se actualizó el contador de tareas completadas para que refleje el estado real.

Explicación didáctica (breve):
- Cursor interactivo: se aplicó `style={{ cursor: 'pointer' }}` a los iconos interactivos (el check y la X) para que el usuario note que puede hacer clic. Esto es una mejora de UX sencilla pero efectiva.
- Comportamiento: el componente `TodoItem` ahora recibe `onToggle` y `onDelete` desde `App`. Al hacer click en el check se invoca `onToggle` para alternar el flag `completed` del todo; al hacer click en la X se invoca `onDelete` para eliminar el todo del arreglo en el estado del padre.
- Conteo de TODOs: `App` mantiene `todos` en su estado con `useState(defaultTodos)` y calcula el número de completados con `const completedTodos = todos.filter(t => t.completed).length`. `TodoCounter` muestra `completedTodos` y `totalTodos`.

Cambios técnicos realizados:
- `src/App.js`: los todos se guardan en estado (`useState`), se añadieron las funciones `toggleTodo` y `deleteTodo`, y el render actualiza `TodoCounter` en base al estado real.
- `src/TodoItem.js`: se añadieron handlers `onClick` en el check y en la X y `cursor: pointer` para indicar interactividad.
- `src/TodoSearch.js` y `src/CreateTodoButton.js`: se ajustaron para integrarse con la nueva estructura de estado (el botón + puede ser extendido para crear nuevos todos).

Consejo:
- Para listas dinámicas en producción es preferible dar a cada todo un `id` único en lugar de usar el índice como `key`, para evitar problemas de reconciliación cuando la lista se modifica o reordena.

---

## 9 — Buscador con lupa y filtro
 - Commit: "9 Buscador con lupa y filtro"
 - Fecha: 2025-10-21
 - Archivos modificados: `src/TodoSearch.js`, `src/TodoSearch.css`, `src/App.js`
 - Resumen: En este video se implementó un buscador centrado y estilizado tipo Google, con una lupa SVG dentro del input. El buscador filtra la lista de tareas en tiempo real según el texto ingresado, mostrando solo las coincidencias. Se mejoró la experiencia visual y de usuario.

Explicación didáctica (breve):
- El input de búsqueda se centra en la página y se le da un estilo moderno: fondo blanco, bordes redondeados, sombra suave y padding generoso.
- Se añadió una lupa SVG dentro del input, alineada a la izquierda, para reforzar el aspecto de buscador profesional.
- El filtro se realiza en tiempo real: al escribir, la lista de tareas se actualiza mostrando solo aquellas cuyo texto incluye el valor buscado (ignorando mayúsculas/minúsculas).
- El componente `TodoSearch` maneja el input y los estilos; el filtrado se realiza en `App.js` usando `searchedTodos`.

Cambios técnicos realizados:
- `src/TodoSearch.js`: se añadió la estructura para la lupa y el input, y se ajustó el layout.
- `src/TodoSearch.css`: se agregaron estilos para centrar el input, darle aspecto Google y posicionar la lupa SVG.
- `src/App.js`: se implementó el filtrado de tareas usando el valor de búsqueda.

Beneficio:
- UX más clara y atractiva, búsqueda instantánea y visual profesional.

Captura de pantalla:
![Buscador centrado con lupa y filtro activo](./captura-buscador.png)
Así se ve el buscador centrado, con lupa y filtrando tareas en tiempo real.

---

## 10 — Completando y eliminando TODOs
 - Commit: "10 Completando y eliminando TODOs"
 - Fecha: 2025-10-27
 - Archivos modificados: `src/App.js`, `src/TodoItem.js`, `src/TodoList.js`
 - Resumen: En esta entrada se añadió la funcionalidad para completar (marcar/desmarcar) y eliminar tareas desde la interfaz. Se actualizó la lógica para mantener el array de `todos` en el estado del componente `App` y se pasaron callbacks a `TodoItem` para que el usuario pueda interactuar con cada tarea.

Explicación didáctica (breve):
- Estado de la lista: `App` mantiene `todos` en `useState(defaultTodos)` para poder modificar la lista en respuesta a eventos de usuario.
- Completar tareas: `TodoItem` llama a `props.onComplete` al hacer click en el check; `App` implementa `toggleTodo(index)` que alterna `completed` en el todo correspondiente.
- Eliminar tareas: `TodoItem` llama a `props.onDelete` al hacer click en la X; `App` implementa `deleteTodo(index)` que elimina el elemento del array.
- Conteo actualizado: `TodoCounter` muestra el número de tareas completadas calculado a partir del estado (`todos.filter(t => t.completed).length`), por lo que se actualiza automáticamente cuando se completan/eliminan tareas.

Cambios técnicos realizados:
- `src/App.js`: se añadieron `toggleTodo` y `deleteTodo` (basados en índice) y el render pasó `onComplete` y `onDelete` a cada `TodoItem`.
- `src/TodoItem.js`: se añadieron handlers que llaman a `props.onComplete` y `props.onDelete` y se aplicó `cursor: pointer` para mejorar la UX.
- `src/TodoList.js`: se conserva la estructura de la lista; el filtrado y mapeo se hace desde `App`.

Notas:
- Actualmente la app usa índices como claves para los elementos (`key={index}`) para mantener compatibilidad con el material del curso; en aplicaciones reales se recomienda usar ids únicos.

---

## 11 — Iconos en React: librerías y SVG
 - Commit: "11 Iconos en React: librerías y SVG"
 - Fecha: 2025-10-27
 - Archivos modificados: `package.json`, `src/TodoItem.js`, `src/TodoSearch.js`, `src/CreateTodoButton.js`, `src/TodoSearch.css`
 - Resumen: En este vídeo se explicó cómo trabajar con iconos en React: opciones (usar SVG inline, caracteres, o librerías como `react-icons`) y se modernizó la UI del proyecto integrando `react-icons` para tener iconos consistentes y accesibles.

Explicación didáctica (breve):
- Opciones para iconos en React:
  - SVG inline: permite control total del vector y estilos, ideal para iconos únicos o personalizados.
  - Caracteres/texto (✔, ○, X): solución simple sin dependencias, pero limitada en estilo y consistencia.
  - Librerías (ej. `react-icons`, Font Awesome): empaquetan colecciones completas, fáciles de usar y cambiar tamaño/color desde React.
- Por qué usamos `react-icons` en esta práctica: es ligera, permite importar solo los iconos que necesitás, mantiene la app sin dependencias pesadas y facilita la accesibilidad (atributos aria y titles).

Qué se implementó en el proyecto:
- Instalación: `npm install react-icons` y se agregó como dependencia en `package.json`.
- `src/TodoItem.js`: reemplazamos los caracteres por iconos (`FiCircle`, `FiCheckCircle`, `FiTrash2`) y usamos botones accesibles con `aria-label` y `title`.
- `src/TodoSearch.js`: reemplazamos el SVG inline por `FiSearch` de `react-icons` para consistencia.
- `src/CreateTodoButton.js`: uso de `FiPlus` para el botón de crear tareas.

Fragmento de ejemplo (uso de react-icons en un componente):

```javascript
import { FiSearch } from 'react-icons/fi';

function Search() {
  return <FiSearch size={18} color="#888" />;
}
```

Notas y recomendaciones:
- Mantener los iconos en componentes/archivos separados si se reutilizan mucho.
- Para producción, optimizar importaciones (importar iconos puntuales) y preferir IDs únicos para listas que cambian dinámicamente.





