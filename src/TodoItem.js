import './TodoItem.css';
import { FiCircle, FiCheckCircle, FiTrash2 } from 'react-icons/fi';
import { IconButton } from './IconButton';

function TodoItem(props) {
  return (
    <li className={`TodoItem ${props.completed ? 'TodoItem--complete' : ''}`}>
      <IconButton
        className={`Icon-check ${props.completed ? 'Icon-check--active' : ''}`}
        onClick={props.onComplete}
        ariaLabel={props.completed ? 'Marcar como no completado' : 'Marcar como completado'}
        title={props.completed ? 'Desmarcar' : 'Marcar'}
      >
        {props.completed ? <FiCheckCircle size={20} /> : <FiCircle size={20} />}
      </IconButton>

      <p className={`TodoItem-p ${props.completed ? 'TodoItem-p--complete' : ''}`}>
        {props.text}
      </p>

      <IconButton
        className="Icon-delete"
        onClick={props.onDelete}
        ariaLabel="Eliminar tarea"
        title="Eliminar"
      >
        <FiTrash2 size={18} />
      </IconButton>
    </li>
  );
}

export { TodoItem };