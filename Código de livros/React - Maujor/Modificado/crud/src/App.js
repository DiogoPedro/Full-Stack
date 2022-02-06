import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SimpleStorage from 'react-simple-storage'
import CadastrarLivros from './components/CadastrarLivros';
import Construtor from './components/Construtor';
import Menu from './components/Menu';
import NotFound from './components/NotFound';
import TabelaLivros from './components/TabelaLivros';

class App extends Component {
  state = { livros: [] }

  inserirLivro = livro => {
    livro.id = this.state.livros.length + 1;
    this.setState({
      livros: [...this.state.livros, livro],
    });
  };

  editarLivro = livro => {
    const index = this.state.livros.findIndex(p => p.id === livro.id);
    const livros = this.state.livros
      .slice(0, index)
      .concat(this.state.livros.slice(index + 1));
    const newLivros = [...livros, livro].sort((a, b) => a.id - b.id);
    this.setState({
      livros: newLivros
    });
  };

  removerLivro = livro => {
    if (window.confirm("Remover esse livro?")) {
      const livros = this.state.livros.filter(p => p.isbn !== livro.isbn);
      this.setState({ livros });
    }
  };

  render() {
    return (
      <Router>
        <SimpleStorage parent={this} />
        <Menu />
        <Routes>
          <Route exact path='/' element={<TabelaLivros livros={this.state.livros} removerLivro={this.removerLivro} />}> </Route>
          <Route path='/editar/:isbnLivro' element={<Construtor livros={this.state.livros} editarLivro={this.editarLivro} />}></Route>
          <Route
            path='/cadastrar' element={<CadastrarLivros inserirLivro={this.inserirLivro}
              livro={{ id: 0, isbn: "", titulo: "", autor: "" }} />} > </Route>
          <Route path='*' element={<NotFound />}> </Route>
        </Routes>
      </Router>
    );
  };
}

export default App;
