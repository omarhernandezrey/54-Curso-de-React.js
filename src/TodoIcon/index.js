import React from 'react';
import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';
import './TodoIcon.css';

function TodoIcon({ type = 'check', color = 'gray', onClick }) {
  const isCheck = type === 'check';
  // classes expected by CSS: Icon (container visual), Icon-check/Icon-delete (type-specific),
  // and Icon-check--active when active. Keep Icon-container--<type> for legacy rules.
  const typeClass = isCheck ? 'Icon-check' : 'Icon-delete';
  const activeClass = isCheck && color === 'green' ? ' Icon-check--active' : '';
  const containerClass = `Icon ${typeClass} Icon-container Icon-container--${type}${activeClass}`;

  const ariaLabel = isCheck ? 'Marcar como completada' : 'Eliminar tarea';

  return (
    <button type="button" className={containerClass} onClick={onClick} aria-label={ariaLabel}>
      {isCheck ? <CheckSVG className="Icon-svg" /> : <DeleteSVG className="Icon-svg" />}
    </button>
  );
}

export { TodoIcon };
