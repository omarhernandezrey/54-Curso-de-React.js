import React from 'react';

/**
 * IconButton
 * Wrapper button for icon components that ensures the icon receives the
 * `Icon-svg` class so it inherits color from the button container.
 *
 * Props:
 * - className: additional class names to apply to the button (e.g. 'Icon-delete')
 * - onClick, ariaLabel, title
 * - children: a single react-icon element
 */
function IconButton({ className = '', onClick, ariaLabel, title, children }) {
  // Expect a single icon child (e.g. <FiTrash2 />)
  const child = React.Children.only(children);

  // Merge/append Icon-svg to the child's className so the svg inherits currentColor
  const childClass = `${child.props && child.props.className ? child.props.className + ' ' : ''}Icon-svg`;
  const icon = React.cloneElement(child, { className: childClass });

  return (
    <button
      className={`Icon ${className}`}
      onClick={onClick}
      aria-label={ariaLabel}
      title={title}
    >
      {icon}
    </button>
  );
}

export { IconButton };
