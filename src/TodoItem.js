import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className={`TodoItem ${props.completed ? 'TodoItem--complete' : ''}`}>
      <span className={`Icon Icon-check ${props.completed ? 'Icon-check--active' : ''}`}>
        {props.completed ? '✔' : '○'}
      </span>

      <p className={`TodoItem-p ${props.completed ? 'TodoItem-p--complete' : ''}`}>
        {props.text}
      </p>

      <span className="Icon Icon-delete">X</span>
    </li>
  );
}

export { TodoItem };