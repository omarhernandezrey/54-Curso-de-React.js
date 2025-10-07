import logo from './platzi.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Archivo <code>src/App.js</code> — ejemplo de componentes.
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Curso de React en Platzi
        </a>
      </header>

      <section className="examples">
        <h2>Ejemplos de componentes</h2>
        <ul>
          <TodoItem text="Aprender JSX" />
          <TodoItem text="Crear componentes" />
          <TodoItem text="Usar props" />
        </ul>

        <Profile name="Omar Hernández Rey" role="Desarrollador Web Full Stack" />
      </section>
    </div>
  );
}

function TodoItem({ text }) {
  return (
    <li className="todo-item">
      <span className="check">✔</span>
      <p>{text}</p>
      <button className="remove">X</button>
    </li>
  );
}

function Profile({ name, role }) {
  return (
    <section className="profile">
      <h3>{name}</h3>
      <p>{role}</p>
    </section>
  );
}

export default App;
