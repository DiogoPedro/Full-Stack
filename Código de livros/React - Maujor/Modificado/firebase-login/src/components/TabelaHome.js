import React from 'react';

function TabelaHome({livros}){
  return (
      <div className='livros'>
          <h1>Tabela de Livros</h1>
          {livros.length === 0 && <h2>Nenhum livro cadastrado e voce nao esta logado!</h2>}
          {livros.length > 0 &&(
                <table className='tabela'>
                <thead>
                  <tr>
                      <th width='27%'>ISBN</th>
                      <th>Titulo</th>
                      <th>Autor</th>
                  </tr>
                </thead>
                <tbody>
                  {livros.map(livro => (
                    <tr key={livro.isbn}>
                      <td>{livro.isbn}</td>
                      <td>{livro.titulo}</td>
                      <td>{livro.autor}</td>
                  </tr>
                  ))}
                </tbody>
                </table>
            )}
      </div>
  );
};

export default TabelaHome;
