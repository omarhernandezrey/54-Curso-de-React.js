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






## 16 — Feature-First Directories en React

Explicación breve:

La estrategia "Feature-First" (o "Vertical Slice") organiza el código por características/funcionalidades en lugar de por tipo (components, styles, hooks, etc.). Cada carpeta de feature contiene todo lo necesario para esa funcionalidad: componentes, estilos, hooks, pruebas y utilidades relacionadas. Esto mejora la mantenibilidad y facilita el trabajo en equipos porque los cambios relacionados con una funcionalidad suelen estar en un único lugar.

Por qué usarlo en este proyecto:
- Facilita agrupar todo lo relacionado con la TODO Machine en un solo sitio (componentes, estilos y lógica de estado/persistencia).
- Escala mejor cuando la app crece: en lugar de tener muchas carpetas planas (`src/components`, `src/styles`, `src/hooks`), se agrupan los artefactos por feature.
- Mejora la visibilidad para nuevos colaboradores: verán la funcionalidad completa en una carpeta en lugar de buscar entre muchas carpetas.

Ejemplo de estructura recomendada (para este repo):

```
src/
  features/
    todos/
      components/
        TodoList/
          index.js
          TodoList.css
        TodoItem/
          index.js
          TodoItem.css
        TodoSearch/
          index.js
          TodoSearch.css
      hooks/
        useTodos.js
      services/
        index.js
      tests/
        index.test.js
  shared/
    ui/
      Icon/
        index.js
        Icon.css
    utils/
      localStorage.js
  App/
    AppUI.js
    index.js
```

Pasos simples para migrar (sugerencia):
1. Crear `src/features/todos/` y mover `src/TodoList`, `src/TodoItem`, `src/TodoSearch`, `src/TodoIcon` (o sus partes) dentro de `features/todos/components`.
2. Mantener `shared/` para utilidades y componentes reutilizables (p. ej. iconos, hooks genéricos, helpers de localStorage).
3. Actualizar imports relativos y probar la app.
4. Refactorizar incrementalmente: mover una feature por commit para facilitar la revisión.

Consideraciones y trade-offs:
- Pros: mejor encapsulación por feature, más intuitivo en equipos grandes, cambios localizados.
- Contras: para proyectos muy pequeños puede parecer más verboso; requiere renombrar imports al migrar.

Notas finales:
- Esta estructura es una recomendación, no una regla absoluta. Ajusta según el tamaño y evolución del proyecto.
- He aplicado una explicación y recomendaciones aquí para que sirva de guía al avanzar con la TODO Machine.


## 19 — Estados de carga y error

Resumen breve:

En interfaces reales es crítico manejar los estados de carga (loading), error y vacío (empty). En la TODO Machine implementamos estos tres estados para mejorar la UX y guiar al usuario:

- Loading: mientras se obtienen los datos (o se simula una carga), mostramos placeholders o animaciones para indicar que algo está ocurriendo.
- Error: cuando ocurre un fallo (p. ej. al leer `localStorage` o al realizar una petición), mostramos un mensaje claro y una acción sugerida (recargar, reintentar).
- Empty: cuando no hay tareas, mostramos una pantalla amigable que invite a crear la primera tarea.

Cómo lo implementamos en este repo:

1. `useLocalStorage` devuelve `loading` y `error` además del `item` y `saveItem`. Estos flags controlan la UI desde `AppUI`.
2. Componentes dedicados:
   - `TodosLoading` — placeholder/animación durante carga.
   - `TodosError` — mensaje amigable y role="alert" para accesibilidad.
   - `EmptyTodos` — invitación a crear la primera tarea.
3. `AppUI` usa esas banderas para renderizar el estado apropiado:
   - `loading && <TodosLoading />...`
   - `error && <TodosError />`
   - `!loading && searchedTodos.length === 0 && <EmptyTodos />`

Buenas prácticas y consideraciones:
- Mantener los componentes de estado simples y accesibles (usando `role="status"`, `aria-busy`, o `role="alert"` según corresponda).
- Evitar bloquear la UI completa por un error leve: ofrecer acciones recuperables (botón reintentar) cuando aplique.
- Para cargas largas, mostrar skeletons en lugar de spinners mejora la percepción de velocidad.

Prueba rápida local:

1. Forzar carga: en `useLocalStorage` ajusta el timeout o el return para simular `loading` y observa `TodosLoading`.
2. Forzar error: en `useLocalStorage` lanza un error dentro del try/catch para ver `TodosError`.
3. Empty: borra `TODOS_V1` en localStorage y recarga para ver `EmptyTodos`.

Con esto completamos la sección sobre estados de carga y error y dejamos la app preparada para mejorar la experiencia del usuario.

\n## 20 — Actualizando estados desde useEffect\n\nResumen breve:\n\nEn React es común sincronizar o inicializar estados a partir de efectos secundarios (fetch de datos, lectura de localStorage, suscripciones). \ es la API que nos permite ejecutar lógica después del render y actualizar el estado de forma segura.\n\nPatrón típico:\n\n1. Declarar estado con \.\n2. Dentro de \ realizar la operación asíncrona (fetch, lectura, suscripción).\n3. Llamar al setter del estado (p. ej. \) con los datos obtenidos.\n4. Manejar limpieza si el efecto crea listeners o timers (retornar una función de cleanup).\n\nEjemplo breve (pseudo-código):\n\n`javascript\nconst [items, setItems] = useState([]);\nconst [loading, setLoading] = useState(true);\nconst [error, setError] = useState(null);\n\nuseEffect(() => {\n  let mounted = true; // evitar actualizar estado tras unmount\n\  async function load() {\n    try {\n      const res = await fetch('/api/items');\n      const data = await res.json();\n      if (mounted) setItems(data);\n    } catch (e) {\n      if (mounted) setError(e);\n    } finally {\n      if (mounted) setLoading(false);\n    }\n  }\n\n  load();\n\n  return () => { mounted = false; };\n}, []); // [] para ejecutarse solo al montar\n`\n\nConsejos y buenas prácticas:\n- Evitar actualizar estado cuando el componente ya se desmontó (usa un flag \ o \ para fetch).\n- Separar la lógica de efectos en funciones/ custom hooks para mantener componentes limpios (por ejemplo \ o \).\n- Incluir dependencias correctas en el array de dependencias de \ para evitar efectos desincronizados o loops infinitos.\n- Manejar estados \ y \ junto al resultado para dar feedback al usuario.\n\nCómo aplicamos esto en la TODO Machine:\n- \ usa \ para leer desde \ al montar y setear \, \ y \ según corresponda.\n- \ consume esos valores y los pasa a \ para renderizar \, \ o el listado de tareas.\n\nPrueba/depuración:\n- Inserta \ dentro de \ para confirmar el flujo de ejecución y los valores intermedios.\n- Usa herramientas de red (Network) y el panel React DevTools para verificar renders y estados.\n\nCon esto cerramos la explicación sobre cómo y por qué actualizamos estados desde \.\n
## 21 — Reto: loading skeletons

Resumen del reto:

En lugar de mostrar spinners genéricos cuando la UI está cargando, el reto es implementar "loading skeletons": bloques y líneas grises animadas que imitan la estructura de la interfaz final. Los skeletons mejoran la percepción de velocidad y dan al usuario una idea de la maquetación que se va a mostrar.

Objetivos:
- Crear componentes skeleton reutilizables para la lista de TODOs.
- Reemplazar temporalmente los placeholders/spinners por skeletons durante `loading`.
- Mantener accesibilidad y rendimiento.

Ideas de implementación (paso a paso):
1. Crear un componente `TodoSkeleton` (o `SkeletonItem`) que renderice la estructura básica de un `TodoItem`: un círculo (check), una línea larga (texto) y un rectángulo pequeño (delete).
2. Añadir una clase CSS `.skeleton` con un `background` en degradado lineal y una animación `@keyframes shimmer` que desplaza el brillo.
3. Renderizar N instancias de `TodoSkeleton` cuando `loading === true` (por ejemplo 3-6 items según el diseño).
4. Asegurarse de que los skeletons no sean elementos interactivos (usar `aria-hidden="true"`) para que lectores de pantalla no confundan el estado.

Ejemplo de CSS (simplificado):

```css
.SkeletonItem{ display:flex; gap:12px; align-items:center; padding:10px; }
.Skeleton-circle{ width:36px; height:36px; border-radius:50%; background:#e6e6e6; position:relative; overflow:hidden; }
.Skeleton-line{ flex:1; height:14px; border-radius:8px; background:#e6e6e6; position:relative; overflow:hidden; }
.Skeleton-small{ width:28px; height:14px; border-radius:6px; background:#e6e6e6; }

/* shimmer */
.Skeleton-circle::after,
.Skeleton-line::after,
.Skeleton-small::after{
  content:''; position:absolute; inset:0 0 0 0; background:linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0) 100%); transform:translateX(-100%); animation: shimmer 1.2s infinite;
}

@keyframes shimmer{
  100%{ transform:translateX(100%); }
}
```

Ejemplo de JSX (simplificado):

```jsx
function TodoSkeleton(){
  return (
    <div className="SkeletonItem" aria-hidden="true">
      <div className="Skeleton-circle" />
      <div className="Skeleton-line" />
      <div className="Skeleton-small" />
    </div>
  );
}

// Uso: renderizar varias instancias mientras loading
{loading && Array.from({length:4}).map((_,i)=> <TodoSkeleton key={i} />)}
```

Puntos de accesibilidad y rendimiento:
- Añade `aria-hidden="true"` a los skeletons para que los lectores de pantalla ignoren el contenido falso.
- No ejecutes efectos costosos al renderizar skeletons; son puramente visuales.
- Mantén la animación suave y con baja frecuencia para reducir uso de CPU en dispositivos móviles.

Pruebas y validación:
- Simula `loading` en `useLocalStorage` (o en `App`) para ver los skeletons en la UI.
- Comprueba que al terminar la carga se reemplazan por datos reales sin parpadeos extra.
- Usa Lighthouse/DevTools para revisar el impacto en rendimiento.

Extensiones del reto (opcional):
- Implementar skeletons más complejos (avatar + múltiples líneas de texto) para componentes más ricos.
- Extraer un componente genérico `Skeleton` que reciba `width`, `height`, `radius` y lo reutilice en diferentes layouts.

Si quieres, puedo:
- Crear los archivos `src/Skeleton/TodoSkeleton.js` y `src/Skeleton/TodoSkeleton.css` con el ejemplo anterior.
- Integrar los skeletons en `AppUI` (mostrar 3-4 mientras `loading`).

Dime si quieres que implemente el reto completo y si debo commitear/pushear esos cambios o sólo generarlos localmente.

