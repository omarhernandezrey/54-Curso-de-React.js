import './CreateTodoButton.css';
import { FiPlus } from 'react-icons/fi';

function CreateTodoButton(props) {
  const handleClick = (event) => {
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
    <button className="create-todo" onClick={handleClick} aria-label="Crear tarea">
      <FiPlus size={20} />
    </button>
  );
}

export { CreateTodoButton };
