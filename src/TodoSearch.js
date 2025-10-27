import React from 'react';
import './TodoSearch.css';
import { FiSearch } from 'react-icons/fi';

function TodoSearch({ 
  searchValue, 
  setSearchValue 
}) {
  return (
    <div className="TodoSearch-container">
      <div className="TodoSearch-wrapper">
        <span className="TodoSearch-icon">
          <FiSearch size={18} color="#888" />
        </span>
        <input
          placeholder="Buscar en tus tareas..."
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