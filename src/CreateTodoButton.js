import './CreateTodoButton.css';

function CreateTodoButton(props) {
  const handleClick = (event) => {
    console.log('Crear nueva tarea');
    console.log(event);
    console.log(event.target);
    if (props) {
      if (typeof props.onCreateTodo === 'function') {
        props.onCreateTodo();
        return;
      }
      if (typeof props.onClick === 'function') {
        props.onClick(event);
        return;
      }
    }
  };

  return (
    <button className="create-todo" onClick={handleClick}>
      +
    </button>
  );
}

export { CreateTodoButton };
