import React, { useEffect, useState } from "react";
import "./ListaLivros.css";

function ListaLivros() {
  let [livros, setLivros] = useState([]);
  let [newLivro, setNewLivro] = useState("");
  const campoInserirLivro = document.getElementsByTagName("input")[0];

  function handleSubmit(e) {
    e.preventDefault();
    campoInserirLivro.focus();
    if (!livros.includes(newLivro)) {
      setLivros([...livros, newLivro]);
      setNewLivro("");
    } else {
      alert("Já existe o título " + newLivro + " na lista");
      setNewLivro("");
    }
  }

  function removerLivro(id) {
    const afterRemove = livros.filter((l) => l !== id);
    setLivros(afterRemove);
  }

  return (
    <>
      <header>
        <h1>Lista de Livros</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <label htmlFor="titulo">Insira um livro:</label>
        <input
          data-testid="titulo"
          id="titulo"
          type="text"
          value={newLivro}
          onChange={(e) => setNewLivro(e.target.value)}
          required
        />
        <button type="submit" id="salvar" data-testId="salvar">
          Salvar
        </button>
      </form>
      <p>xpto</p>
      {livros.map((livro) => (
        <div data-testid={livro.replace(/\s/g, "")} key={livro.replace(/\s/g, "")} className="container" id={livro.replace(/\s/g, "")}>
          {livro}

          {livro ? (
            <button data-testId ="removerDataId" onClick={() => removerLivro(livro)} className="remover">
              X
            </button>
          ) : (
            ""
          )}
        </div>
      ))}
    </>
  );
}

export default ListaLivros;
