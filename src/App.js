import logo from './platzi.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <EstoEsUnComponente />
      <EstoEsOtroComponente />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function EstoEsUnComponente() {
  return (
    <div>
      <h1>Hola, soy un componente!</h1>
    </div>
  );
}

function EstoEsOtroComponente() {
  return (
    <div>
      <h1>Hola, soy otro componente!</h1>
    </div>
  );
}

export default App;
