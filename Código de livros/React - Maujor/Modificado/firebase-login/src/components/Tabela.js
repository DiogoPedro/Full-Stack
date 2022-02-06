import React from 'react';
import TabelaHome from './TabelaHome';
import TabelaLivros from './TabelaLivros';

function Tabela(props) {
  console.log("O estado de autenticacao em Tabela eh: " + props.isAuthenticated);
  if(!props.isAuthenticated) {
      return  (<TabelaHome livros = {props.livros}/>) }
  else { return (<TabelaLivros livros = {props.livros} removerLivro = {props.removerLivro}/> ) 
    }
};

export default Tabela;