import React from 'react';
import { FiSearch } from 'react-icons/fi';
import './TodoSearch.css';

function TodoSearch({
  searchValue,
  setSearchValue,
}) {
  return (
    <div className="TodoSearch-container">
      <div className="TodoSearch-wrapper">
        <span className="TodoSearch-icon" aria-hidden>
          <FiSearch className="Icon-svg" />
        </span>
        <input
          type="search"
          placeholder="Buscar tareas..."
          className="TodoSearch"
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
        />
      </div>
    </div>
  );
}

export { TodoSearch };