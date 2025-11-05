import React from 'react';

function TodosLoading() {
  return (
    <div className="TodosLoading" aria-busy="true">
      <div className="TodosLoading-pulse" />
      <p>Cargando tareas...</p>
    </div>
  );
}

export { TodosLoading };
