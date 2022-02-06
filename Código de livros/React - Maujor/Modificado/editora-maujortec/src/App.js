import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topo from './components/Topo';
import Home from './components/Home';
import Catalogo from './components/Catalogo';
import Rodape from './components/Rodape';
import Frontend from './components/Frontend';
import Programacao from './components/Programacao';
import Design from './components/Design';
import './index.css';
import Conteudo from './components/Conteudo';
import axios from 'axios';
import NotFound from './components/NotFound';

class App extends Component{
  state = {
    livros: []
  };

  async componentDidMount() {
    try {
      const { data: livros } =  await axios.get('/api/todosOsLivros.json');
      this.setState( { livros });
    } catch (error) {
      console.log(error);
      document
        .querySelectorAll('.principal')[0]
        .insertAdjacentHTML(
          "beforeend",
          "<p class='erro'> Mensagem de erro </p>"
        );
    }
  }

  render () { return (
    <Router>
      <Topo />
      <Routes>
        <Route
          exact path="/" element={<Home livros={ this.state.livros} />} >
        </Route>
        <Route
          path="/frontend" element={<Frontend livros={ this.state.livros} />} >
        </Route>
        <Route
          path="/programacao" element={<Programacao livros={ this.state.livros} />} >
        </Route>
        <Route
          path="/design" element={<Design livros={ this.state.livros} />} >
        </Route>
        <Route
          path="/catalogo" element={<Catalogo livros={ this.state.livros} />} >
        </Route>
        <Route
            path="/livro/:livroSlug" element={<Conteudo livros={ this.state.livros} />}  >
        </Route>
        <Route
          path='*' element={<NotFound />} >
        </Route>
      </Routes>
      <Rodape />
    </Router>
  );};
};

export default App;