import logo from './logo.svg';
import './App.css';

function ListaLivros() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and Save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <label htmlFor="name">Nome</label>
      <input type="text" id={"name"}/> 
    </div>
  );
}

export default ListaLivros;
