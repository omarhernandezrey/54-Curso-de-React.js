import React from 'react';
import './TodoSearch.css';

function TodoSearch({ 
  searchValue, 
  setSearchValue 
}) {
  return (
    <div className="TodoSearch-container">
      <div className="TodoSearch-wrapper">
        <span className="TodoSearch-icon">
          {/* SVG lupa */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="7" stroke="#888" strokeWidth="2" />
            <line x1="16.2" y1="16.2" x2="21" y2="21" stroke="#888" strokeWidth="2" strokeLinecap="round" />
          </svg>
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