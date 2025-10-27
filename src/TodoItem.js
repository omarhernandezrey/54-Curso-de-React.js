import './TodoItem.css';
import { FiCircle, FiCheckCircle, FiTrash2 } from 'react-icons/fi';

function TodoItem(props) {
  return (
    <li className={`TodoItem ${props.completed ? 'TodoItem--complete' : ''}`}>
      <button
        className={`Icon Icon-check ${props.completed ? 'Icon-check--active' : ''}`}
        onClick={props.onComplete}
        aria-label={props.completed ? 'Marcar como no completado' : 'Marcar como completado'}
        title={props.completed ? 'Desmarcar' : 'Marcar'}
      >
        {props.completed ? <FiCheckCircle size={20} /> : <FiCircle size={20} />}
      </button>

      <p className={`TodoItem-p ${props.completed ? 'TodoItem-p--complete' : ''}`}>
        {props.text}
      </p>

      <button
        className="Icon Icon-delete"
        onClick={props.onDelete}
        aria-label="Eliminar tarea"
        title="Eliminar"
      >
        <FiTrash2 size={18} />
      </button>
    </li>
  );
}

export { TodoItem };