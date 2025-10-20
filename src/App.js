import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';


const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el Curso de Intro a React.js', completed: false },
  { text: 'Llorar con la Llorona', completed: true },
  { text: 'LALALALALA', completed: false },
  { text: 'Usar estados deriva', completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    if (newTodos[index]) {
      newTodos[index] = { ...newTodos[index], completed: !newTodos[index].completed };
      setTodos(newTodos);
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };


  console.log('Los usuarios buscan todos de ' + searchValue);
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
        {todos.map((todo, index) => (
          <TodoItem
           key={index}
           text={todo.text}
           completed={todo.completed}
           onToggle={() => toggleTodo(index)}
           onDelete={() => deleteTodo(index)}
         />
       ))}
     </TodoList>

      {<CreateTodoButton />}
    </>
  );
}

export default App;
