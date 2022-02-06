import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SimpleStorage from 'react-simple-storage'
import { getAuth, signOut , signInWithEmailAndPassword } from "firebase/auth";
import CadastrarLivros from './components/CadastrarLivros';
import Construtor from './components/Construtor';
import Header from './components/Header';
import NotFound from './components/NotFound';
import Tabela from './components/Tabela';
import LoginState from './components/LoginState';

class App extends Component {
  state = { 
    livros: [],
    isAuthenticated: false 
  };

  inserirLivro = livro => {
    livro.id = this.state.livros.length + 1;
    this.setState({
      livros: [...this.state.livros, livro],
    });
  };

  editarLivro = livro => {
    const index = this.state.livros.findIndex(p => p.id === livro.id);
    const livros = this.state.livros
      .slice(0,index)
      .concat(this.state.livros.slice(index + 1));
    const newLivros = [...livros, livro].sort((a, b) => a.id - b.id);
    this.setState({
      livros: newLivros
    });
  };

  removerLivro = livro => {
    if(window.confirm("Remover esse livro?")){
      const livros = this.state.livros.filter(p => p.isbn !== livro.isbn);
      this.setState({ livros });
    }
  };

  onLogin = (email, password) => {
    console.log(email, password);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        this.setState( { isAuthenticated: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });  
    // firebase
    //   .auth()
    //   .signInWithEmailAndPassword(email, password)
    //   .then((user) => {
    //     this.setState({ isAuthenticated: true });
    //   })
    //   .catch((error) => console.log(error));
  };

  onLogout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      this.setState( { isAuthenticated: false });
    }).catch((error) => {
      console.log(error);
    });
    // firebase
    //   .auth()
    //   .signOut()
    //   .then(() => {
    //     this.setState({ isAuthenticated: false });
    //   })
    //   .catch((error) => console.log(error));
  }

  render() {
  return (
    <Router>
      <SimpleStorage parent={this}/>
      <Header isAuthenticated={this.state.isAuthenticated} onLogout={this.onLogout}/>
      <Routes>
        <Route exact path='/' 
          element={<Tabela isAuthenticated={this.state.isAuthenticated} livros={this.state.livros}removerLivro={this.removerLivro}/>}
        /> 
        <Route path='/login' element={<LoginState isAuthenticated={this.state.isAuthenticated} onLogin={this.onLogin}/>}/>
        <Route path='/editar/:isbnLivro' element={<Construtor livros = {this.state.livros} editarLivro = {this.editarLivro}/>}/>
        <Route 
          path='/cadastrar' element={<CadastrarLivros inserirLivro = { this.inserirLivro } 
          livro = { {id:0, isbn: "", titulo: "", autor: "" } } /> }/> 
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>
    );};
}

export default App;
