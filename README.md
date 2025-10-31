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

## 12 — Iconos con colores dinámicos
- Commit: "12 Iconos con colores dinámicos"
- Fecha: 2025-10-30
- Archivos modificados:
  - `src/TodoItem.js` (uso de `IconButton` y manejo accesible de botones)
  - `src/IconButton.js` (nuevo componente reutilizable que asegura que los iconos reciban la clase `Icon-svg`)
  - `src/TodoItem.css` (estilos para `.Icon-svg`, estado activo, preview en hover y reglas para icono eliminar)

Resumen de la clase:

En esta clase se implementó la lógica para que los iconos SVG en los botones (check y delete) se coloreen dinámicamente según el estado de la tarea, y además muestren una vista previa al pasar el cursor sobre tareas no completadas.

- Los iconos ahora heredan `color` desde su contenedor gracias a la clase `Icon-svg` y a las reglas CSS `stroke: currentColor` y `fill: currentColor`.
- Se creó `IconButton` (nuevo componente) que clona el icono hijo para añadirle `Icon-svg` y centralizar la estructura del botón, manteniendo `aria-label` y `title` para accesibilidad.
- Estilos y comportamiento:
  - `.Icon-delete` aparece tenue (muted) por defecto cuando la tarea NO está completada.
  - Cuando la tarea tiene la clase `.TodoItem--complete`, `.Icon-delete` se muestra en rojo (`--danger`).
  - Al pasar el cursor sobre un `TodoItem` no completado, se aplica un preview visual: el botón de check muestra el estilo activo (fondo verde e icono blanco) y el delete se colorea de rojo tenue. Esto comunica al usuario el resultado esperado si completase la tarea.
  - Se añadieron transiciones suaves en `.Icon` para animar cambios de color y fondo.

Cómo probar localmente:

1. Instalar dependencias (si hace falta):

```bash
npm install
```

2. Iniciar la app en modo desarrollo:

```bash
npm start
```

3. Validación visual:
- Pasa el cursor sobre una tarea NO completada: deberías ver el preview — check con fondo verde y delete en rojo tenue.
- Marca una tarea como completada: el check mantiene el estilo activo y el delete aparece en rojo.

Notas técnicas:
- Se usa la librería `react-icons` (colección `fi`) y se fuerza el uso de `currentColor` para que los iconos hereden estilos desde CSS.
- El cambio se realizó sin añadir lógica JS extra para el preview; se usa solo CSS con selectores (`:not(.TodoItem--complete):hover`) para mantener la implementación simple y performante.

Si quieres, puedo agregar capturas o una historia en Storybook para documentar visualmente estos estados.

## 13 — Local Storage con React.js
- Commit: "13 Local Storage con React.js"
- Fecha: 2025-10-30
- Archivos modificados:
  - `src/App.js` (carga y persistencia de `todos` en localStorage, `saveTodos` helper)

Resumen de la clase:

En esta clase se implementó la persistencia de la lista de tareas utilizando el API `localStorage` del navegador. Los puntos clave son:

- Carga inicial: al iniciar la app se intenta leer `TODOS_V1` desde `localStorage` y se parsea JSON; si no existe o ocurre un error se usa un arreglo vacío como fallback.
- Persistencia: cada modificación de la lista (completar, eliminar, crear) ahora se escribe en `localStorage` en formato JSON para que los cambios sobrevivan a recargas del navegador.
- Helper `saveTodos`: se centralizó la lógica para guardar en `localStorage` y actualizar el estado con una función `saveTodos(newTodos)` que escribe primero en `localStorage` y luego llama a `setTodos(newTodos)`.
- Manejo de errores: se añadieron try/catch alrededor del parseado y guardado para evitar que errores en localStorage rompan la app y para loguear advertencias en consola.

Por qué se hizo así:
- Mantener la persistencia en un helper evita repetición y reduce la probabilidad de inconsistencias entre estado y almacenamiento.
- Evitar escribir lógica compleja en `useEffect` mantiene los flujos de cambio explícitos (llamas a `saveTodos` cuando quieres cambiar la lista).

Cómo probar localmente:

1. Asegúrate de tener la app corriendo:

```bash
npm install
npm start
```

2. Acciones a probar:
- Crea una nueva tarea y recarga la página — la tarea debe permanecer.
- Marca una tarea como completada o elimínala y recarga; el estado debe conservarse.

Notas y consideraciones futuras:
- Actualmente se usan índices como claves (`key={index}`) y para identificar elementos al togglear/eliminar; es recomendable asignar IDs únicos a cada todo (por ejemplo con `Date.now()` o `uuid`) para evitar problemas de reconciliación React al modificar la lista.
- Si la app crece, podrías abstraer la persistencia a un hook personalizado `useLocalStorage` para reutilizar en otros datos.
- Para soporte multi-dispositivo o sincronización remota, reemplazar `localStorage` por un backend o sincronización con un servicio sería el siguiente paso.

Commit y push:
- Ya se agruparán y enviarán los cambios con el commit "13 Local Storage con React.js".

## 14 — Custom Hooks
- Commit: "14 Custom Hooks"
- Fecha: 2025-10-31
- Archivos modificados:
  - `src/App.js` (nuevo hook `useLocalStorage` implementado y usado por `App`)

Resumen de la clase:

En esta clase transformamos la lógica de persistencia en un custom hook para React, llamado `useLocalStorage`. El objetivo fue encapsular la carga/escritura en `localStorage`, manejo de errores y sincronización entre pestañas, y así mantener `App` más limpia y reutilizable.

Puntos clave implementados:

- `useLocalStorage(itemName, initialValue)`:
  - Inicializa el estado leyendo desde `localStorage` (JSON.parse) o usando `initialValue` si no existe.
  - Devuelve un par `[value, setValue]` donde `setValue` guarda el nuevo valor en `localStorage` (JSON.stringify) y actualiza el estado.
  - Escucha el evento `storage` para sincronizar cambios hechos desde otras pestañas del navegador.
  - Maneja errores de parseo/escritura con `try/catch` y `console.warn`.

- Refactor en `App`:
  - Se reemplazó la lógica de carga/guardado por `const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);`.
  - Las operaciones de completar y eliminar tareas ahora llaman a `saveTodos(newTodos)` para persistir y actualizar el estado.

Beneficios:
- Código más modular y reusable: el hook puede moverse a `src/hooks/useLocalStorage.js` y usarse en otras partes de la app.
- Mejora la separación de responsabilidades: `App` se enfoca en la UI y las acciones de negocio, mientras que el hook se encarga del almacenamiento.

Cómo probar:

1. Instala y corre la app:

```bash
npm install
npm start
```

2. Acciónes para validar:
- Crear/Completar/Eliminar tareas y recargar la página: los cambios deben persistir.
- Abrir otra pestaña en la misma app y modificar tareas: la pestaña original debería sincronizar los cambios (evento `storage`).

Notas y siguientes pasos recomendados:
- Extraer `useLocalStorage` a `src/hooks/useLocalStorage.js` para limpieza del proyecto.
- Usar IDs únicos para los todos (por ejemplo `Date.now()` o `uuid`) y así evitar usar `text` como clave/identificador.
- Añadir tests unitarios para el hook (mockeando localStorage) y para las funciones de `App`.

Commit y push:
- Voy a agrupar los cambios y hacer commit con el mensaje exacto: "14 Custom Hooks" y luego empujar a `origin/main`.





