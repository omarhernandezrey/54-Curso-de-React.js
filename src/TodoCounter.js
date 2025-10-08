import React from "react";
import './TodoCounter.css';
function TodoCounter({completed, total}) {
  return (
    <h1>
      Has completado {completed} de {total} tareas
    </h1>
  );
}
export { TodoCounter };