import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';


/*
const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el Curso de Intro a React.js', completed: false },
  { text: 'Llorar con la Llorona', completed: true },
  { text: 'LALALALALA', completed: false },
  { text: 'Usar estados deriva', completed: false },
];

localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
localStorage.removeItem('TODOS_V1');
*/


function App() {
  // Cargar todos desde localStorage (si existe) -> parse JSON, fallback a []
  const loadTodos = () => {
    try {
      const raw = localStorage.getItem('TODOS_V1');
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      console.warn('Error parsing TODOS_V1 from localStorage', e);
      return [];
    }
  };

  const [todos, setTodos] = React.useState(() => loadTodos());
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(todo => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    if (newTodos[index]) {
      newTodos[index] = { ...newTodos[index], completed: !newTodos[index].completed };
      saveTodos(newTodos);
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    saveTodos(newTodos);
  };
  
  // helper para persistir y actualizar el estado
  const saveTodos = (newTodos) => {
    try {
      localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
    } catch (e) {
      console.warn('Error saving TODOS_V1 to localStorage', e);
    }
    setTodos(newTodos);
  };
  

  return (
    <>
      <TodoCounter 
      completed={completedTodos} 
      total={totalTodos} />

      <TodoSearch 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
      <TodoList>  
        {searchedTodos.map((todo, index) => {
          // obtener el índice real en el array original para toggle/delete
          const realIndex = todos.indexOf(todo);
          return (
            <TodoItem
              key={realIndex}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => toggleTodo(realIndex)}
              onDelete={() => deleteTodo(realIndex)}
            />
          );
        })}
      </TodoList>

      {<CreateTodoButton />}
    </>
  );
}

export default App;
