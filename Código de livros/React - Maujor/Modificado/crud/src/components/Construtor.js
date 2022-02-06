import React from 'react';
import { useParams, Navigate } from "react-router-dom";
import CadastrarLivros from './CadastrarLivros';

function Construtor(props) {
    let { isbnLivro } = useParams();
    const livro = props.livros.find(livro => livro.isbn === isbnLivro);
    if (livro) {
        console.log(props.livros);
        console.log(livro);
        return (
            <CadastrarLivros editarLivro ={ props.editarLivro } livro = { livro } />
        );
    } else {
        return <Navigate to ='/' />;
    }
}

export default Construtor;
