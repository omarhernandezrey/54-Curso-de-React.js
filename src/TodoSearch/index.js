import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function IconSearch() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function TodoSearch() {
  const {
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext);

  return (
    <div className="TodoSearch-container">
      <div className="TodoSearch-wrapper">
        <div className="TodoSearch-icon" aria-hidden>
          <span className="TodoSearch-iconCircle"><IconSearch /></span>
        </div>
        <input
          placeholder="Buscar TODOs"
          className="TodoSearch"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          aria-label="Buscar tareas"
        />
      </div>
    </div>
  );
}

export { TodoSearch };