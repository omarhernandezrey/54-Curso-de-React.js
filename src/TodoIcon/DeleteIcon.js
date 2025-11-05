import React from 'react';
import { TodoIcon } from './';

// Accept `completed` so parent can indicate the todo state.
// We add a small helper class when completed to force the danger color
// in CSS. This keeps styling in CSS while making the intent explicit.
function DeleteIcon({ onDelete, completed = false }) {
  return (
    <TodoIcon
      type="delete"
      className={completed ? 'Icon-delete--danger' : ''}
      onClick={onDelete}
    />
  );
}

export { DeleteIcon };