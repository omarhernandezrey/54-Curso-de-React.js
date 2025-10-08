import './TodoSearch.css';

function TodoSearch(props) {
  const handleChange = (event) => {
    const value = event.target.value;
    console.log('Escribiste en el TodoSearch');
    console.log(event);
    console.log(event.target);
    console.log(value);
    if (props && typeof props.onSearchChange === 'function') {
      props.onSearchChange(value);
    }
  };

  return (
    <div className="todo-search">
      <input
        type="text"
        placeholder="Buscar o añadir tarea..."
        onChange={handleChange}
      />
    </div>
  );
}

export { TodoSearch };