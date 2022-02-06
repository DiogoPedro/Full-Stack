import React from 'react';
import { Link } from 'react-router-dom'
function NotFound() {
  return (
      <>
        <h1>404!</h1>
        <p>
            Lamento. Essa pagina nao existe ou foi removida <br/>
            <Link to='/'>Voltar para a Tabela de Livros</Link>
        </p>
      </>
  );
}

export default NotFound;
